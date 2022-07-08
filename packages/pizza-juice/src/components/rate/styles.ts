import { styled } from '../../system';

export const StarWrapper = styled('div', {
  all: 'unset',
  color: '$grey-600',

  '&.active': {
    color: '$pink-500',
  },
});
