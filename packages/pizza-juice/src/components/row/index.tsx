import { styled } from '../../system';

import { Flex } from '../flex';

/**
 * Row component
 *
 * @description utility for create flexbox grid.
 */
export const Row = styled(Flex, {
  flexWrap: 'wrap',
  mt: 'calc(-1 * $$gutterY)',
  mx: 'calc(-0.5 * $$gutterX)',

  '& > *': {
    flexShrink: 0,
    w: '$full',
    maxW: '$full',
    px: 'calc($$gutterX * 0.5)',
    mt: '$$gutterY',
  },

  variants: {
    /**
     * Gutter for padding x
     */
    gutterX: {
      0: {
        $$gutterX: 0,
      },
      1: {
        $$gutterX: '$space$1',
      },
      2: {
        $$gutterX: '$space$2',
      },
      3: {
        $$gutterX: '$space$3',
      },
      4: {
        $$gutterX: '$space$4',
      },
      5: {
        $$gutterX: '$space$5',
      },
      6: {
        $$gutterX: '$space$6',
      },
      7: {
        $$gutterX: '$space$7',
      },
      8: {
        $$gutterX: '$space$8',
      },
      9: {
        $$gutterX: '$space$9',
      },
      10: {
        $$gutterX: '$space$10',
      },
      11: {
        $$gutterX: '$space$11',
      },
      12: {
        $$gutterX: '$space$12',
      },
      13: {
        $$gutterX: '$space$13',
      },
      14: {
        $$gutterX: '$space$14',
      },
      15: {
        $$gutterX: '$space$15',
      },
      16: {
        $$gutterX: '$space$16',
      },
      17: {
        $$gutterX: '$space$17',
      },
      18: {
        $$gutterX: '$space$18',
      },
      19: {
        $$gutterX: '$space$19',
      },
      20: {
        $$gutterX: '$space$20',
      },
    },
    /**
     * Gutter for padding top
     */
    gutterY: {
      0: {
        $$gutterY: 0,
      },
      1: {
        $$gutterY: '$space$1',
      },
      2: {
        $$gutterY: '$space$2',
      },
      3: {
        $$gutterY: '$space$3',
      },
      4: {
        $$gutterY: '$space$4',
      },
      5: {
        $$gutterY: '$space$5',
      },
      6: {
        $$gutterY: '$space$6',
      },
      7: {
        $$gutterY: '$space$7',
      },
      8: {
        $$gutterY: '$space$8',
      },
      9: {
        $$gutterY: '$space$9',
      },
      10: {
        $$gutterY: '$space$10',
      },
      11: {
        $$gutterY: '$space$11',
      },
      12: {
        $$gutterY: '$space$12',
      },
      13: {
        $$gutterY: '$space$13',
      },
      14: {
        $$gutterY: '$space$14',
      },
      15: {
        $$gutterY: '$space$15',
      },
      16: {
        $$gutterY: '$space$16',
      },
      17: {
        $$gutterY: '$space$17',
      },
      18: {
        $$gutterY: '$space$18',
      },
      19: {
        $$gutterY: '$space$19',
      },
      20: {
        $$gutterY: '$space$20',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    gutterX: 4,
    gutterY: 0,
  },
});
