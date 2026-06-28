import React from 'react';
import {AbsoluteFill, Audio, CalculateMetadataFunction, Img, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {getAudioDurationInSeconds} from '@remotion/media-utils';
import {brand} from '../theme';
import {display, body} from '../fonts';
import {LogoMark} from '../logo';
import {Wordmark, Counter, Dots} from '../components';
import {FPS, sec} from '../timeline';

// PhraseReel — the "talking carousel". A 9:16 video that holds each useful sentence
// on screen for exactly as long as its pronunciation audio, over a single watercolor
// backdrop. It is the CHEAP sibling of ScenarioReel: same auto-timed audio engine, but
// NO image-to-video clip (the costly step) — just one still image + one short mp3 per
// sentence. Drop the mp3s in public/<week>/<slug>/ and render; durations are measured here.

export type PhraseReelPhrase = {
  file: string; // path in public/ — the mp3 of this sentence pronounced (e.g. <week>/<slug>/phrase-1.mp3)
  nl: string;
  en: string;
  when?: string; // optional one-line context, shown as a small gold pill
};

export type PhrasePacing = {cover: number; leadIn: number; gap: number; tail: number; recap: number; outro: number};
// cover  = how long the title card holds before the first phrase
// leadIn = beat of just-backdrop after the cover, before phrase 1
// gap    = beat between phrases (a card holds until the next one starts; raise it to give learners room to repeat)
// tail   = beat of just-backdrop after the last phrase, before the recap
// recap  = how long the summary slide (every sentence at once) holds — long, so it can be screenshotted
// outro  = how long the closing CTA card holds
export const DEFAULT_PHRASE_PACING: PhrasePacing = {cover: 2.8, leadIn: 0.3, gap: 0.9, tail: 0.6, recap: 6.0, outro: 4.0};

export type PhraseReelProps = {
  theme: string; // small kicker on each phrase card (e.g. "Bij de bakker")
  handle: string;
  coverImage: string; // full-bleed 9:16 watercolor backdrop — stays behind every card
  cover: {kicker: string; title: string; sub: string};
  phrases: PhraseReelPhrase[];
  outro: {title: string; sub: string};
  recap?: boolean; // show a summary slide listing every sentence, just before the outro (default true)
  recapTitle?: string; // the title on that summary slide
  pacing?: Partial<PhrasePacing>;
  // injected by calculateMetadata — do not set by hand:
  _durations?: number[];
};

// Shared timing math: used by calculateMetadata (total length) AND the component (where
// each card starts), so the two never drift — the same contract ScenarioReel relies on.
// A fixed cover hold sits at the front and an outro hold at the end; phrases auto-time
// from the real audio lengths in between.
function computePhraseTimeline(durations: number[], p: PhrasePacing, hasRecap: boolean) {
  const starts: number[] = [];
  let t = p.cover + p.leadIn;
  for (const d of durations) {
    starts.push(t);
    t += d + p.gap;
  }
  const lastEnd = durations.length ? starts[starts.length - 1] + durations[durations.length - 1] : p.cover;
  const recapStart = lastEnd + p.tail;
  const outroStart = recapStart + (hasRecap ? p.recap : 0);
  return {starts, recapStart, outroStart, totalSeconds: outroStart + p.outro};
}

// Defaults point at existing assets so the composition previews + renders out of the box
// in Studio. The real props are written per-post by /instagram-content.
export const phraseReelDefaults: PhraseReelProps = {
  theme: 'Bij de bakker',
  handle: '@dutchwithjoost',
  coverImage: '2026-06-22/table-talk-too-fast/starting-frame.png',
  cover: {kicker: 'HEAR IT OUT LOUD', title: 'Say it at the bakery', sub: 'Four phrases, spoken slowly. Repeat after Joost.'},
  phrases: [
    {file: '2026-06-22/table-talk-too-fast/joost-1.mp3', nl: 'Mag ik een bruin brood?', en: 'Can I have a brown bread?', when: 'Ordering bread'},
    {file: '2026-06-22/table-talk-too-fast/sanne-2.mp3', nl: 'Doe mij maar twee broodjes.', en: "I'll have two rolls.", when: 'Ordering rolls'},
    {file: '2026-06-22/table-talk-too-fast/maya-3.mp3', nl: 'Hoeveel kost dat samen?', en: 'How much is that altogether?', when: 'Asking the total'},
    {file: '2026-06-22/table-talk-too-fast/joost-4.mp3', nl: 'Pinnen, graag.', en: 'By card, please.', when: 'Paying'},
  ],
  outro: {title: 'Which one will you use first?', sub: 'Save this and say it out loud next time.'},
  recap: true,
  recapTitle: 'Save the whole list',
};

export const calcPhraseReel: CalculateMetadataFunction<PhraseReelProps> = async ({props}) => {
  const pacing: PhrasePacing = {...DEFAULT_PHRASE_PACING, ...(props.pacing ?? {})};
  const durations: number[] = [];
  for (const ph of props.phrases) {
    durations.push(await getAudioDurationInSeconds(staticFile(ph.file)));
  }
  const {totalSeconds} = computePhraseTimeline(durations, pacing, props.recap !== false);
  return {fps: FPS, durationInFrames: sec(totalSeconds), props: {...props, _durations: durations}};
};

// A render-safe speaker glyph (inline SVG, never an emoji — emojis don't render reliably
// in headless Chromium). Signals "this has sound" on the cover and each phrase card.
const SpeakerIcon: React.FC<{size?: number; fill?: string}> = ({size = 40, fill = brand.goldText}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 9v6h4l5 4V5L8 9H4z" fill={fill} />
    <path d="M16 8.5a4 4 0 010 7" stroke={fill} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M18.6 6a7 7 0 010 12" stroke={fill} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// The watercolor cover image stays behind every card, with a slow Ken Burns push so a
// still never reads as a frozen slideshow. A gradient scrim keeps text legible over it.
const Backdrop: React.FC<{src: string}> = ({src}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const scale = interpolate(frame, [0, durationInFrames], [1.04, 1.12], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill>
      <Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${scale})`}} />
      <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.10) 24%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.62) 100%)'}} />
    </AbsoluteFill>
  );
};

const SoundOn: React.FC = () => (
  <div style={{display: 'inline-flex', alignItems: 'center', gap: 12, background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 28, letterSpacing: 2, padding: '12px 22px', borderRadius: 999}}>
    <SpeakerIcon size={28} />
    SOUND ON
  </div>
);

const CoverCard: React.FC<{p: PhraseReelProps; frames: number}> = ({p, frames}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 8, frames - 8, frames], [0, 1, 1, 0], {extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, 12], [26, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{opacity: o, justifyContent: 'space-between', padding: 84}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <Wordmark onDark handle={p.handle} />
        <SoundOn />
      </div>
      <div style={{transform: `translateY(${y}px)`}}>
        <div style={{fontFamily: body, fontWeight: 800, fontSize: 30, letterSpacing: 4, color: brand.gold, marginBottom: 18}}>{p.cover.kicker}</div>
        <div style={{width: 96, height: 8, borderRadius: 999, background: brand.gold, marginBottom: 26}} />
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 104, lineHeight: 1.02, color: brand.white, marginBottom: 24, textShadow: '0 4px 24px rgba(0,0,0,0.45)'}}>{p.cover.title}</div>
        <div style={{fontFamily: body, fontWeight: 500, fontSize: 44, lineHeight: 1.25, color: 'rgba(255,255,255,0.92)', maxWidth: 880}}>{p.cover.sub}</div>
      </div>
    </AbsoluteFill>
  );
};

// A gold disc with the speaker glyph, gently pulsing while the audio plays. Math.sin of
// the frame is deterministic (no Math.random), so the render stays reproducible.
const SpeakerBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.07 * Math.sin(frame / 5);
  return (
    <div style={{width: 86, height: 86, borderRadius: 999, background: brand.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scale(${pulse})`, marginBottom: 26, boxShadow: '0 8px 30px rgba(0,0,0,0.35)'}}>
      <SpeakerIcon size={42} />
    </div>
  );
};

const PhraseCard: React.FC<{ph: PhraseReelPhrase; i: number; total: number; theme: string; handle: string}> = ({ph, i, total, theme, handle}) => {
  const frame = useCurrentFrame();
  const cardO = interpolate(frame, [0, 8], [0, 1], {extrapolateRight: 'clamp'});
  const cardY = interpolate(frame, [0, 10], [30, 0], {extrapolateRight: 'clamp'});
  // English (and the context pill) fade in a beat AFTER the Dutch + audio, so the viewer
  // hears the Dutch first and reads the meaning a moment later.
  const enO = interpolate(frame, [sec(0.5), sec(0.85)], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{padding: 84, justifyContent: 'space-between'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Wordmark onDark handle={handle} />
        <Counter i={i + 1} total={total} />
      </div>
      <div style={{opacity: cardO, transform: `translateY(${cardY}px)`, alignSelf: 'center', width: '100%', maxWidth: 968, background: 'rgba(17,17,20,0.78)', borderRadius: 40, padding: '56px 60px', textAlign: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <SpeakerBadge />
        </div>
        <div style={{fontFamily: body, fontWeight: 700, fontSize: 24, letterSpacing: 4, color: brand.gold, marginBottom: 18, textTransform: 'uppercase'}}>{theme}</div>
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 92, lineHeight: 1.05, color: brand.white}}>{ph.nl}</div>
        <div style={{opacity: enO, fontFamily: body, fontWeight: 500, fontSize: 46, lineHeight: 1.25, color: 'rgba(255,255,255,0.85)', marginTop: 24}}>{ph.en}</div>
        {ph.when ? (
          <div style={{opacity: enO, display: 'inline-block', marginTop: 32, background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 30, padding: '12px 26px', borderRadius: 999}}>{ph.when}</div>
        ) : null}
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Dots active={i} total={total} onDark />
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 28, color: 'rgba(255,255,255,0.9)'}}>{handle}</div>
      </div>
    </AbsoluteFill>
  );
};

// Closing CTA, fading up from the backdrop onto a solid blue card (the brand's standard
// outro, shared with the cheatsheet CTA and the reel end card).
const Outro: React.FC<{p: PhraseReelProps}> = ({p}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 12], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, 14], [40, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{backgroundColor: brand.blue, opacity: o, justifyContent: 'center', padding: 84}}>
      <div style={{transform: `translateY(${y}px)`}}>
        <div style={{marginBottom: 44}}>
          <Wordmark onDark handle={p.handle} />
        </div>
        <LogoMark size={64} fill={brand.gold} />
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 92, lineHeight: 1.06, color: brand.white, marginTop: 28, marginBottom: 26}}>{p.outro.title}</div>
        <div style={{fontFamily: body, fontWeight: 500, fontSize: 44, lineHeight: 1.3, color: 'rgba(255,255,255,0.85)', marginBottom: 56}}>{p.outro.sub}</div>
        <div style={{display: 'inline-block', background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 40, padding: '26px 46px', borderRadius: 999}}>Volg {p.handle} →</div>
      </div>
    </AbsoluteFill>
  );
};

// The summary slide: every sentence at once, on a dark panel framed by the backdrop, held long
// enough to read and screenshot (the save driver). Silent. Shown just before the outro.
const Recap: React.FC<{p: PhraseReelProps}> = ({p}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 12], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, 14], [28, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{padding: 70, justifyContent: 'space-between', opacity: o}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Wordmark onDark handle={p.handle} />
        <div style={{background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 28, letterSpacing: 2, padding: '12px 22px', borderRadius: 999}}>SAVE THIS ↓</div>
      </div>
      <div style={{transform: `translateY(${y}px)`, background: 'rgba(17,17,20,0.86)', borderRadius: 40, padding: '52px 56px'}}>
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 60, lineHeight: 1.04, color: brand.white, marginBottom: 16}}>{p.recapTitle ?? 'Save the whole list'}</div>
        <div style={{width: 96, height: 8, borderRadius: 999, background: brand.gold, marginBottom: 38}} />
        <div style={{display: 'flex', flexDirection: 'column', gap: 26}}>
          {p.phrases.map((ph, i) => (
            <div key={i} style={{display: 'flex', gap: 22, alignItems: 'baseline'}}>
              <div style={{fontFamily: display, fontWeight: 600, fontSize: 34, color: brand.gold, minWidth: 40}}>{i + 1}</div>
              <div>
                <div style={{fontFamily: display, fontWeight: 600, fontSize: 42, lineHeight: 1.12, color: brand.white}}>{ph.nl}</div>
                <div style={{fontFamily: body, fontWeight: 500, fontSize: 28, color: 'rgba(255,255,255,0.7)', marginTop: 4}}>{ph.en}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 28, color: 'rgba(255,255,255,0.9)'}}>{p.handle}</div>
      </div>
    </AbsoluteFill>
  );
};

export const PhraseReel: React.FC<PhraseReelProps> = (props) => {
  const pacing: PhrasePacing = {...DEFAULT_PHRASE_PACING, ...(props.pacing ?? {})};
  const durations = props._durations ?? props.phrases.map(() => 2.5);
  const hasRecap = props.recap !== false;
  const {starts, recapStart, outroStart, totalSeconds} = computePhraseTimeline(durations, pacing, hasRecap);
  const total = props.phrases.length;
  const coverFrames = sec(pacing.cover + pacing.leadIn);
  const outroFrames = sec(totalSeconds) - sec(outroStart);

  return (
    <AbsoluteFill style={{backgroundColor: brand.blue}}>
      <Backdrop src={props.coverImage} />

      <Sequence durationInFrames={coverFrames} name="cover">
        <CoverCard p={props} frames={coverFrames} />
      </Sequence>

      {props.phrases.map((ph, i) => {
        // Each card holds until the next phrase starts (or, for the last one, until the
        // outro), so there is never a blank backdrop flicker between cards.
        const end = i < total - 1 ? starts[i + 1] : hasRecap ? recapStart : outroStart;
        return (
          <React.Fragment key={ph.file}>
            <Sequence from={sec(starts[i])} name={`audio ${i + 1}`}>
              <Audio src={staticFile(ph.file)} />
            </Sequence>
            <Sequence from={sec(starts[i])} durationInFrames={Math.max(1, sec(end - starts[i]))} name={`phrase ${i + 1}`}>
              <PhraseCard ph={ph} i={i} total={total} theme={props.theme} handle={props.handle} />
            </Sequence>
          </React.Fragment>
        );
      })}

      {hasRecap ? (
        <Sequence from={sec(recapStart)} durationInFrames={sec(outroStart - recapStart)} name="recap">
          <Recap p={props} />
        </Sequence>
      ) : null}

      <Sequence from={sec(outroStart)} durationInFrames={outroFrames} name="outro">
        <Outro p={props} />
      </Sequence>
    </AbsoluteFill>
  );
};
