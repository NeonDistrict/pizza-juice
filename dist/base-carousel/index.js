"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/base-carousel/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactslick = require('react-slick'); var _reactslick2 = _interopRequireDefault(_reactslick);

// src/components/base-carousel/icon.tsx

var Arrow = _chunkDHEOC6CNjs.styled.call(void 0, "button", {
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
var BaseIcon = ({ d }) => /* @__PURE__ */ _react2.default.createElement("svg", {
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ _react2.default.createElement("path", {
  fill: "currentColor",
  d
}));
var PrevArrow = (_a) => {
  var props = _chunkDHEOC6CNjs.__objRest.call(void 0, _a, []);
  return /* @__PURE__ */ _react2.default.createElement(Arrow, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, props), /* @__PURE__ */ _react2.default.createElement(BaseIcon, {
    d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }));
};
var NextArrow = (_a) => {
  var props = _chunkDHEOC6CNjs.__objRest.call(void 0, _a, []);
  return /* @__PURE__ */ _react2.default.createElement(Arrow, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, props), /* @__PURE__ */ _react2.default.createElement(BaseIcon, {
    d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
  }));
};

// src/components/base-carousel/styles.ts
var Wrapper = _chunkDHEOC6CNjs.styled.call(void 0, "section", {
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
  var _b = _a, { children, settings } = _b, props = _chunkDHEOC6CNjs.__objRest.call(void 0, _b, ["children", "settings"]);
  const defaultSettings = _chunkDHEOC6CNjs.__spreadValues.call(void 0, {
    nextArrow: /* @__PURE__ */ _react2.default.createElement(NextArrow, null),
    prevArrow: /* @__PURE__ */ _react2.default.createElement(PrevArrow, null)
  }, settings);
  return /* @__PURE__ */ _react2.default.createElement(Wrapper, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, props), /* @__PURE__ */ _react2.default.createElement(_reactslick2.default, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {
    ref
  }, defaultSettings), children));
};
var BaseCarousel = _react.forwardRef.call(void 0, Carousel);


exports.BaseCarousel = BaseCarousel;
//# sourceMappingURL=index.js.map
