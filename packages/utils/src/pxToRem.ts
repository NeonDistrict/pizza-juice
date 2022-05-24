/**
 * Convert px to rem
 *
 * @example
 * ```js
 * pxToRem(16) // 1rem
 * ```
 */
export const pxToRem = (px: number, base = 16) => `${px / base}rem`;
