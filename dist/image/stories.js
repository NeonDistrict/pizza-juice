"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkQC266CRKjs = require('../chunk-QC266CRK.js');


var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/image/stories.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var stories_default = {
  title: "Components/Data Display/Image",
  component: _chunkQC266CRKjs.Image,
  argTypes: {
    css: {
      table: { disable: true }
    },
    objectFit: {
      control: { type: "boolean" }
    },
    cover: {
      control: { type: "boolean" }
    }
  }
};
var Default = (args) => /* @__PURE__ */ _react2.default.createElement(_chunkQC266CRKjs.Image, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args));
Default.args = {
  src: "https://picsum.photos/200/200",
  alt: "Random image",
  objectFit: true,
  cover: true,
  css: {
    size: 200
  }
};
Default.argTypes = {
  fallbackSrc: {
    table: { disable: true }
  }
};
var WithError = (args) => /* @__PURE__ */ _react2.default.createElement(_chunkQC266CRKjs.Image, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, args));
WithError.args = {
  src: "https://wrong-path.com",
  fallbackSrc: "https://via.placeholder.com/150",
  alt: "Random image",
  objectFit: true,
  cover: true,
  css: {
    size: 200
  }
};




exports.Default = Default; exports.WithError = WithError; exports.default = stories_default;
//# sourceMappingURL=stories.js.map
