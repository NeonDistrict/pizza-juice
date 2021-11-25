import { styled, VariantProps } from '../../system';

export type DividerProps = {
  /**
   * Orientation of the divider.
   *
   * @default 'horizontal'
   */
  orientation?: VariantProps<typeof Divider>['orientation'];
};

/**
 * Divider component
 *
 * @description used to visually separate content in a list or group.
 */
export const Divider = styled('hr', {
  // variables
  $$color: 'inherit',

  opacity: 0.6,
  borderImage: 'none 100% / 1 / 0 stretch',
  borderColor: '$$color',
  borderStyle: 'solid',

  /**
   * Variants
   */
  variants: {
    /**
     * Orientation variants
     */
    orientation: {
      horizontal: {
        w: '$full',
        borderWidth: '0px 0px 1px',
      },
      vertical: {
        h: '$full',
        borderWidth: '0px 0px 0px 1px',
      },
    },
  },
});
