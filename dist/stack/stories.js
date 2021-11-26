"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkQSLS45BSjs = require('../chunk-QSLS45BS.js');


var _chunk6AE7X2ASjs = require('../chunk-6AE7X2AS.js');



var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/stack/stories.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var stories_default = {
  title: "Components/Layout/Stack",
  component: _chunkQSLS45BSjs.Stack,
  argTypes: {
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: { type: "radio" }
    }
  }
};
var Default = (args) => /* @__PURE__ */ _react2.default.createElement(_chunkQSLS45BSjs.Stack, _chunkDHEOC6CNjs.__spreadProps.call(void 0, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args), {
  css: { $$gap: "$space$10" }
}), [...Array(3)].map((_, i) => /* @__PURE__ */ _react2.default.createElement(_chunk6AE7X2ASjs.Box, {
  key: i,
  css: { size: 30, bg: "$pink-500" }
})));
Default.args = {};



exports.Default = Default; exports.default = stories_default;
//# sourceMappingURL=stories.js.map
