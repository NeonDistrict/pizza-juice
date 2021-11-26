"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk4OLVTV7Ojs = require('../chunk-4OLVTV7O.js');
require('../chunk-CMYXCBSQ.js');
require('../chunk-GQSTQ3RC.js');


var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/label/stories.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _bs = require('react-icons/bs');
var _hi = require('react-icons/hi');
var _bi = require('react-icons/bi');
var stories_default = {
  title: "Components/Data Display/Label",
  component: _chunk4OLVTV7Ojs.Label,
  argTypes: {
    variant: {
      options: ["success", "danger", "warning"],
      control: { type: "select" }
    },
    icon: {
      table: { disable: true }
    }
  }
};
var Default = (args) => /* @__PURE__ */ _react2.default.createElement(_chunk4OLVTV7Ojs.Label, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args));
Default.args = {
  children: "Link Copied",
  variant: "success"
};
var LinkCopiedWithIcon = (args) => /* @__PURE__ */ _react2.default.createElement(_chunk4OLVTV7Ojs.Label, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args));
LinkCopiedWithIcon.args = {
  children: "Link Copied",
  variant: "success",
  icon: /* @__PURE__ */ _react2.default.createElement(_bs.BsCheck, null)
};
var InProgressWithIcon = (args) => /* @__PURE__ */ _react2.default.createElement(_chunk4OLVTV7Ojs.Label, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args));
InProgressWithIcon.args = {
  children: "In Progress",
  variant: "danger",
  icon: /* @__PURE__ */ _react2.default.createElement(_hi.HiHand, null)
};
var WarningWithIcon = (args) => /* @__PURE__ */ _react2.default.createElement(_chunk4OLVTV7Ojs.Label, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args));
WarningWithIcon.args = {
  children: "Warning",
  variant: "warning",
  icon: /* @__PURE__ */ _react2.default.createElement(_bi.BiSad, null)
};






exports.Default = Default; exports.InProgressWithIcon = InProgressWithIcon; exports.LinkCopiedWithIcon = LinkCopiedWithIcon; exports.WarningWithIcon = WarningWithIcon; exports.default = stories_default;
//# sourceMappingURL=stories.js.map
