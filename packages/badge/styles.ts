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
        bg: '$pink-600',
      },
      common: {
        bg: '$pink-500',
      },
      uncommon: {
        bg: '$pink-600',
      },
      ultraRare: {
        bg: '$pink-600',
      },
      legendary: {
        bg: '$pink-600',
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
