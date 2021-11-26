"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }




var _chunkDHEOC6CNjs = require('./chunk-DHEOC6CN.js');

// src/components/spinner/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);

// src/components/visually-hidden/index.tsx

var _reactvisuallyhidden = require('@radix-ui/react-visually-hidden');
var VisuallyHidden = ({ children }) => {
  return /* @__PURE__ */ _react2.default.createElement(_reactvisuallyhidden.Root, null, children);
};

// src/components/spinner/styles.ts
var spin = _chunkDHEOC6CNjs.keyframes.call(void 0, {
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" }
});
var Spinner = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
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
  var props = _chunkDHEOC6CNjs.__objRest.call(void 0, _a, []);
  return /* @__PURE__ */ _react2.default.createElement(Spinner, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, props), /* @__PURE__ */ _react2.default.createElement(VisuallyHidden, null, "Loading"));
};



exports.Spinner = Spinner2;
//# sourceMappingURL=chunk-B6GZU7X7.js.map
