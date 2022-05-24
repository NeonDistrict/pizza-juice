import { styled, keyframes } from '@pizza-juice/system';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const Spinner = styled('div', {
  // variables
  $$color: 'currentColor',
  $$size: '16px',
  $$thickness: 1.5,
  $$speed: '0.4s',

  d: 'inline-block',
  color: '$$color',
  size: '$$size',
  borderTopColor: 'currentcolor',
  borderRightColor: 'currentcolor',
  borderStyle: 'solid',
  br: '$full',
  borderWidth: '$$thickness',
  borderBottomColor: 'transparent',
  borderLeftColor: 'transparent',
  animation: `${spin} $$speed linear infinite`,
});
