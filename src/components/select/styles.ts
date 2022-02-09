import { styled } from '../../system';

import { ChevronDownIcon } from './icon';

export const Wrapper = styled('div');

export const SelectWrapper = styled('div', {
  position: 'relative',
  d: 'flex',
  align: 'center',
});

export const Select = styled('select', {
  // reset
  appearance: 'none',
  fontFamily: 'inherit',

  w: '$full',
  h: 40,
  cursor: 'pointer',
  color: '$white',
  align: 'center',
  d: 'inline-flex',
  justify: 'space-between',
  userSelect: 'none',
  fontWeight: '$medium',
  border: '1px solid',
  pl: '$4',
  pr: '$10',

  '&:hover': {
    borderColor: '$pink-500',
  },

  '&:focus-within': {
    borderColor: '$teal-500',
  },

  '&:disabled': {
    bg: '$grey-600',
    color: '$grey-700',
    cursor: 'not-allowed',

    '& + svg': {
      color: '$grey-700',
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
      default: {
        h: 40,
        fontSize: '$md',
      },
      small: {
        h: 32,
        fontSize: '$sm',
      },
      tiny: {
        h: 24,
        fontSize: '$sm',
      },
    },
    variant: {
      solid: {
        bg: '#080808',
        borderColor: 'transparent',
      },
      outline: {
        bg: '$black',
        borderColor: '$grey-600',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'default',
    variant: 'outline',
  },
});

export const ArrowIcon = styled(ChevronDownIcon, {
  position: 'absolute',
  d: 'flex',
  pointerEvents: 'none',
  right: '$4',
  color: '$white',
});

export const Option = styled('option', {
  d: 'block',
  m: 0,
  p: '$2 $6',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  color: '$white',
  cursor: 'pointer',
  fontWeight: '$medium',
  textTransform: 'uppercase',
});

export const Label = styled('label', {
  d: 'block',
  color: '$white',
  mb: '$1',
  fontWeight: '$medium',
  textTransform: 'uppercase',

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      default: {
        fontSize: '$md',
      },
      small: {
        fontSize: '$sm',
      },
      tiny: {
        fontSize: '$sm',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'default',
  },
});

export const Hint = styled('small', {
  color: '$grey-400',
  fontSize: '$xs',
  mt: '5px',
  d: 'block',

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
  fontSize: '$xs',
});
