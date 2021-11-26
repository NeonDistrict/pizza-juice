"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/textarea/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);

// src/components/textarea/styles.ts
var _reacttextareaautosize = require('react-textarea-autosize'); var _reacttextareaautosize2 = _interopRequireDefault(_reacttextareaautosize);


var _reactlabel = require('@radix-ui/react-label');
var Wrapper = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  color: "$white"
});
var Label = _chunkDHEOC6CNjs.styled.call(void 0, _reactlabel.Root, {
  d: "block",
  mb: "$1",
  textTransform: "uppercase",
  fontWeight: "$medium"
});
var TextAreaInput = _chunkDHEOC6CNjs.styled.call(void 0, _reacttextareaautosize2.default, {
  width: "$full",
  p: "$2",
  fontSize: "$md",
  outline: "none",
  bg: "$black",
  color: "$white",
  border: "1px solid",
  borderColor: "$grey-600",
  "&:hover": {
    borderColor: "$pink-600"
  },
  "&:focus": {
    borderColor: "$teal-500"
  },
  "&:disabled": {
    bg: "$grey-400",
    cursor: "not-allowed"
  },
  variants: {
    error: {
      true: {
        bg: "$red-500"
      }
    }
  }
});
var Message = _chunkDHEOC6CNjs.styled.call(void 0, "small", {
  mt: "$1",
  color: "$grey-400",
  d: "block"
});
var Error = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  color: "$red-500"
});

// src/components/textarea/index.tsx
var Textarea = _react2.default.forwardRef(({ label, hint, name, error, minRows = 3, css }, ref) => {
  return /* @__PURE__ */ _react2.default.createElement(Wrapper, null, label && /* @__PURE__ */ _react2.default.createElement(Label, {
    htmlFor: `textarea-${name}`
  }, label), /* @__PURE__ */ _react2.default.createElement(TextAreaInput, {
    ref,
    id: `textarea-${name}`,
    minRows,
    css
  }), /* @__PURE__ */ _react2.default.createElement(Message, null, hint), /* @__PURE__ */ _react2.default.createElement(Error, null, error));
});
Textarea.displayName = "Textarea";


exports.Textarea = Textarea;
//# sourceMappingURL=index.js.map
