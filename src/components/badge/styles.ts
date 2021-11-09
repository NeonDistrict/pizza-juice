import { styled } from '../../system';

export const Wrapper = styled('div', {
  d: 'inline-flex',
  color: '$white',
  fontSize: '$xs',
  fontWeight: '$bold',
  textTransform: 'uppercase',
  lineHeight: '150%',

  /**
   * Variants
   */
  variants: {
    /**
     * Rarity variants for item badges
     */
    rarity: {
      rare: {
        bg: '$pink2',
      },
      common: {
        bg: '$pink1',
      },
      uncommon: {
        bg: '$pink2',
      },
      ultraRare: {
        bg: '$pink2',
      },
      legendary: {
        bg: '$pink2',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    rarity: 'common',
  },
});

export const Tail = styled('div', {
  w: 2,
});

export const Space = styled('div', {
  w: 2,
  bg: 'black',
});

export const Badge = styled('label', {
  h: 16,
  px: '$1',
  d: 'inline-flex',
  align: 'center',
  justify: 'center',
  userSelect: 'none',
});
