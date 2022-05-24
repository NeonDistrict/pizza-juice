import { Flex } from '../flex';

import { styled } from '../../system';

/**
 * Grid component
 *
 * @description is a Box with d: grid and it comes with helpful style shorthand. It renders a div element.
 */
export const Grid = styled(Flex, {
  d: 'grid',

  /**
   * Variants
   */
  variants: {
    /**
     * Controls how auto-placed items get inserted in the grid.
     */
    flow: {
      row: {
        gridAutoFlow: 'row',
      },
      column: {
        gridAutoFlow: 'column',
      },
      dense: {
        gridAutoFlow: 'dense',
      },
      rowDense: {
        gridAutoFlow: 'row dense',
      },
      columnDense: {
        gridAutoFlow: 'column dense',
      },
    },
    /**
     * Controls the alignment of auto-placed items in the grid.
     */
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      5: {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
      6: {
        gridTemplateColumns: 'repeat(6, 1fr)',
      },
      7: {
        gridTemplateColumns: 'repeat(7, 1fr)',
      },
      8: {
        gridTemplateColumns: 'repeat(8, 1fr)',
      },
      9: {
        gridTemplateColumns: 'repeat(9, 1fr)',
      },
      10: {
        gridTemplateColumns: 'repeat(10, 1fr)',
      },
      11: {
        gridTemplateColumns: 'repeat(11, 1fr)',
      },
      12: {
        gridTemplateColumns: 'repeat(12, 1fr)',
      },
    },
    /**
     * Control gap of left and right row.
     */
    gapX: {
      1: {
        columnGap: '$1',
      },
      2: {
        columnGap: '$2',
      },
      3: {
        columnGap: '$3',
      },
      4: {
        columnGap: '$4',
      },
      5: {
        columnGap: '$5',
      },
      6: {
        columnGap: '$6',
      },
      7: {
        columnGap: '$7',
      },
      8: {
        columnGap: '$8',
      },
      9: {
        columnGap: '$9',
      },
      10: {
        columnGap: '$10',
      },
      11: {
        columnGap: '$11',
      },
      12: {
        columnGap: '$12',
      },
      13: {
        columnGap: '$13',
      },
      14: {
        columnGap: '$14',
      },
      15: {
        columnGap: '$15',
      },
      16: {
        columnGap: '$16',
      },
      17: {
        columnGap: '$17',
      },
      18: {
        columnGap: '$18',
      },
      19: {
        columnGap: '$19',
      },
      20: {
        columnGap: '$20',
      },
    },
    /**
     * Control gap of top and bottom rows.
     */
    gapY: {
      1: {
        rowGap: '$1',
      },
      2: {
        rowGap: '$2',
      },
      3: {
        rowGap: '$3',
      },
      4: {
        rowGap: '$4',
      },
      5: {
        rowGap: '$5',
      },
      6: {
        rowGap: '$6',
      },
      7: {
        rowGap: '$7',
      },
      8: {
        rowGap: '$8',
      },
      9: {
        rowGap: '$9',
      },
      10: {
        rowGap: '$10',
      },
      11: {
        rowGap: '$11',
      },
      12: {
        rowGap: '$12',
      },
      13: {
        rowGap: '$13',
      },
      14: {
        rowGap: '$14',
      },
      15: {
        rowGap: '$15',
      },
      16: {
        rowGap: '$16',
      },
      17: {
        rowGap: '$17',
      },
      18: {
        rowGap: '$18',
      },
      19: {
        rowGap: '$19',
      },
      20: {
        rowGap: '$20',
      },
    },
  },
});
