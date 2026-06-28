import React from 'react';
import {AbsoluteFill, Audio, CalculateMetadataFunction, Img, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {getAudioDurationInSeconds} from '@remotion/media-utils';
import {brand} from '../theme';
import {display, body} from '../fonts';
import {LogoMark} from '../logo';
import {FPS, sec} from '../timeline';
import {ThoughtBubble} from './IdiomReel';

// IdiomShots — the idiom beat told as a SHOT SEQUENCE built from stills (no Seedance):
// a wide two-shot of the conversation, a push-in to a close-up of HER as the idiom lands,
// the ape thought-bubble above her while she looks confused, then a pull-back to the
// two-shot as the bubble vanishes on the speaker's next line. The "zoom" is a Remotion
// scale + cross-dissolve between the wide and close stills toward a focus point.

export type IdiomShotLine = {
  file: string; // path in public/
  speaker: string;
  close?: boolean; // show the close-up (and the push-in) during this line
  imagine?: boolean; // pop the ape bubble over the close-up during this line
  recovery?: boolean; // the reveal/meaning line, emphasized in gold
  gesture?: boolean; // from this line on, switch the wide to the gesture frame and hold it (no toggling)
  english?: boolean;
  nl?: string;
  en?: string;
  line?: string;
};

const PAC = {leadIn: 0.4, gap: 0.35, tail: 0.8, outro: 4.2};

export type IdiomShotsProps = {
  shotWide: string; // the two-shot (both standing, talking)
  shotWideGesture?: string; // optional 2nd two-shot where the speaker holds a gesture (hand up, mouth open); switched in on the gesture line and held
  shotClose: string; // close-up of her, facing camera, headroom above for the bubble
  apeImage: string; // the ape-out-of-sleeve still, shown in the bubble
  focus: {x: number; y: number}; // where she is in the wide shot (the push-in target), 0-1 fractions
  hook: {l1: string; l2: string; emphasis: string}; // 3-second opener overlay (emphasis is gold)
  outro: {kicker: string; nl: string; literal: string; en: string; cta: string; handle: string}; // closing card
  lines: IdiomShotLine[];
  // injected by calculateMetadata:
  _durations?: number[];
};

function timeline(durations: number[]) {
  const starts: number[] = [];
  let t = PAC.leadIn;
  for (const d of durations) {
    starts.push(t);
    t += d + PAC.gap;
  }
  const last = starts.length ? starts[starts.length - 1] + durations[durations.length - 1] : PAC.leadIn;
  const outroStart = last + PAC.tail;
  return {starts, outroStart, total: outroStart + PAC.outro};
}

export const idiomShotsDefaults: IdiomShotsProps = {
  shotWide: '2026-06-22/kringverjaardag/scenario.png',
  shotClose: '2026-06-22/get-in-on-the-joke/starting-frame.png',
  apeImage: '2026-06-22/dont-say-ik-ben-heet/panel-1.png',
  focus: {x: 0.62, y: 0.42},
  hook: {l1: 'A monkey is about', l2: 'to climb out of', emphasis: 'HIS SLEEVE??'},
  outro: {kicker: 'WHAT IT REALLY MEANS', nl: 'nu komt de aap uit de mouw', literal: 'lit. now the monkey comes out of the sleeve', en: 'now the hidden truth comes out', cta: 'Save it for the next one you hear.', handle: '@dutchwithjoost'},
  lines: [
    {file: '2026-06-22/table-talk-too-fast/joost-1.mp3', speaker: 'Joost', nl: 'Aha, nu komt de aap uit de mouw!', en: 'Aha, now the monkey comes out of the sleeve!'},
    {file: '2026-06-22/table-talk-too-fast/sanne-2.mp3', speaker: 'Sanne', close: true, imagine: true, nl: 'Een aap? Uit je mouw?', en: 'A monkey? Out of your sleeve?'},
    {file: '2026-06-22/table-talk-too-fast/maya-3.mp3', speaker: 'Joost', nl: 'Haha, nee. Geen echte aap.', en: 'Haha, no. Not a real monkey.'},
    {file: '2026-06-22/table-talk-too-fast/joost-4.mp3', speaker: 'Sanne', recovery: true, nl: 'Het betekent: nu komt de waarheid.', en: 'It means: now the truth comes out.'},
  ],
};

export const calcIdiomShots: CalculateMetadataFunction<IdiomShotsProps> = async ({props}) => {
  const durations: number[] = [];
  for (const l of props.lines) durations.push(await getAudioDurationInSeconds(staticFile(l.file)));
  const {total} = timeline(durations);
  return {fps: FPS, durationInFrames: sec(total), props: {...props, _durations: durations}};
};

// The camera move: a "closeness" value c (0 = wide, 1 = close) drives a cross-dissolve
// between the two shots plus a scale, so the wide pushes IN toward her focus point as the
// close-up settles (a zoom in), and reverses on the way out.
const Backdrop: React.FC<{p: IdiomShotsProps; closeStart: number; closeEnd: number; gestureStart: number}> = ({p, closeStart, closeEnd, gestureStart}) => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const c = interpolate(t, [closeStart - 0.35, closeStart + 0.15, closeEnd - 0.1, closeEnd + 0.45], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const wideScale = 1 + 0.22 * c; // pushes in toward her as we go close
  const closeScale = 1.1 - 0.1 * c; // settles from a touch zoomed to neutral as it fades in
  const origin = `${p.focus.x * 100}% ${p.focus.y * 100}%`;
  // Joost switches to the gesture pose at the gesture line and HOLDS it: one short dissolve, then
  // it stays (extrapolateRight clamp keeps g at 1 for the rest of the reel). No toggling.
  const g = p.shotWideGesture ? interpolate(t, [gestureStart, gestureStart + 0.3], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 0;
  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      <AbsoluteFill style={{opacity: 1 - c}}>
        <Img src={staticFile(p.shotWide)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${wideScale})`, transformOrigin: origin}} />
        {p.shotWideGesture ? (
          <AbsoluteFill style={{opacity: g}}>
            <Img src={staticFile(p.shotWideGesture)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${wideScale})`, transformOrigin: origin}} />
          </AbsoluteFill>
        ) : null}
      </AbsoluteFill>
      <AbsoluteFill style={{opacity: c}}>
        <Img src={staticFile(p.shotClose)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${closeScale})`}} />
      </AbsoluteFill>
      <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)'}} />
    </AbsoluteFill>
  );
};

const Subtitle: React.FC<{line: IdiomShotLine}> = ({line}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 7], [0, 1], {extrapolateRight: 'clamp'});
  const text = line.english ? line.line : line.nl;
  return (
    <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 180}}>
      <div style={{opacity: o, maxWidth: 920, background: 'rgba(17,17,20,0.74)', borderRadius: 30, padding: '28px 40px', textAlign: 'center'}}>
        {line.recovery ? (
          <div style={{display: 'inline-block', background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 24, letterSpacing: 2, padding: '8px 18px', borderRadius: 999, marginBottom: 14}}>WHAT IT MEANS ↓</div>
        ) : null}
        <div style={{fontFamily: display, fontWeight: 600, fontSize: line.recovery ? 66 : 58, lineHeight: 1.1, color: line.recovery ? brand.gold : brand.white}}>{text}</div>
        {!line.english ? <div style={{fontFamily: body, fontWeight: 500, fontSize: 36, color: 'rgba(255,255,255,0.86)', marginTop: 10}}>{line.en}</div> : null}
      </div>
    </AbsoluteFill>
  );
};

// 3-second hook overlay, fading in and out over the opening wide shot (overlaps line 1 by design).
const Hook: React.FC<{hook: IdiomShotsProps['hook']}> = ({hook}) => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [0, 8, sec(2.4) - 8, sec(2.4)], [0, 1, 1, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{alignItems: 'center', paddingTop: 150, opacity: fade}}>
      <div style={{maxWidth: 940, textAlign: 'center', background: 'rgba(0,0,0,0.42)', borderRadius: 36, padding: '38px 52px'}}>
        {hook.l1 ? <div style={{fontFamily: display, fontWeight: 600, fontSize: 70, lineHeight: 1.08, color: brand.white}}>{hook.l1}</div> : null}
        {hook.l2 ? <div style={{fontFamily: display, fontWeight: 600, fontSize: 70, lineHeight: 1.08, color: brand.white}}>{hook.l2}</div> : null}
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 96, lineHeight: 1.05, color: brand.gold}}>{hook.emphasis}</div>
      </div>
    </AbsoluteFill>
  );
};

// Closing card: fades in over the held-gesture scene and STAYS (the reel ends on the card, like the
// spoken carousel; a stills reel has no looped clip to return to).
const EndCard: React.FC<{outro: IdiomShotsProps['outro']}> = ({outro}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 12], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, 14], [40, 0], {extrapolateRight: 'clamp'});
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

export const IdiomShots: React.FC<IdiomShotsProps> = (props) => {
  const durations = props._durations ?? props.lines.map(() => 2.5);
  const {starts, outroStart} = timeline(durations);
  const ci = props.lines.findIndex((l) => l.close || l.imagine);
  const closeStart = ci >= 0 ? starts[ci] : 1e9;
  const closeEnd = ci >= 0 ? starts[ci] + durations[ci] : 1e9;
  // The gesture switches on at the start of the line flagged `gesture` (else the recovery line) and holds to the end.
  const gFlag = props.lines.findIndex((l) => l.gesture);
  const gi = gFlag >= 0 ? gFlag : props.lines.findIndex((l) => l.recovery);
  const gestureStart = gi >= 0 ? starts[gi] : 1e9;

  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      <Backdrop p={props} closeStart={closeStart} closeEnd={closeEnd} gestureStart={gestureStart} />

      {props.lines.map((l, i) => (
        <React.Fragment key={l.file}>
          <Sequence from={sec(starts[i])} name={`audio ${i + 1}`}>
            <Audio src={staticFile(l.file)} />
          </Sequence>
          {l.imagine ? (
            <Sequence from={sec(starts[i])} durationInFrames={sec(durations[i] + 0.2)} name={`bubble ${i + 1}`}>
              <ThoughtBubble image={props.apeImage} frames={sec(durations[i] + 0.2)} />
            </Sequence>
          ) : null}
          <Sequence from={sec(starts[i])} durationInFrames={sec(durations[i] + 0.2)} name={`sub ${i + 1}`}>
            <Subtitle line={l} />
          </Sequence>
        </React.Fragment>
      ))}

      <Sequence durationInFrames={sec(2.4)} name="hook">
        <Hook hook={props.hook} />
      </Sequence>

      <Sequence from={sec(outroStart)} name="outro">
        <EndCard outro={props.outro} />
      </Sequence>
    </AbsoluteFill>
  );
};
