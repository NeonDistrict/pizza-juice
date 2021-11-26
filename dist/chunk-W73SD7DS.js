"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkAESQ5HFRjs = require('./chunk-AESQ5HFR.js');




var _chunkDHEOC6CNjs = require('./chunk-DHEOC6CN.js');

// src/components/pagination/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);







var _hi = require('react-icons/hi');

// src/components/pagination/styles.ts
var PaginationContainer = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  d: "flex",
  p: "$4 $6",
  justify: "center",
  align: "center",
  gap: "$2",
  border: "1px dashed $pink-500",
  br: "$sm"
});
var NumberContainer = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  d: "flex",
  p: "$2 $4",
  color: "$white",
  "&:hover": {
    color: "$pink-600",
    cursor: "pointer"
  },
  variants: {
    active: {
      true: {
        color: "$pink-500"
      }
    }
  }
});
var Number = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  fontSize: "$sm",
  fontWeight: "$medium"
});
var MobileContainer = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  d: "flex",
  align: "center",
  justify: "center",
  color: "$white",
  gap: "$4"
});
var iconVariant = {
  svg: {
    color: "$grey-700",
    cursor: "default"
  },
  variants: {
    canGo: {
      true: {
        svg: {
          color: "$pink-500",
          cursor: "pointer"
        }
      }
    }
  }
};
var IconContainer = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
  d: "flex",
  align: "center"
});
var iconStyle = {
  d: "flex",
  align: "center",
  justify: "center",
  svg: {
    fontSize: "$kg",
    color: "$pink-500",
    cursor: "pointer"
  }
};
var resetButton = {
  bg: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer"
};
var ArrowLeft = _chunkDHEOC6CNjs.styled.call(void 0, "button", _chunkDHEOC6CNjs.__spreadValues.call(void 0, _chunkDHEOC6CNjs.__spreadValues.call(void 0, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, resetButton), iconStyle), iconVariant));
var ArrowRight = _chunkDHEOC6CNjs.styled.call(void 0, "button", _chunkDHEOC6CNjs.__spreadValues.call(void 0, _chunkDHEOC6CNjs.__spreadValues.call(void 0, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, resetButton), iconStyle), iconVariant));
var FirstPageArrow = _chunkDHEOC6CNjs.styled.call(void 0, "button", _chunkDHEOC6CNjs.__spreadValues.call(void 0, _chunkDHEOC6CNjs.__spreadValues.call(void 0, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, resetButton), iconStyle), iconVariant));
var LastPageArrow = _chunkDHEOC6CNjs.styled.call(void 0, "button", _chunkDHEOC6CNjs.__spreadValues.call(void 0, _chunkDHEOC6CNjs.__spreadValues.call(void 0, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {}, resetButton), iconStyle), iconVariant));

// src/components/pagination/index.tsx
var MobilePagination = ({
  currentPage,
  totalCount,
  canPrevious,
  canNext,
  goPrevious,
  goNext
}) => {
  return /* @__PURE__ */ _react2.default.createElement(MobileContainer, null, /* @__PURE__ */ _react2.default.createElement(ArrowLeft, {
    canGo: canPrevious,
    onClick: goPrevious
  }, /* @__PURE__ */ _react2.default.createElement(_hi.HiOutlineArrowSmLeft, {
    size: 24
  })), currentPage, " of ", totalCount, /* @__PURE__ */ _react2.default.createElement(ArrowRight, {
    canGo: canNext,
    onClick: goNext
  }, /* @__PURE__ */ _react2.default.createElement(_hi.HiOutlineArrowSmRight, {
    size: 24
  })));
};
var DesktopPagination = ({
  limit,
  currentPage,
  setCurrentPage,
  pageSize,
  totalCount,
  canPrevious,
  canNext,
  goNext,
  goPrevious,
  quickJumpButton
}) => {
  const generatePages = (currentPage2, limit2) => {
    const start = Math.floor((currentPage2 - 1) / limit2) * limit2;
    return new Array(limit2).fill(0).map((_, idx) => start + idx + 1);
  };
  const pages = _react.useMemo.call(void 0, () => generatePages(currentPage, limit), [currentPage, limit]);
  const totalPages = Math.ceil(totalCount / pageSize);
  return /* @__PURE__ */ _react2.default.createElement(PaginationContainer, null, /* @__PURE__ */ _react2.default.createElement(IconContainer, null, quickJumpButton && /* @__PURE__ */ _react2.default.createElement(FirstPageArrow, {
    canGo: canPrevious,
    onClick: () => setCurrentPage(1)
  }, /* @__PURE__ */ _react2.default.createElement(_hi.HiOutlineChevronDoubleLeft, null)), /* @__PURE__ */ _react2.default.createElement(ArrowLeft, {
    canGo: canPrevious,
    onClick: goPrevious
  }, /* @__PURE__ */ _react2.default.createElement(_hi.HiOutlineChevronLeft, null))), pages.map((page, index) => page <= totalPages && index <= limit - 1 ? /* @__PURE__ */ _react2.default.createElement(NumberContainer, {
    active: currentPage === page
  }, /* @__PURE__ */ _react2.default.createElement(Number, {
    key: index,
    onClick: () => setCurrentPage(page)
  }, page)) : null), /* @__PURE__ */ _react2.default.createElement(IconContainer, null, /* @__PURE__ */ _react2.default.createElement(ArrowRight, {
    canGo: canNext,
    onClick: goNext
  }, /* @__PURE__ */ _react2.default.createElement(_hi.HiOutlineChevronRight, null)), quickJumpButton && /* @__PURE__ */ _react2.default.createElement(LastPageArrow, {
    canGo: canNext,
    onClick: () => setCurrentPage(totalPages)
  }, /* @__PURE__ */ _react2.default.createElement(_hi.HiOutlineChevronDoubleRight, null))));
};
var Pagination = (_a) => {
  var _b = _a, {
    quickJumpButton = false,
    currentPage,
    setCurrentPage,
    limit = 5
  } = _b, props = _chunkDHEOC6CNjs.__objRest.call(void 0, _b, [
    "quickJumpButton",
    "currentPage",
    "setCurrentPage",
    "limit"
  ]);
  const goNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const goPrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const isMobile = _chunkAESQ5HFRjs.useMediaQuery.call(void 0, "(max-width: 600px)");
  return isMobile ? /* @__PURE__ */ _react2.default.createElement(MobilePagination, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {
    currentPage,
    goNext,
    goPrevious
  }, props)) : /* @__PURE__ */ _react2.default.createElement(DesktopPagination, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {
    goNext,
    goPrevious,
    currentPage,
    setCurrentPage,
    limit,
    quickJumpButton
  }, props));
};



exports.Pagination = Pagination;
//# sourceMappingURL=chunk-W73SD7DS.js.map
