export type Breakpoints = typeof breakpoints;

const breakpoints = {
  /**
   * until FIX
   * @see https://github.com/system-props/system-props/issues/60
   */
  _: '1px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1400px'
};

export default breakpoints;
