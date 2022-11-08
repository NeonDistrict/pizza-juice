/**
 * Convert a value to percentage based on lower and upper bound values
 *
 * @example
 * toPercentage(30, 0, 100) // 30
 */
export function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) * 100) / (max - min);
}
