import { styled } from '../../system';

import ResizeTextarea from 'react-textarea-autosize';

import * as RLabel from '@radix-ui/react-label';

export const Wrapper = styled('div');

export const Label = styled(RLabel.Root, {
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

export const Textarea = styled(ResizeTextarea, {
  // reset
  fontFamily: 'inherit',

  w: '$full',
  p: '$2',
  fontSize: '$md',
  outline: 'none',
  bg: '$black',
  color: '$white',
  border: '1px solid',
  borderColor: '$grey-700',

  '&:hover': {
    borderColor: '$pink-600',
  },

  '&:focus': {
    borderColor: '$teal-500',
  },

  '&:disabled': {
    bg: '$grey-400',
    cursor: 'not-allowed',
  },

  variants: {
    error: {
      true: {
        bg: '$red-500',
      },
    },
  },
});

export const Message = styled('small', {
  mt: '$1',
  color: '$grey-400',
  d: 'block',
});

export const Error = styled('div', {
  color: '$red-500',
});
