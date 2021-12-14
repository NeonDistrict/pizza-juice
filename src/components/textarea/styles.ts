import { styled } from '../../system';

import ResizeTextarea from 'react-textarea-autosize';

import * as LabelBase from '@radix-ui/react-label';

export const Wrapper = styled('div', {
  color: '$white',
});

export const Label = styled(LabelBase.Root, {
  d: 'block',
  mb: '$1',
  textTransform: 'uppercase',
  fontWeight: '$medium',
});

export const TextAreaInput = styled(ResizeTextarea, {
  // reset
  fontFamily: 'inherit',

  width: '$full',
  p: '$2',
  fontSize: '$md',
  outline: 'none',
  bg: '$black',
  color: '$white',
  border: '1px solid',
  borderColor: '$grey-600',

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
