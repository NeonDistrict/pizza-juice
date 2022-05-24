import { pxToRem } from '@pizza-juice/utils';

export type Radii = typeof radii;

const radii = {
  full: pxToRem(9999),
  half: '50%',
  sm: pxToRem(5),
  md: pxToRem(12),
};

export default radii;
