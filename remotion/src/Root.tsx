import React from 'react';
import {Composition} from 'remotion';
import {Cheatsheet, cheatsheetDefaults, calcCheatsheet} from './compositions/Cheatsheet';
import {Quiz, quizDefaults, calcQuiz} from './compositions/Quiz';
import {ScenarioReel, reelDefaults, calcReel} from './compositions/ScenarioReel';

// durationInFrames / fps below are placeholders — calculateMetadata sets the real values.
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Cheatsheet"
        component={Cheatsheet}
        defaultProps={cheatsheetDefaults}
        calculateMetadata={calcCheatsheet}
        durationInFrames={7}
        fps={1}
        width={1080}
        height={1350}
      />
      <Composition
        id="Quiz"
        component={Quiz}
        defaultProps={quizDefaults}
        calculateMetadata={calcQuiz}
        durationInFrames={3}
        fps={1}
        width={1080}
        height={1350}
      />
      <Composition
        id="ScenarioReel"
        component={ScenarioReel}
        defaultProps={reelDefaults}
        calculateMetadata={calcReel}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
