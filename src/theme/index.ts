import colors from './foundations/colors';
import durations from './foundations/durations';
import fonts from './foundations/fonts';
import fontSizes from './foundations/fontSizes';
import fontWeights from './foundations/fontWeights';
import radii from './foundations/radii';
import sizes from './foundations/sizes';
import spaces from './foundations/spaces';
import zIndices from './foundations/z-index';
import breakpoints from './foundations/breakpoints';

export type Theme = typeof theme;

export const theme = {
  colors,
  durations,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  sizes,
  spaces,
  zIndices,
  breakpoints
};

export default theme;
