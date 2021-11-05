import { createStitches, PropertyValue } from '@stitches/react';

import type * as Stitches from '@stitches/react';

import theme from '../theme';

export type VariantProps<T> = Stitches.VariantProps<T>;

export type CSS = Stitches.CSS<typeof config>;

export type ComponentProps<T> = Stitches.ComponentProps<T>;

export const { config, css, globalCss, styled, getCssText } = createStitches({
  theme,
  utils: {
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'margin'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'margin'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'padding'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'padding'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    bg: (value: PropertyValue<'background'>) => ({
      background: value,
    }),
    size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => ({
      width: value,
      height: value,
    }),
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    bs: (value: PropertyValue<'boxShadow'>) => ({
      boxShadow: value,
    }),
    justify: (value: PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    align: (value: PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    h: (value: PropertyValue<'height'>) => ({
      height: value,
    }),
    maxH: (value: PropertyValue<'maxHeight'>) => ({
      maxHeight: value,
    }),
    minH: (value: PropertyValue<'minHeight'>) => ({
      minHeight: value,
    }),
    w: (value: PropertyValue<'width'>) => ({
      width: value,
    }),
    maxW: (value: PropertyValue<'maxWidth'>) => ({
      maxWidth: value,
    }),
    minW: (value: PropertyValue<'minWidth'>) => ({
      minWidth: value,
    }),
    d: (value: PropertyValue<'display'>) => ({
      display: value,
    }),
    columns: (value: PropertyValue<'gridTemplateColumns'>) => ({
      gridTemplateColumns: value,
    }),
    rows: (value: PropertyValue<'gridTemplateRows'>) => ({
      gridTemplateRows: value,
    }),
  },
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    '2xl': '(min-width: 1400px)',
  },
});
