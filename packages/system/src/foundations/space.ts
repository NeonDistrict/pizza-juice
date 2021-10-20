export type Space = typeof space;

const convertToREM = (value: number, base = 16) => `${value / base}rem`;

const space = {
  1: convertToREM(4),
  2: convertToREM(8),
  3: convertToREM(12),
  4: convertToREM(16),
  5: convertToREM(20),
  6: convertToREM(24),
  7: convertToREM(28),
  8: convertToREM(32),
  9: convertToREM(36),
  10: convertToREM(40),
  11: convertToREM(44),
  12: convertToREM(48),
  13: convertToREM(52),
  14: convertToREM(56),
  15: convertToREM(60),
  16: convertToREM(64),
  17: convertToREM(68),
  18: convertToREM(72),
  19: convertToREM(76),
  20: convertToREM(80)
};

export default space;
