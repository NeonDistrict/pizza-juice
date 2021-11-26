"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkW73SD7DSjs = require('../chunk-W73SD7DS.js');
require('../chunk-AESQ5HFR.js');


var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/pagination/stories.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var stories_default = {
  title: "Components/Data Display/Pagination",
  component: _chunkW73SD7DSjs.Pagination
};
var Default = (args) => /* @__PURE__ */ _react2.default.createElement(_chunkW73SD7DSjs.Pagination, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args));
Default.args = {
  canNext: true,
  canPrevious: true,
  totalCount: 335,
  currentPage: 1,
  pageSize: 10
};
var WithJumpButtons = (args) => /* @__PURE__ */ _react2.default.createElement(_chunkW73SD7DSjs.Pagination, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args));
WithJumpButtons.args = {
  canNext: true,
  canPrevious: true,
  totalCount: 335,
  currentPage: 1,
  pageSize: 10,
  quickJumpButton: true
};




exports.Default = Default; exports.WithJumpButtons = WithJumpButtons; exports.default = stories_default;
//# sourceMappingURL=stories.js.map
