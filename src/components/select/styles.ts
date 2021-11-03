import { styled } from '../../system';

import * as LabelBase from '@radix-ui/react-label';

const variants = {
  /**
   * Variants
   */
  variants: {
    /**
     * Variant variant
     */
    variant: {
      solid: {
        background: '$black'
      },
      outline: {
        background: '$grey5'
      }
    },
    /**
     * Size variant
     */
    size: {
      xs: {
        p: '$1 $2',
        fontSize: '$3xs'
      },
      sm: {
        p: '$3 $4',
        fontSize: '$2xs'
      },
      md: {
        p: '$3 $4',
        fontSize: '$xs'
      },
      lg: {
        p: '$3 $4',
        fontSize: '$md'
      }
    }
  },

  /**
   * Default variants
   */
  defaultVariants: {
    variant: 'solid',
    size: 'md'
  }
};

export const Wrapper = styled('div', {
  color: '$white'
});

export const Label = styled(LabelBase.Root, {
  d: 'block',
  mb: '$1',
  textTransform: 'uppercase',
  fontWeight: '$medium'
});

export const WrapperSelect = styled('div', {
  d: 'flex',
  items: 'center',
  border: '1px solid',
  borderColor: '$grey1',
  pr: '$2',

  '&:hover': {
    borderColor: '$pink2'
  },

  '&:active': {
    borderColor: '$teal1'
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  ...variants
});

export const SelectStyled = styled('select', {
  w: '$full',
  color: '$white',
  fontFamily: 'inherit',
  appearance: 'none',
  border: 'none',
  transition: '$fast',

  ...variants
});

export const Message = styled('small', {
  color: '$grey1',
  fontSize: '$xs',
  mt: '5px',
  d: 'block'
});

export const Error = styled('div', {
  color: '$red1',
  fontSize: '$xs'
});
