import { styled } from '../../system';

import { CloseIcon } from './icon';

import * as LabelBase from '@radix-ui/react-label';

export const Wrapper = styled('div');

export const Label = styled(LabelBase.Root, {
  d: 'block',
  mb: '$1',
  fontSize: '$sm',
  textTransform: 'uppercase',
  fontWeight: '$medium',

  variants: {
    disabled: {
      true: {
        color: '$grey-600',
      },
    },
  },
});

export const Input = styled('input', {
  // reset
  appearance: 'none',
  border: '1px solid transparent',
  outline: 0,
  fontFamily: 'inherit',

  w: '$full',
  h: 40,
  px: '$4',
  fontSize: '$md',
  bg: '$black',
  color: '$grey-600',
  transition: '$fast',

  '&:hover': {
    borderBottomColor: '$pink-600',
  },

  '&:focus': {
    borderBottomColor: '$teal-500',
    borderBottomWidth: '1px',
  },

  '&:disabled': {
    color: '$grey-700',
    cursor: 'not-allowed',
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Variant variant
     */
    variant: {
      default: {
        border: '1px solid $grey-700',
      },
      line: {
        borderBottom: '1px solid $grey-700',
      },
    },

    /**
     * Error variant
     */
    error: {
      true: {
        borderBottom: '1px solid  $red-500',
      },
    },
    leftIcon: {
      true: {
        pl: '$10',
      },
    },
    rightIcon: {
      true: {
        pr: '$10',
      },
    },
  },

  compoundVariants: [
    {
      variant: 'line',
      css: {
        '&:disabled': {
          border: '1px solid $grey-700',
        },
      },
    },
    {
      variant: 'default',
      css: {
        '&:disabled': {
          bg: '$grey-600',
          color: '$grey-800',
        },
      },
    },
  ],

  /**
   * Default variants
   */
  defaultVariants: {
    variant: 'default',
  },
});

const sharedIconStyles = {
  d: 'flex',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  color: '$grey-400',
};

export const LeftIcon = styled('div', {
  ...sharedIconStyles,
  left: '$4',
});

export const RightIcon = styled('div', {
  ...sharedIconStyles,
  right: '$4',
  variants: {
    cleanable: {
      true: {
        pointerEvents: 'all',
        bg: 'transparent',
        border: 0,
        cursor: 'pointer',
      },
    },
  },
});

export const CleanIcon = styled(CloseIcon, {
  color: '$white',
});

export const Message = styled('small', {
  color: '$grey-400',
  fontSize: '$sm',

  variants: {
    disabled: {
      true: {
        color: '$grey-700',
      },
    },
  },
});

export const Error = styled('div', {
  color: '$red-500',
  fontSize: '$sm',
  mt: '$1',
});
