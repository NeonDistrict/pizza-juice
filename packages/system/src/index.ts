import { createStitches } from '@stitches/react';

import type * as Stitches from '@stitches/react';

import colors from '@nd-ui/system/src/foundations/colors';
import transitions from '@nd-ui/system/src/foundations/transitions';
import fonts from '@nd-ui/system/src/foundations/fonts';
import fontSizes from '@nd-ui/system/src/foundations/fontSizes';
import fontWeights from '@nd-ui/system/src/foundations/fontWeights';
import radii from '@nd-ui/system/src/foundations/radii';
import sizes from '@nd-ui/system/src/foundations/sizes';
import space from '@nd-ui/system/src/foundations/space';
import zIndices from '@nd-ui/system/src/foundations/z-index';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  keyframes,
  theme
} = createStitches({
  theme: {
    colors,
    transitions,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    sizes,
    space,
    zIndices
  },
  utils: {
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value
    }),
    mt: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value
    }),
    mr: (value: Stitches.PropertyValue<'margin'>) => ({
      marginRight: value
    }),
    mb: (value: Stitches.PropertyValue<'margin'>) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value
    }),
    pt: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value
    }),
    pr: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingRight: value
    }),
    pb: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingBottom: value
    }),
    pl: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    bg: (value: Stitches.PropertyValue<'background'>) => ({
      background: value
    }),
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value
    }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value
    }),
    justify: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value
    }),
    align: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value
    }),
    h: (value: Stitches.PropertyValue<'height'>) => ({
      height: value
    }),
    maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
      maxHeight: value
    }),
    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value
    }),
    maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
      maxWidth: value
    }),
    d: (value: Stitches.PropertyValue<'display'>) => ({
      display: value
    }),
    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
      boxShadow: value
    })
  },
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    '2xl': '(min-width: 1400px)'
  }
});

export type VariantProps<T> = Stitches.VariantProps<T>;

export type ScaleProps<T> = Stitches.ScaleValue<T>;

export type CSSProps = Stitches.CSS<typeof config>;

export default styled;
