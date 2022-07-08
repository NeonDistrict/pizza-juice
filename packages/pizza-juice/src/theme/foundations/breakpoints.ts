import { pxToRem } from '../../utils/pxToRem';

export type Breakpoints = typeof breakpoints;

const breakpoints = {
  sm: pxToRem(576),
  md: pxToRem(768),
  lg: pxToRem(992),
  xl: pxToRem(1200),
  '2xl': pxToRem(1400),
};

export default breakpoints;
