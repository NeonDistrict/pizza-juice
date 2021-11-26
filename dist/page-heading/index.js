"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkAESQ5HFRjs = require('../chunk-AESQ5HFR.js');


var _chunkWGNDBMGDjs = require('../chunk-WGNDBMGD.js');
require('../chunk-PNFEY4GL.js');
require('../chunk-B6GZU7X7.js');




var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/page-heading/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);

// src/components/page-heading/styles.ts
var Wrapper = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  textTransform: "uppercase",
  fontWeight: "$medium"
});
var HeadingStyled = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  fontSize: "$2xl",
  d: "flex",
  align: "center",
  justify: "space-between",
  position: "relative",
  mb: "$1"
});
var Title = _chunkDHEOC6CNjs.styled.call(void 0, "h1", {
  w: "$full",
  d: "flex",
  align: "center",
  color: "$white",
  fontSize: "$lg",
  fontWeight: "$medium",
  m: 0,
  lineHeight: "24px",
  letterSpacing: "0.1em",
  variants: {
    haveButton: {
      true: {
        justify: "center",
        "@md": {
          justify: "flex-start"
        }
      }
    }
  }
});
var FlexEnd = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  d: "flex",
  gap: "$1",
  align: "center"
});
var Line = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  position: "absolute",
  bottom: -7,
  w: 160,
  h: 2,
  bg: "$grey-700",
  variants: {
    haveButton: {
      true: {}
    },
    haveDescription: {
      true: {}
    }
  },
  compoundVariants: [
    {
      haveButton: "true",
      haveDescription: "false",
      css: {
        d: "none",
        "@md": {
          d: "block"
        }
      }
    }
  ]
});
var Description = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  color: "$grey-600",
  mt: "$2",
  border: "none",
  "@md": {
    borderLeft: "2px solid",
    borderColor: "$grey-700",
    pl: "$2"
  }
});
var FullLine = _chunkDHEOC6CNjs.styled.call(void 0, "hr", {
  borderWidth: "0px 0px 1px",
  borderColor: "$grey-700",
  borderStyle: "solid",
  w: "100%",
  m: 0,
  variants: {
    haveButton: {
      true: {}
    },
    haveDescription: {
      true: {}
    }
  },
  compoundVariants: [
    {
      haveButton: "true",
      haveDescription: "false",
      css: {
        d: "none",
        "@md": {
          d: "block"
        }
      }
    }
  ]
});
var Bottom = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  d: "flex",
  flexDirection: "column",
  gap: "$4",
  variants: {
    haveButton: {
      true: {}
    },
    haveDescription: {
      true: {}
    }
  },
  compoundVariants: [
    {
      haveButton: "true",
      haveDescription: "true",
      css: {
        textAlign: "center",
        "@md": {
          textAlign: "start"
        }
      }
    }
  ]
});

// src/components/page-heading/index.tsx
var PageHeading = (_a) => {
  var _b = _a, {
    description,
    children,
    title
  } = _b, props = _chunkDHEOC6CNjs.__objRest.call(void 0, _b, [
    "description",
    "children",
    "title"
  ]);
  const isMobile = _chunkAESQ5HFRjs.useMediaQuery.call(void 0, "(max-width: 768px)");
  return /* @__PURE__ */ _react2.default.createElement(Wrapper, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, props), /* @__PURE__ */ _react2.default.createElement(HeadingStyled, null, /* @__PURE__ */ _react2.default.createElement(Title, {
    haveButton: !!children
  }, title), /* @__PURE__ */ _react2.default.createElement(Line, {
    haveButton: !!children,
    haveDescription: !!description
  }), !isMobile && /* @__PURE__ */ _react2.default.createElement(FlexEnd, null, /* @__PURE__ */ _react2.default.createElement(ChildrenButtons, {
    children,
    isMobile
  }))), /* @__PURE__ */ _react2.default.createElement(FullLine, {
    haveButton: !!children,
    haveDescription: !!description
  }), /* @__PURE__ */ _react2.default.createElement(Bottom, {
    haveButton: !!children,
    haveDescription: !!description
  }, description && /* @__PURE__ */ _react2.default.createElement(Description, null, description), isMobile && /* @__PURE__ */ _react2.default.createElement(ChildrenButtons, {
    children,
    isMobile
  })));
};
var ChildrenButtons = ({ children, isMobile }) => /* @__PURE__ */ _react2.default.createElement(_react2.default.Fragment, null, _react2.default.Children.map(children, (child) => {
  if ((child == null ? void 0 : child.type) === _chunkWGNDBMGDjs.Button && isMobile) {
    return _react2.default.cloneElement(child, {
      fluid: true
    });
  }
  return child;
}));


exports.PageHeading = PageHeading;
//# sourceMappingURL=index.js.map
