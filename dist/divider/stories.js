"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk6AE7X2ASjs = require('../chunk-6AE7X2AS.js');


var _chunk7BDRHCWCjs = require('../chunk-7BDRHCWC.js');


var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/divider/stories.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var stories_default = {
  title: "Components/Data Display/Divider",
  component: _chunk7BDRHCWCjs.Divider,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" }
    },
    ref: {
      table: { disable: true }
    },
    as: {
      table: { disable: true }
    },
    css: {
      table: { disable: true }
    }
  }
};
var Horizontal = (args) => /* @__PURE__ */ _react2.default.createElement(_chunk7BDRHCWCjs.Divider, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args));
Horizontal.args = {
  orientation: "horizontal"
};
var Vertical = (args) => /* @__PURE__ */ _react2.default.createElement(_chunk6AE7X2ASjs.Box, {
  css: { h: 50 }
}, /* @__PURE__ */ _react2.default.createElement(_chunk7BDRHCWCjs.Divider, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args)));
Vertical.args = {
  orientation: "vertical"
};




exports.Horizontal = Horizontal; exports.Vertical = Vertical; exports.default = stories_default;
//# sourceMappingURL=stories.js.map
