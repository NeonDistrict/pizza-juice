import { Box } from '../box';

import { styled } from '../../system';
import { getVariant } from '../../utils';

/**
 * Flex component
 *
 * @description Flex is Box with display. It renders a div element.
 */
export const Flex = styled(Box, {
  d: 'flex',

  /**
   * Variants
   */
  variants: {
    /**
     * Flex-direction variant
     */
    direction: {
      row: {
        flexDirection: 'row',
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
      },
      column: {
        flexDirection: 'column',
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
      },
    },
    /**
     * Align-items variants
     */
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    /**
     * Justify-content variants
     */
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
    },
    /**
     * Flex-wrap variants
     */
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    /**
     * Gap variants
     */
    gap: {
      ...getVariant('space', (tokenValue) => ({ gap: `$${tokenValue}` })),
    },
  },
});
