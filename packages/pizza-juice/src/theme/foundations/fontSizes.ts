import { pxToRem } from '../../utils/pxToRem';

export type FontSizes = typeof fontSizes;

const fontSizes = {
  '3xs': pxToRem(8),
  '2xs': pxToRem(10),
  xs: pxToRem(12),
  sm: pxToRem(14),
  md: pxToRem(16),
  lg: pxToRem(20),
  xl: pxToRem(22),
  '2xl': pxToRem(24),
  '3xl': pxToRem(26),
  '4xl': pxToRem(28),
};

export default fontSizes;
