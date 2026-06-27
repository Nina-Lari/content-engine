import React from 'react';
import {Composition} from 'remotion';
import {Cheatsheet, cheatsheetDefaults, calcCheatsheet} from './compositions/Cheatsheet';
import {Quiz, quizDefaults, calcQuiz} from './compositions/Quiz';
import {ScenarioReel, reelDefaults, calcReel} from './compositions/ScenarioReel';
import {IdiomReel, idiomReelDefaults, calcIdiomReel} from './compositions/IdiomReel';
import {ConceptGuide, conceptGuideDefaults, calcConceptGuide} from './compositions/ConceptGuide';
import {VocabScene, vocabSceneDefaults, calcVocabScene} from './compositions/VocabScene';
import {ComicStory, comicStoryDefaults, calcComicStory} from './compositions/ComicStory';

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
      <Composition
        id="IdiomReel"
        component={IdiomReel}
        defaultProps={idiomReelDefaults}
        calculateMetadata={calcIdiomReel}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ConceptGuide"
        component={ConceptGuide}
        defaultProps={conceptGuideDefaults}
        calculateMetadata={calcConceptGuide}
        durationInFrames={7}
        fps={1}
        width={1080}
        height={1350}
      />
      <Composition
        id="VocabScene"
        component={VocabScene}
        defaultProps={vocabSceneDefaults}
        calculateMetadata={calcVocabScene}
        durationInFrames={3}
        fps={1}
        width={1080}
        height={1350}
      />
      <Composition
        id="ComicStory"
        component={ComicStory}
        defaultProps={comicStoryDefaults}
        calculateMetadata={calcComicStory}
        durationInFrames={7}
        fps={1}
        width={1080}
        height={1350}
      />
    </>
  );
};
