import {
  __objRest,
  __spreadValues,
  styled
} from "../chunk-KKM2LXRG.mjs";

// src/components/base-carousel/index.tsx
import React2, { forwardRef } from "react";
import SlickSlider from "react-slick";

// src/components/base-carousel/icon.tsx
import React from "react";
var Arrow = styled("button", {
  position: "absolute",
  w: 40,
  h: 40,
  mx: "$4",
  p: 0,
  d: "flex",
  justify: "center",
  items: "center",
  bg: "$grey-700",
  color: "$white",
  border: "none",
  br: "$full",
  cursor: "pointer",
  transition: "$fast",
  "&:hover": {
    bg: "$grey-600"
  }
});
var BaseIcon = ({ d }) => /* @__PURE__ */ React.createElement("svg", {
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "currentColor",
  d
}));
var PrevArrow = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.createElement(Arrow, __spreadValues({}, props), /* @__PURE__ */ React.createElement(BaseIcon, {
    d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }));
};
var NextArrow = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.createElement(Arrow, __spreadValues({}, props), /* @__PURE__ */ React.createElement(BaseIcon, {
    d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
  }));
};

// src/components/base-carousel/styles.ts
var Wrapper = styled("section", {
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
var Carousel = (_a, ref) => {
  var _b = _a, { children, settings } = _b, props = __objRest(_b, ["children", "settings"]);
  const defaultSettings = __spreadValues({
    nextArrow: /* @__PURE__ */ React2.createElement(NextArrow, null),
    prevArrow: /* @__PURE__ */ React2.createElement(PrevArrow, null)
  }, settings);
  return /* @__PURE__ */ React2.createElement(Wrapper, __spreadValues({}, props), /* @__PURE__ */ React2.createElement(SlickSlider, __spreadValues({
    ref
  }, defaultSettings), children));
};
var BaseCarousel = forwardRef(Carousel);
export {
  BaseCarousel
};
//# sourceMappingURL=index.mjs.map
