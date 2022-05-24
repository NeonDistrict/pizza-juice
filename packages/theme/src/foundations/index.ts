import colors from './colors';
import transitions from './transitions';
import fonts from './fonts';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import radii from './radii';
import sizes from './sizes';
import space from './space';
import zIndices from './z-index';
import breakpoints from './breakpoints';

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
  breakpoints,
};

