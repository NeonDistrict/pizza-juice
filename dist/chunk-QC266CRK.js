"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



var _chunkDHEOC6CNjs = require('./chunk-DHEOC6CN.js');

// src/components/image/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);

// src/components/image/styles.tsx
var Image = _chunkDHEOC6CNjs.styled.call(void 0, "img", {
  size: "$full",
  variants: {
    objectFit: {
      true: {
        objectFit: "cover"
      },
      false: {
        objectFit: "contain"
      }
    },
    cover: {
      true: {
        backgroundSize: "cover"
      },
      false: {
        backgroundSize: "contain"
      }
    }
  },
  defaultVariants: {
    objectFit: "true",
    cover: "true"
  }
});

// src/components/image/index.tsx
var Image2 = _react.forwardRef.call(void 0, (_a, ref) => {
  var _b = _a, { fallbackSrc } = _b, props = _chunkDHEOC6CNjs.__objRest.call(void 0, _b, ["fallbackSrc"]);
  const onError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackSrc || "";
  };
  return /* @__PURE__ */ _react2.default.createElement(Image, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {
    ref,
    loading: "lazy",
    onError
  }, props));
});
Image2.displayName = "Image";



exports.Image = Image2;
//# sourceMappingURL=chunk-QC266CRK.js.map
