"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _chunkPNFEY4GLjs = require('./chunk-PNFEY4GL.js');



var _chunkDHEOC6CNjs = require('./chunk-DHEOC6CN.js');

// src/components/button/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var Button2 = _react2.default.forwardRef((_a, ref) => {
  var _b = _a, {
    type = "button",
    icon,
    iconPosition = "left",
    loading,
    children
  } = _b, props = _chunkDHEOC6CNjs.__objRest.call(void 0, _b, [
    "type",
    "icon",
    "iconPosition",
    "loading",
    "children"
  ]);
  return /* @__PURE__ */ _react2.default.createElement(_chunkPNFEY4GLjs.Button, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {
    ref,
    type,
    onlyIcon: !!icon && !children,
    loading
  }, props), icon && iconPosition === "left" && icon, children && /* @__PURE__ */ _react2.default.createElement("span", null, children), loading && /* @__PURE__ */ _react2.default.createElement(_chunkPNFEY4GLjs.Spinner, null), icon && iconPosition === "right" && icon);
});
Button2.displayName = "Button";



exports.Button = Button2;
//# sourceMappingURL=chunk-WGNDBMGD.js.map
