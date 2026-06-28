import React from 'react';
import {AbsoluteFill, Audio, CalculateMetadataFunction, Img, Loop, OffthreadVideo, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {getAudioDurationInSeconds, getVideoMetadata} from '@remotion/media-utils';
import {brand} from '../theme';
import {display, body} from '../fonts';
import {LogoMark} from '../logo';
import {DEFAULT_PACING, FPS, Pacing, computeTimeline, sec} from '../timeline';

// IdiomReel — the funny idiom format. A Dutch speaker drops an idiom in normal
// conversation; the learner pictures it LITERALLY (a timed cutaway to the literal
// illustration, framed like a daydream); confusion; then the real meaning lands.
// Same subtitle-led, single-looped-clip backbone as ScenarioReel, plus the cutaway.
export type IdiomLine = {
  file: string; // path in public/
  speaker: string;
  english?: boolean; // spoken in English — shown without a translation line
  recovery?: boolean; // the reveal: what the idiom really means — emphasized in gold
  imagine?: boolean; // during this line, cut away to the literal-imagination image
  nl?: string;
  en?: string;
  line?: string; // used when english === true
};

export type IdiomReelProps = {
  clip: string; // the conversation clip — ONE clip, looped (like ScenarioReel)
  literalImage: string; // the "what I pictured" still — the visual gag
  literalLabel: string; // badge over the cutaway, e.g. "WHAT I PICTURED"
  literalCaption: string; // the literal gloss under the badge (cutaway mode only)
  imagineStyle?: 'cutaway' | 'bubble'; // how the imagination shows: full-frame cutaway (default) or a thought bubble over the conversation
  hook: {l1: string; l2: string; emphasis: string};
  lines: IdiomLine[];
  outro: {kicker: string; nl: string; literal: string; en: string; cta: string; handle: string};
  pacing?: Partial<Pacing>;
  // injected by calculateMetadata — do not set by hand:
  _durations?: number[];
  _clipSeconds?: number;
};

export const idiomReelDefaults: IdiomReelProps = {
  clip: '2026-06-15/why-they-switch/clip.mp4',
  literalImage: 'samples/bakery.png',
  literalLabel: 'WHAT I PICTURED',
  literalCaption: 'a real monkey... out of his sleeve?!',
  hook: {l1: 'A monkey is about', l2: 'to climb out of', emphasis: 'HIS SLEEVE??'},
  lines: [
    {file: '2026-06-15/why-they-switch/joost-2.mp3', speaker: 'Joost', nl: 'Aha, nu komt de aap uit de mouw!', en: 'Aha, "now the monkey comes out of the sleeve"!'},
    {file: '2026-06-15/why-they-switch/roos-3.mp3', speaker: 'Roos', imagine: true, nl: 'Een aap? Uit je mouw?', en: 'A monkey? Out of your sleeve?'},
    {file: '2026-06-15/why-they-switch/joost-4.mp3', speaker: 'Joost', nl: 'Haha, nee. Geen echte aap.', en: 'Haha, no. Not a real monkey.'},
    {file: '2026-06-15/why-they-switch/roos-5.mp3', speaker: 'Roos', recovery: true, nl: 'Het betekent: nu komt de waarheid.', en: 'It means: now the truth comes out.'},
  ],
  outro: {
    kicker: 'WHAT IT REALLY MEANS',
    nl: 'nu komt de aap uit de mouw',
    literal: 'lit. "now the monkey comes out of the sleeve"',
    en: 'now the hidden truth comes out',
    cta: 'Save it for the next one you hear.',
    handle: '@dutchwithjoost',
  },
};

// Reads the real audio + clip durations at render time, so the skill never measures
// anything. Drop the assets in public/ and render. (Same contract as ScenarioReel.)
export const calcIdiomReel: CalculateMetadataFunction<IdiomReelProps> = async ({props}) => {
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
  return (
    <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 250}}>
      <div style={{opacity: o, transform: `translateY(${y}px)`, maxWidth: 920, background: 'rgba(17,17,20,0.74)', borderRadius: 30, padding: '30px 44px', textAlign: 'center'}}>
        {children}
      </div>
    </AbsoluteFill>
  );
};

const Subtitle: React.FC<{line: IdiomLine}> = ({line}) => {
  if (line.english) {
    return (
      <Plate>
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 54, lineHeight: 1.15, color: brand.white}}>{line.line}</div>
      </Plate>
    );
  }
  return (
    <Plate>
      {line.recovery ? (
        <div style={{display: 'inline-block', background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 24, letterSpacing: 2, padding: '8px 18px', borderRadius: 999, marginBottom: 18}}>WHAT IT MEANS ↓</div>
      ) : null}
      <div style={{fontFamily: display, fontWeight: 600, fontSize: line.recovery ? 70 : 62, lineHeight: 1.1, color: line.recovery ? brand.gold : brand.white}}>{line.nl}</div>
      <div style={{fontFamily: body, fontWeight: 500, fontSize: 38, color: 'rgba(255,255,255,0.86)', marginTop: 12}}>{line.en}</div>
    </Plate>
  );
};

const Hook: React.FC<{hook: IdiomReelProps['hook']}> = ({hook}) => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [0, 8, sec(2.4) - 8, sec(2.4)], [0, 1, 1, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{alignItems: 'center', paddingTop: 150, opacity: fade}}>
      <div style={{maxWidth: 940, textAlign: 'center', background: 'rgba(0,0,0,0.42)', borderRadius: 36, padding: '38px 52px'}}>
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 70, lineHeight: 1.08, color: brand.white}}>{hook.l1}</div>
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 70, lineHeight: 1.08, color: brand.white}}>{hook.l2}</div>
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 96, lineHeight: 1.05, color: brand.gold}}>{hook.emphasis}</div>
      </div>
    </AbsoluteFill>
  );
};

// The visual gag: cut away from the conversation to a full-frame illustration of the
// idiom taken LITERALLY (the monkey actually climbing out of the sleeve), framed like a
// daydream. A short white flash at each edge sells the cut into and out of imagination.
const Cutaway: React.FC<{image: string; label: string; caption: string; frames: number}> = ({image, label, caption, frames}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, frames], [1.05, 1.16], {extrapolateRight: 'clamp'});
  const flash = interpolate(frame, [0, 6, frames - 6, frames], [0.7, 0, 0, 0.7], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{transform: `scale(${scale})`}}>
        <Img src={staticFile(image)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </AbsoluteFill>
      {/* daydream frame, so it reads as imagined, not a real scene cut */}
      <AbsoluteFill style={{boxShadow: 'inset 0 0 0 12px rgba(255,255,255,0.92), inset 0 0 0 24px rgba(224,187,0,0.92)'}} />
      <AbsoluteFill style={{justifyContent: 'flex-start', alignItems: 'center', paddingTop: 140}}>
        <div style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
          <div style={{background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 30, letterSpacing: 3, padding: '14px 30px', borderRadius: 999}}>{label}</div>
          {caption ? (
            <div style={{background: 'rgba(17,17,20,0.74)', color: brand.white, fontFamily: body, fontWeight: 600, fontSize: 34, padding: '10px 22px', borderRadius: 16}}>{caption}</div>
          ) : null}
        </div>
      </AbsoluteFill>
      <AbsoluteFill style={{background: '#fff', opacity: flash}} />
    </AbsoluteFill>
  );
};

// The imagination as a THOUGHT BUBBLE over the conversation (an alternative to the
// full-frame Cutaway, chosen with imagineStyle: 'bubble'). A balloon pops up holding the
// literal image, the picture "rises out" inside it over the first second, then the whole
// bubble pops away on the next line. The conversation stays visible behind it. Built for
// "de aap komt uit de mouw" — the ape climbing out of the sleeve.
export const ThoughtBubble: React.FC<{image: string; frames: number}> = ({image, frames}) => {
  const frame = useCurrentFrame();
  const D = 560;
  // pop in with a slight overshoot, hold, then pop out before the next line
  const scaleIn = interpolate(frame, [0, 7, 12], [0, 1.08, 1], {extrapolateRight: 'clamp'});
  const outF = interpolate(frame, [frames - 8, frames], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const scale = scaleIn * outF;
  const op = interpolate(frame, [0, 4, frames - 6, frames], [0, 1, 1, 0], {extrapolateRight: 'clamp'});
  // the picture "comes out": rises and grows a touch inside the bubble over the first second
  const rise = interpolate(frame, [4, 32], [54, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const inScale = interpolate(frame, [4, 32], [0.95, 1.07], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const dot = (i: number) => interpolate(frame, [7 + i * 3, 13 + i * 3], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{justifyContent: 'flex-start', alignItems: 'center', paddingTop: 120}}>
      <div style={{position: 'relative', width: D, opacity: op}}>
        {/* the balloon: a white-ringed, dark-outlined circle holding the rising picture */}
        <div style={{position: 'relative', width: D, height: D, transform: `scale(${scale})`, transformOrigin: 'center bottom'}}>
          <div style={{position: 'absolute', inset: 24, borderRadius: '50%', overflow: 'hidden', background: '#fff'}}>
            <Img src={staticFile(image)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `translateY(${rise}px) scale(${inScale})`}} />
          </div>
          <div style={{position: 'absolute', inset: 0, borderRadius: '50%', border: '12px solid #fff', boxShadow: `0 0 0 7px ${brand.goldText}, 0 20px 60px rgba(0,0,0,0.45)`}} />
        </div>
        {/* trailing thought dots, pointing down toward the thinker */}
        <div style={{position: 'absolute', top: D - 8, left: '50%', transform: `translateX(-50%) scale(${scale})`, transformOrigin: 'top center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{width: 44 - i * 12, height: 44 - i * 12, borderRadius: '50%', background: '#fff', boxShadow: `0 0 0 5px ${brand.goldText}`, transform: `scale(${dot(i)})`}} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// End CTA as a card OVER the scene. Fades in, holds, then fades fully out BEFORE the
// last frame, so the reel ends on the conversation scene and loops cleanly (scene →
// scene, never a hard cut). Same loop-safe fade as ScenarioReel. (See README.)
const EndCard: React.FC<{outro: IdiomReelProps['outro']; frames: number}> = ({outro, frames}) => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: 'clamp'});
  const fadeOut = interpolate(frame, [frames - 24, frames - 8], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const o = Math.min(fadeIn, fadeOut);
  const y = interpolate(frame, [0, 12], [40, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 70, opacity: o}}>
      <div style={{transform: `translateY(${y}px)`, width: '86%', background: brand.blue, borderRadius: 40, padding: '54px 52px', boxShadow: '0 24px 70px rgba(0,0,0,0.4)'}}>
        <LogoMark size={56} fill={brand.gold} />
        <div style={{fontFamily: body, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: brand.gold, marginTop: 22, marginBottom: 18}}>{outro.kicker}</div>
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 60, lineHeight: 1.08, color: brand.white, marginBottom: 12}}>{outro.nl}</div>
        <div style={{fontFamily: body, fontWeight: 500, fontStyle: 'italic', fontSize: 30, color: 'rgba(255,255,255,0.7)', marginBottom: 18}}>{outro.literal}</div>
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 40, color: brand.gold, marginBottom: 34}}>{outro.en}</div>
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 32, color: brand.white}}>{outro.cta} <span style={{color: brand.gold}}>{outro.handle}</span></div>
      </div>
    </AbsoluteFill>
  );
};

export const IdiomReel: React.FC<IdiomReelProps> = (props) => {
  const pacing: Pacing = {...DEFAULT_PACING, ...(props.pacing ?? {})};
  const durations = props._durations ?? props.lines.map(() => 3);
  const clipSeconds = props._clipSeconds ?? 10;
  const {starts, outroStart, totalSeconds} = computeTimeline(durations, pacing);
  const clipFrames = Math.max(1, sec(clipSeconds));
  const endCardFrames = sec(totalSeconds) - sec(outroStart);

  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      {/* ONE conversation clip, looped to fill the reel, so the loop is scene → scene. */}
      <Loop durationInFrames={clipFrames}>
        <OffthreadVideo src={staticFile(props.clip)} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </Loop>
      <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)'}} />

      {props.lines.map((l, i) => (
        <React.Fragment key={l.file}>
          <Sequence from={sec(starts[i])} name={`audio ${l.speaker} ${i + 1}`}>
            <Audio src={staticFile(l.file)} />
          </Sequence>
          {l.imagine ? (
            <Sequence from={sec(starts[i])} durationInFrames={sec(durations[i] + 0.2)} name={`imagine ${i + 1}`}>
              {props.imagineStyle === 'bubble' ? (
                <ThoughtBubble image={props.literalImage} frames={sec(durations[i] + 0.2)} />
              ) : (
                <Cutaway image={props.literalImage} label={props.literalLabel} caption={props.literalCaption} frames={sec(durations[i] + 0.2)} />
              )}
            </Sequence>
          ) : null}
          <Sequence from={sec(starts[i])} durationInFrames={sec(durations[i] + 0.2)} name={`subtitle ${i + 1}`}>
            <Subtitle line={l} />
          </Sequence>
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
