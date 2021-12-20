import { styled } from '../../system';

import { Flex } from '../flex';

/**
 * Col component
 *
 * @description utility for create flexbox grid.
 */
export const Col = styled(Flex, {
  /**
   * Variants
   */
  variants: {
    col: {
      auto: {
        flex: '1 0 0%',
      },
      1: {
        flex: '0 0 auto',
        w: '8.33333333%',
      },
      2: {
        flex: '0 0 auto',
        w: '16.66666667%',
      },
      3: {
        flex: '0 0 auto',
        w: '25%',
      },
      4: {
        flex: '0 0 auto',
        w: '33.33333333%',
      },
      5: {
        flex: '0 0 auto',
        w: '41.66666667%',
      },
      6: {
        flex: '0 0 auto',
        w: '50%',
      },
      7: {
        flex: '0 0 auto',
        w: '58.33333333%',
      },
      8: {
        flex: '0 0 auto',
        w: '66.66666667%',
      },
      9: {
        flex: '0 0 auto',
        w: '75%',
      },
      10: {
        flex: '0 0 auto',
        w: '83.33333333%',
      },
      11: {
        flex: '0 0 auto',
        w: '91.66666667%',
      },
      12: {
        flex: '0 0 auto',
        w: '100%',
      },
    },
    offset: {
      1: {
        ml: '8.33333333%',
      },
      2: {
        ml: '16.66666667%',
      },
      3: {
        ml: '25%',
      },
      4: {
        ml: '33.33333333%',
      },
      5: {
        ml: '41.66666667%',
      },
      6: {
        ml: '50%',
      },
      7: {
        ml: '58.33333333%',
      },
      8: {
        ml: '66.66666667%',
      },
      9: {
        ml: '75%',
      },
      10: {
        ml: '83.33333333%',
      },
      11: {
        ml: '91.66666667%',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    col: 'auto',
  },
});
