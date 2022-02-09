import { createStitches, PropertyValue, ScaleValue } from '@stitches/react';

import type * as Stitches from '@stitches/react';

import theme from '../theme';

export type VariantProps<T> = Stitches.VariantProps<T>;

export type CSS = Stitches.CSS<typeof config>;

export type ComponentProps<T> = Stitches.ComponentProps<T>;

export const { config, css, globalCss, styled, getCssText, keyframes } =
  createStitches({
    theme,
    utils: {
      m: (v: PropertyValue<'margin'> | ScaleValue<'space'>) => ({
        margin: v,
      }),
      mt: (v: PropertyValue<'margin'> | ScaleValue<'space'>) => ({
        marginTop: v,
      }),
      mr: (v: PropertyValue<'margin'> | ScaleValue<'space'>) => ({
        marginRight: v,
      }),
      mb: (v: PropertyValue<'margin'> | ScaleValue<'space'>) => ({
        marginBottom: v,
      }),
      ml: (v: PropertyValue<'margin'> | ScaleValue<'space'>) => ({
        marginLeft: v,
      }),
      mx: (v: PropertyValue<'margin'> | ScaleValue<'space'>) => ({
        marginLeft: v,
        marginRight: v,
      }),
      my: (v: PropertyValue<'margin'> | ScaleValue<'space'>) => ({
        marginTop: v,
        marginBottom: v,
      }),
      p: (v: PropertyValue<'padding'> | ScaleValue<'space'>) => ({
        padding: v,
      }),
      pt: (v: PropertyValue<'padding'> | ScaleValue<'space'>) => ({
        paddingTop: v,
      }),
      pr: (v: PropertyValue<'padding'> | ScaleValue<'space'>) => ({
        paddingRight: v,
      }),
      pb: (v: PropertyValue<'padding'> | ScaleValue<'space'>) => ({
        paddingBottom: v,
      }),
      pl: (v: PropertyValue<'padding'> | ScaleValue<'space'>) => ({
        paddingLeft: v,
      }),
      px: (v: PropertyValue<'padding'> | ScaleValue<'space'>) => ({
        paddingLeft: v,
        paddingRight: v,
      }),
      py: (v: PropertyValue<'padding'> | ScaleValue<'space'>) => ({
        paddingTop: v,
        paddingBottom: v,
      }),
      bg: (v: PropertyValue<'background'> | ScaleValue<'color'>) => ({
        background: v,
      }),
      size: (
        v:
          | PropertyValue<'width'>
          | (PropertyValue<'height'> | ScaleValue<'sizes'>),
      ) => ({
        width: v,
        height: v,
      }),
      maxSize: (
        v:
          | PropertyValue<'width'>
          | PropertyValue<'height'>
          | ScaleValue<'sizes'>,
      ) => ({
        maxWidth: v,
        maxHeight: v,
      }),
      minSize: (
        v:
          | PropertyValue<'width'>
          | PropertyValue<'height'>
          | ScaleValue<'sizes'>,
      ) => ({
        minWidth: v,
        minHeight: v,
      }),
      br: (v: PropertyValue<'borderRadius'> | ScaleValue<'radii'>) => ({
        borderRadius: v,
      }),
      bs: (v: PropertyValue<'boxShadow'>) => ({
        boxShadow: v,
      }),
      justify: (v: PropertyValue<'justifyContent'>) => ({
        justifyContent: v,
      }),
      align: (v: PropertyValue<'alignItems'>) => ({
        alignItems: v,
      }),
      h: (v: PropertyValue<'height'> | ScaleValue<'sizes'>) => ({
        height: v,
      }),
      maxH: (v: PropertyValue<'maxHeight'> | ScaleValue<'sizes'>) => ({
        maxHeight: v,
      }),
      minH: (v: PropertyValue<'minHeight'> | ScaleValue<'sizes'>) => ({
        minHeight: v,
      }),
      w: (v: PropertyValue<'width'> | ScaleValue<'sizes'>) => ({
        width: v,
      }),
      maxW: (v: PropertyValue<'maxWidth'> | ScaleValue<'sizes'>) => ({
        maxWidth: v,
      }),
      minW: (v: PropertyValue<'minWidth'> | ScaleValue<'sizes'>) => ({
        minWidth: v,
      }),
      d: (v: PropertyValue<'display'>) => ({
        display: v,
      }),
      columns: (v: PropertyValue<'gridTemplateColumns'>) => ({
        gridTemplateColumns: v,
      }),
      rows: (v: PropertyValue<'gridTemplateRows'>) => ({
        gridTemplateRows: v,
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
