import { styled } from '../../system';

import { Flex } from '../flex';

/**
 * Row component
 *
 * @description utility for create flexbox grid.
 */
export const Row = styled(Flex, {
  $$bsGutterX: '1.5rem',
  $$bsGutterY: '0rem',

  flexWrap: 'wrap',
  mt: 'calc(-1 * $$bsGutterY)',
  mx: 'calc(-0.5 * $$bsGutterX)',

  '> *': {
    flexShrink: 0,
    w: '$full',
    maxW: '$full',
  },
});
