import {loadFont as loadFredoka} from '@remotion/google-fonts/Fredoka';
import {loadFont as loadInter} from '@remotion/google-fonts/Inter';

// Display = rounded, friendly (headlines, Dutch hero lines). Body = clean sans.
// Only the weights actually used are loaded, latin subset only, to keep renders fast.
export const {fontFamily: display} = loadFredoka('normal', {
  weights: ['600'],
  subsets: ['latin'],
  ignoreTooManyRequestsWarning: true,
});
export const {fontFamily: body} = loadInter('normal', {
  weights: ['500', '600', '700', '800'],
  subsets: ['latin'],
  ignoreTooManyRequestsWarning: true,
});
