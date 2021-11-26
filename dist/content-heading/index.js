"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/content-heading/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);

// src/components/content-heading/icon.tsx

var InfoIcon = () => /* @__PURE__ */ _react2.default.createElement("svg", {
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ _react2.default.createElement("path", {
  fill: "currentColor",
  d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
}));

// src/components/content-heading/styles.ts
var Wrapper = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  d: "flex",
  flexDirection: "column",
  gap: "$2"
});
var Title = _chunkDHEOC6CNjs.styled.call(void 0, "h3", {
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
var Description = _chunkDHEOC6CNjs.styled.call(void 0, "p", {
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
    description,
    line,
    info
  } = _b, props = _chunkDHEOC6CNjs.__objRest.call(void 0, _b, [
    "title",
    "description",
    "line",
    "info"
  ]);
  return /* @__PURE__ */ _react2.default.createElement(Wrapper, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, props), /* @__PURE__ */ _react2.default.createElement(Title, null, title, info && /* @__PURE__ */ _react2.default.createElement(InfoIcon, null)), description && /* @__PURE__ */ _react2.default.createElement(Description, {
    line
  }, description));
};


exports.ContentHeading = ContentHeading;
//# sourceMappingURL=index.js.map
