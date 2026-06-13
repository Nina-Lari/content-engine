import {Config} from '@remotion/cli/config';

// Carousels are exported as PNG sequences; reels as H.264 MP4.
Config.setStillImageFormat('png');
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
