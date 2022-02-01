import { keyframes, styled } from '../../system';

import * as DialogPrimitive from '@radix-ui/react-dialog';

export const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const Overlay = styled(DialogPrimitive.Overlay, {
  bg: 'rgba(0, 0, 0, 0.9)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: '$modal',
});

export const Content = styled(DialogPrimitive.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: '$modal',

  '&:focus': {
    outline: 'none',
  },
});
