import React from 'react';
import {AbsoluteFill, CalculateMetadataFunction, Img, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../theme';
import {display, body} from '../fonts';
import {Wordmark, Counter, Dots} from '../components';

// A true comic-strip carousel: every story beat is its OWN illustration (a panel),
// with the Dutch line rendered crisply by Remotion in a speech card and a narrator
// caption underneath, never baked into the image. After the story panels come one or
// more text "lesson" slides (the takeaway, with right/wrong lines), then the CTA.
//
// Slide order: cover -> one panel per story beat -> one slide per lesson -> CTA.
// Use it when a post is a short funny story that lands a single language lesson.

// Semantic colours for the lesson right/wrong lines. Intentionally outside the brand
// marketing palette: a teach slide needs a clear wrong-vs-right read, and green/red are
// universal for that. The "×" and "✓" are plain text glyphs (not emoji) so they render
// identically in headless Chrome.
const SEM = {wrong: '#C0392B', right: '#1A7F37'};
// Comic ink: the dark outline on speech bubbles and caption boxes that sells the comic-book look.
const BUBBLE_INK = '#1B1B1B';

export type ComicBubble = {
  x: number; // 0-1 fraction of the canvas: the speech bubble's CENTRE
  y: number;
  w?: number; // 0-1 fraction: bubble width (default 0.52). Widen for a long line.
  tail: {x: number; y: number}; // 0-1 fraction: where the tail points (the speaker's mouth)
};

export type ComicPanel = {
  image: string; // this beat's own full-bleed 4:5 illustration, with calm space left for the bubble
  speaker?: string; // optional, NOT drawn (the tail shows who is speaking, comic-book style)
  nl: string; // the spoken Dutch line (rendered crisp inside the bubble, never baked into the image)
  en: string; // the English gloss (smaller, under the NL inside the bubble)
  caption?: string; // narrator caption box at the bottom ("Joost thinks his friend just bragged")
  bubble: ComicBubble; // where the speech bubble sits and where its tail points
};

export type LessonLine = {
  nl: string;
  en?: string;
  kind?: 'wrong' | 'right' | 'plain'; // drives the marker chip + the NL colour
};

export type LessonCard = {
  kicker?: string; // small label above the title
  title: string; // the lesson headline
  lines: LessonLine[]; // the right/wrong (or plain) teaching lines
  note?: string; // a gold-underline "remember this" subhead
};

export type ComicStoryProps = {
  theme: string; // small kicker on each panel
  handle: string;
  cover: {image: string; marker: string; kicker: string; title: string; sub: string};
  panels: ComicPanel[];
  lessons: LessonCard[];
  cta: {title: string; sub: string};
};

const PAD = 84;

export const comicStoryDefaults: ComicStoryProps = {
  theme: 'Ik heb het warm',
  handle: '@dutchwithjoost',
  cover: {
    image: 'samples/bakery.png',
    marker: 'COMMON MISTAKE',
    kicker: 'A SUMMER STORY',
    title: "He said 'ik ben heet'",
    sub: 'It did not mean what he thought.',
  },
  panels: [
    {image: 'samples/bakery.png', speaker: 'Tom', nl: 'Pfoe, ik ben heet!', en: "Phew, I'm hot!", caption: 'He means he feels hot. But a Dutch ear hears: I am hot, as in attractive.', bubble: {x: 0.5, y: 0.21, w: 0.6, tail: {x: 0.32, y: 0.52}}},
    {image: 'samples/bakery.png', speaker: 'Joost', nl: 'Je zelfvertrouwen is inspirerend.', en: 'Your confidence is inspiring.', caption: "Joost thinks his friend just announced he's irresistible.", bubble: {x: 0.5, y: 0.21, w: 0.62, tail: {x: 0.68, y: 0.52}}},
    {image: 'samples/bakery.png', speaker: 'Tom', nl: 'Wat? Wat zei ik?', en: 'What? What did I say?', caption: "He just told the whole terras he's gorgeous.", bubble: {x: 0.5, y: 0.21, w: 0.56, tail: {x: 0.32, y: 0.52}}},
  ],
  lessons: [
    {
      kicker: 'The fix',
      title: "Don't say 'ik ben heet'",
      lines: [
        {nl: 'Ik ben heet.', en: "I'm hot (as in sexy).", kind: 'wrong'},
        {nl: 'Ik heb het warm.', en: 'I feel hot.', kind: 'right'},
      ],
      note: 'Your body? Always hebben + het. (Cold = ik heb het koud.)',
    },
    {
      kicker: 'warm of heet?',
      title: 'Two words for hot',
      lines: [
        {nl: 'Het is warm vandaag.', en: 'It is hot today. (the weather, and how you feel)', kind: 'plain'},
        {nl: 'Pas op, de koffie is heet.', en: 'Careful, the coffee is scorching. (things that can burn you)', kind: 'plain'},
      ],
      note: "Both translate as 'hot'. Use warm for the weather and yourself, heet only for things that can burn you (coffee, a pan, the oven).",
    },
  ],
  cta: {title: 'Save it before the next hot day', sub: 'Send it to a friend who would say it.'},
};

// One frame = one finished slide. cover + panels + lessons + CTA.
export const calcComicStory: CalculateMetadataFunction<ComicStoryProps> = ({props}) => ({
  durationInFrames: 1 + props.panels.length + props.lessons.length + 1,
  fps: 1,
});

// Shrink the spoken line when it is long so the speech card never overflows.
const bubbleSize = (s: string): number => {
  const n = s.length;
  if (n <= 18) return 74;
  if (n <= 30) return 62;
  if (n <= 44) return 52;
  return 44;
};

// Rough bubble height in px, estimated from the text. We can't measure the rendered DOM
// mid-render, so this lets us (a) keep the bubble clear of the top wordmark and (b) give the
// tail a bounded length without it running down onto a character's face.
const estBubbleHeight = (nl: string, en: string, bubbleW: number): number => {
  const padY = 34 * 2;
  const innerW = bubbleW - 42 * 2;
  const fnl = bubbleSize(nl);
  const nlPerLine = Math.max(6, Math.floor(innerW / (fnl * 0.55)));
  const nlLines = Math.max(1, Math.ceil(nl.length / nlPerLine));
  const nlH = nlLines * fnl * 1.04;
  const fen = 34;
  const enPerLine = Math.max(8, Math.floor(innerW / (fen * 0.52)));
  const enLines = en ? Math.max(1, Math.ceil(en.length / enPerLine)) : 0;
  const enH = en ? enLines * fen * 1.2 + 12 : 0;
  return padY + nlH + enH;
};

const Cover: React.FC<{p: ComicStoryProps}> = ({p}) => (
  <AbsoluteFill style={{backgroundColor: brand.bg}}>
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '56%'}}>
      <Img src={staticFile(p.cover.image)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}} />
      <AbsoluteFill style={{background: `linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 28%, ${brand.bg} 100%)`}} />
    </div>
    <div style={{position: 'absolute', top: PAD, left: PAD, display: 'flex', alignItems: 'center', gap: 18}}>
      <Wordmark handle={p.handle} />
      <div style={{background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 24, letterSpacing: 3, padding: '10px 20px', borderRadius: 999}}>{p.cover.marker}</div>
    </div>
    <div style={{position: 'absolute', left: PAD, right: PAD, top: '57%', bottom: 140, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div style={{fontFamily: body, fontWeight: 800, fontSize: 30, letterSpacing: 4, color: brand.blue, marginBottom: 18}}>{p.cover.kicker}</div>
      <div style={{width: 96, height: 8, borderRadius: 999, background: brand.gold, marginBottom: 28}} />
      <div style={{fontFamily: display, fontWeight: 600, fontSize: 96, lineHeight: 1.02, color: brand.blue, marginBottom: 24}}>{p.cover.title}</div>
      <div style={{fontFamily: body, fontWeight: 500, fontSize: 42, lineHeight: 1.25, color: brand.ink}}>{p.cover.sub}</div>
    </div>
    <div style={{position: 'absolute', right: PAD, bottom: 64, fontFamily: body, fontWeight: 700, fontSize: 32, color: brand.blue}}>swipe →</div>
  </AbsoluteFill>
);

const CW = 1080;
const CH = 1350;

const PanelSlide: React.FC<{p: ComicStoryProps; i: number; dot: number; total: number}> = ({p, i, dot, total}) => {
  const panel = p.panels[i];
  const b = panel.bubble;
  const bubbleW = (b.w ?? 0.52) * CW;
  const halfW = bubbleW / 2;
  const halfH = estBubbleHeight(panel.nl, panel.en, bubbleW) / 2;
  // Clamp the bubble so it never collides with the top wordmark/counter row or the side
  // margins, no matter how high or wide the author placed it.
  const TOP_SAFE = PAD + 92; // bottom of the wordmark/counter row, plus a little air
  const cx = Math.min(Math.max(b.x * CW, PAD + halfW), CW - PAD - halfW);
  const cy = Math.max(b.y * CH, TOP_SAFE + halfH);
  // The tail points toward the speaker's mouth, but is kept SHORT: its apex sits a fixed
  // stub-length past the bubble edge along that direction, so it indicates who is talking
  // without ever running down onto a face. The triangle's base is at the bubble centre and is
  // hidden under the opaque bubble; only the stub past the edge shows.
  const tx = b.tail.x * CW;
  const ty = b.tail.y * CH;
  const dx = tx - cx;
  const dy = ty - cy;
  const len = Math.max(1, Math.hypot(dx, dy));
  const ux = dx / len;
  const uy = dy / len;
  // Distance from the centre to the bubble edge along the tail direction (rounded-rect approx).
  const edge = Math.min(
    Math.abs(uy) < 1e-3 ? Infinity : halfH / Math.abs(uy),
    Math.abs(ux) < 1e-3 ? Infinity : halfW / Math.abs(ux),
  );
  const TAIL_LEN = 74; // visible stub length past the bubble edge
  const apexDist = Math.min(len, edge + TAIL_LEN);
  const apexX = cx + ux * apexDist;
  const apexY = cy + uy * apexDist;
  const perpX = -uy;
  const perpY = ux;
  const baseHalf = 26;
  const ax = cx + perpX * baseHalf;
  const ay = cy + perpY * baseHalf;
  const bx = cx - perpX * baseHalf;
  const by = cy - perpY * baseHalf;
  return (
    <AbsoluteFill style={{backgroundColor: brand.bg}}>
      <Img src={staticFile(panel.image)} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}} />
      {/* Bubble lane: a soft LIGHT band over the top third, the reserved zone the speech
          bubble lives in. Paired with art that frames the characters in the lower two-thirds
          (empty top third), it guarantees the bubble reads on a clean backdrop instead of a face. */}
      <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(252,252,252,0.55) 0%, rgba(252,252,252,0.30) 16%, rgba(252,252,252,0) 33%)'}} />
      {/* Bottom scrim so the narrator caption box, dots and handle stay legible over any art. */}
      <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 68%, rgba(0,0,0,0.40) 100%)'}} />
      {/* the tail, under the bubble */}
      <svg width={CW} height={CH} viewBox={`0 0 ${CW} ${CH}`} style={{position: 'absolute', inset: 0}}>
        <polygon points={`${ax},${ay} ${bx},${by} ${apexX},${apexY}`} fill={brand.white} stroke={BUBBLE_INK} strokeWidth={5} strokeLinejoin="round" />
      </svg>
      {/* the speech bubble (the spoken Dutch, rendered crisp) */}
      <div style={{position: 'absolute', left: cx, top: cy, transform: 'translate(-50%, -50%)', width: bubbleW, background: brand.white, border: `5px solid ${BUBBLE_INK}`, borderRadius: 56, padding: '34px 42px', boxShadow: '0 18px 44px rgba(0,0,0,0.28)'}}>
        <div style={{fontFamily: display, fontWeight: 600, fontSize: bubbleSize(panel.nl), lineHeight: 1.04, color: brand.blue, textAlign: 'center'}}>{panel.nl}</div>
        <div style={{fontFamily: body, fontWeight: 500, fontStyle: 'italic', fontSize: 34, lineHeight: 1.2, color: brand.mutedInk, textAlign: 'center', marginTop: 12}}>{panel.en}</div>
      </div>
      {/* top furniture over the image */}
      <div style={{position: 'absolute', top: PAD, left: PAD, right: PAD, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Wordmark handle={p.handle} />
        <Counter i={i + 1} total={p.panels.length} />
      </div>
      {/* narrator caption box + dots at the bottom */}
      <div style={{position: 'absolute', left: PAD, right: PAD, bottom: PAD, display: 'flex', flexDirection: 'column', gap: 24}}>
        {panel.caption ? (
          <div style={{background: 'rgba(252,252,252,0.96)', border: `4px solid ${BUBBLE_INK}`, borderRadius: 14, padding: '24px 30px'}}>
            <div style={{fontFamily: body, fontWeight: 600, fontStyle: 'italic', fontSize: 34, lineHeight: 1.26, color: brand.ink}}>{panel.caption}</div>
          </div>
        ) : null}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Dots active={dot} total={total} />
          <div style={{fontFamily: body, fontWeight: 700, fontSize: 28, color: brand.white, textShadow: '0 2px 8px rgba(0,0,0,0.55)'}}>{p.handle}</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const markerChip = (kind: LessonLine['kind']) => {
  if (kind === 'wrong') return {bg: SEM.wrong, glyph: '×'}; // ×
  if (kind === 'right') return {bg: SEM.right, glyph: '✓'}; // ✓
  return {bg: brand.gold, glyph: '•'}; // •
};

const LessonSlide: React.FC<{p: ComicStoryProps; i: number; dot: number; total: number}> = ({p, i, dot, total}) => {
  const lesson = p.lessons[i];
  return (
    <AbsoluteFill style={{backgroundColor: brand.bg, padding: PAD, display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1}}>
        <Wordmark handle={p.handle} />
        <div style={{background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 24, letterSpacing: 3, padding: '10px 20px', borderRadius: 999}}>LESSON</div>
      </div>
      <div style={{flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {lesson.kicker ? <div style={{fontFamily: body, fontWeight: 700, fontSize: 28, letterSpacing: 4, color: brand.mutedInk, marginBottom: 18, textTransform: 'uppercase'}}>{lesson.kicker}</div> : null}
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 78, lineHeight: 1.04, color: brand.blue, marginBottom: 30}}>{lesson.title}</div>
        <div style={{width: 96, height: 8, borderRadius: 999, background: brand.gold, marginBottom: 44}} />
        <div style={{display: 'flex', flexDirection: 'column', gap: 30, marginBottom: lesson.note ? 46 : 0}}>
          {lesson.lines.map((l, k) => {
            const chip = markerChip(l.kind);
            const nlColor = l.kind === 'wrong' ? SEM.wrong : brand.blue;
            return (
              <div key={k} style={{display: 'flex', alignItems: 'flex-start', gap: 26}}>
                <span style={{flexShrink: 0, width: 58, height: 58, borderRadius: 999, background: chip.bg, color: brand.white, fontFamily: body, fontWeight: 800, fontSize: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1}}>{chip.glyph}</span>
                <div>
                  <div style={{fontFamily: display, fontWeight: 600, fontSize: 56, lineHeight: 1.06, color: nlColor}}>{l.nl}</div>
                  {l.en ? <div style={{fontFamily: body, fontWeight: 500, fontSize: 38, lineHeight: 1.2, color: brand.ink}}>{l.en}</div> : null}
                </div>
              </div>
            );
          })}
        </div>
        {lesson.note ? (
          <div style={{maxWidth: 900}}>
            <div style={{display: 'inline-block', marginBottom: 14}}>
              <div style={{fontFamily: body, fontWeight: 700, fontSize: 30, color: brand.blue}}>Remember this</div>
              <div style={{height: 5, borderRadius: 999, background: brand.gold, marginTop: 8, width: '100%'}} />
            </div>
            <div style={{fontFamily: body, fontWeight: 500, fontSize: 38, lineHeight: 1.3, color: brand.ink}}>{lesson.note}</div>
          </div>
        ) : null}
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1}}>
        <Dots active={dot} total={total} />
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 28, color: brand.mutedInk}}>{p.handle}</div>
      </div>
    </AbsoluteFill>
  );
};

const Cta: React.FC<{p: ComicStoryProps; total: number}> = ({p, total}) => (
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

export const ComicStory: React.FC<ComicStoryProps> = (props) => {
  const frame = useCurrentFrame();
  const total = 1 + props.panels.length + props.lessons.length + 1;
  if (frame === 0) return <Cover p={props} />;
  const panelIndex = frame - 1;
  if (panelIndex < props.panels.length) return <PanelSlide p={props} i={panelIndex} dot={frame} total={total} />;
  const lessonIndex = panelIndex - props.panels.length;
  if (lessonIndex < props.lessons.length) return <LessonSlide p={props} i={lessonIndex} dot={frame} total={total} />;
  return <Cta p={props} total={total} />;
};
