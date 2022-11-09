/**
 * Merge classNames
 *
 * @example
 * cx('foo', 'bar') // => 'foo bar'
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cx = (...classNames: any[]) => {
  return classNames.filter(Boolean).join(' ');
};
