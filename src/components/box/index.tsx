import { HTMLAttributes } from 'react';

import { CSS, VariantProps } from '../../system';

export type BoxProps = {
  /**
   * Sets the margin on all sides.
   */
  m?: VariantProps<typeof Box>['m'];
  /**
   * Sets the margin top and bottom
   */
  my?: VariantProps<typeof Box>['my'];
  /**
   * Sets the margin left and right
   */
  mx?: VariantProps<typeof Box>['mx'];
  /**
   * Sets the padding on all sides
   */
  p?: VariantProps<typeof Box>['p'];
  /**
   * Sets the padding left and right
   */
  px?: VariantProps<typeof Box>['px'];
  /**
   * Sets the padding top and bottom
   */
  py?: VariantProps<typeof Box>['py'];
  /**
   * Sets the background color
   */
  bg?: VariantProps<typeof Box>['bg'];
  /**
   * Sets the text color
   */
  color?: VariantProps<typeof Box>['color'];
  /**
   * CSS properties to apply to the element.
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

import { styled, config } from '../../system';

const { colors, space } = config.theme;

type TColors = {
  [K in keyof typeof colors]: { proxy: string };
};

type TSpace = {
  [K in keyof typeof space]: { proxy: string };
};

/**
 * Box component
 *
 * @description abstract component. By default, it renders a div element.
 */
export const Box = styled('div', {
  d: 'block',
  variants: {
    bg: {
      ...Object.keys(colors).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: { bg: `$${curr}` },
        }),
        {} as TColors,
      ),
    },
    color: {
      ...Object.keys(colors).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: { color: `$${curr}` },
        }),
        {} as TColors,
      ),
    },
    m: {
      ...Object.keys(space).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: { m: `$${curr}` },
        }),
        {} as TSpace,
      ),
    },
    mx: {
      ...Object.keys(space).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: { mx: `$${curr}` },
        }),
        {} as TSpace,
      ),
    },
    my: {
      ...Object.keys(space).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: { my: `$${curr}` },
        }),
        {} as TSpace,
      ),
    },
    p: {
      ...Object.keys(space).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: { p: `$${curr}` },
        }),
        {} as TSpace,
      ),
    },
    px: {
      ...Object.keys(space).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: { px: `$${curr}` },
        }),
        {} as TSpace,
      ),
    },
    py: {
      ...Object.keys(space).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: { py: `$${curr}` },
        }),
        {} as TSpace,
      ),
    },
  },
});
