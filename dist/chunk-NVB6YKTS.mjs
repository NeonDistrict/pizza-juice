import {
  useMediaQuery
} from "./chunk-PYUDTHSX.mjs";
import {
  __objRest,
  __spreadValues,
  styled
} from "./chunk-KKM2LXRG.mjs";

// src/components/pagination/index.tsx
import React, { useMemo } from "react";
import {
  HiOutlineArrowSmLeft as LeftMobileIcon,
  HiOutlineArrowSmRight as RightMobileIcon,
  HiOutlineChevronDoubleLeft as DoubleLeftIcon,
  HiOutlineChevronDoubleRight as DoubleRightIcon,
  HiOutlineChevronLeft as LeftIcon,
  HiOutlineChevronRight as RightIcon
} from "react-icons/hi";

// src/components/pagination/styles.ts
var PaginationContainer = styled("div", {
  d: "flex",
  p: "$4 $6",
  justify: "center",
  align: "center",
  gap: "$2",
  border: "1px dashed $pink-500",
  br: "$sm"
});
var NumberContainer = styled("div", {
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
var Number = styled("div", {
  fontSize: "$sm",
  fontWeight: "$medium"
});
var MobileContainer = styled("div", {
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
var IconContainer = styled("div", {
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
var ArrowLeft = styled("button", __spreadValues(__spreadValues(__spreadValues({}, resetButton), iconStyle), iconVariant));
var ArrowRight = styled("button", __spreadValues(__spreadValues(__spreadValues({}, resetButton), iconStyle), iconVariant));
var FirstPageArrow = styled("button", __spreadValues(__spreadValues(__spreadValues({}, resetButton), iconStyle), iconVariant));
var LastPageArrow = styled("button", __spreadValues(__spreadValues(__spreadValues({}, resetButton), iconStyle), iconVariant));

// src/components/pagination/index.tsx
var MobilePagination = ({
  currentPage,
  totalCount,
  canPrevious,
  canNext,
  goPrevious,
  goNext
}) => {
  return /* @__PURE__ */ React.createElement(MobileContainer, null, /* @__PURE__ */ React.createElement(ArrowLeft, {
    canGo: canPrevious,
    onClick: goPrevious
  }, /* @__PURE__ */ React.createElement(LeftMobileIcon, {
    size: 24
  })), currentPage, " of ", totalCount, /* @__PURE__ */ React.createElement(ArrowRight, {
    canGo: canNext,
    onClick: goNext
  }, /* @__PURE__ */ React.createElement(RightMobileIcon, {
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
  const pages = useMemo(() => generatePages(currentPage, limit), [currentPage, limit]);
  const totalPages = Math.ceil(totalCount / pageSize);
  return /* @__PURE__ */ React.createElement(PaginationContainer, null, /* @__PURE__ */ React.createElement(IconContainer, null, quickJumpButton && /* @__PURE__ */ React.createElement(FirstPageArrow, {
    canGo: canPrevious,
    onClick: () => setCurrentPage(1)
  }, /* @__PURE__ */ React.createElement(DoubleLeftIcon, null)), /* @__PURE__ */ React.createElement(ArrowLeft, {
    canGo: canPrevious,
    onClick: goPrevious
  }, /* @__PURE__ */ React.createElement(LeftIcon, null))), pages.map((page, index) => page <= totalPages && index <= limit - 1 ? /* @__PURE__ */ React.createElement(NumberContainer, {
    active: currentPage === page
  }, /* @__PURE__ */ React.createElement(Number, {
    key: index,
    onClick: () => setCurrentPage(page)
  }, page)) : null), /* @__PURE__ */ React.createElement(IconContainer, null, /* @__PURE__ */ React.createElement(ArrowRight, {
    canGo: canNext,
    onClick: goNext
  }, /* @__PURE__ */ React.createElement(RightIcon, null)), quickJumpButton && /* @__PURE__ */ React.createElement(LastPageArrow, {
    canGo: canNext,
    onClick: () => setCurrentPage(totalPages)
  }, /* @__PURE__ */ React.createElement(DoubleRightIcon, null))));
};
var Pagination = (_a) => {
  var _b = _a, {
    quickJumpButton = false,
    currentPage,
    setCurrentPage,
    limit = 5
  } = _b, props = __objRest(_b, [
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
  const isMobile = useMediaQuery("(max-width: 600px)");
  return isMobile ? /* @__PURE__ */ React.createElement(MobilePagination, __spreadValues({
    currentPage,
    goNext,
    goPrevious
  }, props)) : /* @__PURE__ */ React.createElement(DesktopPagination, __spreadValues({
    goNext,
    goPrevious,
    currentPage,
    setCurrentPage,
    limit,
    quickJumpButton
  }, props));
};

export {
  Pagination
};
//# sourceMappingURL=chunk-NVB6YKTS.mjs.map
