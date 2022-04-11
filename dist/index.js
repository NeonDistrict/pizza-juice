"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var __defProp = Object.defineProperty;
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

// src/components/button/index.tsx
var _react = require('react'); var React = _interopRequireWildcard(_react); var React10 = _interopRequireWildcard(_react);

// src/utils/forwardRef.ts

function forwardRef2(component) {
  return React.forwardRef(component);
}

// src/system/index.ts
var _react2 = require('@stitches/react');

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
  "grey-850": "#0e0e0e",
  "grey-900": "#0d0d0d",
  "red-500": "#ff5e7c",
  "red-550": "#cc4b63",
  "red-600": "#99384a",
  "red-650": "#802f3e",
  "red-900": "#19090c",
  "teal-500": "#0fb4b6",
  "yellow-500": "#f4d360",
  "yellow-550": "#c2a74c",
  "yellow-600": "#8f7b38",
  "yellow-700": "#5c4f24",
  "yellow-900": "#18150a",
  "green-500": "#8cbe72",
  "green-550": "#678c54",
  "green-600": "#425936",
  "green-700": "#26331f",
  "green-900": "#0e130b",
  common: "#ffffff",
  uncommon: "#19E378",
  rare: "#1EEBFD",
  "ultra-rare": "#FD4292",
  legendary: "#FFCD1B"
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

// src/utils/pxToRem.ts
var pxToRem = (px, base = 16) => `${px / base}rem`;

// src/theme/foundations/fontSizes.ts
var fontSizes = {
  "3xs": pxToRem(8),
  "2xs": pxToRem(10),
  xs: pxToRem(12),
  sm: pxToRem(14),
  md: pxToRem(16),
  lg: pxToRem(20),
  xl: pxToRem(22),
  "2xl": pxToRem(24),
  "3xl": pxToRem(26),
  "4xl": pxToRem(28)
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
  full: pxToRem(9999),
  half: "50%",
  sm: pxToRem(5),
  md: pxToRem(12)
};
var radii_default = radii;

// src/theme/foundations/sizes.ts
var sizes = {
  full: "100%",
  sm: pxToRem(576),
  md: pxToRem(768),
  lg: pxToRem(992),
  xl: pxToRem(1200),
  "2xl": pxToRem(1400)
};
var sizes_default = sizes;

// src/theme/foundations/space.ts
var space = {
  0: pxToRem(0),
  1: pxToRem(4),
  2: pxToRem(8),
  3: pxToRem(12),
  4: pxToRem(16),
  5: pxToRem(20),
  6: pxToRem(24),
  7: pxToRem(28),
  8: pxToRem(32),
  9: pxToRem(36),
  10: pxToRem(40),
  11: pxToRem(44),
  12: pxToRem(48),
  13: pxToRem(52),
  14: pxToRem(56),
  15: pxToRem(60),
  16: pxToRem(64),
  17: pxToRem(68),
  18: pxToRem(72),
  19: pxToRem(76),
  20: pxToRem(80)
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
  sm: pxToRem(576),
  md: pxToRem(768),
  lg: pxToRem(992),
  xl: pxToRem(1200),
  "2xl": pxToRem(1400)
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
var { config, css, globalCss, styled, getCssText, keyframes } = _react2.createStitches.call(void 0, {
  theme: theme_default,
  utils: {
    m: (v) => ({
      margin: v
    }),
    mt: (v) => ({
      marginTop: v
    }),
    mr: (v) => ({
      marginRight: v
    }),
    mb: (v) => ({
      marginBottom: v
    }),
    ml: (v) => ({
      marginLeft: v
    }),
    mx: (v) => ({
      marginLeft: v,
      marginRight: v
    }),
    my: (v) => ({
      marginTop: v,
      marginBottom: v
    }),
    p: (v) => ({
      padding: v
    }),
    pt: (v) => ({
      paddingTop: v
    }),
    pr: (v) => ({
      paddingRight: v
    }),
    pb: (v) => ({
      paddingBottom: v
    }),
    pl: (v) => ({
      paddingLeft: v
    }),
    px: (v) => ({
      paddingLeft: v,
      paddingRight: v
    }),
    py: (v) => ({
      paddingTop: v,
      paddingBottom: v
    }),
    bg: (v) => ({
      background: v
    }),
    size: (v) => ({
      width: v,
      height: v
    }),
    maxSize: (v) => ({
      maxWidth: v,
      maxHeight: v
    }),
    minSize: (v) => ({
      minWidth: v,
      minHeight: v
    }),
    br: (v) => ({
      borderRadius: v
    }),
    bs: (v) => ({
      boxShadow: v
    }),
    justify: (v) => ({
      justifyContent: v
    }),
    align: (v) => ({
      alignItems: v
    }),
    h: (v) => ({
      height: v
    }),
    maxH: (v) => ({
      maxHeight: v
    }),
    minH: (v) => ({
      minHeight: v
    }),
    w: (v) => ({
      width: v
    }),
    maxW: (v) => ({
      maxWidth: v
    }),
    minW: (v) => ({
      minWidth: v
    }),
    d: (v) => ({
      display: v
    }),
    columns: (v) => ({
      gridTemplateColumns: v
    }),
    rows: (v) => ({
      gridTemplateRows: v
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

// src/components/spinner/index.tsx


// src/components/visually-hidden/index.tsx

var _reactvisuallyhidden = require('@radix-ui/react-visually-hidden');
var VisuallyHidden = ({ children }) => {
  return /* @__PURE__ */ React.default.createElement(_reactvisuallyhidden.Root, null, children);
};

// src/components/spinner/styles.ts
var spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" }
});
var Spinner = styled("div", {
  $$color: "currentColor",
  $$size: "16px",
  $$thickness: 1.5,
  $$speed: "0.4s",
  d: "inline-block",
  color: "$$color",
  size: "$$size",
  borderTopColor: "currentcolor",
  borderRightColor: "currentcolor",
  borderStyle: "solid",
  br: "$full",
  borderWidth: "$$thickness",
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
  animation: `${spin} $$speed linear infinite`
});

// src/components/spinner/index.tsx
var Spinner2 = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.default.createElement(Spinner, __spreadValues({}, props), /* @__PURE__ */ React.default.createElement(VisuallyHidden, null, "Loading"));
};

// src/components/button/styles.ts
var Button = styled("button", {
  appearance: "none",
  bg: "transparent",
  fontFamily: "inherit",
  border: "1px solid",
  borderColor: "transparent",
  whiteSpace: "nowrap",
  outline: 0,
  minW: 40,
  h: 40,
  d: "flex",
  align: "center",
  justify: "center",
  px: "$6",
  gap: "$2",
  color: "$white",
  fontSize: "$sm",
  fontWeight: 600,
  textTransform: "uppercase",
  userSelect: "none",
  transition: "$fast",
  "&:not(:disabled)": {
    cursor: "pointer"
  },
  "&:focus": {
    borderColor: "$teal-500"
  },
  "&:disabled": {
    $$disabledBg: "$colors$grey-600",
    cursor: "not-allowed",
    color: "$grey-700",
    "&:hover": {
      color: "$grey-700"
    },
    "&:active": {
      color: "$grey-700"
    }
  },
  variants: {
    color: {
      primary: {
        $$bgSolid: "$colors$pink-500",
        $$bgHover: "$colors$pink-600",
        $$bgActive: "$colors$pink-700"
      },
      secondary: {
        $$bgSolid: "$colors$grey-700",
        $$bgHover: "$colors$grey-800",
        $$bgActive: "$colors$grey-850"
      },
      destructive: {
        color: "$black",
        $$bgSolid: "$colors$red-500",
        $$bgHover: "$colors$red-550",
        $$bgActive: "$colors$red-600"
      },
      warning: {
        color: "$black",
        $$bgSolid: "$colors$yellow-500",
        $$bgHover: "$colors$yellow-550",
        $$bgActive: "$colors$yellow-600"
      },
      success: {
        color: "$black",
        $$bgSolid: "$colors$green-500",
        $$bgHover: "$colors$green-550",
        $$bgActive: "$colors$green-600"
      }
    },
    shape: {
      rounded: {
        br: "$full"
      },
      squared: {
        br: 0
      }
    },
    variant: {
      solid: {
        "&:disabled": {
          bg: "$$disabledBg",
          "&:hover": {
            bg: "$$disabledBg"
          },
          "&:active": {
            bg: "$$disabledBg"
          }
        },
        bg: "$$bgSolid",
        "&:hover": {
          bg: "$$bgHover"
        },
        "&:active": {
          bg: "$$bgActive"
        }
      },
      naked: {
        "&:disabled": {
          borderColor: "transparent",
          "&:hover": {
            borderColor: "transparent",
            bg: "transparent"
          },
          "&:active": {
            borderColor: "transparent",
            bg: "transparent"
          }
        },
        bg: "transparent",
        "&:hover": {
          bg: "$$bgHover"
        },
        "&:active": {
          bg: "$$bgActive"
        }
      },
      outlined: {
        "&:disabled": {
          borderColor: "$$disabledBg",
          "&:hover": {
            borderColor: "$$disabledBg"
          },
          "&:active": {
            borderColor: "$$disabledBg"
          }
        },
        bg: "transparent",
        borderColor: "$$bgSolid",
        "&:hover": {
          borderColor: "$$bgHover"
        },
        "&:active": {
          borderColor: "$$bgActive"
        }
      },
      unstyled: {
        bg: "transparent",
        color: "$white"
      }
    },
    loading: {
      true: {
        "span, svg": {
          opacity: 0
        },
        svg: {
          opacity: 0
        }
      }
    },
    fluid: {
      true: {
        w: "$full"
      },
      false: {
        w: "auto"
      }
    },
    onlyIcon: {
      true: {
        p: "$3"
      }
    }
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "outlined",
      css: {}
    },
    {
      color: "primary",
      variant: "naked",
      css: {
        color: "$pink-500",
        "&:hover": {
          color: "$pink-600",
          $$bgHover: "#280D19"
        },
        "&:active": {
          color: "$pink-600",
          $$bgActive: "#280D19"
        }
      }
    },
    {
      color: "secondary",
      variant: "outlined",
      css: {}
    },
    {
      color: "secondary",
      variant: "naked",
      css: {}
    },
    {
      color: "destructive",
      variant: "outlined",
      css: {
        color: "$$bgSolid",
        "&:hover": {
          color: "$$bgHover"
        },
        "&:active": {
          color: "$$bgActive"
        }
      }
    },
    {
      color: "destructive",
      variant: "naked",
      css: {
        color: "$red-500",
        "&:hover": {
          color: "$black"
        },
        "&:active": {
          color: "$black"
        }
      }
    },
    {
      color: "warning",
      variant: "outlined",
      css: {
        color: "$$bgSolid",
        "&:hover": {
          color: "$$bgHover"
        },
        "&:active": {
          color: "$$bgActive"
        }
      }
    },
    {
      color: "warning",
      variant: "naked",
      css: {
        color: "$yellow-500",
        "&:hover": {
          color: "$black"
        },
        "&:active": {
          color: "$black"
        }
      }
    },
    {
      color: "success",
      variant: "outlined",
      css: {
        color: "$$bgSolid",
        "&:hover": {
          color: "$$bgHover"
        },
        "&:active": {
          color: "$$bgActive"
        }
      }
    },
    {
      color: "success",
      variant: "naked",
      css: {
        color: "$green-500",
        "&:hover": {
          color: "$black"
        },
        "&:active": {
          color: "$black"
        }
      }
    }
  ],
  defaultVariants: {
    color: "primary",
    shape: "squared",
    variant: "solid",
    loading: false
  }
});
var Spinner3 = styled(Spinner2, {
  d: "flex",
  align: "center",
  position: "absolute",
  marginInlineEnd: 0
});

// src/components/button/index.tsx
var Button2 = forwardRef2((props, ref) => {
  const _a = props, {
    type = "button",
    icon,
    iconPosition = "left",
    loading: loading2,
    children
  } = _a, rest = __objRest(_a, [
    "type",
    "icon",
    "iconPosition",
    "loading",
    "children"
  ]);
  return /* @__PURE__ */ React.default.createElement(Button, __spreadValues({
    ref,
    type,
    onlyIcon: !!icon && !children,
    loading: loading2
  }, rest), icon && iconPosition === "left" && icon, children && /* @__PURE__ */ React.default.createElement("span", null, children), loading2 && /* @__PURE__ */ React.default.createElement(Spinner3, null), icon && iconPosition === "right" && icon);
});

// src/components/alert/index.tsx


// src/components/flex/index.tsx
var Flex = styled("div", {
  d: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row"
      },
      "row-reverse": {
        flexDirection: "row-reverse"
      },
      column: {
        flexDirection: "column"
      },
      "column-reverse": {
        flexDirection: "column-reverse"
      }
    },
    align: {
      start: {
        alignItems: "flex-start"
      },
      center: {
        alignItems: "center"
      },
      end: {
        alignItems: "flex-end"
      },
      stretch: {
        alignItems: "stretch"
      },
      baseline: {
        alignItems: "baseline"
      }
    },
    justify: {
      start: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      end: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      }
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap"
      },
      wrap: {
        flexWrap: "wrap"
      },
      wrapReverse: {
        flexWrap: "wrap-reverse"
      }
    },
    gap: {
      0: {
        gap: "$0"
      },
      1: {
        gap: "$1"
      },
      2: {
        gap: "$2"
      },
      3: {
        gap: "$3"
      },
      4: {
        gap: "$4"
      },
      5: {
        gap: "$5"
      },
      6: {
        gap: "$6"
      },
      7: {
        gap: "$7"
      },
      8: {
        gap: "$8"
      },
      9: {
        gap: "$9"
      },
      10: {
        gap: "$10"
      },
      11: {
        gap: "$11"
      },
      12: {
        gap: "$12"
      },
      13: {
        gap: "$13"
      },
      14: {
        gap: "$14"
      },
      15: {
        gap: "$15"
      },
      16: {
        gap: "$16"
      },
      17: {
        gap: "$17"
      },
      18: {
        gap: "$18"
      },
      19: {
        gap: "$19"
      },
      20: {
        gap: "$20"
      }
    }
  }
});

// src/components/text/index.ts
var { colors: colors2 } = config.theme;
var Text = styled("span", {
  $$lineColor: "$colors$white",
  $$lineSpacing: "$space$4",
  d: "block",
  m: 0,
  lineHeight: 1,
  variants: {
    color: __spreadValues({
      inherit: {
        color: "currentColor"
      }
    }, Object.keys(colors2).reduce((prev, curr) => __spreadProps(__spreadValues({}, prev), { [curr]: { color: `$${curr}` } }), {})),
    lineColor: __spreadValues({}, Object.keys(colors2).reduce((prev, curr) => __spreadProps(__spreadValues({}, prev), {
      [curr]: { $$lineColor: `$colors$${curr}` }
    }), {})),
    size: {
      xs: {
        fontSize: "$xs"
      },
      sm: {
        fontSize: "$sm"
      },
      md: {
        fontSize: "$md"
      },
      lg: {
        fontSize: "$lg"
      },
      xl: {
        fontSize: "$xl"
      },
      "2xl": {
        fontSize: "$2xl"
      },
      "3xl": {
        fontSize: "$3xl"
      },
      "4xl": {
        fontSize: "$4xl"
      }
    },
    weight: {
      thin: {
        fontWeight: "$thin"
      },
      normal: {
        fontWeight: "$normal"
      },
      medium: {
        fontWeight: "$medium"
      },
      bold: {
        fontWeight: "$bold"
      },
      extrabold: {
        fontWeight: "$extrabold"
      }
    },
    textAlign: {
      left: {
        textAlign: "left"
      },
      center: {
        textAlign: "center"
      },
      right: {
        textAlign: "right"
      }
    },
    transform: {
      normal: {
        textTransform: "none"
      },
      uppercase: {
        textTransform: "uppercase"
      },
      lowercase: {
        textTransform: "lowercase"
      }
    },
    leftLine: {
      true: {
        pl: "$$lineSpacing",
        borderLeft: "2px solid $$lineColor"
      },
      false: {
        pl: 0,
        borderLeft: "none"
      }
    }
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
    lineColor: "white"
  }
});

// src/components/spacer/index.tsx
var Spacer = styled(Flex, {
  flex: 1
});

// src/components/alert/icons/destructive.tsx

var DestructiveIcon = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.default.createElement("svg", __spreadValues({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.default.createElement("path", {
    d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z",
    fill: "currentColor"
  }));
};

// src/components/alert/icons/success.tsx

var SuccessIcon = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.default.createElement("svg", __spreadValues({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.default.createElement("path", {
    d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57929 16.4087 4 11.992 4C7.57528 4 3.99421 7.57929 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z",
    fill: "currentColor"
  }));
};

// src/components/alert/icons/warning.tsx

var WarningIcon = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.default.createElement("svg", __spreadValues({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.default.createElement("path", {
    d: "M21.266 20.998H2.73301C2.37575 20.998 2.04563 20.8074 1.867 20.498C1.68837 20.1886 1.68838 19.8074 1.86701 19.498L11.133 3.49799C11.3118 3.1891 11.6416 2.9989 11.9985 2.9989C12.3554 2.9989 12.6852 3.1891 12.864 3.49799L22.13 19.498C22.3085 19.8072 22.3086 20.1882 22.1303 20.4975C21.9519 20.8069 21.6221 20.9976 21.265 20.998H21.266ZM12 5.99799L4.46901 18.998H19.533L12 5.99799ZM12.995 14.999H10.995V9.99799H12.995V14.999Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.default.createElement("path", {
    d: "M11 16H13V18H11V16Z",
    fill: "currentColor"
  }));
};

// src/components/alert/icons/close.tsx

var CloseIcon = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.default.createElement("svg", __spreadValues({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.default.createElement("path", {
    d: "M11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.93999L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333L11.7267 3.33333Z",
    fill: "currentColor"
  }));
};

// src/components/alert/styles.ts
var Wrapper = styled(Flex, {
  p: "$4",
  border: "1px solid",
  textTransform: "uppercase",
  position: "relative",
  variants: {
    variant: {
      primary: {
        bg: "$black",
        borderColor: "$grey-700"
      },
      warning: {
        bg: "$yellow-900",
        borderColor: "$yellow-500"
      },
      success: {
        bg: "$green-900",
        borderColor: "$green-500"
      },
      destructive: {
        bg: "$red-900",
        borderColor: "$red-500"
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
var Title = styled(Text, {
  variants: {
    variant: {
      primary: {
        color: "$pink-500"
      },
      warning: {
        color: "$yellow-500"
      },
      success: {
        color: "$green-500"
      },
      destructive: {
        color: "$red-500"
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
var Subtitle = styled(Text, {
  variants: {
    variant: {
      primary: {
        color: "$white"
      },
      warning: {
        color: "$yellow-500"
      },
      success: {
        color: "$green-500"
      },
      destructive: {
        color: "$red-500"
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
var IconWrapper = styled("div", {
  variants: {
    variant: {
      primary: {
        color: "$white"
      },
      warning: {
        color: "$yellow-500"
      },
      success: {
        color: "$green-500"
      },
      destructive: {
        color: "$red-500"
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});

// src/hooks/use-media-query.ts

var useMediaQuery = (query) => {
  const [matches, setMatches] = _react.useState.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

// src/hooks/use-breakpoint.ts

var useBreakpoint = (query = "md") => {
  const breakpoints2 = _react.useMemo.call(void 0, () => ({
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    "2xl": "(min-width: 1400px)"
  }), []);
  return useMediaQuery(breakpoints2[query]);
};

// src/hooks/use-id.ts
var useId = (prefix) => {
  const randomNumber = Math.random().toString(36).substring(2, 9);
  return `${prefix}-${randomNumber}`;
};

// src/hooks/use-countdown.ts

var _SECOND = 1e3;
var _MINUTE = _SECOND * 60;
var _HOUR = _MINUTE * 60;
var _DAY = _HOUR * 24;
var padLeft = (value) => {
  return String(value || 0).padStart(2, "0");
};
var useCountdown = (endDate) => {
  const [days, setDays] = _react.useState.call(void 0, );
  const [hours, setHours] = _react.useState.call(void 0, );
  const [minutes, setMinutes] = _react.useState.call(void 0, );
  const [seconds, setSeconds] = _react.useState.call(void 0, );
  const [secondsRemaining, setSecondsRemaining] = _react.useState.call(void 0, 99);
  const [isTimerDone, setIsTimerDone] = _react.useState.call(void 0, false);
  const shouldStopTimer = secondsRemaining <= 1;
  _react.useEffect.call(void 0, () => {
    const interval = setInterval(() => {
      if (shouldStopTimer) {
        setIsTimerDone(true);
        return clearInterval(interval);
      }
      const now = new Date().getTime();
      const diff = endDate - now;
      const DAYS = Math.floor(diff / _DAY);
      const HOURS = Math.floor(diff % _DAY / _HOUR);
      const MINUTES = Math.floor(diff % _HOUR / _MINUTE);
      const SECONDS = Math.floor(diff % _MINUTE / _SECOND);
      const SECONDS_REMAINING = diff / 1e3;
      setDays(DAYS < 0 ? 0 : DAYS);
      setHours(HOURS < 0 ? 0 : HOURS);
      setMinutes(MINUTES < 0 ? 0 : MINUTES);
      setSeconds(SECONDS < 0 ? 0 : SECONDS);
      setSecondsRemaining(SECONDS_REMAINING);
    }, 1e3);
    return () => {
      clearInterval(interval);
    };
  }, [endDate, shouldStopTimer]);
  return {
    days: padLeft(days),
    hours: padLeft(hours),
    minutes: padLeft(minutes),
    seconds: padLeft(seconds),
    daysAsNumber: days,
    hoursAsNumber: hours,
    minutesAsNumber: minutes,
    secondsAsNumber: seconds,
    secondsRemaining,
    isTimerDone
  };
};

// src/hooks/use-disclosure.ts

var useDisclosure = (props = {}) => {
  const [isOpenState, setIsOpen] = _react.useState.call(void 0, props.defaultIsOpen || false);
  const onClose = _react.useCallback.call(void 0, () => {
    setIsOpen(false);
  }, []);
  const onOpen = React.default.useCallback(() => {
    setIsOpen(true);
  }, []);
  const onToggle = _react.useCallback.call(void 0, () => {
    setIsOpen((e) => !e);
  }, []);
  return {
    isOpen: !!isOpenState,
    onOpen,
    onClose,
    onToggle
  };
};

// src/hooks/use-merge-refs.ts

function assignRef(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function useMergeRefs(...refs) {
  return React10.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node) => {
      refs.forEach((ref) => {
        if (ref)
          assignRef(ref, node);
      });
    };
  }, refs);
}

// src/components/alert/index.tsx
var icons = {
  destructive: /* @__PURE__ */ React.default.createElement(DestructiveIcon, null),
  success: /* @__PURE__ */ React.default.createElement(SuccessIcon, null),
  warning: /* @__PURE__ */ React.default.createElement(WarningIcon, null)
};
var Alert = (_a) => {
  var _b = _a, {
    title,
    subtitle,
    description,
    children,
    dismissible = true,
    variant,
    banner,
    align = "end"
  } = _b, props = __objRest(_b, [
    "title",
    "subtitle",
    "description",
    "children",
    "dismissible",
    "variant",
    "banner",
    "align"
  ]);
  const [show, setShow] = _react.useState.call(void 0, true);
  const isDesktop = useBreakpoint("sm");
  return /* @__PURE__ */ React.default.createElement(React.default.Fragment, null, show && /* @__PURE__ */ React.default.createElement(Wrapper, __spreadValues({
    variant,
    wrap: "wrap",
    gap: 3
  }, props), dismissible && /* @__PURE__ */ React.default.createElement(IconWrapper, {
    variant,
    onClick: () => setShow(false),
    css: {
      fontSize: "$lg",
      position: "absolute",
      top: "16px",
      right: "16px",
      cursor: "pointer"
    }
  }, /* @__PURE__ */ React.default.createElement(CloseIcon, null)), !banner && variant && variant !== "primary" && /* @__PURE__ */ React.default.createElement(Flex, {
    css: { width: "100%", "@sm": { width: "auto" } }
  }, /* @__PURE__ */ React.default.createElement(IconWrapper, {
    variant,
    css: { fontSize: "$lg" }
  }, icons[variant])), /* @__PURE__ */ React.default.createElement(Flex, {
    direction: "column",
    gap: 1,
    css: { flex: "auto", "@sm": { flex: 1 } }
  }, /* @__PURE__ */ React.default.createElement(Flex, null, /* @__PURE__ */ React.default.createElement(Title, {
    size: "xl",
    transform: "uppercase",
    variant
  }, title)), /* @__PURE__ */ React.default.createElement(Flex, {
    gap: 1,
    direction: "column",
    css: { width: "100%", "@sm": { width: "auto" } }
  }, subtitle && /* @__PURE__ */ React.default.createElement(Subtitle, {
    transform: "uppercase",
    variant
  }, subtitle), description && /* @__PURE__ */ React.default.createElement(Text, {
    transform: "normal",
    size: "sm",
    css: { color: "$white" }
  }, description))), isDesktop && /* @__PURE__ */ React.default.createElement(Spacer, null), /* @__PURE__ */ React.default.createElement(Flex, {
    align,
    gap: 2,
    wrap: "wrap",
    css: { flexGrow: 1, "@sm": { flexGrow: "unset" } }
  }, React.default.Children.map(children, (child) => React.default.cloneElement(child, {
    fluid: { "@initial": true, "@sm": false }
  })))));
};

// src/components/avatar/index.tsx


// src/components/image/index.tsx


// src/components/image/styles.tsx
var loading = keyframes({
  from: {
    opacity: 0.9
  },
  to: {
    opacity: 0.5
  }
});
var Wrapper2 = styled("div", {
  position: "relative"
});
var Loading = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  w: "$full",
  h: "$full",
  bg: "$grey-700",
  animation: `${loading} 1s infinite linear running alternate`
});
var Image = styled("img", {
  color: "transparent",
  overflow: "hidden",
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  size: "$full",
  transitionTimingFunction: "cubic-bezier(.2, 0, .2, 1)",
  transitionDuration: "0.3s",
  variants: {
    objectFit: {
      true: {
        objectFit: "cover"
      },
      false: {
        objectFit: "contain"
      }
    },
    cover: {
      true: {
        backgroundSize: "cover"
      },
      false: {
        backgroundSize: "contain"
      }
    },
    isLoading: {
      true: {
        filter: "grayscale(1) blur(2px)"
      },
      false: {
        filter: "grayscale(0) blur(0px)"
      }
    }
  },
  defaultVariants: {
    objectFit: "true",
    cover: "true"
  }
});

// src/components/image/index.tsx
var Image2 = forwardRef2((props, ref) => {
  const _a = props, { fallbackSrc, ratio = 1, onLoad, onError } = _a, rest = __objRest(_a, ["fallbackSrc", "ratio", "onLoad", "onError"]);
  const [isLoading, setIsLoading] = React.default.useState(true);
  const onImageLoaded = (e) => {
    setIsLoading(false);
    !!onLoad && onLoad(e);
  };
  const onImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackSrc || "";
    !!onError && onError(e);
  };
  return /* @__PURE__ */ React.default.createElement(Wrapper2, {
    css: {
      "&::before": {
        height: 0,
        content: "",
        display: "block",
        pb: `${1 / ratio * 100}%`
      }
    }
  }, isLoading && /* @__PURE__ */ React.default.createElement(Loading, null), /* @__PURE__ */ React.default.createElement(Image, __spreadValues({
    ref,
    loading: "lazy",
    isLoading,
    onError: onImageError,
    onLoad: onImageLoaded
  }, rest)));
});

// src/components/avatar/styles.ts
var Avatar = styled(Image2, {
  variants: {
    size: {
      "24": {
        size: 24,
        br: "$full"
      },
      "32": {
        size: 32
      },
      "40": {
        size: 40
      },
      "64": {
        size: 64
      },
      "80": {
        size: 80
      },
      "88": {
        size: 88
      },
      "160": {
        size: 160
      },
      "192": {
        size: 192
      },
      "240": {
        size: 240
      }
    }
  },
  defaultVariants: {
    size: "80"
  }
});

// src/components/avatar/index.tsx
var Avatar2 = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.default.createElement(Avatar, __spreadValues({}, props));
};

// src/components/badge/index.tsx


// src/components/badge/styles.ts
var Wrapper3 = styled("div", {
  d: "inline-flex",
  color: "$white",
  fontSize: "$xs",
  fontWeight: "$bold",
  textTransform: "uppercase",
  lineHeight: "150%",
  variants: {
    rarity: {
      rare: {
        bg: "$pink-600"
      },
      common: {
        bg: "$pink-500"
      },
      uncommon: {
        bg: "$pink-600"
      },
      ultraRare: {
        bg: "$pink-600"
      },
      legendary: {
        bg: "$pink-600"
      }
    }
  },
  defaultVariants: {
    rarity: "common"
  }
});
var Tail = styled("div", {
  w: 2
});
var Space = styled("div", {
  w: 2,
  bg: "black"
});
var Badge = styled("label", {
  h: 16,
  px: "$1",
  d: "inline-flex",
  align: "center",
  justify: "center",
  userSelect: "none"
});

// src/components/badge/index.tsx
var spaceOnCamelCase = (str) => typeof str === "string" && str.replace(/([a-z])([A-Z])/g, "$1 $2");
var Badge2 = (_a) => {
  var _b = _a, { rarity } = _b, props = __objRest(_b, ["rarity"]);
  return /* @__PURE__ */ React.default.createElement(Wrapper3, __spreadValues({
    rarity
  }, props), /* @__PURE__ */ React.default.createElement(Tail, null), /* @__PURE__ */ React.default.createElement(Space, null), /* @__PURE__ */ React.default.createElement(Badge, null, spaceOnCamelCase(rarity)));
};

// src/components/box/index.tsx
var { colors: colors3, space: space2 } = config.theme;
var Box = styled("div", {
  d: "block",
  variants: {
    bg: __spreadValues({}, Object.keys(colors3).reduce((prev, curr) => __spreadProps(__spreadValues({}, prev), {
      [curr]: { bg: `$${curr}` }
    }), {})),
    color: __spreadValues({}, Object.keys(colors3).reduce((prev, curr) => __spreadProps(__spreadValues({}, prev), {
      [curr]: { color: `$${curr}` }
    }), {})),
    m: __spreadValues({}, Object.keys(space2).reduce((prev, curr) => __spreadProps(__spreadValues({}, prev), {
      [curr]: { m: `$${curr}` }
    }), {})),
    mx: __spreadValues({}, Object.keys(space2).reduce((prev, curr) => __spreadProps(__spreadValues({}, prev), {
      [curr]: { mx: `$${curr}` }
    }), {})),
    my: __spreadValues({}, Object.keys(space2).reduce((prev, curr) => __spreadProps(__spreadValues({}, prev), {
      [curr]: { my: `$${curr}` }
    }), {})),
    p: __spreadValues({}, Object.keys(space2).reduce((prev, curr) => __spreadProps(__spreadValues({}, prev), {
      [curr]: { p: `$${curr}` }
    }), {})),
    px: __spreadValues({}, Object.keys(space2).reduce((prev, curr) => __spreadProps(__spreadValues({}, prev), {
      [curr]: { px: `$${curr}` }
    }), {})),
    py: __spreadValues({}, Object.keys(space2).reduce((prev, curr) => __spreadProps(__spreadValues({}, prev), {
      [curr]: { py: `$${curr}` }
    }), {}))
  }
});

// src/components/character/index.tsx


// src/components/character/styles.ts
var Wrapper4 = styled("div", {
  position: "relative",
  variants: {
    size: {
      "80": {
        size: 80
      },
      "160": {
        size: 160
      }
    },
    active: {
      true: {
        bs: "0 0 0 1px $colors$pink-500"
      }
    }
  }
});
var Overlay = styled("div", {
  position: "absolute",
  top: 0,
  size: "$full",
  d: "flex",
  flexDirection: "column",
  justify: "space-between"
});
var Top = styled("div", {
  d: "flex",
  flexDirection: "column",
  variants: {
    size: {
      "80": {
        p: "$1",
        pb: "0"
      },
      "160": {
        p: "$3",
        pb: "0"
      }
    }
  }
});
var Center = styled("div", {
  d: "flex",
  justify: "center",
  align: "center",
  px: "$3"
});
var Bottom = styled("div", {
  d: "flex",
  justify: "flex-end",
  variants: {
    size: {
      "80": {
        size: "$1"
      },
      "160": {
        p: "$3",
        pt: "0"
      }
    }
  }
});
var Typename = styled("div", {
  fontWeight: "$medium",
  color: "$pink-500",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  variants: {
    empty: {
      true: {
        color: "$white"
      }
    },
    size: {
      "80": {
        fontSize: "$sm",
        lineHeight: "20px"
      },
      "160": {
        fontSize: "$md",
        lineHeight: "24px"
      }
    }
  }
});
var Info = styled("span", {
  fontSize: "$sm",
  fontWeight: "$medium",
  color: "$white",
  lineHeight: "24px",
  letterSpacing: "0.05em",
  textTransform: "uppercase"
});
var Index = styled("div", {
  d: "flex",
  justify: "center",
  align: "center",
  bg: "$pink-500",
  color: "$white",
  fontWeight: "$medium",
  userSelect: "none",
  variants: {
    size: {
      "80": {
        fontSize: "$sm",
        lineHeight: 20,
        size: 20
      },
      "160": {
        fontSize: "$md",
        lineHeight: 24,
        size: 32
      }
    }
  }
});

// src/components/character/index.tsx
var Character = ({
  active,
  index,
  type,
  src,
  alt,
  showIndex
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const size = isMobile ? "80" : "160";
  return /* @__PURE__ */ React.default.createElement(Wrapper4, {
    active,
    size
  }, /* @__PURE__ */ React.default.createElement(Avatar2, {
    size,
    src,
    alt
  }), /* @__PURE__ */ React.default.createElement(Overlay, null, /* @__PURE__ */ React.default.createElement(Top, {
    size
  }, /* @__PURE__ */ React.default.createElement(Typename, {
    size,
    empty: !!type
  }, type || "Empty"), !isMobile && !type && !active && /* @__PURE__ */ React.default.createElement(Info, null, "Select a character to assign")), /* @__PURE__ */ React.default.createElement(Center, null, !isMobile && !type && active && /* @__PURE__ */ React.default.createElement(Button2, {
    css: { w: "100%" }
  }, "Assign")), showIndex && /* @__PURE__ */ React.default.createElement(Bottom, {
    size
  }, /* @__PURE__ */ React.default.createElement(Index, {
    size
  }, index))));
};

// src/components/checkbox/index.tsx


// src/components/checkbox/icon.tsx

var CheckIcon = () => /* @__PURE__ */ React.default.createElement("svg", {
  viewBox: "0 0 1024 1024",
  height: "12",
  width: "12"
}, /* @__PURE__ */ React.default.createElement("path", {
  fill: "currentColor",
  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
}));

// src/components/checkbox/styles.ts
var _reactcheckbox = require('@radix-ui/react-checkbox'); var CheckboxBase = _interopRequireWildcard(_reactcheckbox);
var CheckboxInput = styled(CheckboxBase.Root, {
  all: "unset",
  bg: "$black",
  color: "$pink-500",
  d: "flex",
  justify: "center",
  align: "center",
  border: "1px solid",
  borderColor: "$grey-600",
  "&:hover": {
    borderColor: "$pink-500"
  },
  "&:active, &:focus-within": {
    borderColor: "$teal-500"
  },
  "&:disabled": {
    bg: "$grey-400",
    color: "$grey-600"
  },
  variants: {
    size: {
      sm: {
        size: 12,
        minSize: 12
      },
      md: {
        size: 16,
        minSize: 16
      },
      lg: {
        size: 20,
        minSize: 20
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var CheckboxIndicator = styled(CheckboxBase.Indicator, {
  color: "currentColor"
});
var Label = styled("label", {
  d: "flex",
  align: "center",
  color: "$grey-400",
  cursor: "pointer",
  gap: "$2",
  variants: {
    size: {
      sm: {
        fontSize: "$xs"
      },
      md: {
        fontSize: "$sm"
      },
      lg: {
        fontSize: "$md"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/components/checkbox/index.tsx
var Checkbox = forwardRef2((props, ref) => {
  const _a = props, { size, children } = _a, rest = __objRest(_a, ["size", "children"]);
  return /* @__PURE__ */ React.default.createElement(Label, {
    size
  }, /* @__PURE__ */ React.default.createElement(CheckboxInput, __spreadValues({
    ref,
    size
  }, rest), /* @__PURE__ */ React.default.createElement(CheckboxIndicator, null, /* @__PURE__ */ React.default.createElement(CheckIcon, null))), children);
});

// src/components/container/index.tsx
var Container = styled("div", {
  boxSizing: "border-box",
  flexShrink: 0,
  w: "$full",
  maxW: "$2xl",
  m: "0 auto",
  px: "$4"
});

// src/components/content-heading/index.tsx


// src/components/content-heading/icon.tsx

var InfoIcon = () => /* @__PURE__ */ React.default.createElement("svg", {
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ React.default.createElement("path", {
  fill: "currentColor",
  d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
}));

// src/components/content-heading/styles.ts
var Wrapper5 = styled("div", {
  d: "flex",
  flexDirection: "column",
  gap: "$2"
});
var Title2 = styled("h3", {
  d: "inline-flex",
  gap: "$2",
  align: "center",
  fontWeight: "$medium",
  fontSize: "$lg",
  lineHeight: "24px",
  m: 0,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: "$white",
  "@md": {
    fontSize: "$md",
    lineHeight: "20px",
    letterSpacing: "0.1em"
  },
  svg: {
    color: "$white",
    fontSize: "19px",
    "@md": {
      fontSize: "13px"
    }
  }
});
var Description = styled("p", {
  fontFamily: "inherit",
  fontSize: "$md",
  fontWeight: "$medium",
  lineHeight: "24px",
  color: "$grey-600",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  m: 0,
  "@md": {
    fontSize: "$sm",
    lineHeight: "20px",
    fontWeight: "$normal",
    letterSpacing: 0
  },
  variants: {
    line: {
      true: {
        borderLeft: "2px solid $white",
        pl: "$4"
      }
    }
  },
  defaultVariants: {
    line: "true"
  }
});

// src/components/content-heading/index.tsx
var ContentHeading = (_a) => {
  var _b = _a, {
    title,
    children,
    line,
    info
  } = _b, props = __objRest(_b, [
    "title",
    "children",
    "line",
    "info"
  ]);
  return /* @__PURE__ */ React.default.createElement(Wrapper5, __spreadValues({}, props), /* @__PURE__ */ React.default.createElement(Title2, null, title, info && /* @__PURE__ */ React.default.createElement(InfoIcon, null)), children && /* @__PURE__ */ React.default.createElement(Description, {
    line
  }, children));
};

// src/components/grid/index.tsx
var Grid = styled(Flex, {
  d: "grid",
  variants: {
    flow: {
      row: {
        gridAutoFlow: "row"
      },
      column: {
        gridAutoFlow: "column"
      },
      dense: {
        gridAutoFlow: "dense"
      },
      rowDense: {
        gridAutoFlow: "row dense"
      },
      columnDense: {
        gridAutoFlow: "column dense"
      }
    },
    columns: {
      1: {
        gridTemplateColumns: "repeat(1, 1fr)"
      },
      2: {
        gridTemplateColumns: "repeat(2, 1fr)"
      },
      3: {
        gridTemplateColumns: "repeat(3, 1fr)"
      },
      4: {
        gridTemplateColumns: "repeat(4, 1fr)"
      },
      5: {
        gridTemplateColumns: "repeat(5, 1fr)"
      },
      6: {
        gridTemplateColumns: "repeat(6, 1fr)"
      },
      7: {
        gridTemplateColumns: "repeat(7, 1fr)"
      },
      8: {
        gridTemplateColumns: "repeat(8, 1fr)"
      },
      9: {
        gridTemplateColumns: "repeat(9, 1fr)"
      },
      10: {
        gridTemplateColumns: "repeat(10, 1fr)"
      },
      11: {
        gridTemplateColumns: "repeat(11, 1fr)"
      },
      12: {
        gridTemplateColumns: "repeat(12, 1fr)"
      }
    },
    gapX: {
      1: {
        columnGap: "$1"
      },
      2: {
        columnGap: "$2"
      },
      3: {
        columnGap: "$3"
      },
      4: {
        columnGap: "$4"
      },
      5: {
        columnGap: "$5"
      },
      6: {
        columnGap: "$6"
      },
      7: {
        columnGap: "$7"
      },
      8: {
        columnGap: "$8"
      },
      9: {
        columnGap: "$9"
      },
      10: {
        columnGap: "$10"
      },
      11: {
        columnGap: "$11"
      },
      12: {
        columnGap: "$12"
      },
      13: {
        columnGap: "$13"
      },
      14: {
        columnGap: "$14"
      },
      15: {
        columnGap: "$15"
      },
      16: {
        columnGap: "$16"
      },
      17: {
        columnGap: "$17"
      },
      18: {
        columnGap: "$18"
      },
      19: {
        columnGap: "$19"
      },
      20: {
        columnGap: "$20"
      }
    },
    gapY: {
      1: {
        rowGap: "$1"
      },
      2: {
        rowGap: "$2"
      },
      3: {
        rowGap: "$3"
      },
      4: {
        rowGap: "$4"
      },
      5: {
        rowGap: "$5"
      },
      6: {
        rowGap: "$6"
      },
      7: {
        rowGap: "$7"
      },
      8: {
        rowGap: "$8"
      },
      9: {
        rowGap: "$9"
      },
      10: {
        rowGap: "$10"
      },
      11: {
        rowGap: "$11"
      },
      12: {
        rowGap: "$12"
      },
      13: {
        rowGap: "$13"
      },
      14: {
        rowGap: "$14"
      },
      15: {
        rowGap: "$15"
      },
      16: {
        rowGap: "$16"
      },
      17: {
        rowGap: "$17"
      },
      18: {
        rowGap: "$18"
      },
      19: {
        rowGap: "$19"
      },
      20: {
        rowGap: "$20"
      }
    }
  }
});

// src/components/input/index.tsx






// src/components/input/icon.tsx

var CloseIcon2 = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.default.createElement("svg", __spreadValues({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.default.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    d: "M3,3 L21,21 M3,21 L21,3"
  }));
};

// src/components/input/styles.ts
var _reactlabel = require('@radix-ui/react-label'); var LabelBase = _interopRequireWildcard(_reactlabel); var LabelBase2 = _interopRequireWildcard(_reactlabel);
var Wrapper6 = styled("div", {
  color: "$white"
});
var Label2 = styled(LabelBase.Root, {
  d: "block",
  mb: "$1",
  textTransform: "uppercase",
  fontWeight: "$medium",
  variants: {
    disabled: {
      true: {
        color: "$grey-600"
      }
    }
  }
});
var Input = styled("input", {
  appearance: "none",
  border: "1px solid transparent",
  outline: 0,
  fontFamily: "inherit",
  w: "$full",
  h: 40,
  px: "$4",
  fontSize: "$md",
  bg: "$black",
  color: "$grey-600",
  transition: "$fast",
  "&:hover": {
    borderBottomColor: "$pink-600"
  },
  "&:focus": {
    borderBottomColor: "$teal-500",
    borderBottomWidth: "1px"
  },
  "&:disabled": {
    color: "$grey-700",
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      default: {
        border: "1px solid $grey-600"
      },
      line: {
        borderBottom: "1px solid $grey-600"
      }
    },
    error: {
      true: {
        borderBottom: "1px solid  $red-500"
      }
    },
    leftIcon: {
      true: {
        pl: "$10"
      }
    },
    rightIcon: {
      true: {
        pr: "$10"
      }
    }
  },
  compoundVariants: [
    {
      variant: "line",
      css: {
        "&:disabled": {
          border: "1px solid $grey-700"
        }
      }
    },
    {
      variant: "default",
      css: {
        "&:disabled": {
          bg: "$grey-600",
          color: "$grey-800"
        }
      }
    }
  ],
  defaultVariants: {
    variant: "default"
  }
});
var sharedIconStyles = {
  d: "flex",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: "$grey-400"
};
var LeftIcon = styled("div", __spreadProps(__spreadValues({}, sharedIconStyles), {
  left: "$4"
}));
var RightIcon = styled("div", __spreadProps(__spreadValues({}, sharedIconStyles), {
  right: "$4",
  variants: {
    cleanable: {
      true: {
        pointerEvents: "all",
        bg: "transparent",
        border: 0,
        cursor: "pointer"
      }
    }
  }
}));
var CleanIcon = styled(CloseIcon2, {
  color: "$white"
});
var Message = styled("small", {
  color: "$grey-400",
  fontSize: "$sm",
  variants: {
    disabled: {
      true: {
        color: "$grey-700"
      }
    }
  }
});
var Error2 = styled("div", {
  color: "$red-500",
  fontSize: "$sm",
  mt: "$1"
});

// src/components/input/index.tsx
var Input2 = forwardRef2((props, ref) => {
  const [hasValue, setHasValue] = _react.useState.call(void 0, false);
  const innerRef = _react.useRef.call(void 0, );
  const _a = props, {
    label,
    hint,
    error,
    disabled,
    leftIcon,
    rightIcon,
    cleanable,
    css: css2,
    onChange
  } = _a, rest = __objRest(_a, [
    "label",
    "hint",
    "error",
    "disabled",
    "leftIcon",
    "rightIcon",
    "cleanable",
    "css",
    "onChange"
  ]);
  if (!!rightIcon && cleanable) {
    throw new Error("You can't use both 'rightIcon' and 'cleanable' props");
  }
  const handleChange = _react.useCallback.call(void 0, (event) => {
    if (cleanable) {
      setHasValue(!!event.target.value);
    }
    onChange && onChange(event);
  }, [cleanable, onChange]);
  const handleClean = _react.useCallback.call(void 0, () => {
    if (innerRef.current) {
      innerRef.current.value = "";
      innerRef.current.focus();
    }
    setHasValue(false);
  }, []);
  return /* @__PURE__ */ React.default.createElement(Wrapper6, {
    css: css2
  }, label && /* @__PURE__ */ React.default.createElement(Label2, {
    disabled
  }, label), /* @__PURE__ */ React.default.createElement(Flex, {
    css: { position: "relative" }
  }, !!leftIcon && /* @__PURE__ */ React.default.createElement(LeftIcon, null, leftIcon), /* @__PURE__ */ React.default.createElement(Input, __spreadValues({
    ref: useMergeRefs(ref, innerRef),
    disabled,
    leftIcon: !!leftIcon,
    rightIcon: !!rightIcon,
    error: !!error,
    onChange: handleChange
  }, rest)), !!rightIcon && /* @__PURE__ */ React.default.createElement(RightIcon, null, rightIcon), cleanable && hasValue && /* @__PURE__ */ React.default.createElement(RightIcon, {
    as: "button",
    "aria-label": "Clear input",
    cleanable,
    onClick: handleClean
  }, /* @__PURE__ */ React.default.createElement(CleanIcon, null))), error && /* @__PURE__ */ React.default.createElement(Error2, null, error), hint && /* @__PURE__ */ React.default.createElement(Message, {
    disabled
  }, hint));
});

// src/components/label/index.tsx


// src/components/label/styles.ts
var Label3 = styled("div", {
  userSelect: "none",
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  d: "inline-flex",
  p: "$2",
  align: "center",
  gap: "$2",
  color: "$grey-800",
  variants: {
    variant: {
      success: {
        bg: "$green-500"
      },
      warning: {
        bg: "$yellow-500"
      },
      danger: {
        bg: "$red-500"
      }
    },
    icon: {
      true: {
        pl: "10px"
      }
    }
  },
  defaultVariants: {
    variant: "success"
  }
});

// src/components/label/index.tsx
var Label4 = forwardRef2((props, ref) => {
  const _a = props, { variant = "success", icon, children } = _a, rest = __objRest(_a, ["variant", "icon", "children"]);
  return /* @__PURE__ */ React.default.createElement(Label3, __spreadValues({
    ref,
    variant,
    icon: !!icon
  }, rest), icon && icon, /* @__PURE__ */ React.default.createElement(Text, {
    size: "sm"
  }, children));
});

// src/components/logo/index.tsx


// src/components/logo/styles.ts
var Svg = styled("svg", {});

// src/components/logo/index.tsx
var Logo = forwardRef2((props, ref) => {
  const _a = props, { variant = "full" } = _a, rest = __objRest(_a, ["variant"]);
  return variant === "full" ? /* @__PURE__ */ React.default.createElement(Svg, __spreadValues({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: "250",
    height: "16",
    fill: "none"
  }, rest), /* @__PURE__ */ React.default.createElement("path", {
    d: "M39.522 0H24.816c-.511 0-.919.395-.919.889s.409.889.919.889h14.706c.511 0 .919-.395.919-.889S40.012 0 39.522 0zM1.838 9.778v5.333c0 .494-.408.889-.919.889S0 15.605 0 15.111V9.778c0-.494.408-.889.919-.889s.919.395.919.889zM15.625 0c-.245 0-.47.099-.654.257a.9.9 0 0 0-.265.632v12.069L1.94.612a.92.92 0 0 0-1.266.02c-.347.336-.368.889-.02 1.225l14.052 13.59.265.257c.266.257.654.336 1.001.197s.572-.454.572-.83V.849c0-.237-.102-.454-.265-.632A1.08 1.08 0 0 0 15.625 0zM72.61 8.889c-.245 0-.47.099-.654.257s-.265.395-.265.632v5.333c0 .494.408.889.919.889s.919-.395.919-.889V9.778c0-.237-.102-.454-.266-.632s-.409-.257-.654-.257zM87.316 0c-.245 0-.47.099-.654.257a.9.9 0 0 0-.265.632v12.069L73.632.612a.94.94 0 0 0-.899-.257c-.327.079-.572.336-.654.632a.87.87 0 0 0 .266.869l14.052 13.59.265.257c.266.257.654.336 1.001.197s.572-.454.572-.83V.849c0-.237-.102-.454-.266-.632A1.08 1.08 0 0 0 87.316 0zM35.846 8.889c.511 0 .919-.395.919-.889s-.408-.889-.919-.889h-7.353c-.511 0-.919.395-.919.889s.409.889.919.889h7.353zm3.676 5.333H24.816c-.511 0-.919.395-.919.889s.409.889.919.889h14.706c.511 0 .919-.395.919-.889s-.429-.889-.919-.889zM64.338 2.667v10.667a2.54 2.54 0 0 1-.817 1.877c-.531.494-1.226.79-1.94.79H50.551c-.735 0-1.43-.277-1.94-.79-.511-.494-.817-1.185-.817-1.877V2.667A2.54 2.54 0 0 1 48.611.79a2.84 2.84 0 0 1 1.94-.79h11.029c.735 0 1.43.277 1.94.79s.817 1.165.817 1.877zm-1.838 0c0-.237-.102-.454-.266-.632-.163-.158-.409-.257-.654-.257H50.551c-.245 0-.47.099-.654.257a.9.9 0 0 0-.265.632v10.667c0 .237.102.454.265.632s.409.257.654.257h11.029a1 1 0 0 0 .654-.257c.184-.158.266-.395.266-.632V2.667z",
    fill: "url(#A)"
  }), /* @__PURE__ */ React.default.createElement("path", {
    d: "M119.485 14.222L121.324 16V1.778L119.485 0v14.222zm9.192-5.333h14.705v5.333h-10.273l-1.818-1.758h-2.594L132.353 16h12.888V7.111h-14.706V1.778h12.868l1.838 1.778V0h-16.544v8.889h-.02zm23.897-7.111h7.353v12.444L161.765 16V1.778h7.353V0h-16.544v1.778zm47.794 12.444L202.206 16V1.778L200.368 0v14.222zM233.456 0v1.778h7.353v12.444L242.647 16V1.778H250V0h-16.544zm-56.985 0h16.544v5.333L190.257 8l2.758 2.667V16l-1.838-1.778v-2.785l-2.594-2.548h-10.274V16l-1.838-1.778V0zm1.838 7.111h10.274l2.594-2.509V1.778h-12.868v5.333zM95.588 0v14.222L97.427 16V1.778H107.7l2.594 2.509v9.936h-7.353L104.78 16h7.352V3.536L108.476 0H95.588zm115.809 14.222V1.778h10.274l1.818 1.758h2.594L222.427 0h-12.889v16h16.545v-3.556l-1.839 1.778h-12.847z",
    fill: "url(#B)"
  }), /* @__PURE__ */ React.default.createElement("defs", null, /* @__PURE__ */ React.default.createElement("linearGradient", {
    id: "A",
    x1: "30.198",
    y1: "9.021",
    x2: "37.781",
    y2: "-4.569",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.default.createElement("stop", {
    stopColor: "#0af5f7"
  }), /* @__PURE__ */ React.default.createElement("stop", {
    offset: "1",
    stopColor: "#5ea1b3"
  })), /* @__PURE__ */ React.default.createElement("linearGradient", {
    id: "B",
    x1: "147.601",
    y1: "8.405",
    x2: "158.763",
    y2: "-11.561",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.default.createElement("stop", {
    stopColor: "#b84769"
  }), /* @__PURE__ */ React.default.createElement("stop", {
    offset: "1",
    stopColor: "#ff002f"
  })))) : /* @__PURE__ */ React.default.createElement(Svg, __spreadValues({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: "31",
    height: "16",
    fill: "none"
  }, rest), /* @__PURE__ */ React.default.createElement("path", {
    d: "M.9 8.844a.9.9 0 0 0-.636.264.9.9 0 0 0-.264.636V15.1a.9.9 0 0 0 .9.9.9.9 0 0 0 .9-.9V9.744c0-.118-.023-.236-.068-.345s-.111-.209-.195-.293-.183-.15-.293-.195-.227-.068-.345-.068z",
    fill: "url(#A)"
  }), /* @__PURE__ */ React.default.createElement("path", {
    d: "M30.173 3.489L26.684 0H14.199v12.928L1.854.583A.9.9 0 0 0 .597.597.9.9 0 0 0 .583 1.854l13.882 13.875a.9.9 0 0 0 .98.194.9.9 0 0 0 .556-.83V1.794h9.936l2.436 2.436v9.963h-7.083l1.794 1.794h7.083l.007-12.498z",
    fill: "url(#A)"
  }), /* @__PURE__ */ React.default.createElement("defs", null, /* @__PURE__ */ React.default.createElement("linearGradient", {
    id: "A",
    x1: "0",
    y1: "16.02",
    x2: "30.186",
    y2: "0",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.default.createElement("stop", {
    stopColor: "#11eef1"
  }), /* @__PURE__ */ React.default.createElement("stop", {
    offset: "1",
    stopColor: "#f70835"
  }))));
});

// src/components/radio/index.tsx


// src/components/radio/styles.ts
var _reactradiogroup = require('@radix-ui/react-radio-group'); var RadioGroupBase = _interopRequireWildcard(_reactradiogroup);
var RadioGroup = styled(RadioGroupBase.Root, {
  color: "$white"
});
var RadioInputItem = styled(RadioGroupBase.Item, {
  all: "unset",
  bg: "$white",
  size: 20,
  minSize: 20,
  br: "$full",
  cursor: "pointer",
  transition: "$fast",
  border: "1px solid",
  "&:hover": {
    borderColor: "$pink-600"
  },
  "&:focus, &:focus-within": {
    borderColor: "$teal-500"
  },
  "&:disabled": {
    borderColor: "$grey-600",
    bg: "$grey-400",
    span: {
      borderColor: "$grey-400",
      "&:after": {
        bg: "$grey-600"
      }
    }
  },
  "&:active, &:focus-within": {
    borderColor: "$colors$teal-500"
  },
  '&[aria-checked="true"]': {
    borderColor: "$pink-500",
    "&:disabled": {
      bg: "$grey-400",
      borderColor: "$grey-600"
    }
  },
  variants: {
    error: {
      true: {
        borderColor: "$red-500"
      }
    }
  }
});
var RadioIndicator = styled(RadioGroupBase.Indicator, {
  d: "flex",
  align: "center",
  justify: "center",
  size: "$full",
  position: "relative",
  transition: "$fast",
  "&:after": {
    content: "",
    d: "block",
    size: 14,
    bg: "$pink-500",
    br: "$full"
  }
});
var Label5 = styled("label", {
  d: "flex",
  align: "center",
  color: "$grey-400",
  fontSize: "$sm",
  fontWeight: "$medium",
  gap: "$2",
  cursor: "pointer",
  textTransform: "uppercase",
  variants: {
    error: {
      true: {
        color: "$red-500"
      }
    },
    disabled: {
      true: {
        color: "$grey-700"
      }
    }
  }
});

// src/components/radio/index.tsx
var RadioGroup2 = forwardRef2((props, ref) => {
  const _a = props, { label, children } = _a, rest = __objRest(_a, ["label", "children"]);
  return /* @__PURE__ */ React.default.createElement(RadioGroup, __spreadValues({
    ref,
    "aria-label": label
  }, rest), children);
});
var RadioItem = forwardRef2((props, ref) => {
  const _a = props, { error, css: css2, children, disabled } = _a, rest = __objRest(_a, ["error", "css", "children", "disabled"]);
  return /* @__PURE__ */ React.default.createElement(Label5, {
    disabled,
    error,
    css: css2
  }, /* @__PURE__ */ React.default.createElement(RadioInputItem, __spreadValues({
    ref,
    error,
    disabled
  }, rest), /* @__PURE__ */ React.default.createElement(RadioIndicator, null)), children);
});

// src/components/stepper/index.tsx


// src/components/stepper/desktop/index.tsx


// src/components/stepper/useStepper.ts

var useStepper = (activeItem, items) => {
  const totalItems = _react.useMemo.call(void 0, () => items.length, [items]);
  const activeItemLabel = _react.useMemo.call(void 0, () => items[activeItem - 1], [items, activeItem]);
  return { totalItems, activeItemLabel };
};

// src/components/stepper/desktop/icon.tsx

var CaretRightIcon = () => /* @__PURE__ */ React.default.createElement("svg", {
  width: "1rem",
  height: "1rem",
  viewBox: "0 0 9 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React.default.createElement("path", {
  d: "M9 6L0 11.1962L0 0.803848L9 6Z",
  fill: "currentColor"
}));

// src/components/stepper/desktop/styles.ts
var Wrapper7 = styled("ul", {
  m: 0,
  p: 0,
  d: "flex",
  w: "$full"
});
var ItemWrapper = styled("li", {
  d: "flex",
  w: "$full",
  h: 36,
  justify: "space-between",
  align: "center",
  bg: "$grey-700",
  color: "$grey-600",
  borderBottom: "2px solid $white",
  textTransform: "uppercase",
  fontWeight: "$medium",
  userSelect: "none",
  pl: "$6",
  "&:last-of-type": {
    span: {
      d: "none"
    }
  },
  '&[aria-current="true"]': {
    bg: "$white",
    color: "$grey-700",
    svg: {
      color: "$white"
    }
  }
});
var IconWrapper2 = styled("span", {
  w: "24px",
  h: "$full",
  bg: "$black",
  d: "flex",
  justify: "center",
  align: "center",
  "& svg": {
    width: "12px",
    height: "12px"
  }
});

// src/components/stepper/desktop/index.tsx
var DesktopStepper = ({ activeItem, items, css: css2 }) => {
  const { totalItems } = useStepper(activeItem, items);
  return /* @__PURE__ */ React.default.createElement(Wrapper7, {
    "data-steps": totalItems,
    css: css2
  }, items == null ? void 0 : items.map((item, index) => {
    const currentItem = index + 1;
    return /* @__PURE__ */ React.default.createElement(ItemWrapper, {
      key: index,
      "aria-current": currentItem === activeItem
    }, item, /* @__PURE__ */ React.default.createElement(IconWrapper2, {
      "aria-hidden": true
    }, /* @__PURE__ */ React.default.createElement(CaretRightIcon, null)));
  }));
};

// src/components/stepper/mobile/index.tsx


// src/components/stepper/mobile/styles.ts
var Wrapper8 = styled("ul", {
  m: 0,
  p: 0,
  d: "flex",
  justify: "space-between"
});
var StepperItem = styled("li", {
  position: "relative",
  d: "flex",
  flexDirection: "column",
  align: "center",
  flex: 1,
  "&:before": {
    position: "absolute",
    content: "",
    borderBottom: "2px solid $grey-700",
    w: "$full",
    top: "3px",
    left: "-50%",
    zIndex: 2
  },
  "&:after": {
    position: "absolute",
    content: "",
    borderBottom: "2px solid $grey-700",
    w: "$full",
    top: "3px",
    left: "50%",
    zIndex: 2
  },
  "&:first-child::before": {
    content: "none"
  },
  "&:last-child::after": {
    content: "none"
  },
  '&[aria-current="true"] span': {
    bg: "$white"
  },
  variants: {
    completed: {
      true: {
        span: {
          bg: "$white"
        },
        "&:after": {
          position: "absolute",
          content: "",
          borderBottom: "2px solid $white",
          w: "$full",
          top: "3px",
          left: "50%",
          zIndex: 3
        }
      }
    }
  }
});
var StepperItemIcon = styled("span", {
  position: "relative",
  size: 8,
  d: "flex",
  justify: "center",
  align: "center",
  bg: "$grey-700",
  br: "$full",
  zIndex: 5
});

// src/components/stepper/mobile/index.tsx
var MobileStepper = ({ activeItem, items, css: css2 }) => {
  const { totalItems, activeItemLabel } = useStepper(activeItem, items);
  return /* @__PURE__ */ React.default.createElement(React.default.Fragment, null, /* @__PURE__ */ React.default.createElement(VisuallyHidden, null, `Step ${activeItem} of ${totalItems}`), /* @__PURE__ */ React.default.createElement(Box, {
    css: css2
  }, /* @__PURE__ */ React.default.createElement(Flex, {
    css: { justify: "space-between", align: "flex-end" }
  }, /* @__PURE__ */ React.default.createElement(Box, {
    css: { textTransform: "uppercase" },
    "aria-hidden": true
  }, /* @__PURE__ */ React.default.createElement(Text, {
    size: "xs",
    weight: "medium",
    css: { color: "$grey-600" }
  }, "Step ", activeItem), /* @__PURE__ */ React.default.createElement(Text, {
    weight: "medium",
    css: { mt: "$1" }
  }, activeItemLabel)), /* @__PURE__ */ React.default.createElement(Wrapper8, {
    "data-steps": totalItems,
    "aria-hidden": true,
    css: { w: "50%" }
  }, items == null ? void 0 : items.map((_, index) => {
    const currentItem = index + 1;
    return /* @__PURE__ */ React.default.createElement(StepperItem, {
      key: index,
      completed: activeItem > currentItem,
      "aria-current": activeItem === currentItem
    }, /* @__PURE__ */ React.default.createElement(StepperItemIcon, {
      "aria-hidden": true
    }));
  })))));
};

// src/components/stepper/index.tsx
var Stepper = (_a) => {
  var props = __objRest(_a, []);
  const { activeItem, items } = props;
  const { totalItems } = useStepper(activeItem, items);
  const isDesktop = useBreakpoint("sm");
  if (activeItem < 1) {
    throw new Error("The activeItem prop must be greater than 0.");
  }
  if (props.activeItem > totalItems) {
    throw new Error(`The active item (${activeItem}) is greater than the number of items (${totalItems})`);
  }
  return /* @__PURE__ */ React.default.createElement(React.default.Fragment, null, isDesktop ? /* @__PURE__ */ React.default.createElement(DesktopStepper, __spreadValues({}, props)) : /* @__PURE__ */ React.default.createElement(MobileStepper, __spreadValues({}, props)));
};

// src/components/tab/index.tsx


// src/components/tab/styles.ts
var _reacttabs = require('@radix-ui/react-tabs'); var Tabs = _interopRequireWildcard(_reacttabs);
var TabRoot = styled(Tabs.Root, {
  color: "$white",
  d: "flex",
  flexDirection: "column"
});
var List2 = styled(Tabs.List, {
  d: "flex",
  listStyle: "none",
  borderBottom: "1px solid $grey-400",
  m: 0,
  p: 0,
  overflowX: "scroll",
  overflowY: "hidden",
  "@md": {
    overflowY: "initial",
    overflowX: "initial"
  }
});
var Item2 = styled(Tabs.Trigger, {
  all: "unset",
  p: "$1 $6",
  fontSize: "$md",
  fontWeight: "$medium",
  textTransform: "uppercase",
  lineHeight: "150%",
  cursor: "pointer",
  "&:hover": {
    color: "$pink-500",
    borderBottom: "1px solid $pink-500",
    mb: "-1px"
  },
  '&[tabindex="0"]': {
    color: "$pink-500",
    borderBottom: "1px solid $pink-500",
    mb: "-1px"
  },
  '&[data-state="active"]': {
    py: "3px",
    mb: -1,
    border: "1px solid $grey-400",
    borderBottom: "1px solid $black"
  }
});
var Content2 = styled(Tabs.Content, {});

// src/components/tab/index.tsx
var Tab = forwardRef2((props, ref) => {
  const _a = props, { defaultValue = "tab1", children } = _a, rest = __objRest(_a, ["defaultValue", "children"]);
  return /* @__PURE__ */ React.default.createElement(TabRoot, __spreadValues({
    ref,
    defaultValue,
    activationMode: "manual"
  }, rest), children);
});
var TabList = forwardRef2((props, ref) => {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  return /* @__PURE__ */ React.default.createElement(List2, __spreadValues({
    ref
  }, rest), children);
});
var TabItem = forwardRef2((props, ref) => {
  const _a = props, { children, value } = _a, rest = __objRest(_a, ["children", "value"]);
  return /* @__PURE__ */ React.default.createElement(Item2, __spreadValues({
    ref,
    value
  }, rest), children);
});
var TabContent = forwardRef2((props, ref) => {
  const { children, value } = props;
  return /* @__PURE__ */ React.default.createElement(Content2, {
    ref,
    value
  }, children);
});

// src/components/toggle/index.tsx


// src/components/toggle/styles.ts
var _reactswitch = require('@radix-ui/react-switch');
var Switch = styled(_reactswitch.Root, {
  all: "unset",
  w: 42,
  h: 25,
  bg: "$black",
  br: "$full",
  position: "relative",
  border: "1px solid $grey-400",
  cursor: "pointer",
  transform: "translateX(0)",
  "&:disabled": {
    cursor: "not-allowed"
  },
  '&[aria-checked="true"]': {
    borderColor: "$grey-700",
    "&:hover span": {
      transform: "translateX(27px)"
    }
  },
  variants: {
    size: {
      sm: {
        h: 18,
        w: 32,
        '&[aria-checked="true"]:hover span': {
          transform: "translateX(12px)"
        },
        '&[aria-checked="false"]:hover span': {
          transform: "translateX(3px)"
        }
      },
      md: {
        h: 26,
        w: 56,
        '&[aria-checked="true"]:hover span': {
          transform: "translateX(28px)"
        },
        '&[aria-checked="false"]:hover span': {
          transform: "translateX(6px)"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var Thumb = styled(_reactswitch.Thumb, {
  d: "block",
  bg: "$grey-400",
  br: "$full",
  transition: "$fast",
  '&[data-state="checked"]': {
    bg: "$pink-500"
  },
  '&[data-disabled=""]': {
    bg: "$grey-600"
  },
  variants: {
    size: {
      sm: {
        size: 16,
        transform: "translateX(1px)",
        '&[data-state="checked"]': {
          transform: "translateX(15px)"
        }
      },
      md: {
        size: 22,
        transform: "translateX(2px)",
        '&[data-state="checked"]': {
          transform: "translateX(32px)"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/components/toggle/index.tsx
var Toggle = (_a) => {
  var _b = _a, { css: css2 } = _b, props = __objRest(_b, ["css"]);
  const { size } = props;
  return /* @__PURE__ */ React.default.createElement(Box, {
    css: css2
  }, /* @__PURE__ */ React.default.createElement(Switch, __spreadValues({}, props), /* @__PURE__ */ React.default.createElement(Thumb, {
    size
  })));
};

// src/components/tag/index.tsx


// src/components/tag/icon.tsx

var BaseIcon = ({ d }) => /* @__PURE__ */ React.default.createElement("svg", {
  viewBox: "0 0 512 512",
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ React.default.createElement("path", {
  fill: "currentColor",
  d
}));
var CloseIcon3 = () => /* @__PURE__ */ React.default.createElement(BaseIcon, {
  d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
});

// src/components/tag/styles.ts
var Wrapper9 = styled("span", {
  d: "inline-flex",
  align: "center",
  justify: "center",
  h: 24,
  color: "$grey-600",
  fontSize: "$sm",
  fontWeight: "$medium",
  border: "1px solid $grey-600",
  br: "$md",
  px: "$4",
  gap: "$2",
  cursor: "default",
  textTransform: "uppercase",
  variants: {
    variant: {
      solid: {
        color: "$white",
        bg: "$grey-400",
        borderColor: "transparent"
      },
      outlined: {}
    },
    removable: {
      true: {
        pr: "$1"
      }
    }
  },
  defaultVariants: {
    variant: "outlined"
  }
});
var RemovableWrapper = styled("button", {
  border: "none",
  size: 18,
  d: "flex",
  justify: "center",
  align: "center",
  color: "$white",
  br: "$full",
  cursor: "pointer",
  bg: "$grey-700"
});

// src/components/tag/index.tsx
var Tag = forwardRef2((props, ref) => {
  const _a = props, { removable, removableLabel, children, onClose } = _a, rest = __objRest(_a, ["removable", "removableLabel", "children", "onClose"]);
  if (!!removable && (!removableLabel || removableLabel === void 0)) {
    throw new Error("removableLabel is required when removable is true");
  }
  const handleClose = () => {
    !!onClose && onClose();
  };
  return /* @__PURE__ */ React.default.createElement(Wrapper9, __spreadValues({
    ref,
    removable
  }, rest), children, removable && /* @__PURE__ */ React.default.createElement(RemovableWrapper, {
    "aria-label": removableLabel,
    onClick: handleClose
  }, /* @__PURE__ */ React.default.createElement(CloseIcon3, null)));
});

// src/components/textarea/index.tsx


// src/components/textarea/styles.ts
var _reacttextareaautosize = require('react-textarea-autosize'); var _reacttextareaautosize2 = _interopRequireDefault(_reacttextareaautosize);

var Wrapper10 = styled("div", {
  color: "$white"
});
var Label6 = styled(LabelBase2.Root, {
  d: "block",
  mb: "$1",
  textTransform: "uppercase",
  fontWeight: "$medium"
});
var TextAreaInput = styled(_reacttextareaautosize2.default, {
  fontFamily: "inherit",
  width: "$full",
  p: "$2",
  fontSize: "$md",
  outline: "none",
  bg: "$black",
  color: "$white",
  border: "1px solid",
  borderColor: "$grey-600",
  "&:hover": {
    borderColor: "$pink-600"
  },
  "&:focus": {
    borderColor: "$teal-500"
  },
  "&:disabled": {
    bg: "$grey-400",
    cursor: "not-allowed"
  },
  variants: {
    error: {
      true: {
        bg: "$red-500"
      }
    }
  }
});
var Message2 = styled("small", {
  mt: "$1",
  color: "$grey-400",
  d: "block"
});
var Error3 = styled("div", {
  color: "$red-500"
});

// src/components/textarea/index.tsx
var Textarea = forwardRef2((props, ref) => {
  const _a = props, { label, hint, error, minRows = 3 } = _a, rest = __objRest(_a, ["label", "hint", "error", "minRows"]);
  const id = useId("textarea");
  return /* @__PURE__ */ React.default.createElement(Wrapper10, null, label && /* @__PURE__ */ React.default.createElement(Label6, {
    htmlFor: id
  }, label), /* @__PURE__ */ React.default.createElement(TextAreaInput, __spreadValues({
    ref,
    id,
    minRows
  }, rest)), /* @__PURE__ */ React.default.createElement(Message2, null, hint), /* @__PURE__ */ React.default.createElement(Error3, null, error));
});

// src/components/page-heading/index.tsx


// src/components/page-heading/styles.ts
var Wrapper11 = styled("div", {
  textTransform: "uppercase",
  fontWeight: "$medium"
});
var HeadingStyled = styled("div", {
  fontSize: "$2xl",
  d: "flex",
  align: "center",
  justify: "space-between",
  position: "relative",
  mb: "$1"
});
var Title3 = styled("h1", {
  w: "$full",
  d: "flex",
  align: "center",
  color: "$white",
  fontSize: "$lg",
  fontWeight: "$medium",
  m: 0,
  lineHeight: "24px",
  letterSpacing: "0.1em",
  variants: {
    haveButton: {
      true: {
        justify: "center",
        "@md": {
          justify: "flex-start"
        }
      }
    }
  }
});
var FlexEnd = styled("div", {
  d: "flex",
  gap: "$1",
  align: "center"
});
var Line = styled("div", {
  position: "absolute",
  bottom: -7,
  w: 160,
  h: 2,
  bg: "$grey-700",
  variants: {
    haveButton: {
      true: {}
    },
    haveDescription: {
      true: {}
    }
  },
  compoundVariants: [
    {
      haveButton: "true",
      haveDescription: "false",
      css: {
        d: "none",
        "@md": {
          d: "block"
        }
      }
    }
  ]
});
var Description2 = styled("div", {
  color: "$grey-600",
  mt: "$2",
  border: "none",
  "@md": {
    borderLeft: "2px solid",
    borderColor: "$grey-700",
    pl: "$2"
  }
});
var FullLine = styled("hr", {
  borderWidth: "0px 0px 1px",
  borderColor: "$grey-700",
  borderStyle: "solid",
  w: "100%",
  m: 0,
  variants: {
    haveButton: {
      true: {}
    },
    haveDescription: {
      true: {}
    }
  },
  compoundVariants: [
    {
      haveButton: "true",
      haveDescription: "false",
      css: {
        d: "none",
        "@md": {
          d: "block"
        }
      }
    }
  ]
});
var Bottom2 = styled("div", {
  d: "flex",
  flexDirection: "column",
  gap: "$4",
  variants: {
    haveButton: {
      true: {}
    },
    haveDescription: {
      true: {}
    }
  },
  compoundVariants: [
    {
      haveButton: "true",
      haveDescription: "true",
      css: {
        textAlign: "center",
        "@md": {
          textAlign: "start"
        }
      }
    }
  ]
});

// src/components/page-heading/index.tsx
var PageHeading = (_a) => {
  var _b = _a, {
    description,
    children,
    title
  } = _b, props = __objRest(_b, [
    "description",
    "children",
    "title"
  ]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return /* @__PURE__ */ React.default.createElement(Wrapper11, __spreadValues({}, props), /* @__PURE__ */ React.default.createElement(HeadingStyled, null, /* @__PURE__ */ React.default.createElement(Title3, {
    haveButton: !!children
  }, title), /* @__PURE__ */ React.default.createElement(Line, {
    haveButton: !!children,
    haveDescription: !!description
  }), !isMobile && /* @__PURE__ */ React.default.createElement(FlexEnd, null, /* @__PURE__ */ React.default.createElement(ChildrenButtons, {
    children,
    isMobile
  }))), /* @__PURE__ */ React.default.createElement(FullLine, {
    haveButton: !!children,
    haveDescription: !!description
  }), /* @__PURE__ */ React.default.createElement(Bottom2, {
    haveButton: !!children,
    haveDescription: !!description
  }, description && /* @__PURE__ */ React.default.createElement(Description2, null, description), isMobile && /* @__PURE__ */ React.default.createElement(ChildrenButtons, {
    children,
    isMobile
  })));
};
var ChildrenButtons = ({ children, isMobile }) => /* @__PURE__ */ React.default.createElement(React.default.Fragment, null, React.default.Children.map(children, (child) => {
  if ((child == null ? void 0 : child.type) === Button2 && isMobile) {
    return React.default.cloneElement(child, {
      fluid: true
    });
  }
  return child;
}));

// src/components/pagination/index.tsx








var _hi = require('react-icons/hi');

// src/components/pagination/styles.ts
var PaginationContainer = styled("div", {
  d: "flex",
  gap: "$2",
  br: "$sm"
});
var NumberContainer = styled("div", {
  d: "flex",
  p: "$2 $4",
  color: "$white",
  "&:hover": {
    color: "$pink-600",
    cursor: "pointer"
  },
  variants: {
    active: {
      true: {
        color: "$pink-500"
      }
    }
  }
});
var MobileContainer = styled("div", {
  d: "flex",
  color: "$white",
  gap: "$4"
});
var ArrowContainer = styled("button", {
  d: "flex",
  align: "center",
  justify: "center",
  bg: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  svg: {
    color: "$grey-700",
    cursor: "default"
  },
  variants: {
    canGo: {
      true: {
        svg: {
          color: "$pink-500",
          cursor: "pointer"
        }
      }
    }
  }
});

// src/components/pagination/index.tsx
var MobilePagination = ({
  page,
  totalPage,
  canPrevious,
  canNext,
  quickJump,
  setPage
}) => {
  return /* @__PURE__ */ React.default.createElement(Flex, {
    gap: 4
  }, quickJump && /* @__PURE__ */ React.default.createElement(ArrowContainer, {
    canGo: canPrevious,
    disabled: !canPrevious,
    onClick: () => setPage(1)
  }, /* @__PURE__ */ React.default.createElement(_hi.HiOutlineChevronDoubleLeft, null)), /* @__PURE__ */ React.default.createElement(ArrowContainer, {
    canGo: canPrevious,
    disabled: !canPrevious,
    onClick: () => setPage(page - 1)
  }, quickJump ? /* @__PURE__ */ React.default.createElement(_hi.HiOutlineChevronLeft, null) : /* @__PURE__ */ React.default.createElement(_hi.HiOutlineArrowSmLeft, {
    size: 24
  })), /* @__PURE__ */ React.default.createElement(Text, {
    size: "sm",
    css: { color: "$white" }
  }, page, " of ", totalPage), /* @__PURE__ */ React.default.createElement(ArrowContainer, {
    canGo: canNext,
    disabled: !canNext,
    onClick: () => setPage(page + 1)
  }, quickJump ? /* @__PURE__ */ React.default.createElement(_hi.HiOutlineChevronRight, null) : /* @__PURE__ */ React.default.createElement(_hi.HiOutlineArrowSmRight, {
    size: 24
  })), quickJump && /* @__PURE__ */ React.default.createElement(ArrowContainer, {
    canGo: canNext,
    disabled: !canNext,
    onClick: () => setPage(totalPage)
  }, /* @__PURE__ */ React.default.createElement(_hi.HiOutlineChevronDoubleRight, null)));
};
var DesktopPagination = ({
  neighbors,
  page,
  setPage,
  quickJump,
  canPrevious,
  canNext,
  totalPage
}) => {
  const generatePages = (page2, neighbors2) => {
    const start = Math.floor((page2 - 1) / neighbors2) * neighbors2;
    return new Array(neighbors2).fill(0).map((_, idx) => start + idx + 1);
  };
  const pages = _react.useMemo.call(void 0, () => generatePages(page, neighbors), [page, neighbors]);
  return /* @__PURE__ */ React.default.createElement(Flex, {
    gap: "4",
    direction: "column"
  }, /* @__PURE__ */ React.default.createElement(PaginationContainer, null, /* @__PURE__ */ React.default.createElement(Flex, {
    align: "center"
  }, quickJump && /* @__PURE__ */ React.default.createElement(ArrowContainer, {
    canGo: canPrevious,
    disabled: !canPrevious,
    onClick: () => setPage(1)
  }, /* @__PURE__ */ React.default.createElement(_hi.HiOutlineChevronDoubleLeft, null)), /* @__PURE__ */ React.default.createElement(ArrowContainer, {
    canGo: canPrevious,
    disabled: !canPrevious,
    onClick: () => setPage(page - 1)
  }, /* @__PURE__ */ React.default.createElement(_hi.HiOutlineChevronLeft, null))), pages.map((thisPage, index) => thisPage <= totalPage && index <= neighbors - 1 ? /* @__PURE__ */ React.default.createElement(NumberContainer, {
    key: index,
    onClick: () => setPage(thisPage),
    active: thisPage === page
  }, /* @__PURE__ */ React.default.createElement(Text, {
    weight: "medium",
    size: "sm"
  }, thisPage)) : null), /* @__PURE__ */ React.default.createElement(Flex, {
    align: "center"
  }, /* @__PURE__ */ React.default.createElement(ArrowContainer, {
    canGo: canNext,
    disabled: !canNext,
    onClick: () => setPage(page + 1)
  }, /* @__PURE__ */ React.default.createElement(_hi.HiOutlineChevronRight, null)), quickJump && /* @__PURE__ */ React.default.createElement(ArrowContainer, {
    canGo: canNext,
    disabled: !canNext,
    onClick: () => setPage(totalPage)
  }, /* @__PURE__ */ React.default.createElement(_hi.HiOutlineChevronDoubleRight, null)))));
};
var PageInfo = ({
  total,
  page,
  pageSize
}) => {
  const start = _react.useMemo.call(void 0, () => (page - 1) * pageSize + 1, [page, pageSize]);
  const end = _react.useMemo.call(void 0, () => Math.min(total, page * pageSize), [page, pageSize, total]);
  return /* @__PURE__ */ React.default.createElement(Flex, {
    align: "center",
    justify: "center"
  }, /* @__PURE__ */ React.default.createElement(Text, {
    size: "sm",
    css: { color: "$grey-400" }
  }, start, "-", end, " of ", total, " results"));
};
var Pagination = (_a) => {
  var _b = _a, {
    quickJump = false,
    neighbors = 5,
    total,
    pageSize,
    page,
    setPage
  } = _b, props = __objRest(_b, [
    "quickJump",
    "neighbors",
    "total",
    "pageSize",
    "page",
    "setPage"
  ]);
  const totalPage = _react.useMemo.call(void 0, () => Math.ceil(total / pageSize), [total, pageSize]);
  const canPrevious = _react.useMemo.call(void 0, () => page > 1, [page]);
  const canNext = _react.useMemo.call(void 0, () => page < totalPage, [page, totalPage]);
  const isMobile = useMediaQuery("(max-width: 600px)");
  return /* @__PURE__ */ React.default.createElement(Flex, {
    direction: "column",
    gap: 3,
    css: { w: "fit-content" }
  }, isMobile ? /* @__PURE__ */ React.default.createElement(MobilePagination, __spreadValues({
    page,
    setPage,
    canNext,
    canPrevious,
    totalPage,
    quickJump
  }, props)) : /* @__PURE__ */ React.default.createElement(DesktopPagination, __spreadValues({
    page,
    setPage,
    neighbors,
    quickJump,
    canNext,
    canPrevious,
    totalPage
  }, props)), /* @__PURE__ */ React.default.createElement(PageInfo, {
    total,
    page,
    pageSize
  }));
};

// src/components/stack/index.tsx
var Stack = styled(Flex, {
  defaultVariants: {
    direction: "row",
    gap: "5"
  }
});

// src/components/countdown/index.tsx


// src/components/countdown/styles.ts
var Wrapper12 = styled("div", {
  d: "inline-flex",
  color: "$pink-500",
  fontWeight: "$normal",
  fontFamily: '"Syne Mono", serif',
  borderTop: "1px solid $grey-600",
  borderBottom: "1px solid $grey-600",
  textShadow: "0px 0px 4px rgba(245, 113, 171, 0.52)",
  variants: {
    size: {
      sm: {
        fontSize: "20px"
      },
      md: {
        fontSize: "50px",
        py: "$4"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/components/countdown/index.tsx
var Countdown = forwardRef2((props, ref) => {
  const _a = props, { endDate, onFinish } = _a, rest = __objRest(_a, ["endDate", "onFinish"]);
  const countdown = useCountdown(endDate);
  if (countdown.isTimerDone) {
    !!onFinish && onFinish();
  }
  return /* @__PURE__ */ React.default.createElement(Wrapper12, __spreadValues({
    ref,
    role: "timer",
    "aria-atomic": "true"
  }, rest), `${countdown.hours}:${countdown.minutes}:${countdown.seconds}`);
});

// src/components/divider/index.tsx
var Divider = styled("hr", {
  $$color: "inherit",
  $$thickness: "1px",
  opacity: 0.6,
  borderImage: "none 100% / 1 / 0 stretch",
  borderColor: "$$color",
  borderStyle: "solid",
  variants: {
    orientation: {
      horizontal: {
        w: "$full",
        borderWidth: "0px 0px $$thickness"
      },
      vertical: {
        h: "$full",
        borderWidth: "0px 0px 0px $$thickness"
      }
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});

// src/components/tooltip/index.tsx


// src/components/tooltip/styles.ts
var _reacttooltip = require('@radix-ui/react-tooltip'); var BaseTooltip = _interopRequireWildcard(_reacttooltip);
var Root9 = styled(BaseTooltip.Root);
var Trigger3 = styled(BaseTooltip.Trigger);
var Content4 = styled(BaseTooltip.Content, {
  color: "$white",
  bg: "$black",
  p: "$2",
  textTransform: "uppercase",
  fontSize: "$sm",
  border: "1px solid $grey-700"
});
var Arrow2 = styled(BaseTooltip.Arrow, {
  fill: "$grey-700"
});

// src/components/tooltip/index.tsx
var Tooltip = (_a) => {
  var _b = _a, {
    text,
    position = "right",
    children,
    sideOffset = 5,
    delayDuration = 700
  } = _b, props = __objRest(_b, [
    "text",
    "position",
    "children",
    "sideOffset",
    "delayDuration"
  ]);
  return /* @__PURE__ */ React.default.createElement(Root9, {
    delayDuration
  }, /* @__PURE__ */ React.default.createElement(Trigger3, {
    asChild: true
  }, children), /* @__PURE__ */ React.default.createElement(Content4, __spreadValues({
    sideOffset,
    side: position
  }, props), text, /* @__PURE__ */ React.default.createElement(Arrow2, {
    width: 15,
    height: 10
  })));
};

// src/components/modal/index.tsx

var _reactdialog = require('@radix-ui/react-dialog'); var DialogPrimitive2 = _interopRequireWildcard(_reactdialog); var DialogPrimitive = _interopRequireWildcard(_reactdialog);

// src/components/modal/styles.tsx

var overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 }
});
var contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
});
var Overlay3 = styled(DialogPrimitive.Overlay, {
  bg: "rgba(0, 0, 0, 0.9)",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: "$overlay"
});
var Content6 = styled(DialogPrimitive.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: "$modal",
  "&:focus": {
    outline: "none"
  }
});

// src/components/modal/index.tsx
var Modal = forwardRef2((props, ref) => {
  const _a = props, {
    children,
    closeOnOverlayClick,
    closeOnEsc,
    onClickOverlay,
    onClose,
    onEscapeKeyDown
  } = _a, rest = __objRest(_a, [
    "children",
    "closeOnOverlayClick",
    "closeOnEsc",
    "onClickOverlay",
    "onClose",
    "onEscapeKeyDown"
  ]);
  const handleOverlayClick = () => {
    closeOnOverlayClick && onClose();
    !!onClickOverlay && onClickOverlay();
  };
  const handleEspaceKey = () => {
    closeOnEsc && onClose();
    !!onEscapeKeyDown && onEscapeKeyDown();
  };
  return /* @__PURE__ */ React.default.createElement(DialogPrimitive2.Root, __spreadValues({}, rest), /* @__PURE__ */ React.default.createElement(DialogPrimitive2.Portal, null, /* @__PURE__ */ React.default.createElement(Overlay3, null), /* @__PURE__ */ React.default.createElement(Content6, {
    ref,
    onInteractOutside: handleOverlayClick,
    onCloseAutoFocus: onClose,
    onEscapeKeyDown: handleEspaceKey,
    asChild: true
  }, children)));
});
var ModalTitle = forwardRef2((props, ref) => {
  const _a = props, { children, color } = _a, rest = __objRest(_a, ["children", "color"]);
  return /* @__PURE__ */ React.default.createElement(Text, __spreadValues({
    ref,
    as: DialogPrimitive2.DialogTitle
  }, rest), children);
});
var ModalDescription = forwardRef2((props, ref) => {
  const _a = props, { children, color } = _a, rest = __objRest(_a, ["children", "color"]);
  return /* @__PURE__ */ React.default.createElement(Text, __spreadValues({
    ref,
    as: DialogPrimitive2.DialogDescription
  }, rest), children);
});

// src/components/drawer/index.tsx


// src/components/drawer/styles.ts
var Wrapper13 = styled("div", {
  $$width: "360px",
  $$height: "100%",
  w: "$$width",
  h: "$$height",
  color: "$white",
  bg: "$grey-850"
});

// src/components/drawer/index.tsx
var Drawer = forwardRef2((props, ref) => {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  return /* @__PURE__ */ React.default.createElement(Wrapper13, __spreadValues({
    ref
  }, rest), children);
});

// src/components/accordion/index.tsx


// src/components/accordion/icon.tsx

var ChevronDownIcon = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.default.createElement("svg", __spreadValues({
    viewBox: "0 0 16 16",
    width: "1.2em",
    height: "1.2em",
    focusable: "false",
    "aria-hidden": "true",
    fill: "currentColor",
    strokeWidth: 2
  }, props), /* @__PURE__ */ React.default.createElement("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
};

// src/components/accordion/styles.ts
var _reactaccordion = require('@radix-ui/react-accordion'); var AccordionPrimitive = _interopRequireWildcard(_reactaccordion);
var slideDown = keyframes({
  from: { h: 0 },
  to: { h: "var(--radix-accordion-content-height)" }
});
var slideUp = keyframes({
  from: { h: "var(--radix-accordion-content-height)" },
  to: { h: 0 }
});
var Accordion = styled(AccordionPrimitive.Root, {
  w: "$full",
  color: "$white"
});
var AccordionItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  bg: "$grey-900",
  border: "1px solid $grey-700",
  mt: "$4",
  "&:first-child": {
    mt: 0
  },
  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    bs: "0 0 0 2px $grey-700"
  }
});
var AccordionHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  d: "flex",
  fontWeight: "$medium",
  textTransform: "uppercase",
  letterSpacing: "0.1em"
});
var Trigger5 = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  d: "flex",
  flex: 1,
  align: "center",
  justify: "space-between",
  h: 64,
  px: "$6",
  bg: "$grey-900",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  svg: {
    color: "$pink-500",
    transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    "[data-state=open] &": {
      transform: "rotate(180deg)"
    }
  }
});
var Content8 = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  color: "CurrentColor",
  '&[data-state="open"]': {
    animation: `${slideDown} 0.2s cubic-bezier(0.87, 0, 0.13, 1)`
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 0.2s cubic-bezier(0.87, 0, 0.13, 1)`
  }
});
var ContentPadding = styled("div", {
  p: "0 $6 $4 $6"
});

// src/components/accordion/index.tsx
var Accordion2 = forwardRef2((props, ref) => {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  return /* @__PURE__ */ React.default.createElement(Accordion, __spreadValues({
    ref,
    type: "multiple"
  }, rest), React.default.Children.map(children, (child) => child));
});
var AccordionItem2 = forwardRef2((props, ref) => {
  const _a = props, { title, children } = _a, rest = __objRest(_a, ["title", "children"]);
  return /* @__PURE__ */ React.default.createElement(AccordionItem, __spreadValues({
    ref
  }, rest), /* @__PURE__ */ React.default.createElement(AccordionHeader, null, /* @__PURE__ */ React.default.createElement(Trigger5, null, title, /* @__PURE__ */ React.default.createElement(ChevronDownIcon, null))), /* @__PURE__ */ React.default.createElement(Content8, null, /* @__PURE__ */ React.default.createElement(ContentPadding, null, children)));
});

// src/components/rate/index.tsx


// src/components/rate/icon.tsx

var BaseIcon2 = ({ d }) => /* @__PURE__ */ React.default.createElement("svg", {
  viewBox: "0 0 576 512",
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ React.default.createElement("path", {
  fill: "currentColor",
  d
}));
var StarIcon = () => /* @__PURE__ */ React.default.createElement(BaseIcon2, {
  d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
});

// src/components/rate/styles.ts
var StarWrapper = styled("div", {
  all: "unset",
  color: "$grey-600",
  "&.active": {
    color: "$pink-500"
  }
});

// src/components/rate/index.tsx
var Rate = forwardRef2((props) => {
  const _a = props, { value } = _a, rest = __objRest(_a, ["value"]);
  if (value < 0 || value > 5) {
    throw new Error("Rate value must be between 0 and 5");
  }
  const totalStars = [...Array(5)];
  const a11yMessage = `${value} out of 5 stars`;
  return /* @__PURE__ */ React.default.createElement(Stack, __spreadValues({
    gap: "4",
    "aria-valuenow": value
  }, rest), totalStars.map((_, index) => {
    index += 1;
    return /* @__PURE__ */ React.default.createElement(StarWrapper, {
      key: index,
      className: index <= value ? "active" : void 0
    }, /* @__PURE__ */ React.default.createElement(StarIcon, null), /* @__PURE__ */ React.default.createElement(VisuallyHidden, null, `${index} star`));
  }), /* @__PURE__ */ React.default.createElement(VisuallyHidden, null, a11yMessage));
});

// src/components/row/index.tsx
var Row = styled(Flex, {
  flexWrap: "wrap",
  mt: "calc(-1 * $$gutterY)",
  mx: "calc(-0.5 * $$gutterX)",
  "& > *": {
    flexShrink: 0,
    w: "$full",
    maxW: "$full",
    px: "calc($$gutterX * 0.5)",
    mt: "$$gutterY"
  },
  variants: {
    gutterX: {
      0: {
        $$gutterX: 0
      },
      1: {
        $$gutterX: "$space$1"
      },
      2: {
        $$gutterX: "$space$2"
      },
      3: {
        $$gutterX: "$space$3"
      },
      4: {
        $$gutterX: "$space$4"
      },
      5: {
        $$gutterX: "$space$5"
      },
      6: {
        $$gutterX: "$space$6"
      },
      7: {
        $$gutterX: "$space$7"
      },
      8: {
        $$gutterX: "$space$8"
      },
      9: {
        $$gutterX: "$space$9"
      },
      10: {
        $$gutterX: "$space$10"
      },
      11: {
        $$gutterX: "$space$11"
      },
      12: {
        $$gutterX: "$space$12"
      },
      13: {
        $$gutterX: "$space$13"
      },
      14: {
        $$gutterX: "$space$14"
      },
      15: {
        $$gutterX: "$space$15"
      },
      16: {
        $$gutterX: "$space$16"
      },
      17: {
        $$gutterX: "$space$17"
      },
      18: {
        $$gutterX: "$space$18"
      },
      19: {
        $$gutterX: "$space$19"
      },
      20: {
        $$gutterX: "$space$20"
      }
    },
    gutterY: {
      0: {
        $$gutterY: 0
      },
      1: {
        $$gutterY: "$space$1"
      },
      2: {
        $$gutterY: "$space$2"
      },
      3: {
        $$gutterY: "$space$3"
      },
      4: {
        $$gutterY: "$space$4"
      },
      5: {
        $$gutterY: "$space$5"
      },
      6: {
        $$gutterY: "$space$6"
      },
      7: {
        $$gutterY: "$space$7"
      },
      8: {
        $$gutterY: "$space$8"
      },
      9: {
        $$gutterY: "$space$9"
      },
      10: {
        $$gutterY: "$space$10"
      },
      11: {
        $$gutterY: "$space$11"
      },
      12: {
        $$gutterY: "$space$12"
      },
      13: {
        $$gutterY: "$space$13"
      },
      14: {
        $$gutterY: "$space$14"
      },
      15: {
        $$gutterY: "$space$15"
      },
      16: {
        $$gutterY: "$space$16"
      },
      17: {
        $$gutterY: "$space$17"
      },
      18: {
        $$gutterY: "$space$18"
      },
      19: {
        $$gutterY: "$space$19"
      },
      20: {
        $$gutterY: "$space$20"
      }
    }
  },
  defaultVariants: {
    gutterX: 4,
    gutterY: 0
  }
});

// src/components/col/index.tsx
var Col = styled(Flex, {
  variants: {
    col: {
      auto: {
        flex: "1 0 0%"
      },
      1: {
        flex: "0 0 auto",
        w: "8.33333333%"
      },
      2: {
        flex: "0 0 auto",
        w: "16.66666667%"
      },
      3: {
        flex: "0 0 auto",
        w: "25%"
      },
      4: {
        flex: "0 0 auto",
        w: "33.33333333%"
      },
      5: {
        flex: "0 0 auto",
        w: "41.66666667%"
      },
      6: {
        flex: "0 0 auto",
        w: "50%"
      },
      7: {
        flex: "0 0 auto",
        w: "58.33333333%"
      },
      8: {
        flex: "0 0 auto",
        w: "66.66666667%"
      },
      9: {
        flex: "0 0 auto",
        w: "75%"
      },
      10: {
        flex: "0 0 auto",
        w: "83.33333333%"
      },
      11: {
        flex: "0 0 auto",
        w: "91.66666667%"
      },
      12: {
        flex: "0 0 auto",
        w: "100%"
      }
    },
    offset: {
      1: {
        ml: "8.33333333%"
      },
      2: {
        ml: "16.66666667%"
      },
      3: {
        ml: "25%"
      },
      4: {
        ml: "33.33333333%"
      },
      5: {
        ml: "41.66666667%"
      },
      6: {
        ml: "50%"
      },
      7: {
        ml: "58.33333333%"
      },
      8: {
        ml: "66.66666667%"
      },
      9: {
        ml: "75%"
      },
      10: {
        ml: "83.33333333%"
      },
      11: {
        ml: "91.66666667%"
      }
    },
    order: {
      1: {
        order: 1
      },
      2: {
        order: 2
      },
      3: {
        order: 3
      },
      4: {
        order: 4
      },
      5: {
        order: 5
      },
      6: {
        order: 6
      },
      7: {
        order: 7
      },
      8: {
        order: 8
      },
      9: {
        order: 9
      },
      10: {
        order: 10
      },
      11: {
        order: 11
      },
      12: {
        order: 12
      }
    }
  },
  defaultVariants: {
    col: "auto"
  }
});

// src/components/icon-button/index.tsx


// src/components/icon-button/styles.tsx
var Button3 = styled(Button2, {
  px: 0
});

// src/components/icon-button/index.tsx
var IconButton = forwardRef2((props, ref) => {
  const _a = props, { "aria-label": ariaLabel, icon, children } = _a, rest = __objRest(_a, ["aria-label", "icon", "children"]);
  const element = icon || children;
  const _children = React.default.cloneElement(element, {
    "aria-hidden": true,
    focusable: false
  });
  return /* @__PURE__ */ React.default.createElement(Button3, __spreadValues({
    ref,
    "aria-label": ariaLabel
  }, rest), _children);
});

// src/components/select/index.tsx


// src/components/select/icon.tsx

var ChevronDownIcon2 = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.default.createElement("svg", __spreadValues({
    viewBox: "0 0 16 16",
    width: "1.5em",
    height: "1.5em",
    focusable: "false",
    "aria-hidden": "true",
    fill: "currentColor"
  }, props), /* @__PURE__ */ React.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
  }));
};

// src/components/select/styles.ts
var Wrapper14 = styled("div");
var SelectWrapper = styled("div", {
  position: "relative",
  d: "flex",
  align: "center"
});
var Select = styled("select", {
  appearance: "none",
  fontFamily: "inherit",
  w: "$full",
  h: 40,
  cursor: "pointer",
  color: "$white",
  align: "center",
  d: "inline-flex",
  justify: "space-between",
  userSelect: "none",
  fontWeight: "$medium",
  border: "1px solid",
  pl: "$4",
  pr: "$8",
  "&:hover": {
    borderColor: "$pink-500"
  },
  "&:focus-within": {
    borderColor: "$teal-500"
  },
  "&:disabled": {
    bg: "$grey-600",
    color: "$grey-700",
    cursor: "not-allowed",
    "& + svg": {
      color: "$grey-700"
    }
  },
  variants: {
    size: {
      default: {
        h: 40,
        fontSize: "$md"
      },
      small: {
        h: 32,
        fontSize: "$sm"
      },
      tiny: {
        h: 24,
        fontSize: "$sm"
      }
    },
    variant: {
      solid: {
        bg: "#080808",
        borderColor: "transparent"
      },
      outline: {
        bg: "$black",
        borderColor: "$grey-600"
      }
    }
  },
  defaultVariants: {
    size: "default",
    variant: "outline"
  }
});
var ArrowIcon = styled(ChevronDownIcon2, {
  position: "absolute",
  d: "flex",
  pointerEvents: "none",
  right: "$4",
  color: "$white"
});
var Option = styled("option", {
  d: "block",
  m: 0,
  p: "$2 $6",
  userSelect: "none",
  whiteSpace: "nowrap",
  color: "$white",
  cursor: "pointer",
  fontWeight: "$medium",
  textTransform: "uppercase"
});
var Label7 = styled("label", {
  d: "block",
  color: "$white",
  mb: "$1",
  fontWeight: "$medium",
  textTransform: "uppercase",
  variants: {
    size: {
      default: {
        fontSize: "$md"
      },
      small: {
        fontSize: "$sm"
      },
      tiny: {
        fontSize: "$sm"
      }
    }
  },
  defaultVariants: {
    size: "default"
  }
});
var Hint = styled("small", {
  color: "$grey-400",
  fontSize: "$xs",
  mt: "5px",
  d: "block",
  variants: {
    disabled: {
      true: {
        color: "$grey-700"
      }
    }
  }
});
var Error4 = styled("div", {
  color: "$red-500",
  fontSize: "$xs"
});

// src/components/select/index.tsx
var Select2 = forwardRef2((props, ref) => {
  const _a = props, {
    id,
    options,
    label,
    placeholder,
    hint,
    error,
    size,
    disabled,
    onChange
  } = _a, rest = __objRest(_a, [
    "id",
    "options",
    "label",
    "placeholder",
    "hint",
    "error",
    "size",
    "disabled",
    "onChange"
  ]);
  return /* @__PURE__ */ React.default.createElement(Wrapper14, null, label && /* @__PURE__ */ React.default.createElement(Label7, {
    htmlFor: id,
    size
  }, label), /* @__PURE__ */ React.default.createElement(SelectWrapper, null, /* @__PURE__ */ React.default.createElement(Select, __spreadValues({
    ref,
    id,
    size,
    disabled,
    onChange
  }, rest), placeholder && /* @__PURE__ */ React.default.createElement("option", {
    value: ""
  }, placeholder), options == null ? void 0 : options.map((item) => /* @__PURE__ */ React.default.createElement("option", {
    key: item.value,
    value: item.value
  }, item.label))), /* @__PURE__ */ React.default.createElement(ArrowIcon, null)), hint && /* @__PURE__ */ React.default.createElement(Hint, {
    disabled
  }, hint), error && /* @__PURE__ */ React.default.createElement(Error4, null, error));
});

// src/components/status/index.tsx


// src/components/status/styles.ts
var Wrapper15 = styled("span", {
  d: "inline-flex",
  size: 10,
  br: "$full",
  variants: {
    variant: {
      white: {
        bg: "$white"
      },
      teal: {
        bg: "$teal-500"
      },
      green: {
        bg: "$green-500"
      },
      pink: {
        bg: "$pink-500"
      },
      yellow: {
        bg: "$yellow-500"
      }
    }
  },
  defaultVariants: {
    variant: "white"
  }
});

// src/components/status/index.tsx
var Status = forwardRef2((props, ref) => {
  return /* @__PURE__ */ React.default.createElement(Wrapper15, __spreadValues({
    ref,
    "aria-hidden": true
  }, props));
});




































































exports.Accordion = Accordion2; exports.AccordionItem = AccordionItem2; exports.Alert = Alert; exports.Avatar = Avatar2; exports.Badge = Badge2; exports.Box = Box; exports.Button = Button2; exports.Character = Character; exports.Checkbox = Checkbox; exports.Col = Col; exports.Container = Container; exports.ContentHeading = ContentHeading; exports.Countdown = Countdown; exports.Divider = Divider; exports.Drawer = Drawer; exports.Flex = Flex; exports.Grid = Grid; exports.IconButton = IconButton; exports.Image = Image2; exports.Input = Input2; exports.Label = Label4; exports.Logo = Logo; exports.Modal = Modal; exports.ModalDescription = ModalDescription; exports.ModalTitle = ModalTitle; exports.PageHeading = PageHeading; exports.PageInfo = PageInfo; exports.Pagination = Pagination; exports.RadioGroup = RadioGroup2; exports.RadioItem = RadioItem; exports.Rate = Rate; exports.Row = Row; exports.Select = Select2; exports.Spacer = Spacer; exports.Spinner = Spinner2; exports.Stack = Stack; exports.Status = Status; exports.Stepper = Stepper; exports.Tab = Tab; exports.TabContent = TabContent; exports.TabItem = TabItem; exports.TabList = TabList; exports.Tag = Tag; exports.Text = Text; exports.Textarea = Textarea; exports.Toggle = Toggle; exports.Tooltip = Tooltip; exports.VisuallyHidden = VisuallyHidden; exports._DAY = _DAY; exports._HOUR = _HOUR; exports._MINUTE = _MINUTE; exports._SECOND = _SECOND; exports.assignRef = assignRef; exports.config = config; exports.css = css; exports.forwardRef = forwardRef2; exports.getCssText = getCssText; exports.globalCss = globalCss; exports.keyframes = keyframes; exports.styled = styled; exports.theme = theme; exports.useBreakpoint = useBreakpoint; exports.useCountdown = useCountdown; exports.useDisclosure = useDisclosure; exports.useId = useId; exports.useMediaQuery = useMediaQuery; exports.useMergeRefs = useMergeRefs;
//# sourceMappingURL=index.js.map