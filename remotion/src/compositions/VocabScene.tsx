import React from 'react';
import {AbsoluteFill, CalculateMetadataFunction, Img, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../theme';
import {display, body} from '../fonts';
import {Wordmark, Dots} from '../components';

// A labeled vocabulary scene. The illustration is generated WITHOUT text (the brand's
// never-bake-text rule); Remotion overlays crisp NL/EN label chips and arrows from props.
// Positions are fractions (0..1) of the 1080x1350 canvas, authored per image at batch time.
//   slide 0 = the labeled poster, [optional recap list], final = CTA.

export type VocabLabel = {
  nl: string;
  en: string;
  x: number; // label chip center, 0..1 across the width
  y: number; // label chip center, 0..1 down the height
  point?: {x: number; y: number}; // the object the arrow targets; omit for a chip with no arrow
};

export type VocabSceneProps = {
  theme: string; // kicker, e.g. "Dutch vocabulary"
  handle: string;
  sceneImage: string; // label-free illustration, 4:5
  title: {nl: string; en: string}; // "Een dagje koken" / "A day in the kitchen"
  labels: VocabLabel[];
  recap?: boolean; // show a recap list slide after the poster
  cta: {title: string; sub: string};
};

const PAD = 84;
const W = 1080;
const H = 1350;

export const vocabSceneDefaults: VocabSceneProps = {
  theme: 'Dutch vocabulary',
  handle: '@dutchwithjoost',
  sceneImage: 'samples/bakery.png',
  title: {nl: 'Een dagje koken', en: 'A day in the kitchen'},
  labels: [
    {nl: 'de pan', en: 'the pan', x: 0.24, y: 0.5, point: {x: 0.4, y: 0.58}},
    {nl: 'de oven', en: 'the oven', x: 0.78, y: 0.46, point: {x: 0.62, y: 0.55}},
    {nl: 'de kraan', en: 'the tap', x: 0.2, y: 0.72, point: {x: 0.34, y: 0.66}},
    {nl: 'het mes', en: 'the knife', x: 0.8, y: 0.74, point: {x: 0.66, y: 0.68}},
  ],
  recap: true,
  cta: {title: 'Want to learn more Dutch essentials?', sub: 'Join one of our courses and talk like a real Dutchie.'},
};

export const calcVocabScene: CalculateMetadataFunction<VocabSceneProps> = ({props}) => ({
  durationInFrames: 1 + (props.recap ? 1 : 0) + 1,
  fps: 1,
});

const LabelChip: React.FC<{l: VocabLabel}> = ({l}) => (
  <div style={{position: 'absolute', left: `${l.x * 100}%`, top: `${l.y * 100}%`, transform: 'translate(-50%, -50%)', zIndex: 2}}>
    <div style={{background: 'rgba(255,255,255,0.82)', border: '1.5px solid rgba(0,37,219,0.28)', borderRadius: 14, padding: '8px 15px', boxShadow: '0 3px 10px rgba(0,0,0,0.12)', textAlign: 'center', maxWidth: 360}}>
      <div style={{fontFamily: display, fontWeight: 600, fontSize: 31, lineHeight: 1.05, color: brand.blue, whiteSpace: 'nowrap'}}>{l.nl}</div>
      <div style={{fontFamily: body, fontWeight: 500, fontSize: 21, lineHeight: 1.1, color: brand.ink, whiteSpace: 'nowrap'}}>{l.en}</div>
    </div>
  </div>
);

const Poster: React.FC<{p: VocabSceneProps}> = ({p}) => (
  <AbsoluteFill>
    <Img src={staticFile(p.sceneImage)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    {/* arrows from each chip to its object */}
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position: 'absolute', inset: 0, zIndex: 1}}>
      {p.labels.map((l, i) =>
        l.point ? (
          <g key={i}>
            {/* white casing under the core so the tail reads on dark, warm, AND light areas of the scene */}
            <line x1={l.x * W} y1={l.y * H} x2={l.point.x * W} y2={l.point.y * H} stroke={brand.white} strokeWidth={7} strokeLinecap="round" opacity={0.9} />
            <line x1={l.x * W} y1={l.y * H} x2={l.point.x * W} y2={l.point.y * H} stroke={brand.blue} strokeWidth={3.5} strokeLinecap="round" opacity={0.95} />
            {/* target dot: white ring + gold core so the endpoint pops against the watercolor */}
            <circle cx={l.point.x * W} cy={l.point.y * H} r={10} fill={brand.white} opacity={0.92} />
            <circle cx={l.point.x * W} cy={l.point.y * H} r={6.5} fill={brand.gold} stroke={brand.blue} strokeWidth={1.5} />
          </g>
        ) : null
      )}
    </svg>
    {/* the crisp NL/EN label chips, above the arrows */}
    {p.labels.map((l, i) => (
      <LabelChip key={i} l={l} />
    ))}
    {/* top scrim with title + wordmark */}
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, paddingTop: 44, paddingLeft: PAD, paddingRight: PAD, paddingBottom: 70, background: 'linear-gradient(to bottom, rgba(252,252,252,0.97) 0%, rgba(252,252,252,0.85) 45%, rgba(252,252,252,0) 100%)', zIndex: 3}}>
      <div style={{marginBottom: 20}}>
        <Wordmark handle={p.handle} />
      </div>
      <div style={{fontFamily: display, fontWeight: 600, fontSize: 68, lineHeight: 1.02, color: brand.blue}}>{p.title.nl}</div>
      <div style={{fontFamily: body, fontWeight: 600, fontSize: 36, color: brand.ink}}>{p.title.en}</div>
    </div>
    {/* bottom scrim with swipe hint */}
    <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0))', zIndex: 3}} />
    <div style={{position: 'absolute', right: PAD, bottom: 56, fontFamily: body, fontWeight: 700, fontSize: 32, color: brand.white, zIndex: 4}}>swipe →</div>
  </AbsoluteFill>
);

const RecapSlide: React.FC<{p: VocabSceneProps; total: number}> = ({p, total}) => (
  <AbsoluteFill style={{backgroundColor: brand.bg, padding: PAD, display: 'flex', flexDirection: 'column'}}>
    <Wordmark handle={p.handle} />
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div style={{fontFamily: body, fontWeight: 700, fontSize: 26, letterSpacing: 4, color: brand.mutedInk, marginBottom: 16, textTransform: 'uppercase'}}>{p.title.en}</div>
      <div style={{fontFamily: display, fontWeight: 600, fontSize: 64, color: brand.blue, marginBottom: 8}}>De woorden</div>
      <div style={{width: 96, height: 8, borderRadius: 999, background: brand.gold, marginBottom: 36}} />
      <div style={{display: 'flex', flexWrap: 'wrap', columnGap: 48, rowGap: 22}}>
        {p.labels.map((l, i) => (
          <div key={i} style={{width: '44%', display: 'flex', flexDirection: 'column'}}>
            <span style={{fontFamily: display, fontWeight: 600, fontSize: 40, lineHeight: 1.05, color: brand.blue}}>{l.nl}</span>
            <span style={{fontFamily: body, fontWeight: 500, fontSize: 30, lineHeight: 1.1, color: brand.ink}}>{l.en}</span>
          </div>
        ))}
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Dots active={1} total={total} />
      <div style={{fontFamily: body, fontWeight: 600, fontSize: 28, color: brand.mutedInk}}>{p.handle}</div>
    </div>
  </AbsoluteFill>
);

const Cta: React.FC<{p: VocabSceneProps; total: number}> = ({p, total}) => (
  <AbsoluteFill style={{backgroundColor: brand.blue, padding: PAD, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <div style={{marginBottom: 50}}>
      <Wordmark onDark handle={p.handle} />
    </div>
    <div style={{fontFamily: display, fontWeight: 600, fontSize: 92, lineHeight: 1.06, color: brand.white, marginBottom: 28}}>{p.cta.title}</div>
    <div style={{fontFamily: body, fontWeight: 500, fontSize: 44, lineHeight: 1.3, color: 'rgba(255,255,255,0.85)', marginBottom: 64}}>{p.cta.sub}</div>
    <div style={{alignSelf: 'flex-start', background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 40, padding: '28px 48px', borderRadius: 999}}>
      Volg {p.handle} →
    </div>
    <div style={{position: 'absolute', left: PAD, bottom: PAD}}>
      <Dots active={total - 1} total={total} onDark />
    </div>
  </AbsoluteFill>
);

export const VocabScene: React.FC<VocabSceneProps> = (props) => {
  const frame = useCurrentFrame();
  const hasRecap = Boolean(props.recap);
  const total = 1 + (hasRecap ? 1 : 0) + 1;
  if (frame === 0) return <Poster p={props} />;
  if (hasRecap && frame === 1) return <RecapSlide p={props} total={total} />;
  return <Cta p={props} total={total} />;
};
