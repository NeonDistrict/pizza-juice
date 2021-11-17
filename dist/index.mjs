var __defProp = Object.defineProperty;
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
import React3 from "react";

// src/system/index.ts
import { createStitches } from "@stitches/react";

// src/theme/foundations/colors.ts
var colors = {
  white: "#FFFFFF",
  black: "#000000",
  pink50: "#280D19",
  pink1: "#F571AB",
  pink2: "#C9427D",
  pink3: "#A43F6B",
  grey50: "#212121",
  grey1: "#A5A5A5",
  grey2: "#707070",
  grey3: "#747474",
  grey4: "#393939",
  grey5: "#1C1C1C",
  grey6: "#D4D7DB",
  grey7: "#6D727F",
  red50: "#19090C",
  red1: "#FF5E7C",
  red2: "#FF002F",
  red3: "#B60323",
  red4: "#84041C",
  teal1: "#0FB4B6",
  yellow1: "#F4D360",
  green1: "#8CBE72"
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
var { config, css, globalCss, styled, getCssText, keyframes } = createStitches({
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

// src/components/spinner/index.tsx
import React2 from "react";

// src/components/visually-hidden/index.tsx
import React from "react";
import { Root } from "@radix-ui/react-visually-hidden";
var VisuallyHidden = ({ children }) => {
  return /* @__PURE__ */ React.createElement(Root, null, children);
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
  display: "inline-block",
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
  return /* @__PURE__ */ React2.createElement(Spinner, __spreadValues({}, props), /* @__PURE__ */ React2.createElement(VisuallyHidden, null, "Loading"));
};

// src/components/button/styles.ts
var Button = styled("button", {
  appearance: "none",
  bg: "transparent",
  fontFamily: "inherit",
  border: "1px solid",
  borderColor: "transparent",
  outline: 0,
  py: "$2",
  fontWeight: 600,
  textTransform: "uppercase",
  color: "$white",
  d: "flex",
  align: "center",
  justify: "center",
  gap: "$2",
  userSelect: "none",
  transition: "$fast",
  "&:not(:disabled)": {
    cursor: "pointer"
  },
  variants: {
    variant: {
      primary: {
        bg: "$pink1",
        "&:hover": {
          bg: "$pink2"
        },
        "&:focus": {
          borderColor: "$teal1"
        },
        "&:active": {
          bg: "$pink3"
        },
        "&:disabled": {
          bg: "$grey1",
          color: "$grey3"
        }
      },
      secondary: {
        bg: "$grey4",
        "&:hover": {
          bg: "$grey5"
        },
        "&:focus": {
          bg: "$grey5",
          borderColor: "$teal1"
        },
        "&:active": {
          bg: "$grey5"
        },
        "&:disabled": {
          bg: "$grey1",
          color: "$grey3"
        }
      },
      destructive: {
        color: "$red1",
        borderColor: "$red1",
        "&:hover": {
          bg: "$red50"
        },
        "&:focus": {
          borderColor: "$teal1"
        },
        "&:active": {
          bg: "$red50"
        },
        "&:disabled": {
          color: "$grey3",
          borderColor: "$grey1",
          bg: "$grey50"
        }
      },
      outline: {
        borderColor: "$pink1",
        "&:focus": {
          borderColor: "$teal1"
        },
        "&:disabled": {
          color: "$grey3",
          borderColor: "$grey1"
        }
      },
      naked: {
        color: "$pink1",
        "&:hover": {
          color: "$pink2",
          bg: "$pink50"
        },
        "&:focus": {
          borderColor: "$teal1"
        },
        "&:active": {
          color: "$pink2",
          bg: "transparent"
        },
        "&:disabled": {
          color: "$grey3",
          bg: "transparent"
        }
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
    size: {
      sm: {
        minW: 32,
        h: 32,
        fontSize: "$xs",
        p: "$2"
      },
      md: {
        minW: 40,
        h: 40,
        fontSize: "$sm",
        px: "$6"
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
    onlyIcon: {
      true: {}
    }
  },
  compoundVariants: [
    {
      size: "md",
      onlyIcon: "true",
      css: {
        p: "$2"
      }
    },
    {
      size: "sm",
      onlyIcon: "true",
      css: {
        p: "$2"
      }
    }
  ],
  defaultVariants: {
    variant: "primary",
    shape: "squared",
    size: "md",
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
var Button2 = React3.forwardRef((_a, ref) => {
  var _b = _a, {
    type = "button",
    icon,
    iconPosition = "left",
    loading,
    children
  } = _b, props = __objRest(_b, [
    "type",
    "icon",
    "iconPosition",
    "loading",
    "children"
  ]);
  return /* @__PURE__ */ React3.createElement(Button, __spreadValues({
    ref,
    type,
    onlyIcon: !!icon && !children,
    loading
  }, props), icon && iconPosition === "left" && icon, children && /* @__PURE__ */ React3.createElement("span", null, children), loading && /* @__PURE__ */ React3.createElement(Spinner3, null), icon && iconPosition === "right" && icon);
});
Button2.displayName = "Button";

// src/components/alert/index.tsx
import React4 from "react";

// src/components/box/index.tsx
var Box = styled("div", {
  d: "block"
});

// src/components/alert/styles.ts
var Wrapper = styled("div", {
  w: "$full",
  d: "flex",
  justify: "space-between",
  p: "16px",
  border: "1px solid",
  textTransform: "uppercase",
  variants: {
    variant: {
      solid: {
        color: "$white",
        bg: "$black",
        borderColor: "$grey1"
      },
      outline: {
        bg: "transparent"
      }
    },
    type: {
      success: {},
      error: {},
      warning: {},
      default: {}
    }
  }
});
var TextStyled = styled("div", {
  fontWeight: "$bold"
});

// src/components/alert/index.tsx
var Alert = (_a) => {
  var _b = _a, { title, message, button } = _b, props = __objRest(_b, ["title", "message", "button"]);
  return /* @__PURE__ */ React4.createElement(Wrapper, __spreadValues({}, props), /* @__PURE__ */ React4.createElement(Box, {
    css: {
      d: "flex",
      align: "center"
    }
  }, /* @__PURE__ */ React4.createElement(Box, null, /* @__PURE__ */ React4.createElement(TextStyled, null, title), /* @__PURE__ */ React4.createElement(TextStyled, null, message))), button);
};

// src/components/avatar/index.tsx
import React6 from "react";

// src/components/image/index.tsx
import React5 from "react";

// src/components/image/styles.tsx
var Image = styled("img", {
  size: "$full",
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
    }
  },
  defaultVariants: {
    objectFit: "true",
    cover: "true"
  }
});

// src/components/image/index.tsx
var Image2 = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React5.createElement(Image, __spreadValues({
    loading: "lazy"
  }, props));
};

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
  return /* @__PURE__ */ React6.createElement(Avatar, __spreadValues({}, props));
};

// src/components/badge/index.tsx
import React7 from "react";

// src/components/badge/styles.ts
var Wrapper2 = styled("div", {
  d: "inline-flex",
  color: "$white",
  fontSize: "$xs",
  fontWeight: "$bold",
  textTransform: "uppercase",
  lineHeight: "150%",
  variants: {
    rarity: {
      rare: {
        bg: "$pink2"
      },
      common: {
        bg: "$pink1"
      },
      uncommon: {
        bg: "$pink2"
      },
      ultraRare: {
        bg: "$pink2"
      },
      legendary: {
        bg: "$pink2"
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
  return /* @__PURE__ */ React7.createElement(Wrapper2, __spreadValues({
    rarity
  }, props), /* @__PURE__ */ React7.createElement(Tail, null), /* @__PURE__ */ React7.createElement(Space, null), /* @__PURE__ */ React7.createElement(Badge, null, spaceOnCamelCase(rarity)));
};

// src/components/base-carousel/index.tsx
import React9, { forwardRef } from "react";
import SlickSlider from "react-slick";

// src/components/base-carousel/icon.tsx
import React8 from "react";
var Arrow = styled("button", {
  position: "absolute",
  width: 40,
  h: 40,
  mx: "$4",
  p: 0,
  d: "flex",
  justify: "center",
  items: "center",
  bg: "$grey4",
  color: "$white",
  border: "none",
  br: "$full",
  cursor: "pointer",
  transition: "$fast",
  "&:hover": {
    bg: "$grey3"
  }
});
var BaseIcon = ({ d }) => /* @__PURE__ */ React8.createElement("svg", {
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ React8.createElement("path", {
  fill: "currentColor",
  d
}));
var PrevArrow = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React8.createElement(Arrow, __spreadValues({}, props), /* @__PURE__ */ React8.createElement(BaseIcon, {
    d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }));
};
var NextArrow = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React8.createElement(Arrow, __spreadValues({}, props), /* @__PURE__ */ React8.createElement(BaseIcon, {
    d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
  }));
};

// src/components/base-carousel/styles.ts
var Wrapper3 = styled("section", {
  ".slick-slider": {
    position: "relative",
    d: "block",
    userSelect: "none",
    touchAction: "pan-y"
  },
  ".slick-list": {
    position: "relative",
    d: "block",
    overflow: "hidden",
    m: 0,
    p: 0
  },
  ".slick-list:focus": {
    outline: "none"
  },
  ".slick-list.dragging": {
    cursor: "hand"
  },
  ".slick-slider .slick-track, .slick-slider .slick-list": {
    transform: "translate3d(0, 0, 0)"
  },
  ".slick-track": {
    position: "relative",
    top: 0,
    left: 0,
    d: "block"
  },
  ".slick-track:before, .slick-track:after": {
    d: "table",
    content: ""
  },
  ".slick-track:after": {
    clear: "both"
  },
  ".slick-loading .slick-track": {
    visibility: "hidden"
  },
  ".slick-slide": {
    d: "none",
    float: "left",
    h: "100%",
    minH: "1px"
  },
  '[dir="rtl"] .slick-slide': {
    float: "right"
  },
  ".slick-slide img": {
    d: "block"
  },
  ".slick-slide.slick-loading img": {
    d: "none"
  },
  ".slick-slide.dragging img": {
    pointerEvents: "none"
  },
  ".slick-initialized .slick-slide": {
    d: "block"
  },
  ".slick-loading .slick-slide": {
    visibility: "hidden"
  },
  ".slick-vertical .slick-slide": {
    d: "block",
    h: "auto",
    border: "1px solid transparent"
  },
  ".slick-arrow.slick-hidden": {
    d: "none"
  }
});

// src/components/base-carousel/index.tsx
var Carousel = ({ children, settings }, ref) => {
  const defaultSettings = __spreadValues({
    nextArrow: /* @__PURE__ */ React9.createElement(NextArrow, null),
    prevArrow: /* @__PURE__ */ React9.createElement(PrevArrow, null)
  }, settings);
  return /* @__PURE__ */ React9.createElement(Wrapper3, null, /* @__PURE__ */ React9.createElement(SlickSlider, __spreadValues({
    ref
  }, defaultSettings), children));
};
var BaseCarousel = forwardRef(Carousel);

// src/components/breadcrumb/index.tsx
import React12 from "react";

// src/hooks/src/useMediaQuery.ts
import { useState, useEffect } from "react";
var useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
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

// src/hooks/src/useBreakpoint.ts
import { useMemo } from "react";
var useBreakpoint = (query = "md") => {
  const breakpoints2 = useMemo(() => ({
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    "2xl": "(min-width: 1400px)"
  }), []);
  return useMediaQuery(breakpoints2[query]);
};

// src/hooks/src/useId.ts
import {
  createContext,
  createElement,
  memo,
  useContext,
  useMemo as useMemo2
} from "react";
var defaultIdContext = {
  prefix: Math.round(Math.random() * 1e10),
  current: 0
};
var IdContext = createContext(defaultIdContext);
var IdProvider = memo(({ children }) => {
  const currentContext = useContext(IdContext);
  const isRoot = currentContext === defaultIdContext;
  const context = useMemo2(() => ({
    prefix: isRoot ? 0 : ++currentContext.prefix,
    current: 0
  }), [isRoot, currentContext]);
  return createElement(IdContext.Provider, { value: context }, children);
});
IdProvider.displayName = "IdProvider";
function useId(prefix) {
  const context = useContext(IdContext);
  return useMemo2(() => [prefix, context.prefix, ++context.current].filter(Boolean).join("-"), [prefix]);
}

// src/components/flex/index.tsx
var Flex = styled("div", {
  d: "flex"
});

// src/components/breadcrumb/icon.tsx
import React11 from "react";
var HomeIcon = () => /* @__PURE__ */ React11.createElement("svg", {
  viewBox: "0 0 20 20",
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true",
  fill: "currentColor"
}, /* @__PURE__ */ React11.createElement("path", {
  d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
}));
var BackIcon = () => /* @__PURE__ */ React11.createElement("svg", {
  viewBox: "0 0 512 512",
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true",
  fill: "currentColor"
}, /* @__PURE__ */ React11.createElement("path", {
  d: "M395 96H230c-46.7 0-73.2 34.7-102 63.5s-72.1 74.7-72.1 74.7C51 239.8 48 247 48 255.1c0 8 3 15.3 7.9 21 0 0 34.3 37.6 72.1 75.5 37.8 37.8 56.7 64.5 102 64.5h165c38.5 0 69-32.5 69-71V165c0-38.5-30.5-69-69-69zm-17.7 212.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.2-16.4 6.2-22.6 0L302 278.6l-52.7 52.7c-6.2 6.2-16.3 6.4-22.6 0-6.4-6.4-6.7-15.9 0-22.6l52.7-52.7-52.7-52.7c-6-6-7.1-15.6 0-22.6 7.1-7.1 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L324.6 256l52.7 52.7z"
}));

// src/components/breadcrumb/styles.ts
var Wrapper4 = styled("nav", {});
var List = styled("ol", {
  appearance: "none",
  listStyle: "none",
  d: "flex",
  m: 0,
  p: 0,
  "& > *:last-child": {
    span: {
      d: "none",
      "@sm": {
        d: "initial"
      }
    }
  }
});
var Item = styled("li", {
  d: "flex",
  align: "center",
  m: 5,
  p: 0,
  color: "$grey1",
  fontWeight: "$medium",
  textTransform: "uppercase",
  fontSize: "$sm",
  "&:hover": {
    color: "$pink2"
  },
  "&:not(:first-child):not(:last-child)": {
    d: "none",
    "@sm": {
      d: "flex"
    }
  },
  "& + &:before": {
    ml: "$1",
    mr: "$3",
    borderRight: "1px solid $grey4",
    height: "18px",
    content: ""
  }
});
var Link = styled("a", {
  d: "flex",
  align: "center",
  color: "currentColor",
  textDecoration: "none",
  '&[aria-current="page"]': {
    "@sm": {
      fontWeight: "$bold",
      color: "$pink1"
    }
  }
});

// src/components/breadcrumb/index.tsx
var Breadcrumb = (_a) => {
  var _b = _a, { as, items } = _b, props = __objRest(_b, ["as", "items"]);
  const isDesktop = useBreakpoint("sm");
  return /* @__PURE__ */ React12.createElement(Wrapper4, __spreadValues({
    "aria-label": "Breadcrumb"
  }, props), /* @__PURE__ */ React12.createElement(List, null, items == null ? void 0 : items.map((item, index) => {
    const isLastLink = index === items.length - 1;
    return /* @__PURE__ */ React12.createElement(Item, {
      key: item.href
    }, /* @__PURE__ */ React12.createElement(Link, {
      as: as || void 0,
      href: item.href,
      "aria-current": isLastLink ? "page" : void 0
    }, index === 0 && /* @__PURE__ */ React12.createElement(Flex, {
      css: { mr: "$1" }
    }, /* @__PURE__ */ React12.createElement(HomeIcon, null)), isLastLink && !isDesktop && /* @__PURE__ */ React12.createElement(React12.Fragment, null, /* @__PURE__ */ React12.createElement(Flex, {
      css: { mr: "$1" }
    }, /* @__PURE__ */ React12.createElement(BackIcon, null)), "Previous page"), /* @__PURE__ */ React12.createElement("span", null, item.label)));
  })));
};

// src/components/carousel/index.tsx
import React13 from "react";

// src/components/carousel/styles.ts
var Wrapper5 = styled("section", {
  ".slick-track, .slick-list": {
    d: "flex"
  },
  ".slick-list": {
    mx: -16
  },
  ".slick-prev": {
    left: -16
  },
  ".slick-next": {
    right: -16
  },
  ".slick-prev.slick-disabled, .slick-next.slick-disabled": {
    visibility: "hidden"
  },
  ".slick-prev, .slick-next": {
    bottom: -17
  },
  ".slick-dots": {
    listStyle: "none",
    d: "flex !important",
    align: "center",
    justify: "center",
    mt: "$8",
    p: 0,
    li: {
      d: "flex",
      align: "center",
      justify: "center",
      size: 8,
      m: "0 $1",
      bg: "#311722",
      br: "$full",
      cursor: "pointer",
      transition: "$fast",
      "&.slick-active": {
        bg: "$pink1"
      },
      button: {
        opacity: 0,
        size: 8,
        cursor: "pointer"
      }
    }
  }
});
var Item2 = styled("article", {
  position: "relative",
  height: 120,
  d: "flex",
  justify: "center",
  flex: "1 0 auto",
  mx: "$4",
  p: "$8",
  border: "1px solid $white",
  button: {
    position: "absolute",
    bottom: 24,
    textTransform: "uppercase"
  }
});

// src/components/carousel/index.tsx
var Carousel2 = (_a) => {
  var _b = _a, { items, settings } = _b, props = __objRest(_b, ["items", "settings"]);
  const defaultSettings = {
    dots: true,
    slidesToShow: 5,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return /* @__PURE__ */ React13.createElement(Wrapper5, __spreadValues({}, props), /* @__PURE__ */ React13.createElement(BaseCarousel, {
    settings: settings || defaultSettings
  }, items == null ? void 0 : items.map((item) => /* @__PURE__ */ React13.createElement(CarouselItem, __spreadValues({
    key: item.label
  }, item)))));
};
var CarouselItem = ({ src, alt, label }) => {
  return /* @__PURE__ */ React13.createElement(Item2, null, /* @__PURE__ */ React13.createElement(Image2, {
    src,
    alt,
    cover: false,
    css: { width: 150, height: 112 }
  }), /* @__PURE__ */ React13.createElement(Button2, null, label));
};

// src/components/character/index.tsx
import React14 from "react";

// src/components/character/styles.ts
var Wrapper6 = styled("div", {
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
        boxShadow: "0 0 0 1px $colors$pink1"
      }
    }
  }
});
var Overlay = styled("div", {
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
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
  justifyContent: "flex-end",
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
  color: "$pink1",
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
  bg: "$pink1",
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
  alt
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const size = isMobile ? "80" : "160";
  return /* @__PURE__ */ React14.createElement(Wrapper6, {
    active,
    size
  }, /* @__PURE__ */ React14.createElement(Avatar2, {
    size,
    src,
    alt
  }), /* @__PURE__ */ React14.createElement(Overlay, null, /* @__PURE__ */ React14.createElement(Top, {
    size
  }, /* @__PURE__ */ React14.createElement(Typename, {
    size,
    empty: !!type
  }, type || "Empty"), !isMobile && !type && !active && /* @__PURE__ */ React14.createElement(Info, null, "Select a character to assign")), /* @__PURE__ */ React14.createElement(Center, null, !isMobile && !type && active && /* @__PURE__ */ React14.createElement(Button2, {
    css: { w: "100%" }
  }, "Assign")), /* @__PURE__ */ React14.createElement(Bottom, {
    size
  }, /* @__PURE__ */ React14.createElement(Index, {
    size
  }, index))));
};

// src/components/checkbox/index.tsx
import React16 from "react";

// src/components/checkbox/icon.tsx
import React15 from "react";
var CheckIcon = () => /* @__PURE__ */ React15.createElement("svg", {
  viewBox: "0 0 1024 1024",
  height: "12",
  width: "12"
}, /* @__PURE__ */ React15.createElement("path", {
  fill: "currentColor",
  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
}));

// src/components/checkbox/styles.ts
import {
  Indicator,
  Root as Root2
} from "@radix-ui/react-checkbox";
var CheckboxInput = styled(Root2, {
  all: "unset",
  bg: "$black",
  color: "$pink1",
  d: "flex",
  justify: "center",
  align: "center",
  border: "1px solid",
  borderColor: "$grey1",
  "&:hover": {
    borderColor: "$pink1"
  },
  "&:active": {
    borderColor: "$teal1"
  },
  "&:disabled": {
    bg: "$grey1",
    color: "$grey3"
  },
  variants: {
    size: {
      sm: {
        size: 12
      },
      md: {
        size: 16
      },
      lg: {
        size: 20
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var CheckboxIndicator = styled(Indicator, {
  color: "currentColor"
});
var Wrapper7 = styled("div", {
  d: "flex",
  align: "center"
});
var Label = styled("label", {
  color: "$grey1",
  pl: "$1",
  lineHeight: 1,
  userSelect: "none",
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
var Checkbox = React16.forwardRef((_a, ref) => {
  var _b = _a, { size, children } = _b, props = __objRest(_b, ["size", "children"]);
  return /* @__PURE__ */ React16.createElement(Wrapper7, null, /* @__PURE__ */ React16.createElement(CheckboxInput, __spreadValues({
    ref,
    size
  }, props), /* @__PURE__ */ React16.createElement(CheckboxIndicator, null, /* @__PURE__ */ React16.createElement(CheckIcon, null))), /* @__PURE__ */ React16.createElement(Label, {
    size
  }, children));
});
Checkbox.displayName = "Checkbox";

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
import React18 from "react";

// src/components/content-heading/icon.tsx
import React17 from "react";
var InfoIcon = () => /* @__PURE__ */ React17.createElement("svg", {
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ React17.createElement("path", {
  fill: "currentColor",
  d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
}));

// src/components/content-heading/styles.ts
var Wrapper8 = styled("div", {
  d: "flex",
  flexDirection: "column",
  gap: "$2"
});
var Title = styled("h3", {
  d: "inline-flex",
  gap: "$2",
  align: "center",
  fontWeight: "$medium",
  fontSize: "$lg",
  lineHeight: "24px",
  margin: 0,
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
  color: "$grey3",
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
var ContentHeading = ({
  title,
  description,
  line,
  info
}) => /* @__PURE__ */ React18.createElement(Wrapper8, null, /* @__PURE__ */ React18.createElement(Title, null, title, info && /* @__PURE__ */ React18.createElement(InfoIcon, null)), description && /* @__PURE__ */ React18.createElement(Description, {
  line
}, description));

// src/components/grid/index.tsx
var Grid = styled("div", {
  d: "grid"
});

// src/components/input/index.tsx
import React19 from "react";

// src/components/input/styles.ts
var Wrapper9 = styled("div", {
  color: "$white"
});
var Label2 = styled("label", {
  d: "block",
  mb: "$1",
  textTransform: "uppercase",
  fontWeight: "$medium",
  variants: {
    disabled: {
      true: {
        color: "$grey3"
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
  color: "$white",
  transition: "$fast",
  "&:hover": {
    borderBottomColor: "$pink2"
  },
  "&:focus": {
    borderBottomColor: "$teal1",
    borderBottomWidth: "1px"
  },
  "&:disabled": {
    color: "$grey4",
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      default: {
        border: "1px solid $grey3"
      },
      line: {
        borderBottom: "1px solid $grey2"
      }
    },
    error: {
      true: {
        borderBottom: "1px solid  $red1"
      }
    }
  },
  compoundVariants: [
    {
      variant: "line",
      css: {
        "&:disabled": {
          border: "1px solid $grey4"
        }
      }
    },
    {
      variant: "default",
      css: {
        "&:disabled": {
          bg: "#525252",
          color: "$grey4"
        }
      }
    }
  ],
  defaultVariants: {
    variant: "default"
  }
});
var Message = styled("small", {
  color: "$grey1",
  fontSize: "$sm",
  variants: {
    disabled: {
      true: {
        color: "$grey4"
      }
    }
  }
});
var Error2 = styled("div", {
  color: "$red1",
  fontSize: "$sm",
  mt: "$1"
});

// src/components/input/index.tsx
var Input2 = React19.forwardRef((_a, ref) => {
  var _b = _a, { label, hint, error, css: css2, disabled } = _b, props = __objRest(_b, ["label", "hint", "error", "css", "disabled"]);
  return /* @__PURE__ */ React19.createElement(Wrapper9, {
    css: css2
  }, label && /* @__PURE__ */ React19.createElement(Label2, {
    disabled
  }, label), /* @__PURE__ */ React19.createElement(Input, __spreadValues({
    ref,
    disabled,
    error: !!error
  }, props)), /* @__PURE__ */ React19.createElement(Error2, null, error), /* @__PURE__ */ React19.createElement(Message, {
    disabled
  }, hint));
});
Input2.displayName = "Input";

// src/components/label/index.tsx
import React20 from "react";

// src/components/label/styles.ts
var LabelStyles = styled("div", {
  p: "$1 $2",
  d: "inline-flex",
  align: "center",
  gap: "$2",
  color: "$grey5",
  variants: {
    variant: {
      success: {
        bg: "$green1"
      },
      warning: {
        bg: "$yellow1"
      },
      danger: {
        bg: "$red1"
      }
    },
    icon: {
      true: {
        pl: "10px"
      }
    }
  }
});
var Text = styled("label", {
  userSelect: "none",
  textTransform: "uppercase",
  lineHeight: "150%",
  fontSize: "$sm"
});

// src/components/label/index.tsx
var Label3 = ({ children, icon, variant = "success" }) => {
  return /* @__PURE__ */ React20.createElement(LabelStyles, {
    variant,
    icon: !!icon
  }, icon && icon, /* @__PURE__ */ React20.createElement(Text, null, children));
};

// src/components/logo/index.tsx
import React21 from "react";

// src/components/logo/styles.ts
var Svg = styled("svg", {});

// src/components/logo/index.tsx
var Logo = ({ variant }) => {
  return variant === "full" ? /* @__PURE__ */ React21.createElement(Svg, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "250",
    height: "16",
    fill: "none"
  }, /* @__PURE__ */ React21.createElement("path", {
    d: "M39.522 0H24.816c-.511 0-.919.395-.919.889s.409.889.919.889h14.706c.511 0 .919-.395.919-.889S40.012 0 39.522 0zM1.838 9.778v5.333c0 .494-.408.889-.919.889S0 15.605 0 15.111V9.778c0-.494.408-.889.919-.889s.919.395.919.889zM15.625 0c-.245 0-.47.099-.654.257a.9.9 0 0 0-.265.632v12.069L1.94.612a.92.92 0 0 0-1.266.02c-.347.336-.368.889-.02 1.225l14.052 13.59.265.257c.266.257.654.336 1.001.197s.572-.454.572-.83V.849c0-.237-.102-.454-.265-.632A1.08 1.08 0 0 0 15.625 0zM72.61 8.889c-.245 0-.47.099-.654.257s-.265.395-.265.632v5.333c0 .494.408.889.919.889s.919-.395.919-.889V9.778c0-.237-.102-.454-.266-.632s-.409-.257-.654-.257zM87.316 0c-.245 0-.47.099-.654.257a.9.9 0 0 0-.265.632v12.069L73.632.612a.94.94 0 0 0-.899-.257c-.327.079-.572.336-.654.632a.87.87 0 0 0 .266.869l14.052 13.59.265.257c.266.257.654.336 1.001.197s.572-.454.572-.83V.849c0-.237-.102-.454-.266-.632A1.08 1.08 0 0 0 87.316 0zM35.846 8.889c.511 0 .919-.395.919-.889s-.408-.889-.919-.889h-7.353c-.511 0-.919.395-.919.889s.409.889.919.889h7.353zm3.676 5.333H24.816c-.511 0-.919.395-.919.889s.409.889.919.889h14.706c.511 0 .919-.395.919-.889s-.429-.889-.919-.889zM64.338 2.667v10.667a2.54 2.54 0 0 1-.817 1.877c-.531.494-1.226.79-1.94.79H50.551c-.735 0-1.43-.277-1.94-.79-.511-.494-.817-1.185-.817-1.877V2.667A2.54 2.54 0 0 1 48.611.79a2.84 2.84 0 0 1 1.94-.79h11.029c.735 0 1.43.277 1.94.79s.817 1.165.817 1.877zm-1.838 0c0-.237-.102-.454-.266-.632-.163-.158-.409-.257-.654-.257H50.551c-.245 0-.47.099-.654.257a.9.9 0 0 0-.265.632v10.667c0 .237.102.454.265.632s.409.257.654.257h11.029a1 1 0 0 0 .654-.257c.184-.158.266-.395.266-.632V2.667z",
    fill: "url(#A)"
  }), /* @__PURE__ */ React21.createElement("path", {
    d: "M119.485 14.222L121.324 16V1.778L119.485 0v14.222zm9.192-5.333h14.705v5.333h-10.273l-1.818-1.758h-2.594L132.353 16h12.888V7.111h-14.706V1.778h12.868l1.838 1.778V0h-16.544v8.889h-.02zm23.897-7.111h7.353v12.444L161.765 16V1.778h7.353V0h-16.544v1.778zm47.794 12.444L202.206 16V1.778L200.368 0v14.222zM233.456 0v1.778h7.353v12.444L242.647 16V1.778H250V0h-16.544zm-56.985 0h16.544v5.333L190.257 8l2.758 2.667V16l-1.838-1.778v-2.785l-2.594-2.548h-10.274V16l-1.838-1.778V0zm1.838 7.111h10.274l2.594-2.509V1.778h-12.868v5.333zM95.588 0v14.222L97.427 16V1.778H107.7l2.594 2.509v9.936h-7.353L104.78 16h7.352V3.536L108.476 0H95.588zm115.809 14.222V1.778h10.274l1.818 1.758h2.594L222.427 0h-12.889v16h16.545v-3.556l-1.839 1.778h-12.847z",
    fill: "url(#B)"
  }), /* @__PURE__ */ React21.createElement("defs", null, /* @__PURE__ */ React21.createElement("linearGradient", {
    id: "A",
    x1: "30.198",
    y1: "9.021",
    x2: "37.781",
    y2: "-4.569",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React21.createElement("stop", {
    stopColor: "#0af5f7"
  }), /* @__PURE__ */ React21.createElement("stop", {
    offset: "1",
    stopColor: "#5ea1b3"
  })), /* @__PURE__ */ React21.createElement("linearGradient", {
    id: "B",
    x1: "147.601",
    y1: "8.405",
    x2: "158.763",
    y2: "-11.561",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React21.createElement("stop", {
    stopColor: "#b84769"
  }), /* @__PURE__ */ React21.createElement("stop", {
    offset: "1",
    stopColor: "#ff002f"
  })))) : /* @__PURE__ */ React21.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "31",
    height: "16",
    fill: "none"
  }, /* @__PURE__ */ React21.createElement("path", {
    d: "M.9 8.844a.9.9 0 0 0-.636.264.9.9 0 0 0-.264.636V15.1a.9.9 0 0 0 .9.9.9.9 0 0 0 .9-.9V9.744c0-.118-.023-.236-.068-.345s-.111-.209-.195-.293-.183-.15-.293-.195-.227-.068-.345-.068z",
    fill: "url(#A)"
  }), /* @__PURE__ */ React21.createElement("path", {
    d: "M30.173 3.489L26.684 0H14.199v12.928L1.854.583A.9.9 0 0 0 .597.597.9.9 0 0 0 .583 1.854l13.882 13.875a.9.9 0 0 0 .98.194.9.9 0 0 0 .556-.83V1.794h9.936l2.436 2.436v9.963h-7.083l1.794 1.794h7.083l.007-12.498z",
    fill: "url(#A)"
  }), /* @__PURE__ */ React21.createElement("defs", null, /* @__PURE__ */ React21.createElement("linearGradient", {
    id: "A",
    x1: "0",
    y1: "16.02",
    x2: "30.186",
    y2: "0",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React21.createElement("stop", {
    stopColor: "#11eef1"
  }), /* @__PURE__ */ React21.createElement("stop", {
    offset: "1",
    stopColor: "#f70835"
  }))));
};

// src/components/radio/index.tsx
import React22 from "react";

// src/components/radio/styles.ts
import {
  Indicator as Indicator2,
  Item as Item3,
  Root as Root3
} from "@radix-ui/react-radio-group";
var RadioIndicator = styled(Indicator2, {
  d: "flex",
  align: "center",
  justify: "center",
  size: "$full",
  position: "relative",
  transition: "$fast",
  "&:hover": {
    "&:after": {
      bg: "$pink2"
    }
  },
  "&:after": {
    content: "",
    d: "block",
    size: 14,
    br: "$full",
    bg: "$pink1"
  }
});
var RadioInputItem = styled(Item3, {
  all: "unset",
  bg: "$white",
  size: 20,
  br: "$full",
  bs: "0 0 0 1px $colors$grey2",
  cursor: "pointer",
  transition: "$fast",
  "&:hover": {
    bs: "0 0 0 1px $colors$pink2",
    '&[aria-checked="true"]': {
      bs: "0 0 0 1px $colors$pink2"
    }
  },
  "&:focus": {
    bs: "0 0 0 2px $colors$grey1"
  },
  "&:disabled": {
    bs: "0 0 0 1px $colors$grey3",
    bg: "$grey1",
    ">span": {
      bs: "0 0 0 1px $grey7",
      "&:after": {
        bg: "$grey7"
      }
    }
  },
  variants: {
    error: {
      true: {
        bs: "0 0 0 1px $colors$red1"
      }
    }
  },
  '&[aria-checked="true"]': {
    bs: "0 0 0 1px $colors$pink1",
    "&:disabled": {
      bg: "$grey6",
      bs: "0 0 0 1px $colors$grey3"
    }
  }
});
var RadioInputGroup = styled(Root3, {
  color: "$white",
  variants: {
    direction: {
      row: {
        d: "flex",
        "& > :not(:last-child)": {
          mr: "$4"
        }
      },
      column: {}
    }
  },
  defaultVariant: {
    direction: "column"
  }
});
var Wrapper10 = styled("div", {
  d: "flex",
  align: "center",
  my: "$3"
});
var Label4 = styled("label", {
  color: "$grey1",
  fontSize: "$md",
  pl: "$1",
  lineHeight: 1,
  userSelect: "none",
  cursor: "pointer",
  textTransform: "uppercase",
  variants: {
    error: {
      true: {
        color: "$red1"
      }
    },
    disabled: {
      true: {
        color: "$grey4"
      }
    }
  }
});

// src/components/radio/index.tsx
var RadioGroup = React22.forwardRef((_a, ref) => {
  var _b = _a, { label, children } = _b, props = __objRest(_b, ["label", "children"]);
  return /* @__PURE__ */ React22.createElement(RadioInputGroup, __spreadValues({
    ref,
    "aria-label": label
  }, props), children);
});
RadioGroup.displayName = "RadioGroup";
var RadioItem = (_a) => {
  var _b = _a, { children, error, disabled } = _b, props = __objRest(_b, ["children", "error", "disabled"]);
  return /* @__PURE__ */ React22.createElement(Wrapper10, null, /* @__PURE__ */ React22.createElement(RadioInputItem, __spreadValues({
    error,
    disabled
  }, props), /* @__PURE__ */ React22.createElement(RadioIndicator, null)), /* @__PURE__ */ React22.createElement(Label4, {
    disabled,
    error
  }, children));
};

// src/components/select/index.tsx
import React26 from "react";

// src/components/select/custom-select/index.tsx
import React24 from "react";

// src/components/select/icon.tsx
import React23 from "react";
var ChevronDownIcon = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React23.createElement("svg", __spreadValues({
    viewBox: "0 0 16 16",
    width: "1.5rem",
    height: "1.5rem",
    focusable: "false",
    "aria-hidden": "true",
    fill: "currentColor"
  }, props), /* @__PURE__ */ React23.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
  }));
};

// src/components/select/custom-select/index.tsx
import { HiBadgeCheck } from "react-icons/hi";

// src/components/select/custom-select/styles.ts
import {
  ListboxButton,
  ListboxInput,
  ListboxOption,
  ListboxList,
  ListboxPopover
} from "@reach/listbox";

// src/components/select/styles.ts
var SelectWrapper = {
  position: "relative",
  d: "flex",
  align: "center"
};
var Select = {
  appearance: "none",
  fontFamily: "inherit",
  w: "$full",
  cursor: "pointer",
  color: "$white",
  align: "center",
  d: "inline-flex",
  justify: "space-between",
  px: "$4",
  userSelect: "none",
  fontWeight: "$medium",
  border: "1px solid",
  "&:hover": {
    borderColor: "$pink1"
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
        borderColor: "$grey3"
      }
    }
  },
  defaultVariants: {
    size: "default",
    variant: "outline"
  }
};
var Option = {
  d: "block",
  m: 0,
  p: "$2 $6",
  userSelect: "none",
  whiteSpace: "nowrap",
  color: "$white",
  cursor: "pointer",
  fontWeight: "$medium",
  textTransform: "uppercase"
};
var Label5 = {
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
};
var Hint = {
  color: "$grey1",
  fontSize: "$xs",
  mt: "5px",
  d: "block",
  variants: {
    disabled: {
      true: {
        color: "$grey4"
      }
    }
  }
};
var Error3 = {
  color: "$red1",
  fontSize: "$xs"
};

// src/components/select/custom-select/styles.ts
var Wrapper11 = styled("div");
var SelectWrapper2 = styled(ListboxInput, __spreadValues({}, SelectWrapper));
var Select2 = styled(ListboxButton, __spreadProps(__spreadValues({}, Select), {
  "+ span": {
    bg: "red"
  },
  '&[aria-expanded="true"]': {
    borderColor: "$teal1"
  },
  '&[aria-disabled="true"]': {
    color: "$grey4",
    borderColor: "$grey4",
    cursor: "not-allowed",
    "& + svg": {
      color: "$grey4"
    }
  }
}));
var Popover = styled(ListboxPopover, {
  color: "$white",
  minWidth: "min-content"
});
var List2 = styled(ListboxList, {
  p: "$1",
  bg: "$grey5"
});
var Option2 = styled(ListboxOption, __spreadProps(__spreadValues({}, Option), {
  "&[data-reach-listbox-option]": {},
  "&[data-current-selected]": {
    color: "$pink1"
  },
  "&[data-current-nav]": {
    color: "$pink1",
    bg: "$grey4"
  },
  '&[aria-disabled="true"]': {
    color: "$green1"
  }
}));
var Label6 = styled("label", __spreadValues({}, Label5));
var Hint2 = styled("small", __spreadValues({}, Hint));
var Error4 = styled("div", __spreadValues({}, Error3));

// src/components/select/custom-select/index.tsx
var CustomSelect = ({
  id,
  label,
  hint,
  error,
  variant,
  size,
  disabled,
  onChange,
  children
}) => {
  return /* @__PURE__ */ React24.createElement(Wrapper11, null, label && /* @__PURE__ */ React24.createElement(Label6, {
    htmlFor: id,
    size
  }, label), /* @__PURE__ */ React24.createElement(SelectWrapper2, {
    "aria-labelledby": id,
    disabled,
    onChange
  }, /* @__PURE__ */ React24.createElement(Select2, {
    size,
    variant,
    arrow: /* @__PURE__ */ React24.createElement(ChevronDownIcon, null)
  }), /* @__PURE__ */ React24.createElement(Popover, null, /* @__PURE__ */ React24.createElement(List2, null, children))), hint && /* @__PURE__ */ React24.createElement(Hint2, {
    disabled
  }, hint), error && /* @__PURE__ */ React24.createElement(Error4, null, error));
};
var CustomSelectItem = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React24.createElement(Option2, __spreadValues({}, props), /* @__PURE__ */ React24.createElement(Flex, {
    css: { align: "center" }
  }, /* @__PURE__ */ React24.createElement(Flex, {
    css: { mr: "$3" }
  }, /* @__PURE__ */ React24.createElement(HiBadgeCheck, null)), children));
};

// src/components/select/native-select/index.tsx
import React25 from "react";

// src/components/select/native-select/styles.ts
var Wrapper12 = styled("div");
var SelectWrapper3 = styled("div", __spreadValues({}, SelectWrapper));
var Select3 = styled("select", __spreadProps(__spreadValues({}, Select), {
  pr: "$8",
  "&:focus-within": {
    borderColor: "$teal1"
  },
  "&:disabled": {
    color: "$grey4",
    borderColor: "$grey4",
    cursor: "not-allowed",
    "& + svg": {
      color: "$grey4"
    }
  }
}));
var ArrowIcon = styled(ChevronDownIcon, {
  position: "absolute",
  d: "flex",
  pointerEvents: "none",
  right: "$4",
  color: "$white"
});
var Option3 = styled("option", __spreadValues({}, Option));
var Label7 = styled("label", __spreadValues({}, Label5));
var Hint3 = styled("small", __spreadValues({}, Hint));
var Error5 = styled("div", __spreadValues({}, Error3));

// src/components/select/native-select/index.tsx
var NativeSelect = ({
  id,
  label,
  hint,
  error,
  variant,
  size,
  disabled,
  onChange,
  children
}) => {
  return /* @__PURE__ */ React25.createElement(Wrapper12, null, label && /* @__PURE__ */ React25.createElement(Label7, {
    htmlFor: id,
    size
  }, label), /* @__PURE__ */ React25.createElement(SelectWrapper3, null, /* @__PURE__ */ React25.createElement(Select3, {
    id,
    variant,
    size,
    disabled,
    onChange
  }, children), /* @__PURE__ */ React25.createElement(ArrowIcon, null)), hint && /* @__PURE__ */ React25.createElement(Hint3, {
    disabled
  }, hint), error && /* @__PURE__ */ React25.createElement(Error5, null, error));
};
var NativeSelectItem = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React25.createElement(Option3, __spreadValues({}, props), children);
};

// src/components/select/index.tsx
var Select4 = (_a) => {
  var _b = _a, { items } = _b, props = __objRest(_b, ["items"]);
  const selectId = useId("select");
  const isMobile = useBreakpoint("sm");
  return /* @__PURE__ */ React26.createElement(React26.Fragment, null, isMobile ? /* @__PURE__ */ React26.createElement(CustomSelect, __spreadValues({
    id: selectId
  }, props), items == null ? void 0 : items.map((item) => /* @__PURE__ */ React26.createElement(CustomSelectItem, {
    key: item.value,
    value: item.value
  }, item.label))) : /* @__PURE__ */ React26.createElement(NativeSelect, __spreadValues({
    id: selectId
  }, props), items == null ? void 0 : items.map((item) => /* @__PURE__ */ React26.createElement(NativeSelectItem, {
    key: item.value,
    value: item.value
  }, item.label))));
};

// src/components/stepper/index.tsx
import React30 from "react";

// src/components/stepper/desktop/index.tsx
import React28 from "react";

// src/components/stepper/useStepper.ts
import { useMemo as useMemo3 } from "react";
var useStepper = (activeItem, items) => {
  const totalItems = useMemo3(() => items.length, [items]);
  const activeItemLabel = useMemo3(() => items[activeItem - 1], [items, activeItem]);
  return { totalItems, activeItemLabel };
};

// src/components/stepper/desktop/icon.tsx
import React27 from "react";
var CaretRightIcon = () => /* @__PURE__ */ React27.createElement("svg", {
  viewBox: "0 0 192 512",
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ React27.createElement("path", {
  fill: "currentColor",
  d: "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
}));

// src/components/stepper/desktop/styles.ts
var Wrapper13 = styled("ul", {
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
  bg: "$grey4",
  color: "$grey3",
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
    color: "$grey4",
    svg: {
      color: "$white"
    }
  }
});
var IconWrapper = styled("span", {
  w: 25,
  bg: "$black",
  h: "$full",
  d: "flex",
  justify: "center",
  align: "center"
});

// src/components/stepper/desktop/index.tsx
var DesktopStepper = ({ activeItem, items, css: css2 }) => {
  const { totalItems } = useStepper(activeItem, items);
  return /* @__PURE__ */ React28.createElement(Wrapper13, {
    "data-steps": totalItems,
    css: css2
  }, items == null ? void 0 : items.map((item, index) => {
    const currentItem = index + 1;
    return /* @__PURE__ */ React28.createElement(ItemWrapper, {
      key: index,
      "aria-current": currentItem === activeItem
    }, item, /* @__PURE__ */ React28.createElement(IconWrapper, {
      "aria-hidden": true
    }, /* @__PURE__ */ React28.createElement(CaretRightIcon, null)));
  }));
};

// src/components/stepper/mobile/index.tsx
import React29 from "react";

// src/components/text/index.ts
var Text2 = styled("span", {
  d: "block",
  lineHeight: 1,
  margin: 0,
  color: "$white",
  variants: {
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
    }
  },
  defaultVariants: {
    size: "md",
    weight: "normal"
  }
});

// src/components/stepper/mobile/styles.ts
var Wrapper14 = styled("ul", {
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
    borderBottom: "2px solid $grey4",
    width: "$full",
    top: "3px",
    left: "-50%",
    zIndex: 2
  },
  "&:after": {
    position: "absolute",
    content: "",
    borderBottom: "2px solid $grey4",
    width: "$full",
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
  bg: "$grey4",
  br: "$full",
  zIndex: 5
});

// src/components/stepper/mobile/index.tsx
var MobileStepper = ({ activeItem, items, css: css2 }) => {
  const { totalItems, activeItemLabel } = useStepper(activeItem, items);
  return /* @__PURE__ */ React29.createElement(React29.Fragment, null, /* @__PURE__ */ React29.createElement(VisuallyHidden, null, `Step ${activeItem} of ${totalItems}`), /* @__PURE__ */ React29.createElement(Box, {
    css: css2
  }, /* @__PURE__ */ React29.createElement(Flex, {
    css: { justify: "space-between", align: "flex-end" }
  }, /* @__PURE__ */ React29.createElement(Box, {
    css: { textTransform: "uppercase" },
    "aria-hidden": true
  }, /* @__PURE__ */ React29.createElement(Text2, {
    size: "xs",
    weight: "medium",
    css: { color: "$grey3" }
  }, "Step ", activeItem), /* @__PURE__ */ React29.createElement(Text2, {
    weight: "medium",
    css: { mt: "$1" }
  }, activeItemLabel)), /* @__PURE__ */ React29.createElement(Wrapper14, {
    "data-steps": totalItems,
    "aria-hidden": true,
    css: { w: "50%" }
  }, items == null ? void 0 : items.map((_, index) => {
    const currentItem = index + 1;
    return /* @__PURE__ */ React29.createElement(StepperItem, {
      key: index,
      completed: activeItem > currentItem,
      "aria-current": activeItem === currentItem
    }, /* @__PURE__ */ React29.createElement(StepperItemIcon, {
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
  return /* @__PURE__ */ React30.createElement(React30.Fragment, null, isDesktop ? /* @__PURE__ */ React30.createElement(DesktopStepper, __spreadValues({}, props)) : /* @__PURE__ */ React30.createElement(MobileStepper, __spreadValues({}, props)));
};

// src/components/tab/index.tsx
import React31 from "react";

// src/components/tab/styles.ts
import {
  Content,
  List as List3,
  Root as Root4,
  Trigger
} from "@radix-ui/react-tabs";
var TabRoot = styled(Root4, {
  color: "$white",
  d: "flex",
  flexDirection: "column"
});
var List4 = styled(List3, {
  d: "flex",
  listStyle: "none",
  borderBottom: "1px solid $grey1",
  m: 0,
  p: 0,
  overflowX: "scroll",
  overflowY: "hidden",
  "@md": {
    overflowY: "initial",
    overflowX: "initial"
  }
});
var Item4 = styled(Trigger, {
  p: "$1 $6",
  fontSize: "$md",
  fontWeight: "$medium",
  textTransform: "uppercase",
  lineHeight: "150%",
  cursor: "pointer",
  "&:hover": {
    color: "$pink1",
    borderBottom: "1px solid $pink1",
    mb: "-1px"
  },
  '&[tabindex="0"]': {
    color: "$pink1",
    borderBottom: "1px solid $pink1",
    mb: "-1px"
  },
  '&[data-state="active"]': {
    py: "3px",
    mb: -1,
    border: "1px solid $grey1",
    borderBottom: "1px solid $black"
  }
});
var Content2 = styled(Content, {});

// src/components/tab/index.tsx
var Tab = (_a) => {
  var _b = _a, {
    defaultValue = "tab1",
    children
  } = _b, props = __objRest(_b, [
    "defaultValue",
    "children"
  ]);
  return /* @__PURE__ */ React31.createElement(TabRoot, __spreadValues({
    defaultValue,
    activationMode: "manual"
  }, props), children);
};
var TabList = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React31.createElement(List4, __spreadValues({}, props), children);
};
var TabItem = (_a) => {
  var _b = _a, { children, value } = _b, props = __objRest(_b, ["children", "value"]);
  return /* @__PURE__ */ React31.createElement(Item4, __spreadValues({
    value
  }, props), children);
};
var TabContent = ({ children, value }) => /* @__PURE__ */ React31.createElement(Content2, {
  value
}, children);

// src/components/toggle/index.tsx
import React32 from "react";

// src/components/toggle/styles.ts
import {
  Root as Root5
} from "@radix-ui/react-label";
import {
  Root as Root6
} from "@radix-ui/react-toggle";
var Wrapper15 = styled(Root5, {
  position: "relative",
  d: "inline-block",
  width: 60,
  height: 34
});
var ToggleInput = styled(Root6, {
  opacity: 0,
  width: 0,
  height: 0,
  '&[data-state="on"] + span': {
    bg: "$green1"
  },
  '&[data-state="on"] + span:before': {
    transform: "translateX(26px)"
  },
  "&:disabled": {
    '&[data-state="on"] + span': {
      bg: "$grey1"
    },
    "+ span": {
      cursor: "not-allowed"
    }
  }
});
var ToggleSlider = styled("span", {
  position: "absolute",
  inset: 0,
  bg: "$grey3",
  transition: "$fast",
  br: "$full",
  cursor: "pointer",
  "&:before": {
    position: "absolute",
    content: "",
    height: 26,
    width: 26,
    left: 4,
    bottom: 4,
    bg: "$white",
    transition: "$fast",
    br: "$half"
  }
});

// src/components/toggle/index.tsx
var Toggle2 = ({ name }) => {
  return /* @__PURE__ */ React32.createElement(Wrapper15, {
    htmlFor: `toggle-${name}`
  }, /* @__PURE__ */ React32.createElement(ToggleInput, {
    id: `toggle-${name}`,
    name
  }), /* @__PURE__ */ React32.createElement(ToggleSlider, null));
};

// src/components/tag/index.tsx
import React34 from "react";

// src/components/tag/styles.ts
var TagStyles = styled("div", {
  position: "absolute",
  d: "inline-flex",
  align: "center",
  justify: "center",
  px: "$4",
  color: "$grey3",
  gap: "$1",
  fontWeight: "$bold",
  textTransform: "uppercase",
  border: "1px solid $grey3",
  lineHeight: "150%",
  br: "$md",
  svg: {
    color: "$white"
  },
  variants: {
    style: {
      grey: {
        color: "$white",
        bg: "$grey1",
        borderColor: "transparent",
        svg: {
          color: "$grey3"
        }
      },
      outlined: {}
    },
    removable: {
      true: {
        pr: "$1"
      }
    },
    image: {
      true: {
        pl: 0,
        gap: "$1"
      }
    },
    icon: {
      true: {
        pl: "$2",
        gap: "$1"
      }
    }
  }
});
var RemoveWrapper = styled("div", {
  color: "$white",
  position: "relative",
  d: "flex",
  p: "$1",
  align: "center",
  justify: "center",
  br: "$full",
  cursor: "pointer",
  bg: "$grey4"
});
var RelativeAvatar = styled(Avatar2, {
  position: "relative",
  left: -1
});

// src/components/tag/icon.tsx
import React33 from "react";
var BaseIcon2 = ({ d }) => /* @__PURE__ */ React33.createElement("svg", {
  viewBox: "0 0 16 16",
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ React33.createElement("path", {
  fill: "currentColor",
  d
}));
var ArchiveIcon = () => /* @__PURE__ */ React33.createElement(BaseIcon2, {
  d: "M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
});

// src/components/tag/index.tsx
import { IoMdClose } from "react-icons/io";
var Remove = ({ onRemove }) => /* @__PURE__ */ React34.createElement(RemoveWrapper, {
  onClick: onRemove
}, /* @__PURE__ */ React34.createElement(IoMdClose, {
  size: 12,
  color: "white"
}));
var Tag = (_a) => {
  var _b = _a, {
    label,
    style = "grey",
    removable,
    onRemove,
    image,
    icon
  } = _b, args = __objRest(_b, [
    "label",
    "style",
    "removable",
    "onRemove",
    "image",
    "icon"
  ]);
  if (image && icon) {
    throw new Error("Tag cannot have both image and icon");
  }
  return /* @__PURE__ */ React34.createElement(TagStyles, __spreadValues({
    style,
    removable,
    image: !!image,
    icon: !!icon
  }, args), image && /* @__PURE__ */ React34.createElement(RelativeAvatar, {
    src: image,
    alt: "Description",
    size: 24
  }), icon && /* @__PURE__ */ React34.createElement(ArchiveIcon, null), label, removable && /* @__PURE__ */ React34.createElement(Remove, {
    onRemove
  }));
};

// src/components/textarea/index.tsx
import React35 from "react";

// src/components/textarea/styles.ts
import ResizeTextarea from "react-textarea-autosize";
import {
  Root as Root7
} from "@radix-ui/react-label";
var Wrapper16 = styled("div", {
  color: "$white"
});
var Label9 = styled(Root7, {
  d: "block",
  mb: "$1",
  textTransform: "uppercase",
  fontWeight: "$medium"
});
var TextAreaInput = styled(ResizeTextarea, {
  width: "$full",
  p: "$2",
  fontSize: "$md",
  outline: "none",
  bg: "$black",
  color: "$white",
  border: "1px solid",
  borderColor: "$grey3",
  "&:hover": {
    borderColor: "$pink2"
  },
  "&:focus": {
    borderColor: "$teal1"
  },
  "&:disabled": {
    bg: "$grey1",
    cursor: "not-allowed"
  },
  variants: {
    error: {
      true: {
        bg: "$red1"
      }
    }
  }
});
var Message2 = styled("small", {
  mt: "$1",
  color: "$grey1",
  d: "block"
});
var Error6 = styled("div", {
  color: "$red1"
});

// src/components/textarea/index.tsx
var Textarea = React35.forwardRef(({ label, hint, name, error, minRows = 3, css: css2 }, ref) => {
  return /* @__PURE__ */ React35.createElement(Wrapper16, null, label && /* @__PURE__ */ React35.createElement(Label9, {
    htmlFor: `textarea-${name}`
  }, label), /* @__PURE__ */ React35.createElement(TextAreaInput, {
    ref,
    id: `textarea-${name}`,
    minRows,
    css: css2
  }), /* @__PURE__ */ React35.createElement(Message2, null, hint), /* @__PURE__ */ React35.createElement(Error6, null, error));
});
Textarea.displayName = "Textarea";

// src/components/heading/index.tsx
import React36 from "react";

// src/components/heading/styles.tsx
var Heading = styled(Text2, {
  defaultVariants: {
    size: "2xl",
    weight: "bold"
  }
});

// src/components/heading/index.tsx
var Heading2 = (_a) => {
  var _b = _a, { level = 2, children } = _b, props = __objRest(_b, ["level", "children"]);
  return /* @__PURE__ */ React36.createElement(Heading, __spreadValues({
    as: `h${level}`
  }, props), children);
};

// src/components/page-heading/index.tsx
import React37 from "react";

// src/components/page-heading/styles.ts
var Wrapper17 = styled("div", {
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
var Title2 = styled("h1", {
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
  height: 2,
  background: "$grey4",
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
  color: "$grey3",
  mt: "$2",
  border: "none",
  "@md": {
    borderLeft: "2px solid",
    borderColor: "$grey4",
    pl: "$2"
  }
});
var FullLine = styled("hr", {
  borderWidth: "0px 0px 1px",
  borderColor: "$grey4",
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
  } = _b, args = __objRest(_b, [
    "description",
    "children",
    "title"
  ]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return /* @__PURE__ */ React37.createElement(Wrapper17, __spreadValues({}, args), /* @__PURE__ */ React37.createElement(HeadingStyled, null, /* @__PURE__ */ React37.createElement(Title2, {
    haveButton: !!children
  }, title), /* @__PURE__ */ React37.createElement(Line, {
    haveButton: !!children,
    haveDescription: !!description
  }), !isMobile && /* @__PURE__ */ React37.createElement(FlexEnd, null, /* @__PURE__ */ React37.createElement(ChildrenButtons, {
    children,
    isMobile
  }))), /* @__PURE__ */ React37.createElement(FullLine, {
    haveButton: !!children,
    haveDescription: !!description
  }), /* @__PURE__ */ React37.createElement(Bottom2, {
    haveButton: !!children,
    haveDescription: !!description
  }, description && /* @__PURE__ */ React37.createElement(Description2, null, description), isMobile && /* @__PURE__ */ React37.createElement(ChildrenButtons, {
    children,
    isMobile
  })));
};
var ChildrenButtons = ({ children, isMobile }) => /* @__PURE__ */ React37.createElement(React37.Fragment, null, React37.Children.map(children, (child) => {
  if ((child == null ? void 0 : child.type) === Button2 && isMobile) {
    return React37.cloneElement(child, {
      fluid: true
    });
  }
  return child;
}));

// src/components/pagination/index.tsx
import React38, { useMemo as useMemo4 } from "react";
import {
  HiOutlineArrowSmLeft as LeftMobileIcon,
  HiOutlineArrowSmRight as RightMobileIcon,
  HiOutlineChevronDoubleLeft as DoubleLeftIcon,
  HiOutlineChevronDoubleRight as DoubleRightIcon,
  HiOutlineChevronLeft as LeftIcon,
  HiOutlineChevronRight as RightIcon
} from "react-icons/hi";

// src/components/pagination/styles.ts
var PaginationContainer = styled("div", {
  display: "flex",
  p: "$4 $6",
  justify: "center",
  align: "center",
  gap: "$2",
  border: "1px dashed $pink1",
  br: "$sm"
});
var NumberContainer = styled("div", {
  d: "flex",
  p: "$2 $4",
  color: "$white",
  "&:hover": {
    color: "$pink2",
    cursor: "pointer"
  },
  variants: {
    active: {
      true: {
        color: "$pink1"
      }
    }
  }
});
var Number = styled("div", {
  fontSize: "$sm",
  fontWeight: "$medium"
});
var MobileContainer = styled("div", {
  d: "flex",
  align: "center",
  justify: "center",
  color: "$white",
  gap: "$4"
});
var iconVariant = {
  svg: {
    color: "$grey4",
    cursor: "default"
  },
  variants: {
    canGo: {
      true: {
        svg: {
          color: "$pink1",
          cursor: "pointer"
        }
      }
    }
  }
};
var IconContainer = styled("div", {
  d: "flex",
  align: "center"
});
var iconStyle = {
  d: "flex",
  align: "center",
  justify: "center",
  svg: {
    fontSize: "$kg",
    color: "$pink1",
    cursor: "pointer"
  }
};
var resetButton = {
  background: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer"
};
var ArrowLeft = styled("button", __spreadValues(__spreadValues(__spreadValues({}, resetButton), iconStyle), iconVariant));
var ArrowRight = styled("button", __spreadValues(__spreadValues(__spreadValues({}, resetButton), iconStyle), iconVariant));
var FirstPageArrow = styled("button", __spreadValues(__spreadValues(__spreadValues({}, resetButton), iconStyle), iconVariant));
var LastPageArrow = styled("button", __spreadValues(__spreadValues(__spreadValues({}, resetButton), iconStyle), iconVariant));

// src/components/pagination/index.tsx
var MobilePagination = ({
  currentPage,
  totalCount,
  canPrevious,
  canNext,
  goPrevious,
  goNext
}) => {
  return /* @__PURE__ */ React38.createElement(MobileContainer, null, /* @__PURE__ */ React38.createElement(ArrowLeft, {
    canGo: canPrevious,
    onClick: goPrevious
  }, /* @__PURE__ */ React38.createElement(LeftMobileIcon, {
    size: 24
  })), currentPage, " of ", totalCount, /* @__PURE__ */ React38.createElement(ArrowRight, {
    canGo: canNext,
    onClick: goNext
  }, /* @__PURE__ */ React38.createElement(RightMobileIcon, {
    size: 24
  })));
};
var DesktopPagination = ({
  limit,
  currentPage,
  setCurrentPage,
  pageSize,
  totalCount,
  canPrevious,
  canNext,
  goNext,
  goPrevious,
  quickJumpButton
}) => {
  const generatePages = (currentPage2, limit2) => {
    const start = Math.floor((currentPage2 - 1) / limit2) * limit2;
    return new Array(limit2).fill(0).map((_, idx) => start + idx + 1);
  };
  const pages = useMemo4(() => generatePages(currentPage, limit), [currentPage, limit]);
  const totalPages = Math.ceil(totalCount / pageSize);
  return /* @__PURE__ */ React38.createElement(PaginationContainer, null, /* @__PURE__ */ React38.createElement(IconContainer, null, quickJumpButton && /* @__PURE__ */ React38.createElement(FirstPageArrow, {
    canGo: canPrevious,
    onClick: () => setCurrentPage(1)
  }, /* @__PURE__ */ React38.createElement(DoubleLeftIcon, null)), /* @__PURE__ */ React38.createElement(ArrowLeft, {
    canGo: canPrevious,
    onClick: goPrevious
  }, /* @__PURE__ */ React38.createElement(LeftIcon, null))), pages.map((page, index) => page <= totalPages && index <= limit - 1 ? /* @__PURE__ */ React38.createElement(NumberContainer, {
    active: currentPage === page
  }, /* @__PURE__ */ React38.createElement(Number, {
    key: index,
    onClick: () => setCurrentPage(page)
  }, page)) : null), /* @__PURE__ */ React38.createElement(IconContainer, null, /* @__PURE__ */ React38.createElement(ArrowRight, {
    canGo: canNext,
    onClick: goNext
  }, /* @__PURE__ */ React38.createElement(RightIcon, null)), quickJumpButton && /* @__PURE__ */ React38.createElement(LastPageArrow, {
    canGo: canNext,
    onClick: () => setCurrentPage(totalPages)
  }, /* @__PURE__ */ React38.createElement(DoubleRightIcon, null))));
};
var Pagination = (_a) => {
  var _b = _a, {
    quickJumpButton = false,
    currentPage,
    setCurrentPage,
    limit = 5
  } = _b, args = __objRest(_b, [
    "quickJumpButton",
    "currentPage",
    "setCurrentPage",
    "limit"
  ]);
  const goNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const goPrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const isMobile = useMediaQuery("(max-width: 600px)");
  return isMobile ? /* @__PURE__ */ React38.createElement(MobilePagination, __spreadValues({
    currentPage,
    goNext,
    goPrevious
  }, args)) : /* @__PURE__ */ React38.createElement(DesktopPagination, __spreadValues({
    goNext,
    goPrevious,
    currentPage,
    setCurrentPage,
    limit,
    quickJumpButton
  }, args));
};

// src/components/stack/index.tsx
var childWithGap = "> * + *";
var Stack = styled("div", {
  d: "flex",
  $$gap: "$space$10",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
        [childWithGap]: { m: "0 0 0 $$gap" }
      },
      "row-reverse": {
        flexDirection: "row-reverse",
        [childWithGap]: { m: "0 $$gap 0 0" }
      },
      column: {
        flexDirection: "column",
        [childWithGap]: { m: "$$gap 0 0 0" }
      },
      "column-reverse": {
        flexDirection: "column-reverse",
        [childWithGap]: { m: "0 0 $$gap 0" }
      }
    }
  },
  defaultVariants: {
    direction: "row"
  }
});
export {
  Alert,
  Avatar2 as Avatar,
  Badge2 as Badge,
  BaseCarousel,
  Box,
  Breadcrumb,
  Button2 as Button,
  Carousel2 as Carousel,
  Character,
  Checkbox,
  Container,
  ContentHeading,
  Flex,
  Grid,
  Heading2 as Heading,
  IdProvider,
  Input2 as Input,
  Label3 as Label,
  Logo,
  PageHeading,
  Pagination,
  RadioGroup,
  RadioItem,
  Select4 as Select,
  Spinner2 as Spinner,
  Stack,
  Stepper,
  Tab,
  TabContent,
  TabItem,
  TabList,
  Tag,
  Text2 as Text,
  Textarea,
  Toggle2 as Toggle,
  VisuallyHidden,
  config,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  useBreakpoint,
  useId,
  useMediaQuery
};
//# sourceMappingURL=index.mjs.map
