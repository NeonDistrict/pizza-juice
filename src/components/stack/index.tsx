import { HTMLAttributes } from 'react';

import { CSS, styled, VariantProps } from '../../system';

export type StackProps = {
  /**
   * Stack children direction
   * @default "row"
   */
  direction?: VariantProps<typeof Stack>['direction'];
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

const childWithGap = '> * + *';

/**
 * Stack component
 *
 * @description Stack component is used to display a group of elements in a vertical or horizontal direction.
 */
export const Stack = styled('div', {
  d: 'flex',
  $$gap: '$space$10',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        [childWithGap]: { m: '0 0 0 $$gap' }
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
        [childWithGap]: { m: '0 $$gap 0 0' }
      },
      column: {
        flexDirection: 'column',
        [childWithGap]: { m: '$$gap 0 0 0' }
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
        [childWithGap]: { m: '0 0 $$gap 0' }
      }
    }
  },
  defaultVariants: {
    direction: 'row'
  }
});
