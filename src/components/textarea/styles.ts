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
  width: '$full',
  p: '$2',
  fontSize: '$md',
  outline: 'none',
  bg: '$black',
  color: '$white',
  border: '1px solid',
  borderColor: '$grey3',

  '&:hover': {
    borderColor: '$pink2',
  },

  '&:focus': {
    borderColor: '$teal1',
  },

  '&:disabled': {
    bg: '$grey1',
    cursor: 'not-allowed',
  },

  variants: {
    error: {
      true: {
        bg: '$red1',
      },
    },
  },
});

export const Message = styled('small', {
  mt: '$1',
  color: '$grey1',
  d: 'block',
});

export const Error = styled('div', {
  color: '$red1',
});
