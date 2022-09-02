import { styled } from '../../system';

export const Wrapper = styled('div', {
  // variables
  $$color: 'inherit',
  $$thickness: '1px',

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
        borderWidth: '0px 0px $$thickness',
      },
      vertical: {
        h: '$full',
        borderWidth: '0px 0px 0px $$thickness',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    orientation: 'horizontal',
  },
});
