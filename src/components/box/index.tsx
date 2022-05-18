import { HTMLAttributes } from 'react';

import { getVariant } from '../../utils';

import { CSS, VariantProps } from '../../system';

import { styled } from '../../system';

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
   * Sets the margin top
   */
  mt?: VariantProps<typeof Box>['mt'];
  /**
   * Sets the margin bottom
   */
  mb?: VariantProps<typeof Box>['mb'];
  /**
   * Sets the margin left
   */
  ml?: VariantProps<typeof Box>['ml'];
  /**
   * Sets the margin right
   */
  mr?: VariantProps<typeof Box>['mr'];
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
   * Sets the padding top
   */
  pt?: VariantProps<typeof Box>['pt'];
  /**
   * Sets the padding bottom
   */
  pb?: VariantProps<typeof Box>['pb'];
  /**
   * Sets the padding left
   */
  pl?: VariantProps<typeof Box>['pl'];
  /**
   * Sets the padding right
   */
  pr?: VariantProps<typeof Box>['pr'];
  /**
   * Sets the padding top and bottom
   */
  py?: VariantProps<typeof Box>['py'];
  /**
   * Sets the background color
   */
  bg?: VariantProps<typeof Box>['bg'];
  /**
   * Sets the text hue/color
   */
  hue?: VariantProps<typeof Box>['hue'];
  /**
   * CSS properties to apply to the element.
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Box component
 *
 * @description abstract component. By default, it renders a div element.
 */
export const Box = styled('div', {
  d: 'block',
  variants: {
    bg: {
      ...getVariant('colors', (tokenValue) => ({ bg: `$${tokenValue}` })),
    },
    hue: {
      ...getVariant('colors', (tokenValue) => ({ color: `$${tokenValue}` })),
    },
    m: {
      ...getVariant('space', (tokenValue) => ({ m: `$${tokenValue}` })),
    },
    mx: {
      ...getVariant('space', (tokenValue) => ({ mx: `$${tokenValue}` })),
    },
    ml: {
      ...getVariant('space', (tokenValue) => ({ ml: `$${tokenValue}` })),
    },
    mr: {
      ...getVariant('space', (tokenValue) => ({ mr: `$${tokenValue}` })),
    },
    my: {
      ...getVariant('space', (tokenValue) => ({ my: `$${tokenValue}` })),
    },
    mt: {
      ...getVariant('space', (tokenValue) => ({ mt: `$${tokenValue}` })),
    },
    mb: {
      ...getVariant('space', (tokenValue) => ({ mb: `$${tokenValue}` })),
    },
    p: {
      ...getVariant('space', (tokenValue) => ({ p: `$${tokenValue}` })),
    },
    px: {
      ...getVariant('space', (tokenValue) => ({ px: `$${tokenValue}` })),
    },
    pl: {
      ...getVariant('space', (tokenValue) => ({ pl: `$${tokenValue}` })),
    },
    pr: {
      ...getVariant('space', (tokenValue) => ({ pr: `$${tokenValue}` })),
    },
    py: {
      ...getVariant('space', (tokenValue) => ({ py: `$${tokenValue}` })),
    },
    pt: {
      ...getVariant('space', (tokenValue) => ({ pt: `$${tokenValue}` })),
    },
    pb: {
      ...getVariant('space', (tokenValue) => ({ pb: `$${tokenValue}` })),
    },
  },
});
