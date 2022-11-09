/**
 * Convert PX to REM
 *
 * @example
 * pxToRem(16) // 1rem
 */
export const pxToRem = (px: number, base = 16) => `${px / base}rem`;
