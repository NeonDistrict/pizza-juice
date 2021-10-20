import { createStitches, PropertyValue } from '@stitches/react';

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
    m: (value: PropertyValue<'margin'>) => ({
      margin: value
    }),
    mt: (value: PropertyValue<'margin'>) => ({
      marginTop: value
    }),
    mr: (value: PropertyValue<'margin'>) => ({
      marginRight: value
    }),
    mb: (value: PropertyValue<'margin'>) => ({
      marginBottom: value
    }),
    ml: (value: PropertyValue<'margin'>) => ({
      marginLeft: value
    }),
    mx: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    p: (value: PropertyValue<'padding'>) => ({
      padding: value
    }),
    pt: (value: PropertyValue<'padding'>) => ({
      paddingTop: value
    }),
    pr: (value: PropertyValue<'padding'>) => ({
      paddingRight: value
    }),
    pb: (value: PropertyValue<'padding'>) => ({
      paddingBottom: value
    }),
    pl: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value
    }),
    px: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    bg: (value: PropertyValue<'background'>) => ({
      background: value
    }),
    size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => ({
      width: value,
      height: value
    }),
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value
    }),
    justify: (value: PropertyValue<'justifyContent'>) => ({
      justifyContent: value
    }),
    align: (value: PropertyValue<'alignItems'>) => ({
      alignItems: value
    }),
    h: (value: PropertyValue<'height'>) => ({
      height: value
    }),
    maxH: (value: PropertyValue<'maxHeight'>) => ({
      maxHeight: value
    }),
    w: (value: PropertyValue<'width'>) => ({
      width: value
    }),
    maxW: (value: PropertyValue<'maxWidth'>) => ({
      maxWidth: value
    }),
    d: (value: PropertyValue<'display'>) => ({
      display: value
    }),
    bs: (value: PropertyValue<'boxShadow'>) => ({
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

export type CSS = Stitches.CSS<typeof config>;

export default styled;
