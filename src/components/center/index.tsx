import { styled } from '../../system';

import { Flex } from '../flex';

/**
 * Center component
 *
 * @description Center is a layout component that centers its child within itself.
 */
export const Center = styled(Flex, {
  /**
   * Default variants
   */
  defaultVariants: {
    justify: 'center',
    align: 'center',
  },
});
