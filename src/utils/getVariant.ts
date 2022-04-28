import { config, CSS } from '../system';

const { theme } = config;

export const getVariant = <
  TokenTyp extends keyof typeof theme,
  TokenValueTyp extends keyof typeof theme[TokenTyp],
>(
  variant: TokenTyp,
  map: (tokenValue: TokenValueTyp) => CSS,
): Record<TokenValueTyp, CSS> => {
  const values = Object.keys(theme[variant]) as TokenValueTyp[];
  return values.reduce<Record<TokenValueTyp, CSS>>(
    (acc, tokenValue) => ({
      ...acc,
      [tokenValue]: map(tokenValue),
    }),
    {} as Record<TokenValueTyp, CSS>,
  );
};
