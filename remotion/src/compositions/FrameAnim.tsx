import React from 'react';
import {AbsoluteFill, CalculateMetadataFunction, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../theme';
import {display, body} from '../fonts';
import {FPS, sec} from '../timeline';

// FrameAnim — mimic a video from a handful of stills, no Seedance. Each pose holds for
// its `hold` seconds and the next pose CROSS-DISSOLVES in over `xfade`. Because the frames
// are near-identical (same scene, only the pose changes), the dissolve reads as the
// character MOVING — a hand-drawn "motion comic". A subtle per-pose Ken Burns keeps even a
// held still from feeling dead. This is the building block that can stand in for a Seedance
// clip as a reel backdrop, and the FrameAnim composition is a standalone demo of the look.

export type AnimFrame = {src: string; hold: number}; // path in public/, and seconds this pose holds

// The reusable building block. Drop it anywhere a looping/clip backdrop is wanted.
export const FrameClip: React.FC<{frames: AnimFrame[]; xfade: number; kenBurns: number}> = ({frames, xfade, kenBurns}) => {
  const frame = useCurrentFrame();
  // start time (seconds) of each pose = cumulative holds
  const starts: number[] = [];
  let t = 0;
  for (const f of frames) {
    starts.push(t);
    t += f.hold;
  }
  const fadeF = Math.max(1, sec(xfade));
  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      {frames.map((f, i) => {
        const startF = sec(starts[i]);
        const holdF = sec(f.hold);
        // Poses are stacked in order; each later pose fades in OVER the previous, which stays
        // opaque underneath — so the overlap is a clean cross-dissolve. The first pose is
        // visible from the start.
        const op = i === 0 ? 1 : interpolate(frame, [startF, startF + fadeF], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        // gentle zoom across this pose's life, reset per pose, for a touch of life
        const scale = 1 + kenBurns * interpolate(frame - startF, [0, holdF + fadeF], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        return (
          <AbsoluteFill key={i} style={{opacity: op}}>
            <Img src={staticFile(f.src)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${scale})`}} />
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};

export type FrameAnimProps = {
  frames: AnimFrame[];
  xfade: number; // cross-dissolve seconds between consecutive poses
  kenBurns: number; // subtle zoom per pose (0 to disable)
  subtitle?: {nl: string; en: string} | null; // optional caption, so the demo reads like a reel beat
};

// Placeholder frames (existing scenes) so the composition previews/smoke-tests out of the
// box. Replace `frames` with the real pose set to see the gesture animation.
export const frameAnimDefaults: FrameAnimProps = {
  frames: [
    {src: '2026-06-22/table-talk-too-fast/starting-frame.png', hold: 1.0},
    {src: '2026-06-22/coffee-with-the-neighbor/scene.png', hold: 0.9},
    {src: '2026-06-22/table-talk-too-fast/starting-frame.png', hold: 0.9},
    {src: '2026-06-22/coffee-with-the-neighbor/scene.png', hold: 1.5},
  ],
  xfade: 0.28,
  kenBurns: 0.04,
  subtitle: {nl: 'Een aap? Uit je mouw?', en: 'A monkey? Out of your sleeve?'},
};

export const calcFrameAnim: CalculateMetadataFunction<FrameAnimProps> = ({props}) => {
  const total = props.frames.reduce((s, f) => s + f.hold, 0);
  return {fps: FPS, durationInFrames: Math.max(1, sec(total))};
};

export const FrameAnim: React.FC<FrameAnimProps> = (props) => {
  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      <FrameClip frames={props.frames} xfade={props.xfade} kenBurns={props.kenBurns} />
      <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)'}} />
      {props.subtitle ? (
        <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 200}}>
          <div style={{maxWidth: 920, background: 'rgba(17,17,20,0.74)', borderRadius: 30, padding: '30px 44px', textAlign: 'center'}}>
            <div style={{fontFamily: display, fontWeight: 600, fontSize: 62, lineHeight: 1.1, color: brand.white}}>{props.subtitle.nl}</div>
            <div style={{fontFamily: body, fontWeight: 500, fontSize: 38, color: 'rgba(255,255,255,0.86)', marginTop: 12}}>{props.subtitle.en}</div>
          </div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
