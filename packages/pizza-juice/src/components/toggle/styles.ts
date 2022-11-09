import { styled } from '../../system';

import { Root, Thumb as BaseThumb } from '@radix-ui/react-switch';

export const Switch = styled(Root, {
  //reset
  all: 'unset',

  w: 42,
  h: 25,
  bg: '$black',
  br: '$full',
  position: 'relative',
  border: '1px solid $grey-700',
  cursor: 'pointer',
  transform: 'translateX(0)',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&[aria-checked="true"]': {
    borderColor: '$grey-700',

    '&:hover span': {
      transform: 'translateX(27px)',
    },
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      sm: {
        h: 18,
        w: 32,

        '&[aria-checked="true"]:hover span': {
          transform: 'translateX(12px)',
        },

        '&[aria-checked="false"]:hover span': {
          transform: 'translateX(3px)',
        },
      },
      md: {
        h: 26,
        w: 56,

        '&[aria-checked="true"]:hover span': {
          transform: 'translateX(28px)',
        },

        '&[aria-checked="false"]:hover span': {
          transform: 'translateX(6px)',
        },
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md',
  },
});

export const Thumb = styled(BaseThumb, {
  d: 'block',
  bg: '$grey-400',
  br: '$full',
  transition: '$fast',

  '&[data-state="checked"]': {
    bg: '$pink-500',
  },

  '&[data-disabled=""]': {
    bg: '$grey-600',
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      sm: {
        size: 16,
        transform: 'translateX(1px)',

        '&[data-state="checked"]': {
          transform: 'translateX(15px)',
        },
      },
      md: {
        size: 22,
        transform: 'translateX(2px)',

        '&[data-state="checked"]': {
          transform: 'translateX(32px)',
        },
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md',
  },
});
