"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/tooltip/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);

// src/components/tooltip/styles.ts





var _reacttooltip = require('@radix-ui/react-tooltip');
var Root2 = _chunkDHEOC6CNjs.styled.call(void 0, _reacttooltip.Root);
var Trigger2 = _chunkDHEOC6CNjs.styled.call(void 0, _reacttooltip.Trigger);
var Content2 = _chunkDHEOC6CNjs.styled.call(void 0, _reacttooltip.Content, {
  color: "$white",
  bg: "$transparent",
  p: "$2",
  textTransform: "uppercase",
  fontSize: "$sm",
  border: "1px solid $grey-700"
});
var Arrow2 = _chunkDHEOC6CNjs.styled.call(void 0, _reacttooltip.Arrow, {
  fill: "$grey-700"
});

// src/components/tooltip/index.tsx
var Tooltip = (_a) => {
  var _b = _a, {
    text,
    position = "right",
    children
  } = _b, props = _chunkDHEOC6CNjs.__objRest.call(void 0, _b, [
    "text",
    "position",
    "children"
  ]);
  return /* @__PURE__ */ _react2.default.createElement(Root2, null, /* @__PURE__ */ _react2.default.createElement(Trigger2, {
    asChild: true
  }, children), /* @__PURE__ */ _react2.default.createElement(Content2, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {
    sideOffset: 5,
    side: position
  }, props), text, /* @__PURE__ */ _react2.default.createElement(Arrow2, {
    width: 15,
    height: 10
  })));
};


exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map
