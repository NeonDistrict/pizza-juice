"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkCMYXCBSQjs = require('./chunk-CMYXCBSQ.js');


var _chunkGQSTQ3RCjs = require('./chunk-GQSTQ3RC.js');

// src/components/label/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var Label2 = ({ children, icon, variant = "success" }) => {
  return /* @__PURE__ */ _react2.default.createElement(_chunkGQSTQ3RCjs.Label, {
    variant,
    icon: !!icon
  }, icon && icon, /* @__PURE__ */ _react2.default.createElement(_chunkCMYXCBSQjs.Text, {
    size: "sm"
  }, children));
};



exports.Label = Label2;
//# sourceMappingURL=chunk-4OLVTV7O.js.map
