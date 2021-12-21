import { styled } from '../../system';

import { Flex } from '../flex';

/**
 * Row component
 *
 * @description utility for create flexbox grid.
 */
export const Row = styled(Flex, {
  flexWrap: 'wrap',

  '> *': {
    flexShrink: 0,
    w: '$full',
    maxW: '$full',
  },
});
