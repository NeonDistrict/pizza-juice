/**
 * Generate unique IDs for use as pseudo-private/protected names.
 *
 * @example
 * ```js
 *  const randomId = useId('prefix');
 * ```
 */
export const useId = (prefix: string) => {
  const randomNumber = Math.random().toString(36).substring(2, 9);

  return `${prefix}-${randomNumber}`;
};
