import React from 'react';
import {AbsoluteFill, Audio, CalculateMetadataFunction, Loop, OffthreadVideo, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {getAudioDurationInSeconds, getVideoMetadata} from '@remotion/media-utils';
import {brand} from '../theme';
import {display, body} from '../fonts';
import {LogoMark} from '../logo';
import {DEFAULT_PACING, FPS, Pacing, computeTimeline, sec} from '../timeline';

export type ReelLine = {
  file: string; // path in public/
  speaker: string;
  english?: boolean; // spoken in English (the switch) — shown without a translation line
  recovery?: boolean; // the teaching payload — emphasized in gold
  switchTag?: boolean; // show the "switch" tag during this line
  nl?: string;
  en?: string;
  line?: string; // used when english === true
};

export type ReelProps = {
  clip: string; // path in public/ — ONE clip; Remotion loops it
  hook: {l1: string; l2: string; emphasis: string};
  switchTagText: string;
  lines: ReelLine[];
  outro: {kicker: string; nl: string; en: string; cta: string; handle: string};
  pacing?: Partial<Pacing>;
  // injected by calculateMetadata — do not set by hand:
  _durations?: number[];
  _clipSeconds?: number;
};

export const reelDefaults: ReelProps = {
  clip: 'switch-to-english/clip-correct.mp4',
  hook: {l1: 'When they switch', l2: 'to English, say', emphasis: 'THIS'},
  switchTagText: 'the switch (sound familiar?)',
  lines: [
    {file: 'switch-to-english/roos-1.mp3', speaker: 'Roos', nl: 'Hoi, mag ik een bruin brood, alsjeblieft?', en: 'Hi, may I have one loaf of brown bread, please?'},
    {file: 'switch-to-english/joost-2.mp3', speaker: 'Joost', english: true, switchTag: true, line: "Of course, one loaf of brown bread. That's two euros."},
    {file: 'switch-to-english/roos-3.mp3', speaker: 'Roos', recovery: true, nl: 'Mag ik het in het Nederlands proberen? Ik wil graag oefenen.', en: "May I try it in Dutch? I'd like to practice."},
    {file: 'switch-to-english/joost-4.mp3', speaker: 'Joost', nl: 'Natuurlijk! Sorry. Een bruin brood. Dat is twee euro.', en: "Of course! Sorry. One loaf of brown bread. That's two euros."},
    {file: 'switch-to-english/roos-5.mp3', speaker: 'Roos', nl: 'Dankjewel!', en: 'Thank you!'},
  ],
  outro: {kicker: 'THE ONE LINE TO REMEMBER', nl: 'Mag ik het in het Nederlands oefenen?', en: 'Can I practice it in Dutch?', cta: 'Save it for the next time it happens.', handle: '@dutchwithjoost'},
};

// Reads the real audio + video durations at render time, so the skill never
// measures anything. Drop the assets in public/ and render.
export const calcReel: CalculateMetadataFunction<ReelProps> = async ({props}) => {
  const pacing: Pacing = {...DEFAULT_PACING, ...(props.pacing ?? {})};
  const durations: number[] = [];
  for (const l of props.lines) {
    durations.push(await getAudioDurationInSeconds(staticFile(l.file)));
  }
  let clipSeconds = 10;
  try {
    const meta = await getVideoMetadata(staticFile(props.clip));
    clipSeconds = meta.durationInSeconds;
  } catch (e) {
    // fall back to 10s if the clip can't be probed
  }
  const {totalSeconds} = computeTimeline(durations, pacing);
  return {
    fps: FPS,
    durationInFrames: sec(totalSeconds),
    props: {...props, _durations: durations, _clipSeconds: clipSeconds},
  };
};

const Plate: React.FC<{children: React.ReactNode}> = ({children}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 7], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, 7], [26, 0], {extrapolateRight: 'clamp'});
  // The subtitle is ALWAYS centred (brand rule, June 2026): never side-aligned to the speaker.
  return (
    <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 200, paddingLeft: 70, paddingRight: 70}}>
      <div style={{opacity: o, transform: `translateY(${y}px)`, maxWidth: 920, background: 'rgba(17,17,20,0.74)', borderRadius: 30, padding: '30px 44px', textAlign: 'center'}}>
        {children}
      </div>
    </AbsoluteFill>
  );
};

// A small name tag above the line, so the viewer always knows WHO is speaking. The looped,
// no-lip-sync clip can never show this, so the subtitle layer carries it. Shown automatically
// when a reel has 3+ speakers (where voice + gender alone is ambiguous); 2-speaker reels are
// unchanged. Pair it with `side` to also sit the line on the speaker's side of the frame.
const SpeakerTag: React.FC<{name: string}> = ({name}) => (
  <span style={{display: 'inline-block', background: brand.blue, color: brand.white, fontFamily: body, fontWeight: 800, fontSize: 26, letterSpacing: 2, padding: '6px 18px', borderRadius: 999, textTransform: 'uppercase'}}>{name}</span>
);

const Subtitle: React.FC<{line: ReelLine; showName: boolean}> = ({line, showName}) => {
  const tagRow =
    showName || line.recovery ? (
      <div style={{display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: 16}}>
        {showName ? <SpeakerTag name={line.speaker} /> : null}
        {line.recovery ? (
          <span style={{display: 'inline-block', background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 24, letterSpacing: 2, padding: '8px 18px', borderRadius: 999}}>SAY THIS ↓</span>
        ) : null}
      </div>
    ) : null;
  if (line.english) {
    return (
      <Plate>
        {tagRow}
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 54, lineHeight: 1.15, color: brand.white}}>{line.line}</div>
      </Plate>
    );
  }
  return (
    <Plate>
      {tagRow}
      <div style={{fontFamily: display, fontWeight: 600, fontSize: line.recovery ? 70 : 62, lineHeight: 1.1, color: line.recovery ? brand.gold : brand.white}}>{line.nl}</div>
      <div style={{fontFamily: body, fontWeight: 500, fontSize: 38, color: 'rgba(255,255,255,0.86)', marginTop: 12}}>{line.en}</div>
    </Plate>
  );
};

const Hook: React.FC<{hook: ReelProps['hook']}> = ({hook}) => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [0, 8, sec(2.4) - 8, sec(2.4)], [0, 1, 1, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{alignItems: 'center', paddingTop: 150, opacity: fade}}>
      <div style={{maxWidth: 940, textAlign: 'center', background: 'rgba(0,0,0,0.42)', borderRadius: 36, padding: '38px 52px'}}>
        {hook.l1 ? <div style={{fontFamily: display, fontWeight: 600, fontSize: 70, lineHeight: 1.08, color: brand.white}}>{hook.l1}</div> : null}
        {hook.l2 ? <div style={{fontFamily: display, fontWeight: 600, fontSize: 70, lineHeight: 1.08, color: brand.white}}>{hook.l2}</div> : null}
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 104, lineHeight: 1.05, color: brand.gold}}>{hook.emphasis}</div>
      </div>
    </AbsoluteFill>
  );
};

const SwitchTag: React.FC<{text: string}> = ({text}) => (
  <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 470}}>
    <div style={{background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 30, padding: '12px 24px', borderRadius: 999}}>{text}</div>
  </AbsoluteFill>
);

// End CTA as a card OVER the scene. It fades in, holds, then fades fully out
// before the last frame — so the reel ends on the bakery scene and loops cleanly
// on Instagram (scene → scene, never a hard cut to a coloured page).
const EndCard: React.FC<{outro: ReelProps['outro']; frames: number}> = ({outro, frames}) => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: 'clamp'});
  // Finish the fade-out 8 frames early and clamp at 0, so the final frames are
  // pure scene (no faint endcard ghost). This makes the reel's last frame match
  // its first frame, so the Instagram loop is scene → scene with nothing left over.
  const fadeOut = interpolate(frame, [frames - 30, frames - 10], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const o = Math.min(fadeIn, fadeOut);
  const y = interpolate(frame, [0, 12], [40, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 70, opacity: o}}>
      <div style={{transform: `translateY(${y}px)`, width: '86%', background: brand.blue, borderRadius: 40, padding: '54px 52px', boxShadow: '0 24px 70px rgba(0,0,0,0.4)'}}>
        <LogoMark size={56} fill={brand.gold} />
        <div style={{fontFamily: body, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: brand.gold, marginTop: 22, marginBottom: 18}}>{outro.kicker}</div>
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 66, lineHeight: 1.08, color: brand.white, marginBottom: 18}}>{outro.nl}</div>
        <div style={{fontFamily: body, fontWeight: 500, fontSize: 38, color: 'rgba(255,255,255,0.85)', marginBottom: 34}}>{outro.en}</div>
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 32, color: brand.white}}>{outro.cta} <span style={{color: brand.gold}}>{outro.handle}</span></div>
      </div>
    </AbsoluteFill>
  );
};

export const ScenarioReel: React.FC<ReelProps> = (props) => {
  const pacing: Pacing = {...DEFAULT_PACING, ...(props.pacing ?? {})};
  const durations = props._durations ?? props.lines.map(() => 3);
  const clipSeconds = props._clipSeconds ?? 10;
  const {starts, outroStart, totalSeconds} = computeTimeline(durations, pacing);
  const clipFrames = Math.max(1, sec(clipSeconds));
  const endCardFrames = sec(totalSeconds) - sec(outroStart);
  // Show speaker name tags only when there are 3+ speakers, where voice alone is ambiguous
  // (e.g. two female voices). Two-speaker reels stay clean and unchanged.
  const showNames = new Set(props.lines.map((l) => l.speaker)).size > 2;

  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      {/* ONE clip, looped to fill the whole reel. The scene is on screen start to
          finish, so the Instagram loop is scene → scene with no hard cut. */}
      <Loop durationInFrames={clipFrames}>
        <OffthreadVideo src={staticFile(props.clip)} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </Loop>
      <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)'}} />

      {props.lines.map((l, i) => (
        <React.Fragment key={l.file}>
          <Sequence from={sec(starts[i])} name={`audio ${l.speaker} ${i + 1}`}>
            <Audio src={staticFile(l.file)} />
          </Sequence>
          <Sequence from={sec(starts[i])} durationInFrames={sec(durations[i] + 0.2)} name={`subtitle ${i + 1}`}>
            <Subtitle line={l} showName={showNames} />
          </Sequence>
          {l.switchTag ? (
            <Sequence from={sec(starts[i])} durationInFrames={sec(durations[i] + 0.2)} name={`switch tag ${i + 1}`}>
              <SwitchTag text={props.switchTagText} />
            </Sequence>
          ) : null}
        </React.Fragment>
      ))}

      <Sequence durationInFrames={sec(2.4)} name="hook">
        <Hook hook={props.hook} />
      </Sequence>

      <Sequence from={sec(outroStart)} durationInFrames={endCardFrames} name="end card">
        <EndCard outro={props.outro} frames={endCardFrames} />
      </Sequence>
    </AbsoluteFill>
  );
};
