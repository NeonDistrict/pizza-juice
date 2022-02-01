import { styled, keyframes } from '../../../system';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const Wrapper = styled('div', {
  '@media (prefers-reduced-motion: no-preference)': {
    animationName: `${fadeIn}`,
    animationFillMode: 'backwards',
  },
});
