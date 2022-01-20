export const useResourceBar = (neon = 0, juice = 0, parts = 0) => {
  const padStart = (value: string | number) => String(value).padStart(3, '0');

  const gainLossNeutral = (
    value: string | number,
  ): 'gain' | 'loss' | 'neutral' => {
    const intValue = parseInt(String(value));

    if (intValue > 0) return 'gain';

    if (intValue < 0) return 'loss';

    return 'neutral';
  };

  const neonType = gainLossNeutral(neon);
  const juiceType = gainLossNeutral(juice);
  const partsType = gainLossNeutral(parts);

  return {
    padStart,
    neonType,
    juiceType,
    partsType,
  };
};
