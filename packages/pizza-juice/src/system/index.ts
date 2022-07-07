import {
  createStitches,
  PropertyValue,
  ScaleValue,
  defaultThemeMap,
} from '@stitches/react';

import type * as Stitches from '@stitches/react';

import theme from '../theme';

export type VariantProps<T> = Stitches.VariantProps<T>;

export type CSS = Stitches.CSS<typeof config>;

export type ComponentProps<T> = Stitches.ComponentProps<T>;

export const { config, css, globalCss, styled, getCssText, keyframes } =
  createStitches({
    theme,
    utils: {
      m: (v: PropertyValue<'margin'>) => ({
        margin: v,
      }),
      mt: (v: PropertyValue<'margin'>) => ({
        marginTop: v,
      }),
      mr: (v: PropertyValue<'margin'>) => ({
        marginRight: v,
      }),
      mb: (v: PropertyValue<'margin'>) => ({
        marginBottom: v,
      }),
      ml: (v: PropertyValue<'margin'>) => ({
        marginLeft: v,
      }),
      mx: (v: PropertyValue<'margin'>) => ({
        marginLeft: v,
        marginRight: v,
      }),
      my: (v: PropertyValue<'margin'>) => ({
        marginTop: v,
        marginBottom: v,
      }),
      p: (v: PropertyValue<'padding'>) => ({
        padding: v,
      }),
      pt: (v: PropertyValue<'padding'>) => ({
        paddingTop: v,
      }),
      pr: (v: PropertyValue<'padding'>) => ({
        paddingRight: v,
      }),
      pb: (v: PropertyValue<'padding'>) => ({
        paddingBottom: v,
      }),
      pl: (v: PropertyValue<'padding'>) => ({
        paddingLeft: v,
      }),
      px: (v: PropertyValue<'padding'>) => ({
        paddingLeft: v,
        paddingRight: v,
      }),
      py: (v: PropertyValue<'padding'>) => ({
        paddingTop: v,
        paddingBottom: v,
      }),
      bg: (v: PropertyValue<'background'>) => ({
        background: v,
      }),
      size: (v: PropertyValue<'width'>) => ({
        width: v,
        height: v,
      }),
      maxSize: (v: PropertyValue<'width'>) => ({
        maxWidth: v,
        maxHeight: v,
      }),
      minSize: (v: PropertyValue<'width'>) => ({
        minWidth: v,
        minHeight: v,
      }),
      br: (v: PropertyValue<'borderRadius'>) => ({
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
      h: (v: PropertyValue<'height'>) => ({
        height: v,
      }),
      maxH: (v: PropertyValue<'maxHeight'>) => ({
        maxHeight: v,
      }),
      minH: (v: PropertyValue<'minHeight'>) => ({
        minHeight: v,
      }),
      w: (v: PropertyValue<'width'>) => ({
        width: v,
      }),
      maxW: (v: PropertyValue<'maxWidth'>) => ({
        maxWidth: v,
      }),
      minW: (v: PropertyValue<'minWidth'>) => ({
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
      blur: (v: ScaleValue<'blurs'>) => ({
        filter: `blur($blurs${v})`,
      }),
      textGradient: (v: PropertyValue<'backgroundImage'>) => ({
        backgroundImage: `linear-gradient(${v})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        '&::selection': {
          WebkitTextFillColor: '$colors$text',
        },
      }),
    },
    media: {
      sm: '(min-width: 576px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xl: '(min-width: 1200px)',
      '2xl': '(min-width: 1400px)',
      motion: '(prefers-reduced-motion: reduce)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
    themeMap: {
      ...defaultThemeMap,
    },
  });
