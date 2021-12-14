import { styled } from '../../system';

import { Spinner as BaseSpinner } from '../spinner';

export const Button = styled('button', {
  // reset
  appearance: 'none',
  bg: 'transparent',
  fontFamily: 'inherit',
  border: '1px solid',
  borderColor: 'transparent',
  whiteSpace: 'nowrap',
  outline: 0,

  // base styles
  py: '$2',
  px: '$6',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: '$white',
  d: 'flex',
  align: 'center',
  justify: 'center',
  gap: '$2',
  userSelect: 'none',
  transition: '$fast',

  '&:not(:disabled)': {
    cursor: 'pointer',
  },

  '&:focus': {
    borderColor: '$teal-500',
  },

  '&:disabled': {
    $$disabledBg: '$colors$grey-600',
    cursor: 'not-allowed',
    color: '$grey-700',
    '&:hover': {
      color: '$grey-700',
    },
    '&:active': {
      color: '$grey-700',
    },
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Variants solid variant
     */
    variant: {
      primary: {
        $$bgSolid: '$colors$pink-500',
        $$bgHover: '$colors$pink-600',
        $$bgActive: '$colors$pink-700',
      },
      secondary: {
        $$bgSolid: '$colors$grey-700',
        $$bgHover: '$colors$grey-800',
        $$bgActive: '$colors$grey-850',
      },
      destructive: {
        color: '$black',
        $$bgSolid: '$colors$red-500',
        $$bgHover: '$colors$red-550',
        $$bgActive: '$colors$red-600',
      },
      warning: {
        color: '$black',
        $$bgSolid: '$colors$yellow-500',
        $$bgHover: '$colors$yellow-550',
        $$bgActive: '$colors$yellow-600',
      },
      success: {
        color: '$black',
        $$bgSolid: '$colors$green-500',
        $$bgHover: '$colors$green-550',
        $$bgActive: '$colors$green-600',
      },
    },

    /**
     * Shape types
     */
    shape: {
      rounded: {
        br: '$full',
      },
      squared: {
        br: 0,
      },
    },

    /**
     * Style variant
     */
    style: {
      solid: {
        '&:disabled': {
          bg: '$$disabledBg',
          '&:hover': {
            bg: '$$disabledBg',
          },
          '&:active': {
            bg: '$$disabledBg',
          },
        },
        bg: '$$bgSolid',

        '&:hover': {
          bg: '$$bgHover',
        },
        '&:active': {
          bg: '$$bgActive',
        },
      },
      naked: {
        '&:disabled': {
          borderColor: 'transparent',
          '&:hover': {
            borderColor: 'transparent',
            bg: 'transparent',
          },
          '&:active': {
            borderColor: 'transparent',
            bg: 'transparent',
          },
        },
        bg: 'transparent',
        '&:hover': {
          bg: '$$bgHover',
        },
        '&:active': {
          bg: '$$bgActive',
        },
      },
      outlined: {
        '&:disabled': {
          borderColor: '$$disabledBg',
          '&:hover': {
            borderColor: '$$disabledBg',
          },
          '&:active': {
            borderColor: '$$disabledBg',
          },
        },
        bg: 'transparent',
        borderColor: '$$bgSolid',
        '&:hover': {
          borderColor: '$$bgHover',
        },
        '&:active': {
          borderColor: '$$bgActive',
        },
      },
    },

    /**
     * Size types
     */
    size: {
      sm: {
        minW: 32,
        h: 32,
        fontSize: '$xs',
        p: '$2',
      },
      md: {
        minW: 40,
        h: 40,
        fontSize: '$sm',
        px: '$6',
      },
    },

    /**
     * Loading variant
     */
    loading: {
      true: {
        'span, svg': {
          opacity: 0,
        },
        svg: {
          opacity: 0,
        },
      },
    },

    /**
     * Fluid variant
     */
    fluid: {
      true: {
        w: '$full',
      },
      false: {
        w: 'auto',
      },
    },
    /**
     * If the component does'nt have children, but have a icon
     */
    onlyIcon: {
      true: {
        p: '$3',
      },
    },
  },
  compoundVariants: [
    // Primary styles variant
    {
      variant: 'primary',
      style: 'outlined',
      css: {},
    },
    {
      variant: 'primary',
      style: 'naked',
      css: {
        color: '$pink-500',
        '&:hover': {
          color: '$pink-600',
          $$bgHover: '#280D19',
        },
        '&:active': {
          color: '$pink-600',
          $$bgActive: '#280D19',
        },
      },
    },
    // Secondary styles variant
    {
      variant: 'secondary',
      style: 'outlined',
      css: {},
    },
    {
      variant: 'secondary',
      style: 'naked',
      css: {},
    },
    // Destructive styles variant
    {
      variant: 'destructive',
      style: 'outlined',
      css: {
        color: '$$bgSolid',
        '&:hover': {
          color: '$$bgHover',
        },
        '&:active': {
          color: '$$bgActive',
        },
      },
    },
    {
      variant: 'destructive',
      style: 'naked',
      css: {
        color: '$red-500',
        '&:hover': {
          color: '$black',
        },
        '&:active': {
          color: '$black',
        },
      },
    },
    // Warning styles variant
    {
      variant: 'warning',
      style: 'outlined',
      css: {
        color: '$$bgSolid',
        '&:hover': {
          color: '$$bgHover',
        },
        '&:active': {
          color: '$$bgActive',
        },
      },
    },
    {
      variant: 'warning',
      style: 'naked',
      css: {
        color: '$yellow-500',
        '&:hover': {
          color: '$black',
        },
        '&:active': {
          color: '$black',
        },
      },
    },
    // Success styles variant
    {
      variant: 'success',
      style: 'outlined',
      css: {
        color: '$$bgSolid',
        '&:hover': {
          color: '$$bgHover',
        },
        '&:active': {
          color: '$$bgActive',
        },
      },
    },
    {
      variant: 'success',
      style: 'naked',
      css: {
        color: '$green-500',
        '&:hover': {
          color: '$black',
        },
        '&:active': {
          color: '$black',
        },
      },
    },
  ],

  /**
   * Default variants
   */
  defaultVariants: {
    variant: 'primary',
    shape: 'squared',
    style: 'solid',
    loading: false,
  },
});

export const Spinner = styled(BaseSpinner, {
  d: 'flex',
  align: 'center',
  position: 'absolute',
  marginInlineEnd: 0,
});
