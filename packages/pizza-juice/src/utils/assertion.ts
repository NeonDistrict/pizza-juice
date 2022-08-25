// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isUndefined = (value: any): value is undefined => {
  return typeof value === 'undefined' || value === undefined;
};
