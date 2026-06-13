import React from 'react';
import {AbsoluteFill, CalculateMetadataFunction, Img, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../theme';
import {display, body} from '../fonts';
import {Wordmark, Counter, Dots} from '../components';

export type CheatsheetProps = {
  theme: string; // e.g. "Bij de bakker"
  handle: string;
  coverImage: string; // path in public/, e.g. "keep-them-in-dutch/cover.png"
  cover: {kicker: string; title: string; sub: string};
  phrases: {nl: string; en: string; when: string}[];
  cta: {title: string; sub: string};
};

const PAD = 84;

export const cheatsheetDefaults: CheatsheetProps = {
  theme: 'Bij de bakker',
  handle: '@dutchwithjoost',
  coverImage: 'samples/bakery.png',
  cover: {kicker: 'DUTCH FOR REAL LIFE', title: 'What to say at the bakery', sub: '5 phrases. No switching to English.'},
  phrases: [
    {nl: 'Mag ik een bruin brood?', en: 'Can I have a brown bread?', when: "You're ordering bread."},
    {nl: 'Doe mij maar twee broodjes.', en: "I'll have two rolls.", when: 'Ordering rolls or pastries.'},
    {nl: 'Kunt u het snijden?', en: 'Could you slice it?', when: 'You want the loaf sliced.'},
    {nl: 'Hoeveel kost dat samen?', en: 'How much is that altogether?', when: 'Asking for the total.'},
    {nl: 'Pinnen, graag.', en: 'By card, please.', when: 'Paying at the counter.'},
  ],
  cta: {title: 'Save this for your next trip to the bakery.', sub: "Send it to whoever you're learning with."},
};

// One frame = one finished slide. Total slides = cover + phrases + CTA.
export const calcCheatsheet: CalculateMetadataFunction<CheatsheetProps> = ({props}) => ({
  durationInFrames: props.phrases.length + 2,
  fps: 1,
});

// The bright "guide" tile: a watercolour image band over a solid cream panel that
// holds the headline. Structurally distinct from the photo-forward reel cover and
// the dark quiz cover, so the three read as different tiles on the feed grid even
// when they share a base image. See the playbook's Feed-grid differentiation rule.
const Cover: React.FC<{p: CheatsheetProps}> = ({p}) => (
  <AbsoluteFill style={{backgroundColor: brand.bg}}>
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '56%'}}>
      <Img src={staticFile(p.coverImage)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}} />
      <AbsoluteFill style={{background: `linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 28%, ${brand.bg} 100%)`}} />
    </div>
    <div style={{position: 'absolute', top: PAD, left: PAD}}>
      <Wordmark handle={p.handle} />
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

const PhraseSlide: React.FC<{p: CheatsheetProps; i: number; total: number}> = ({p, i, total}) => {
  const ph = p.phrases[i];
  return (
    <AbsoluteFill style={{backgroundColor: brand.bg, padding: PAD, display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1}}>
        <Wordmark handle={p.handle} />
        <Counter i={i + 1} total={p.phrases.length} />
      </div>
      <div style={{flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{position: 'absolute', top: -20, right: -10, fontFamily: display, fontWeight: 600, fontSize: 340, lineHeight: 1, color: 'rgba(0,37,219,0.06)', zIndex: 0}}>
          {String(i + 1).padStart(2, '0')}
        </div>
        <div style={{position: 'relative', zIndex: 1}}>
          <div style={{fontFamily: body, fontWeight: 700, fontSize: 26, letterSpacing: 4, color: brand.mutedInk, marginBottom: 24, textTransform: 'uppercase'}}>{p.theme}</div>
          <div style={{fontFamily: display, fontWeight: 600, fontSize: 96, lineHeight: 1.03, color: brand.blue, marginBottom: 30}}>{ph.nl}</div>
          <div style={{fontFamily: body, fontWeight: 500, fontSize: 48, color: brand.ink, marginBottom: 56}}>{ph.en}</div>
          {/* "When to use it" as an editorial subhead with a gold underline swash
              (echoing the cover's gold rule), not a gray callout box with an accent
              bar. The boxed-callout look is the overused AI/Canva-template tell, so we
              drop the box and the vertical bar entirely. */}
          <div style={{maxWidth: 900}}>
            <div style={{display: 'inline-block', marginBottom: 18}}>
              <div style={{fontFamily: body, fontWeight: 700, fontSize: 30, color: brand.blue}}>When to use it</div>
              <div style={{height: 5, borderRadius: 999, background: brand.gold, marginTop: 8, width: '100%'}} />
            </div>
            <div style={{fontFamily: body, fontWeight: 500, fontSize: 40, lineHeight: 1.34, color: brand.ink}}>{ph.when}</div>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1}}>
        <Dots active={i + 1} total={total} />
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 28, color: brand.mutedInk}}>{p.handle}</div>
      </div>
    </AbsoluteFill>
  );
};

const Cta: React.FC<{p: CheatsheetProps; total: number}> = ({p, total}) => (
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

export const Cheatsheet: React.FC<CheatsheetProps> = (props) => {
  const frame = useCurrentFrame();
  const total = props.phrases.length + 2;
  if (frame === 0) return <Cover p={props} />;
  if (frame <= props.phrases.length) return <PhraseSlide p={props} i={frame - 1} total={total} />;
  return <Cta p={props} total={total} />;
};
