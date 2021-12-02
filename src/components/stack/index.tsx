import { Flex } from '../flex';

import { styled } from '../../system';

/**
 * Stack component
 *
 * @description Stack component is used to display a group of elements in a vertical or horizontal direction.
 */
export const Stack = styled(Flex, {
  defaultVariants: {
    direction: 'row',
    gap: '5',
  },
});
