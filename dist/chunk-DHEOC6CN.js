"use strict";Object.defineProperty(exports, "__esModule", {value: true});var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/system/index.ts
var _react = require('@stitches/react');

// src/theme/foundations/colors.ts
var colors = {
  white: "#ffffff",
  black: "#000000",
  "pink-500": "#f571ab",
  "pink-600": "#c9427d",
  "pink-700": "#a43f6b",
  "grey-400": "#a5a5a5",
  "grey-600": "#747474",
  "grey-700": "#393939",
  "grey-800": "#1c1c1c",
  "grey-900": "#0d0d0d",
  "red-500": "#ff5e7c",
  "red-900": "#19090c",
  "teal-500": "#0fb4b6",
  "yellow-500": "#f4d360",
  "yellow-900": "#18150a",
  "green-500": "#8cbe72",
  "green-900": "#0e130b"
};
var colors_default = colors;

// src/theme/foundations/transitions.ts
var transitions = {
  fast: "all 0.2s ease"
};
var transitions_default = transitions;

// src/theme/foundations/fonts.ts
var fonts = {
  system: "'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
};
var fonts_default = fonts;

// src/theme/foundations/fontSizes.ts
var fontSizes = {
  "3xs": "8px",
  "2xs": "10px",
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "22px",
  "2xl": "24px",
  "3xl": "26px",
  "4xl": "28px"
};
var fontSizes_default = fontSizes;

// src/theme/foundations/fontWeights.ts
var fontWeights = {
  thin: 300,
  normal: 400,
  medium: 600,
  bold: 700,
  extrabold: 900
};
var fontWeights_default = fontWeights;

// src/theme/foundations/radii.ts
var radii = {
  full: "9999px",
  half: "50%",
  sm: "5px",
  md: "12px"
};
var radii_default = radii;

// src/theme/foundations/sizes.ts
var sizes = {
  full: "100%",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1400px"
};
var sizes_default = sizes;

// src/theme/foundations/space.ts
var space = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  13: "52px",
  14: "56px",
  15: "60px",
  16: "64px",
  17: "68px",
  18: "72px",
  19: "76px",
  20: "80px"
};
var space_default = space;

// src/theme/foundations/z-index.ts
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var z_index_default = zIndices;

// src/theme/foundations/breakpoints.ts
var breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1400px"
};
var breakpoints_default = breakpoints;

// src/theme/index.ts
var theme = {
  colors: colors_default,
  transitions: transitions_default,
  fonts: fonts_default,
  fontSizes: fontSizes_default,
  fontWeights: fontWeights_default,
  radii: radii_default,
  sizes: sizes_default,
  space: space_default,
  zIndices: z_index_default,
  breakpoints: breakpoints_default
};
var theme_default = theme;

// src/system/index.ts
var { config, css, globalCss, styled, getCssText, keyframes } = _react.createStitches.call(void 0, {
  theme: theme_default,
  utils: {
    m: (value) => ({
      margin: value
    }),
    mt: (value) => ({
      marginTop: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    bg: (value) => ({
      background: value
    }),
    size: (value) => ({
      width: value,
      height: value
    }),
    br: (value) => ({
      borderRadius: value
    }),
    bs: (value) => ({
      boxShadow: value
    }),
    justify: (value) => ({
      justifyContent: value
    }),
    align: (value) => ({
      alignItems: value
    }),
    h: (value) => ({
      height: value
    }),
    maxH: (value) => ({
      maxHeight: value
    }),
    minH: (value) => ({
      minHeight: value
    }),
    w: (value) => ({
      width: value
    }),
    maxW: (value) => ({
      maxWidth: value
    }),
    minW: (value) => ({
      minWidth: value
    }),
    d: (value) => ({
      display: value
    }),
    columns: (value) => ({
      gridTemplateColumns: value
    }),
    rows: (value) => ({
      gridTemplateRows: value
    })
  },
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    "2xl": "(min-width: 1400px)"
  }
});







exports.__spreadValues = __spreadValues; exports.__spreadProps = __spreadProps; exports.__objRest = __objRest; exports.styled = styled; exports.keyframes = keyframes;
//# sourceMappingURL=chunk-DHEOC6CN.js.map
