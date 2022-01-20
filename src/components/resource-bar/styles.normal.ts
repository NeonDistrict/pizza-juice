import { styled } from '../../system';

import { Flex } from '../flex';

export const Wrapper = styled(Flex, {
  w: 'fit-content',
  color: '$grey-600',

  defaultVariants: {
    direction: 'column',
  },
});

export const Arrow = styled('div', {
  px: '$3',

  variants: {
    orientation: {
      gain: {
        color: '$green-500',
        transform: 'rotate(270deg)',
      },
      loss: {
        transform: 'rotate(90deg)',
        color: '$red-500',
      },
      neutral: {},
    },
  },
});
