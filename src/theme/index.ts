import colors from './foundations/colors';
import transitions from './foundations/transitions';
import fonts from './foundations/fonts';
import fontSizes from './foundations/fontSizes';
import fontWeights from './foundations/fontWeights';
import radii from './foundations/radii';
import sizes from './foundations/sizes';
import space from './foundations/space';
import zIndices from './foundations/z-index';
import breakpoints from './foundations/breakpoints';

export type Theme = typeof theme;

export const theme = {
  colors,
  transitions,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  sizes,
  space,
  zIndices,
  breakpoints
};

export default theme;
