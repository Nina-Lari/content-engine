import React from 'react';
import {AbsoluteFill, CalculateMetadataFunction, Img, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../theme';
import {display, body} from '../fonts';
import {Wordmark, Dots} from '../components';

export type QuizOption = {key: string; text: string};
export type QuizProps = {
  theme: string;
  handle: string;
  scenarioImage: string; // path in public/
  scenarioLine: string; // the real situation, English
  questionNl: string;
  questionEn: string;
  options: QuizOption[];
  correct?: string; // omit for reflex/"which one is you" quizzes with no right answer
  reveal: string; // reframe or teach text for the last slide
};

const PAD = 84;
const TOTAL = 3; // cover/question, options, reveal

export const quizDefaults: QuizProps = {
  theme: 'When they switch to English',
  handle: '@dutchwithjoost',
  scenarioImage: 'samples/bakery.png',
  scenarioLine: 'You ordered in Dutch. The cashier answered you in English.',
  questionNl: 'Wat doe je nu?',
  questionEn: 'What do you do now?',
  options: [
    {key: 'A', text: 'Switch to English too. Honestly? A little relieved.'},
    {key: 'B', text: '"Mag ik het in het Nederlands proberen?"'},
    {key: 'C', text: 'Say nothing, then think of the perfect Dutch reply on the bike home.'},
  ],
  reveal:
    "No winner here — pick whichever one is honestly you. But if C is your reflex and you wish it weren't, B is the smallest way out: one sentence, no confrontation, still in Dutch.",
};

export const calcQuiz: CalculateMetadataFunction<QuizProps> = () => ({durationInFrames: TOTAL, fps: 1});

// The dark "question" tile: a heavy moody scrim, a centred question, a gold QUIZ
// marker, and a faint "?" watermark. Set apart from the photo-forward reel cover
// and the bright cheatsheet cover so the three read as different tiles on the feed
// grid even on a shared base image. See the playbook's Feed-grid differentiation rule.
const QuestionCover: React.FC<{p: QuizProps}> = ({p}) => (
  <AbsoluteFill>
    <Img src={staticFile(p.scenarioImage)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.82) 100%)'}} />
    <div style={{position: 'absolute', top: 60, right: 30, fontFamily: display, fontWeight: 600, fontSize: 520, lineHeight: 1, color: 'rgba(224,187,0,0.12)'}}>?</div>
    <div style={{position: 'absolute', top: PAD, left: PAD}}>
      <Wordmark handle={p.handle} />
    </div>
    <div style={{position: 'absolute', left: PAD, right: PAD, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div style={{alignSelf: 'flex-start', background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 26, letterSpacing: 3, padding: '10px 22px', borderRadius: 999, marginBottom: 28}}>QUIZ</div>
      <div style={{fontFamily: body, fontWeight: 700, fontSize: 34, lineHeight: 1.3, color: 'rgba(255,255,255,0.95)', marginBottom: 26}}>{p.scenarioLine}</div>
      <div style={{fontFamily: display, fontWeight: 600, fontSize: 104, lineHeight: 1.02, color: brand.white}}>{p.questionNl}</div>
      <div style={{fontFamily: body, fontWeight: 500, fontSize: 46, color: brand.gold, marginTop: 14}}>{p.questionEn}</div>
    </div>
    <div style={{position: 'absolute', right: PAD, bottom: 64, fontFamily: body, fontWeight: 700, fontSize: 32, color: brand.gold}}>swipe →</div>
  </AbsoluteFill>
);

const OptionsSlide: React.FC<{p: QuizProps}> = ({p}) => (
  <AbsoluteFill style={{backgroundColor: brand.bg, padding: PAD, display: 'flex', flexDirection: 'column'}}>
    <Wordmark handle={p.handle} />
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30}}>
      <div style={{fontFamily: display, fontWeight: 600, fontSize: 64, lineHeight: 1.05, color: brand.blue, marginBottom: 6}}>{p.questionNl}</div>
      {p.options.map((o) => (
        <div key={o.key} style={{display: 'flex', alignItems: 'center', gap: 28, background: brand.muted, borderRadius: 22, padding: '30px 34px'}}>
          <div style={{flexShrink: 0, width: 76, height: 76, borderRadius: 18, background: brand.gold, color: brand.goldText, fontFamily: display, fontWeight: 600, fontSize: 42, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {o.key}
          </div>
          <div style={{fontFamily: body, fontWeight: 500, fontSize: 40, lineHeight: 1.2, color: brand.ink}}>{o.text}</div>
        </div>
      ))}
    </div>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Dots active={1} total={TOTAL} />
      <div style={{fontFamily: body, fontWeight: 600, fontSize: 28, color: brand.mutedInk}}>{p.handle}</div>
    </div>
  </AbsoluteFill>
);

const RevealSlide: React.FC<{p: QuizProps}> = ({p}) => (
  <AbsoluteFill style={{backgroundColor: brand.blue, padding: PAD, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <div style={{marginBottom: 44}}>
      <Wordmark onDark handle={p.handle} />
    </div>
    <div style={{fontFamily: body, fontWeight: 800, fontSize: 30, letterSpacing: 3, color: brand.gold, marginBottom: 22}}>{p.correct ? `ANSWER: ${p.correct}` : 'NO WRONG ANSWER'}</div>
    <div style={{fontFamily: display, fontWeight: 600, fontSize: 62, lineHeight: 1.15, color: brand.white, marginBottom: 50}}>{p.reveal}</div>
    <div style={{fontFamily: body, fontWeight: 500, fontSize: 38, color: 'rgba(255,255,255,0.92)'}}>Save it. Send it to whoever keeps getting answered in English. {p.handle}</div>
    <div style={{position: 'absolute', left: PAD, bottom: PAD}}>
      <Dots active={2} total={TOTAL} onDark />
    </div>
  </AbsoluteFill>
);

export const Quiz: React.FC<QuizProps> = (props) => {
  const frame = useCurrentFrame();
  if (frame === 0) return <QuestionCover p={props} />;
  if (frame === 1) return <OptionsSlide p={props} />;
  return <RevealSlide p={props} />;
};
