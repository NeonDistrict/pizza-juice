import { HTMLAttributes } from 'react';

import { CSS } from '../../system';

export type FlexProps = {
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

import { styled } from '../../system';

/**
 * Flex component
 *
 * @description Flex is Box with display. It renders a div element.
 */
export const Flex = styled('div', {
  d: 'flex',

  /**
   * Variants
   */
  variants: {
    /**
     * Row direction variant
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
     * Align items variants
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
     * Justify content variants
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
     * Flex wrap variants
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
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
      },
      10: {
        gap: '$10',
      },
      11: {
        gap: '$11',
      },
      12: {
        gap: '$12',
      },
      13: {
        gap: '$13',
      },
      14: {
        gap: '$14',
      },
      15: {
        gap: '$15',
      },
      16: {
        gap: '$16',
      },
      17: {
        gap: '$17',
      },
      18: {
        gap: '$18',
      },
      19: {
        gap: '$19',
      },
      20: {
        gap: '$20',
      },
    },
  },
});
