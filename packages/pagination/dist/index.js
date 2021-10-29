var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// ../../node_modules/tsup/assets/cjs_shims.js
var importMetaUrlShim;
var init_cjs_shims = __esm({
  "../../node_modules/tsup/assets/cjs_shims.js"() {
    importMetaUrlShim = typeof document === "undefined" ? new (require("url")).URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
  }
});

// ../hooks/dist/index.js
var require_dist = __commonJS({
  "../hooks/dist/index.js"(exports) {
    init_cjs_shims();
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
    var __export2 = (target, all) => {
      __markAsModule2(target);
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __reExport2 = (target, module22, desc) => {
      if (module22 && typeof module22 === "object" || typeof module22 === "function") {
        for (let key of __getOwnPropNames2(module22))
          if (!__hasOwnProp2.call(target, key) && key !== "default")
            __defProp2(target, key, { get: () => module22[key], enumerable: !(desc = __getOwnPropDesc2(module22, key)) || desc.enumerable });
      }
      return target;
    };
    var __toModule2 = (module22) => {
      return __reExport2(__markAsModule2(__defProp2(module22 != null ? __create2(__getProtoOf2(module22)) : {}, "default", module22 && module22.__esModule && "default" in module22 ? { get: () => module22.default, enumerable: true } : { value: module22, enumerable: true })), module22);
    };
    __export2(exports, {
      useMediaQuery: () => useMediaQuery2
    });
    var import_react2 = __toModule2(require("react"));
    var useMediaQuery2 = (query) => {
      const [matches, setMatches] = (0, import_react2.useState)(false);
      (0, import_react2.useEffect)(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
          setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
      }, [matches, query]);
      return matches;
    };
  }
});

// index.ts
__export(exports, {
  Pagination: () => Pagination
});
init_cjs_shims();

// src/index.tsx
init_cjs_shims();
var import_react = __toModule(require("react"));

// src/styles.ts
init_cjs_shims();
var import_system = __toModule(require("@neon-district/system"));
var PaginationContainer = import_system.default.div`
  ${({ theme }) => import_system.css`
    border: 1px dashed ${theme.colors.pink1};
    border-radius: ${theme.radii.sm};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spaces[2]};
    padding: 16px 24px;
  `}
`;
var NumberContainer = import_system.default.div`
  ${({ theme, active }) => import_system.css`
    padding: 8px 16px;
    color: ${active ? theme.colors.pink1 : theme.colors.white};
    display: flex;

    &:hover {
      cursor: pointer;
      color: ${theme.colors.pink2};
    }
  `}
`;
var Number = import_system.default.div`
  ${({ theme }) => import_system.css`
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.medium};
  `}
`;
var MobileContainer = import_system.default.div`
  ${({ theme }) => import_system.css`
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
  `}
`;
var iconVariant = (theme, canGo) => import_system.css`
  color: ${canGo ? theme.colors.pink1 : theme.colors.grey4};
  cursor: ${canGo ? "pointer" : "default"};
`;
var iconStyle = (theme) => import_system.css`
  font-size: 19px;
  color: ${theme.colors.pink1};
  cursor: pointer;
`;
var resetButton = import_system.css`
  appearance: none;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
var ArrowLeft = import_system.default.button`
  ${({ theme, canGo }) => import_system.css`
    ${resetButton}

    svg {
      ${iconStyle(theme)}
      ${iconVariant(theme, canGo)}
    }
  `}
`;
var ArrowRight = import_system.default.button`
  ${({ theme, canGo }) => import_system.css`
    ${resetButton}

    svg {
      ${iconStyle(theme)}
      ${iconVariant(theme, canGo)}
    }
  `}
`;
var FirstPageArrow = import_system.default.button`
  ${({ theme }) => import_system.css`
    ${resetButton}

    svg {
      ${iconStyle(theme)}
    }
  `}
`;
var LastPageArrow = import_system.default.button`
  ${({ theme }) => import_system.css`
    ${resetButton}

    svg {
      ${iconStyle(theme)}
    }
  `}
`;

// src/index.tsx
var import_hooks = __toModule(require_dist());
var BaseIcon = ({ d, children }) => /* @__PURE__ */ import_react.default.createElement("svg", {
  viewBox: "0 0 16 16",
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, children != null ? children : /* @__PURE__ */ import_react.default.createElement("path", {
  fill: "currentColor",
  d
}));
var LeftIcon = () => /* @__PURE__ */ import_react.default.createElement(BaseIcon, {
  d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
});
var RightIcon = () => /* @__PURE__ */ import_react.default.createElement(BaseIcon, {
  d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
});
var DoubleLeftIcon = () => /* @__PURE__ */ import_react.default.createElement(BaseIcon, null, /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", {
  d: "M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
}), /* @__PURE__ */ import_react.default.createElement("path", {
  d: "M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
})));
var DoubleRightIcon = () => /* @__PURE__ */ import_react.default.createElement(BaseIcon, null, /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", {
  d: "M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
}), /* @__PURE__ */ import_react.default.createElement("path", {
  d: "M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
})));
var MobilePagination = ({
  currentPage,
  totalCount,
  canPrevious,
  canNext,
  goPrevious,
  goNext
}) => {
  return /* @__PURE__ */ import_react.default.createElement(MobileContainer, null, /* @__PURE__ */ import_react.default.createElement(ArrowLeft, {
    canGo: canPrevious,
    onClick: goPrevious
  }, /* @__PURE__ */ import_react.default.createElement(LeftIcon, null)), currentPage, " of ", totalCount, /* @__PURE__ */ import_react.default.createElement(ArrowRight, {
    canGo: canNext,
    onClick: goNext
  }, /* @__PURE__ */ import_react.default.createElement(RightIcon, null)));
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
  const pages = (0, import_react.useMemo)(() => generatePages(currentPage, limit), [
    pageSize,
    limit
  ]);
  const totalPages = Math.ceil(totalCount / pageSize);
  return /* @__PURE__ */ import_react.default.createElement(PaginationContainer, null, quickJumpButton && /* @__PURE__ */ import_react.default.createElement(FirstPageArrow, {
    onClick: () => setCurrentPage(1)
  }, /* @__PURE__ */ import_react.default.createElement(DoubleLeftIcon, null)), /* @__PURE__ */ import_react.default.createElement(ArrowLeft, {
    canGo: canPrevious,
    onClick: goPrevious
  }, /* @__PURE__ */ import_react.default.createElement(LeftIcon, null)), pages.map((page, index) => page <= totalPages && index <= limit - 1 ? /* @__PURE__ */ import_react.default.createElement(NumberContainer, {
    active: currentPage === page
  }, /* @__PURE__ */ import_react.default.createElement(Number, {
    key: index,
    onClick: () => setCurrentPage(page)
  }, page)) : null), /* @__PURE__ */ import_react.default.createElement(ArrowRight, {
    canGo: canNext,
    onClick: goNext
  }, /* @__PURE__ */ import_react.default.createElement(RightIcon, null)), quickJumpButton && /* @__PURE__ */ import_react.default.createElement(LastPageArrow, {
    onClick: () => setCurrentPage(totalPages)
  }, /* @__PURE__ */ import_react.default.createElement(DoubleRightIcon, null)));
};
var Pagination = (_a) => {
  var _b = _a, {
    quickJumpButton = false,
    currentPage,
    setCurrentPage,
    limit = 5
  } = _b, args = __objRest(_b, [
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
  const isMobile = (0, import_hooks.useMediaQuery)("(max-width: 600px)");
  return isMobile ? /* @__PURE__ */ import_react.default.createElement(MobilePagination, __spreadValues({
    currentPage,
    goNext,
    goPrevious
  }, args)) : /* @__PURE__ */ import_react.default.createElement(DesktopPagination, __spreadValues({
    goNext,
    goPrevious,
    currentPage,
    setCurrentPage,
    limit,
    quickJumpButton
  }, args));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Pagination
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzdXAvYXNzZXRzL2Nqc19zaGltcy5qcyIsICIuLi8uLi9ob29rcy9pbmRleC50cyIsICIuLi8uLi9ob29rcy9zcmMvdXNlTWVkaWFRdWVyeS50cyIsICIuLi9pbmRleC50cyIsICIuLi9zcmMvaW5kZXgudHN4IiwgIi4uL3NyYy9zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBpbXBvcnRNZXRhVXJsU2hpbSA9XG4gIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IG5ldyAocmVxdWlyZSgndScgKyAncmwnKS5VUkwpKCdmaWxlOicgKyBfX2ZpbGVuYW1lKS5ocmVmXG4gICAgOiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYykgfHxcbiAgICAgIG5ldyBVUkwoJ21haW4uanMnLCBkb2N1bWVudC5iYXNlVVJJKS5ocmVmXG4iLCAiZXhwb3J0ICogZnJvbSAnLi9zcmMnO1xuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogUmVhY3QgaG9vayB0aGF0IHRyYWNrcyBzdGF0ZSBvZiBhIENTUyBtZWRpYSBxdWVyeVxuICpcbiAqIEBwYXJhbSBxdWVyeSB0aGUgbWVkaWEgcXVlcnkgdG8gbWF0Y2hcbiAqL1xuZXhwb3J0IGNvbnN0IHVzZU1lZGlhUXVlcnkgPSAocXVlcnk6IHN0cmluZykgPT4ge1xuICBjb25zdCBbbWF0Y2hlcywgc2V0TWF0Y2hlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcbiAgICBpZiAobWVkaWEubWF0Y2hlcyAhPT0gbWF0Y2hlcykge1xuICAgICAgc2V0TWF0Y2hlcyhtZWRpYS5tYXRjaGVzKTtcbiAgICB9XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiBzZXRNYXRjaGVzKG1lZGlhLm1hdGNoZXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcik7XG4gIH0sIFttYXRjaGVzLCBxdWVyeV0pO1xuXG4gIHJldHVybiBtYXRjaGVzO1xufTtcbiIsICJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIE1vYmlsZUNvbnRhaW5lcixcbiAgUGFnaW5hdGlvbkNvbnRhaW5lcixcbiAgTnVtYmVyQ29udGFpbmVyLFxuICBOdW1iZXIsXG4gIEFycm93TGVmdCxcbiAgQXJyb3dSaWdodCxcbiAgRmlyc3RQYWdlQXJyb3csXG4gIExhc3RQYWdlQXJyb3dcbn0gZnJvbSAnLi9zdHlsZXMnO1xuXG50eXBlIEJhc2VJY29uUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgZD86IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IEJhc2VJY29uID0gKHsgZCwgY2hpbGRyZW4gfTogQmFzZUljb25Qcm9wcykgPT4gKFxuICA8c3ZnXG4gICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgd2lkdGg9XCIxcmVtXCJcbiAgICBoZWlnaHQ9XCIxcmVtXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgPlxuICAgIHtjaGlsZHJlbiA/PyA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD17ZH0gLz59XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgTGVmdEljb24gPSAoKSA9PiAoXG4gIDxCYXNlSWNvbiBkPVwiTTExLjM1NCAxLjY0NmEuNS41IDAgMCAxIDAgLjcwOEw1LjcwNyA4bDUuNjQ3IDUuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTYtNmEuNS41IDAgMCAxIDAtLjcwOGw2LTZhLjUuNSAwIDAgMSAuNzA4IDB6XCIgLz5cbik7XG5jb25zdCBSaWdodEljb24gPSAoKSA9PiAoXG4gIDxCYXNlSWNvbiBkPVwiTTQuNjQ2IDEuNjQ2YS41LjUgMCAwIDEgLjcwOCAwbDYgNmEuNS41IDAgMCAxIDAgLjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOC0uNzA4TDEwLjI5MyA4IDQuNjQ2IDIuMzU0YS41LjUgMCAwIDEgMC0uNzA4elwiIC8+XG4pO1xuXG5jb25zdCBEb3VibGVMZWZ0SWNvbiA9ICgpID0+IChcbiAgPEJhc2VJY29uPlxuICAgIDw+XG4gICAgICA8cGF0aCBkPVwiTTguMzU0IDEuNjQ2YS41LjUgMCAwIDEgMCAuNzA4TDIuNzA3IDhsNS42NDcgNS42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtNi02YS41LjUgMCAwIDEgMC0uNzA4bDYtNmEuNS41IDAgMCAxIC43MDggMHpcIiAvPlxuICAgICAgPHBhdGggZD1cIk0xMi4zNTQgMS42NDZhLjUuNSAwIDAgMSAwIC43MDhMNi43MDcgOGw1LjY0NyA1LjY0NmEuNS41IDAgMCAxLS43MDguNzA4bC02LTZhLjUuNSAwIDAgMSAwLS43MDhsNi02YS41LjUgMCAwIDEgLjcwOCAwelwiIC8+XG4gICAgPC8+XG4gIDwvQmFzZUljb24+XG4pO1xuXG5jb25zdCBEb3VibGVSaWdodEljb24gPSAoKSA9PiAoXG4gIDxCYXNlSWNvbj5cbiAgICA8PlxuICAgICAgPHBhdGggZD1cIk0zLjY0NiAxLjY0NmEuNS41IDAgMCAxIC43MDggMGw2IDZhLjUuNSAwIDAgMSAwIC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDgtLjcwOEw5LjI5MyA4IDMuNjQ2IDIuMzU0YS41LjUgMCAwIDEgMC0uNzA4elwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTcuNjQ2IDEuNjQ2YS41LjUgMCAwIDEgLjcwOCAwbDYgNmEuNS41IDAgMCAxIDAgLjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOC0uNzA4TDEzLjI5MyA4IDcuNjQ2IDIuMzU0YS41LjUgMCAwIDEgMC0uNzA4elwiIC8+XG4gICAgPC8+XG4gIDwvQmFzZUljb24+XG4pO1xuXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG5lb24tZGlzdHJpY3QvaG9va3MnO1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0aW9uUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG90YWxDb3VudDogbnVtYmVyO1xuICAvKipcbiAgICpcbiAgICovXG4gIHBhZ2VTaXplOiBudW1iZXI7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgLyoqXG4gICAqXG4gICAqL1xuICBzZXRDdXJyZW50UGFnZTogKHBhZ2U6IG51bWJlcikgPT4gdm9pZDtcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjYW5QcmV2aW91czogYm9vbGVhbjtcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjYW5OZXh0OiBib29sZWFuO1xuICAvKipcbiAgICpcbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xuICAvKipcbiAgICpcbiAgICovXG4gIHF1aWNrSnVtcEJ1dHRvbj86IGJvb2xlYW47XG59O1xuXG50eXBlIE1vYmlsZVBhZ2luYXRpb24gPSBQaWNrPFxuICBQYWdpbmF0aW9uUHJvcHMsXG4gICdjdXJyZW50UGFnZScgfCAndG90YWxDb3VudCcgfCAnY2FuUHJldmlvdXMnIHwgJ2Nhbk5leHQnXG4+ICYgeyBnb1ByZXZpb3VzOiAoKSA9PiB2b2lkOyBnb05leHQ6ICgpID0+IHZvaWQgfTtcbmNvbnN0IE1vYmlsZVBhZ2luYXRpb24gPSAoe1xuICBjdXJyZW50UGFnZSxcbiAgdG90YWxDb3VudCxcbiAgY2FuUHJldmlvdXMsXG4gIGNhbk5leHQsXG4gIGdvUHJldmlvdXMsXG4gIGdvTmV4dFxufTogTW9iaWxlUGFnaW5hdGlvbikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNb2JpbGVDb250YWluZXI+XG4gICAgICA8QXJyb3dMZWZ0IGNhbkdvPXtjYW5QcmV2aW91c30gb25DbGljaz17Z29QcmV2aW91c30+XG4gICAgICAgIDxMZWZ0SWNvbiAvPlxuICAgICAgPC9BcnJvd0xlZnQ+XG4gICAgICB7Y3VycmVudFBhZ2V9IG9mIHt0b3RhbENvdW50fVxuICAgICAgPEFycm93UmlnaHQgY2FuR289e2Nhbk5leHR9IG9uQ2xpY2s9e2dvTmV4dH0+XG4gICAgICAgIDxSaWdodEljb24gLz5cbiAgICAgIDwvQXJyb3dSaWdodD5cbiAgICA8L01vYmlsZUNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbnR5cGUgRGVza3RvcFBhZ2luYXRpb24gPSBQaWNrPFxuICBQYWdpbmF0aW9uUHJvcHMsXG4gIHwgJ2N1cnJlbnRQYWdlJ1xuICB8ICdwYWdlU2l6ZSdcbiAgfCAndG90YWxDb3VudCdcbiAgfCAnc2V0Q3VycmVudFBhZ2UnXG4gIHwgJ2xpbWl0J1xuICB8ICdxdWlja0p1bXBCdXR0b24nXG4+ICYge1xuICBnb1ByZXZpb3VzOiAoKSA9PiB2b2lkO1xuICBnb05leHQ6ICgpID0+IHZvaWQ7XG4gIGNhblByZXZpb3VzOiBib29sZWFuO1xuICBjYW5OZXh0OiBib29sZWFuO1xufTtcblxuY29uc3QgRGVza3RvcFBhZ2luYXRpb24gPSAoe1xuICBsaW1pdCxcbiAgY3VycmVudFBhZ2UsXG4gIHNldEN1cnJlbnRQYWdlLFxuICBwYWdlU2l6ZSxcbiAgdG90YWxDb3VudCxcbiAgY2FuUHJldmlvdXMsXG4gIGNhbk5leHQsXG4gIGdvTmV4dCxcbiAgZ29QcmV2aW91cyxcbiAgcXVpY2tKdW1wQnV0dG9uXG59OiBEZXNrdG9wUGFnaW5hdGlvbikgPT4ge1xuICBjb25zdCBnZW5lcmF0ZVBhZ2VzID0gKGN1cnJlbnRQYWdlOiBudW1iZXIsIGxpbWl0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBzdGFydCA9IE1hdGguZmxvb3IoKGN1cnJlbnRQYWdlIC0gMSkgLyBsaW1pdCkgKiBsaW1pdDtcbiAgICByZXR1cm4gbmV3IEFycmF5KGxpbWl0KS5maWxsKDApLm1hcCgoXywgaWR4KSA9PiBzdGFydCArIGlkeCArIDEpO1xuICB9O1xuXG4gIGNvbnN0IHBhZ2VzID0gdXNlTWVtbygoKSA9PiBnZW5lcmF0ZVBhZ2VzKGN1cnJlbnRQYWdlLCBsaW1pdCEpLCBbXG4gICAgcGFnZVNpemUsXG4gICAgbGltaXRcbiAgXSk7XG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxDb3VudCAvIHBhZ2VTaXplKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdpbmF0aW9uQ29udGFpbmVyPlxuICAgICAge3F1aWNrSnVtcEJ1dHRvbiAmJiAoXG4gICAgICAgIDxGaXJzdFBhZ2VBcnJvdyBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UGFnZSgxKX0+XG4gICAgICAgICAgPERvdWJsZUxlZnRJY29uIC8+XG4gICAgICAgIDwvRmlyc3RQYWdlQXJyb3c+XG4gICAgICApfVxuICAgICAgPEFycm93TGVmdCBjYW5Hbz17Y2FuUHJldmlvdXN9IG9uQ2xpY2s9e2dvUHJldmlvdXN9PlxuICAgICAgICA8TGVmdEljb24gLz5cbiAgICAgIDwvQXJyb3dMZWZ0PlxuICAgICAge3BhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+XG4gICAgICAgIHBhZ2UgPD0gdG90YWxQYWdlcyAmJiBpbmRleCA8PSBsaW1pdCEgLSAxID8gKFxuICAgICAgICAgIDxOdW1iZXJDb250YWluZXIgYWN0aXZlPXtjdXJyZW50UGFnZSA9PT0gcGFnZX0+XG4gICAgICAgICAgICA8TnVtYmVyIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKHBhZ2UpfT5cbiAgICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgICA8L051bWJlckNvbnRhaW5lcj5cbiAgICAgICAgKSA6IG51bGxcbiAgICAgICl9XG4gICAgICA8QXJyb3dSaWdodCBjYW5Hbz17Y2FuTmV4dH0gb25DbGljaz17Z29OZXh0fT5cbiAgICAgICAgPFJpZ2h0SWNvbiAvPlxuICAgICAgPC9BcnJvd1JpZ2h0PlxuXG4gICAgICB7cXVpY2tKdW1wQnV0dG9uICYmIChcbiAgICAgICAgPExhc3RQYWdlQXJyb3cgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UodG90YWxQYWdlcyl9PlxuICAgICAgICAgIDxEb3VibGVSaWdodEljb24gLz5cbiAgICAgICAgPC9MYXN0UGFnZUFycm93PlxuICAgICAgKX1cbiAgICA8L1BhZ2luYXRpb25Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgUGFnaW5hdGlvbiA9ICh7XG4gIHF1aWNrSnVtcEJ1dHRvbiA9IGZhbHNlLFxuICBjdXJyZW50UGFnZSxcbiAgc2V0Q3VycmVudFBhZ2UsXG4gIGxpbWl0ID0gNSxcbiAgLi4uYXJnc1xufTogUGFnaW5hdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IGdvTmV4dCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xuICB9O1xuXG4gIGNvbnN0IGdvUHJldmlvdXMgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcbiAgfTtcblxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkoJyhtYXgtd2lkdGg6IDYwMHB4KScpO1xuXG4gIHJldHVybiBpc01vYmlsZSA/IChcbiAgICA8TW9iaWxlUGFnaW5hdGlvblxuICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgZ29OZXh0PXtnb05leHR9XG4gICAgICBnb1ByZXZpb3VzPXtnb1ByZXZpb3VzfVxuICAgICAgey4uLmFyZ3N9XG4gICAgLz5cbiAgKSA6IChcbiAgICA8RGVza3RvcFBhZ2luYXRpb25cbiAgICAgIGdvTmV4dD17Z29OZXh0fVxuICAgICAgZ29QcmV2aW91cz17Z29QcmV2aW91c31cbiAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cbiAgICAgIGxpbWl0PXtsaW1pdH1cbiAgICAgIHF1aWNrSnVtcEJ1dHRvbj17cXVpY2tKdW1wQnV0dG9ufVxuICAgICAgey4uLmFyZ3N9XG4gICAgLz5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIERlZmF1bHRUaGVtZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCBQYWdpbmF0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICR7dGhlbWUuY29sb3JzLnBpbmsxfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnJhZGlpLnNtfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAke3RoZW1lLnNwYWNlc1syXX07XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICBgfVxuYDtcblxuaW50ZXJmYWNlIE51bWJlclByb3Age1xuICBhY3RpdmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTnVtYmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdjxOdW1iZXJQcm9wPmBcbiAgJHsoeyB0aGVtZSwgYWN0aXZlIH0pID0+IGNzc2BcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBjb2xvcjogJHthY3RpdmUgPyB0aGVtZS5jb2xvcnMucGluazEgOiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5waW5rMn07XG4gICAgfVxuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE51bWJlciA9IHN0eWxlZC5kaXZgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXMuc219O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bX07XG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgTW9iaWxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyNXB4O1xuICBgfVxuYDtcblxuY29uc3QgaWNvblZhcmlhbnQgPSAodGhlbWU6IERlZmF1bHRUaGVtZSwgY2FuR28/OiBib29sZWFuKSA9PiBjc3NgXG4gIGNvbG9yOiAke2NhbkdvID8gdGhlbWUuY29sb3JzLnBpbmsxIDogdGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgY3Vyc29yOiAke2NhbkdvID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnfTtcbmA7XG5cbmNvbnN0IGljb25TdHlsZSA9ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnBpbmsxfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxudHlwZSBJY29uUHJvcCA9IHtcbiAgY2FuR28/OiBib29sZWFuO1xufTtcblxuY29uc3QgcmVzZXRCdXR0b24gPSBjc3NgXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBBcnJvd0xlZnQgPSBzdHlsZWQuYnV0dG9uPEljb25Qcm9wPmBcbiAgJHsoeyB0aGVtZSwgY2FuR28gfSkgPT4gY3NzYFxuICAgICR7cmVzZXRCdXR0b259XG5cbiAgICBzdmcge1xuICAgICAgJHtpY29uU3R5bGUodGhlbWUpfVxuICAgICAgJHtpY29uVmFyaWFudCh0aGVtZSwgY2FuR28pfVxuICAgIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBcnJvd1JpZ2h0ID0gc3R5bGVkLmJ1dHRvbjxJY29uUHJvcD5gXG4gICR7KHsgdGhlbWUsIGNhbkdvIH0pID0+IGNzc2BcbiAgICAke3Jlc2V0QnV0dG9ufVxuXG4gICAgc3ZnIHtcbiAgICAgICR7aWNvblN0eWxlKHRoZW1lKX1cbiAgICAgICR7aWNvblZhcmlhbnQodGhlbWUsIGNhbkdvKX1cbiAgICB9XG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgRmlyc3RQYWdlQXJyb3cgPSBzdHlsZWQuYnV0dG9uYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICAke3Jlc2V0QnV0dG9ufVxuXG4gICAgc3ZnIHtcbiAgICAgICR7aWNvblN0eWxlKHRoZW1lKX1cbiAgICB9XG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGFzdFBhZ2VBcnJvdyA9IHN0eWxlZC5idXR0b25gXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgICR7cmVzZXRCdXR0b259XG5cbiAgICBzdmcge1xuICAgICAgJHtpY29uU3R5bGUodGhlbWUpfVxuICAgIH1cbiAgYH1cbmA7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFhO0FBQWI7QUFBQTtBQUFPLElBQU0sb0JBQ1gsT0FBTyxhQUFhLGNBQ2hCLElBQUssU0FBUSxRQUFZLElBQUssVUFBVSxZQUFZLE9BQ25ELFNBQVMsaUJBQWlCLFNBQVMsY0FBYyxPQUNsRCxJQUFJLElBQUksV0FBVyxTQUFTLFNBQVM7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ozQyxjQUFBLFNBQUE7TUFBQSxlQUFBLE1BQUE7O0FDQUEsUUFBQSxnQkFBb0MsWUFBQSxRQUFBO0FBTzdCLFFBQU0saUJBQWdCLENBQUMsVUFBa0I7QUFDOUMsWUFBTSxDQUFDLFNBQVMsY0FBYyxJQUFBLGNBQUEsVUFBUztBQUV2QyxNQUFBLElBQUEsY0FBQSxXQUFVLE1BQU07QUFDZCxjQUFNLFFBQVEsT0FBTyxXQUFXO0FBQ2hDLFlBQUksTUFBTSxZQUFZLFNBQVM7QUFDN0IscUJBQVcsTUFBTTs7QUFFbkIsY0FBTSxXQUFXLE1BQU0sV0FBVyxNQUFNO0FBQ3hDLGVBQU8saUJBQWlCLFVBQVU7QUFDbEMsZUFBTyxNQUFNLE9BQU8sb0JBQW9CLFVBQVU7U0FDakQsQ0FBQyxTQUFTO0FBRWIsYUFBTzs7Ozs7O0FDcEJUO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBLG1CQUErQjs7O0FDQS9CO0FBQUEsb0JBQTBDO0FBRW5DLElBQU0sc0JBQXNCLHNCQUFPO0FBQUEsSUFDdEMsQ0FBQyxFQUFFLFlBQVk7QUFBQSx5QkFDTSxNQUFNLE9BQU87QUFBQSxxQkFDakIsTUFBTSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJdEIsTUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBU2pCLElBQU0sa0JBQWtCLHNCQUFPO0FBQUEsSUFDbEMsQ0FBQyxFQUFFLE9BQU8sYUFBYTtBQUFBO0FBQUEsYUFFZCxTQUFTLE1BQU0sT0FBTyxRQUFRLE1BQU0sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFLekMsTUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBS3JCLElBQU0sU0FBUyxzQkFBTztBQUFBLElBQ3pCLENBQUMsRUFBRSxZQUFZO0FBQUEsaUJBQ0YsTUFBTSxVQUFVO0FBQUEsbUJBQ2QsTUFBTSxZQUFZO0FBQUE7QUFBQTtBQUk5QixJQUFNLGtCQUFrQixzQkFBTztBQUFBLElBQ2xDLENBQUMsRUFBRSxZQUFZO0FBQUEsYUFDTixNQUFNLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRMUIsSUFBTSxjQUFjLENBQUMsT0FBcUIsVUFBb0I7QUFBQSxXQUNuRCxRQUFRLE1BQU0sT0FBTyxRQUFRLE1BQU0sT0FBTztBQUFBLFlBQ3pDLFFBQVEsWUFBWTtBQUFBO0FBR2hDLElBQU0sWUFBWSxDQUFDLFVBQXdCO0FBQUE7QUFBQSxXQUVoQyxNQUFNLE9BQU87QUFBQTtBQUFBO0FBUXhCLElBQU0sY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFiLElBQU0sWUFBWSxzQkFBTztBQUFBLElBQzVCLENBQUMsRUFBRSxPQUFPLFlBQVk7QUFBQSxNQUNwQjtBQUFBO0FBQUE7QUFBQSxRQUdFLFVBQVU7QUFBQSxRQUNWLFlBQVksT0FBTztBQUFBO0FBQUE7QUFBQTtBQUtwQixJQUFNLGFBQWEsc0JBQU87QUFBQSxJQUM3QixDQUFDLEVBQUUsT0FBTyxZQUFZO0FBQUEsTUFDcEI7QUFBQTtBQUFBO0FBQUEsUUFHRSxVQUFVO0FBQUEsUUFDVixZQUFZLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFLcEIsSUFBTSxpQkFBaUIsc0JBQU87QUFBQSxJQUNqQyxDQUFDLEVBQUUsWUFBWTtBQUFBLE1BQ2I7QUFBQTtBQUFBO0FBQUEsUUFHRSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBS1gsSUFBTSxnQkFBZ0Isc0JBQU87QUFBQSxJQUNoQyxDQUFDLEVBQUUsWUFBWTtBQUFBLE1BQ2I7QUFBQTtBQUFBO0FBQUEsUUFHRSxVQUFVO0FBQUE7QUFBQTtBQUFBOzs7QUQvQ2xCLG1CQUE4QjtBQXJDOUIsSUFBTSxXQUFXLENBQUMsRUFBRSxHQUFHLGVBQ3JCLG1EQUFDLE9BQUQ7QUFBQSxFQUNFLFNBQVE7QUFBQSxFQUNSLE9BQU07QUFBQSxFQUNOLFFBQU87QUFBQSxFQUNQLFdBQVU7QUFBQSxFQUNWLGVBQVk7QUFBQSxHQUVYLDhCQUFZLG1EQUFDLFFBQUQ7QUFBQSxFQUFNLE1BQUs7QUFBQSxFQUFlO0FBQUE7QUFJM0MsSUFBTSxXQUFXLE1BQ2YsbURBQUMsVUFBRDtBQUFBLEVBQVUsR0FBRTtBQUFBO0FBRWQsSUFBTSxZQUFZLE1BQ2hCLG1EQUFDLFVBQUQ7QUFBQSxFQUFVLEdBQUU7QUFBQTtBQUdkLElBQU0saUJBQWlCLE1BQ3JCLG1EQUFDLFVBQUQsTUFDRSx3RkFDRSxtREFBQyxRQUFEO0FBQUEsRUFBTSxHQUFFO0FBQUEsSUFDUixtREFBQyxRQUFEO0FBQUEsRUFBTSxHQUFFO0FBQUE7QUFLZCxJQUFNLGtCQUFrQixNQUN0QixtREFBQyxVQUFELE1BQ0Usd0ZBQ0UsbURBQUMsUUFBRDtBQUFBLEVBQU0sR0FBRTtBQUFBLElBQ1IsbURBQUMsUUFBRDtBQUFBLEVBQU0sR0FBRTtBQUFBO0FBOENkLElBQU0sbUJBQW1CLENBQUM7QUFBQSxFQUN4QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsTUFDc0I7QUFDdEIsU0FDRSxtREFBQyxpQkFBRCxNQUNFLG1EQUFDLFdBQUQ7QUFBQSxJQUFXLE9BQU87QUFBQSxJQUFhLFNBQVM7QUFBQSxLQUN0QyxtREFBQyxVQUFELFFBRUQsYUFBWSxRQUFLLFlBQ2xCLG1EQUFDLFlBQUQ7QUFBQSxJQUFZLE9BQU87QUFBQSxJQUFTLFNBQVM7QUFBQSxLQUNuQyxtREFBQyxXQUFEO0FBQUE7QUFxQlIsSUFBTSxvQkFBb0IsQ0FBQztBQUFBLEVBQ3pCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsTUFDdUI7QUFDdkIsUUFBTSxnQkFBZ0IsQ0FBQyxjQUFxQixXQUFrQjtBQUM1RCxVQUFNLFFBQVEsS0FBSyxNQUFPLGdCQUFjLEtBQUssVUFBUztBQUN0RCxXQUFPLElBQUksTUFBTSxRQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxRQUFRLFFBQVEsTUFBTTtBQUFBO0FBR2hFLFFBQU0sUUFBUSwwQkFBUSxNQUFNLGNBQWMsYUFBYSxRQUFTO0FBQUEsSUFDOUQ7QUFBQSxJQUNBO0FBQUE7QUFFRixRQUFNLGFBQWEsS0FBSyxLQUFLLGFBQWE7QUFFMUMsU0FDRSxtREFBQyxxQkFBRCxNQUNHLG1CQUNDLG1EQUFDLGdCQUFEO0FBQUEsSUFBZ0IsU0FBUyxNQUFNLGVBQWU7QUFBQSxLQUM1QyxtREFBQyxnQkFBRCxRQUdKLG1EQUFDLFdBQUQ7QUFBQSxJQUFXLE9BQU87QUFBQSxJQUFhLFNBQVM7QUFBQSxLQUN0QyxtREFBQyxVQUFELFFBRUQsTUFBTSxJQUFJLENBQUMsTUFBTSxVQUNoQixRQUFRLGNBQWMsU0FBUyxRQUFTLElBQ3RDLG1EQUFDLGlCQUFEO0FBQUEsSUFBaUIsUUFBUSxnQkFBZ0I7QUFBQSxLQUN2QyxtREFBQyxRQUFEO0FBQUEsSUFBUSxLQUFLO0FBQUEsSUFBTyxTQUFTLE1BQU0sZUFBZTtBQUFBLEtBQy9DLFNBR0gsT0FFTixtREFBQyxZQUFEO0FBQUEsSUFBWSxPQUFPO0FBQUEsSUFBUyxTQUFTO0FBQUEsS0FDbkMsbURBQUMsV0FBRCxRQUdELG1CQUNDLG1EQUFDLGVBQUQ7QUFBQSxJQUFlLFNBQVMsTUFBTSxlQUFlO0FBQUEsS0FDM0MsbURBQUMsaUJBQUQ7QUFBQTtBQU9ILElBQU0sYUFBYSxDQUFDLE9BTUo7QUFOSSxlQUN6QjtBQUFBLHNCQUFrQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BSmlCLElBS3RCLGlCQUxzQixJQUt0QjtBQUFBLElBSkg7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUdBLFFBQU0sU0FBUyxNQUFNO0FBQ25CLG1CQUFlLGNBQWM7QUFBQTtBQUcvQixRQUFNLGFBQWEsTUFBTTtBQUN2QixtQkFBZSxjQUFjO0FBQUE7QUFHL0IsUUFBTSxXQUFXLGdDQUFjO0FBRS9CLFNBQU8sV0FDTCxtREFBQyxrQkFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEtBQ0ksU0FHTixtREFBQyxtQkFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEtBQ0k7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
