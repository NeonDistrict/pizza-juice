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

// ../button/dist/index.js
var require_dist2 = __commonJS({
  "../button/dist/index.js"(exports) {
    init_cjs_shims();
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
    var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues2 = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp2.call(b, prop))
          __defNormalProp2(a, prop, b[prop]);
      if (__getOwnPropSymbols2)
        for (var prop of __getOwnPropSymbols2(b)) {
          if (__propIsEnum2.call(b, prop))
            __defNormalProp2(a, prop, b[prop]);
        }
      return a;
    };
    var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
    var __objRest2 = (source, exclude) => {
      var target = {};
      for (var prop in source)
        if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
          target[prop] = source[prop];
      if (source != null && __getOwnPropSymbols2)
        for (var prop of __getOwnPropSymbols2(source)) {
          if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
            target[prop] = source[prop];
        }
      return target;
    };
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
      Button: () => Button2
    });
    var import_react2 = __toModule2(require("react"));
    var import_system2 = __toModule2(require("@neon-district/system"));
    var variants = (theme) => ({
      variant: {
        primary: {
          background: theme.colors.pink1,
          "&:hover": {
            background: theme.colors.pink2
          },
          "&:focus": {
            borderColor: theme.colors.teal1
          },
          "&:active": {
            background: theme.colors.pink3
          },
          "&:disabled": {
            background: theme.colors.grey1,
            color: theme.colors.grey3
          }
        },
        secondary: {
          background: theme.colors.grey4,
          "&:hover": {
            background: theme.colors.grey5
          },
          "&:focus": {
            background: theme.colors.grey5,
            borderColor: theme.colors.teal1
          },
          "&:active": {
            background: theme.colors.grey5
          },
          "&:disabled": {
            background: theme.colors.grey1,
            color: theme.colors.grey3
          }
        },
        destructive: {
          color: theme.colors.red1,
          borderColor: theme.colors.red1,
          "&:hover": {
            background: theme.colors.red50
          },
          "&:focus": {
            borderColor: theme.colors.teal1
          },
          "&:active": {
            background: theme.colors.red50
          },
          "&:disabled": {
            color: theme.colors.grey3,
            borderColor: theme.colors.grey1,
            background: theme.colors.grey50
          }
        },
        outline: {
          borderColor: theme.colors.pink1,
          "&:focus": {
            borderColor: theme.colors.teal1
          },
          "&:disabled": {
            color: theme.colors.grey3,
            borderColor: theme.colors.grey1
          }
        },
        naked: {
          color: theme.colors.pink1,
          "&:hover": {
            color: theme.colors.pink2,
            background: theme.colors.pink50
          },
          "&:focus": {
            borderColor: theme.colors.teal1
          },
          "&:active": {
            color: theme.colors.pink2,
            background: "transparent"
          },
          "&:disabled": {
            color: theme.colors.grey3,
            background: "transparent"
          }
        }
      },
      shape: {
        rounded: {
          squared: {
            borderRadius: 0
          },
          borderRadius: theme.radii.full
        }
      },
      size: {
        sm: {
          minWidth: 32,
          height: 32,
          fontSize: theme.fontSizes.xs,
          padding: `0 ${theme.spaces[4]}`
        },
        md: {
          minWidth: 40,
          height: 40,
          fontSize: theme.fontSizes.sm,
          padding: `0 ${theme.spaces[6]}`
        }
      },
      fluid: {
        width: theme.sizes.full
      }
    });
    var ButtonStyled = (0, import_system2.default)("button")(({ theme, variant, size, fluid, shape }) => __spreadValues2(__spreadValues2(__spreadValues2(__spreadValues2({
      appearance: "none",
      border: "1px solid",
      borderColor: "transparent",
      background: "transparent",
      fontFamily: "inherit",
      outline: 0,
      fontWeight: 600,
      textTransform: "uppercase",
      color: theme.colors.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spaces[2],
      userSelect: "none",
      transition: theme.durations.fast,
      "&:not(:disabled)": {
        cursor: "pointer"
      }
    }, fluid && variants(theme).fluid), variants(theme).variant[variant]), variants(theme).shape[shape]), variants(theme).size[size]));
    var Button2 = import_react2.default.forwardRef((_a, ref) => {
      var _b = _a, {
        type = "button",
        variant = "primary",
        size = "md",
        shape = "squared",
        icon,
        iconPosition = "left",
        children
      } = _b, props = __objRest2(_b, [
        "type",
        "variant",
        "size",
        "shape",
        "icon",
        "iconPosition",
        "children"
      ]);
      return /* @__PURE__ */ import_react2.default.createElement(ButtonStyled, __spreadValues2({
        ref,
        type,
        variant,
        size,
        shape
      }, props), icon && iconPosition === "left" && icon, children && /* @__PURE__ */ import_react2.default.createElement("span", null, children), icon && iconPosition === "right" && icon);
    });
  }
});

// index.ts
__export(exports, {
  PageHeading: () => PageHeading
});
init_cjs_shims();

// src/index.tsx
init_cjs_shims();
var import_react = __toModule(require("react"));
var import_hooks = __toModule(require_dist());
var import_button = __toModule(require_dist2());

// src/styles.ts
init_cjs_shims();
var import_system = __toModule(require("@neon-district/system"));
var Wrapper = import_system.default.div`
  ${({ theme }) => import_system.css`
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.medium};
  `}
`;
var HeadingStyled = import_system.default.div`
  ${({ theme }) => import_system.css`
    font-size: ${theme.fontSizes["2xl"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 5px;
  `}
`;
var Title = import_system.default.h1`
  ${({ theme, haveButton }) => import_system.css`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    font-size: 18px;
    font-weight: ${theme.fontWeights.medium};
    margin: 0;
    line-height: 24px;
    letter-spacing: 0.1em;

    @media (max-width: ${theme.breakpoints.md}) {
      ${haveButton && "justify-content: center;"}
    }
  `}
`;
var FlexEnd = import_system.default.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces[1]};
  align-items: center;
`;
var Line = import_system.default.div`
  ${({ theme, haveButton, haveDescription }) => import_system.css`
    height: 2px;
    background: red;
    width: 160px;
    position: absolute;
    bottom: -8px;

    background: ${theme.colors.grey4};

    @media (max-width: ${theme.breakpoints.md}) {
      ${haveButton && !haveDescription && "display: none;"}
    }
  `}
`;
var Description = import_system.default.div`
  ${({ theme }) => import_system.css`
    color: ${theme.colors.grey3};
    border-left: 2px solid;
    border-color: ${theme.colors.grey4};
    padding-left: ${theme.spaces[2]};
    margin-top: ${theme.spaces[2]};

    @media (max-width: ${theme.breakpoints.md}) {
      border: none;
    }
  `}
`;
var FullLine = import_system.default.hr`
  ${({ theme, haveButton, haveDescription }) => import_system.css`
    border-width: 0px 0px 1px;
    border-color: ${theme.colors.grey4};
    border-style: solid;
    width: 100%;
    margin: 0;

    @media (max-width: ${theme.breakpoints.md}) {
      ${haveButton && !haveDescription && "border: none;"}
    }
  `}
`;
var Bottom = import_system.default.div`
  ${({ theme }) => import_system.css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spaces[4]};
  `}
`;

// src/index.tsx
var PageHeading = (_a) => {
  var _b = _a, {
    description,
    children,
    title
  } = _b, args = __objRest(_b, [
    "description",
    "children",
    "title"
  ]);
  const isMobile = (0, import_hooks.useMediaQuery)("(max-width: 768px)");
  return /* @__PURE__ */ import_react.default.createElement(Wrapper, __spreadValues({}, args), /* @__PURE__ */ import_react.default.createElement(HeadingStyled, null, /* @__PURE__ */ import_react.default.createElement(Title, {
    haveButton: !!children
  }, title), /* @__PURE__ */ import_react.default.createElement(Line, {
    haveButton: !!children,
    haveDescription: !!description
  }), /* @__PURE__ */ import_react.default.createElement(FlexEnd, null, !isMobile && /* @__PURE__ */ import_react.default.createElement(ChildrenButtons, {
    children,
    isMobile
  }))), /* @__PURE__ */ import_react.default.createElement(FullLine, {
    haveButton: !!children,
    haveDescription: !!description
  }), /* @__PURE__ */ import_react.default.createElement(Bottom, null, description && /* @__PURE__ */ import_react.default.createElement(Description, null, description), isMobile && /* @__PURE__ */ import_react.default.createElement(ChildrenButtons, {
    children,
    isMobile
  })));
};
var ChildrenButtons = ({ children, isMobile }) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, import_react.default.Children.map(children, (child) => {
  if ((child == null ? void 0 : child.type) === import_button.Button && isMobile) {
    return import_react.default.cloneElement(child, {
      fluid: true
    });
  }
  return child;
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PageHeading
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzdXAvYXNzZXRzL2Nqc19zaGltcy5qcyIsICIuLi8uLi9ob29rcy9pbmRleC50cyIsICIuLi8uLi9ob29rcy9zcmMvdXNlTWVkaWFRdWVyeS50cyIsICIuLi8uLi9idXR0b24vaW5kZXgudHMiLCAiLi4vLi4vYnV0dG9uL3NyYy9pbmRleC50c3giLCAiLi4vLi4vYnV0dG9uL3NyYy9zdHlsZXMudHMiLCAiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY29uc3QgaW1wb3J0TWV0YVVybFNoaW0gPVxuICB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnXG4gICAgPyBuZXcgKHJlcXVpcmUoJ3UnICsgJ3JsJykuVVJMKSgnZmlsZTonICsgX19maWxlbmFtZSkuaHJlZlxuICAgIDogKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpIHx8XG4gICAgICBuZXcgVVJMKCdtYWluLmpzJywgZG9jdW1lbnQuYmFzZVVSSSkuaHJlZlxuIiwgImV4cG9ydCAqIGZyb20gJy4vc3JjJztcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIFJlYWN0IGhvb2sgdGhhdCB0cmFja3Mgc3RhdGUgb2YgYSBDU1MgbWVkaWEgcXVlcnlcbiAqXG4gKiBAcGFyYW0gcXVlcnkgdGhlIG1lZGlhIHF1ZXJ5IHRvIG1hdGNoXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VNZWRpYVF1ZXJ5ID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG4gICAgaWYgKG1lZGlhLm1hdGNoZXMgIT09IG1hdGNoZXMpIHtcbiAgICAgIHNldE1hdGNoZXMobWVkaWEubWF0Y2hlcyk7XG4gICAgfVxuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4gc2V0TWF0Y2hlcyhtZWRpYS5tYXRjaGVzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpO1xuICB9LCBbbWF0Y2hlcywgcXVlcnldKTtcblxuICByZXR1cm4gbWF0Y2hlcztcbn07XG4iLCAiZXhwb3J0ICogZnJvbSAnLi9zcmMnO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvblN0eWxlZCB9IGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgQnV0dG9uUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBWYXJpYW50IHN0eWxlIG9mIHRoZSBidXR0b25cbiAgICogQGRlZmF1bHQgXCJwcmltYXJ5XCJcbiAgICovXG4gIHZhcmlhbnQ/OiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdkZXN0cnVjdGl2ZScgfCAnb3V0bGluZScgfCAnbmFrZWQnO1xuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgYnV0dG9uXG4gICAqIEBkZWZhdWx0IFwibWRcIlxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnO1xuICAvKipcbiAgICogaWYgYHRydWVgIGFkZCBcIndpZHRoOjEwMCVcIiB0byBidXR0b25cbiAgICogQGRlZmF1bHQgXCJmYWxzZVwiXG4gICAqL1xuICBmbHVpZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaGFwZSBvZiB0aGUgYnV0dG9uXG4gICAqIEBkZWZhdWx0IFwic3F1YXJlZFwiXG4gICAqL1xuICBzaGFwZT86ICdzcXVhcmVkJyB8ICdyb3VuZGVkJztcbiAgLyoqXG4gICAqIEFkZCBhbiBpY29uIGJlc2lkZSB0ZXh0XG4gICAqL1xuICBpY29uPzogUmVhY3QuUmVhY3ROb2RlO1xuICAvKipcbiAgICogUG9zaXRpb24gb2YgdGhlIGljb25cbiAgICogQGRlZmF1bHQgXCJsZWZ0XCJcbiAgICovXG4gIGljb25Qb3NpdGlvbj86ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiBCdXR0b24gdGV4dFxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59ICYgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuXG4vKipcbiAqIEJ1dHRvbiBjb21wb25lbnRcbiAqXG4gKiBAZGVzY3JpcHRpb24gdXNlZCB0byB0cmlnZ2VyIGFuIGFjdGlvbiBvciBldmVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIEJ1dHRvblByb3BzPihcbiAgKFxuICAgIHtcbiAgICAgIHR5cGUgPSAnYnV0dG9uJyxcbiAgICAgIHZhcmlhbnQgPSAncHJpbWFyeScsXG4gICAgICBzaXplID0gJ21kJyxcbiAgICAgIHNoYXBlID0gJ3NxdWFyZWQnLFxuICAgICAgaWNvbixcbiAgICAgIGljb25Qb3NpdGlvbiA9ICdsZWZ0JyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLi4ucHJvcHNcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblN0eWxlZFxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgdmFyaWFudD17dmFyaWFudH1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgc2hhcGU9e3NoYXBlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtpY29uICYmIGljb25Qb3NpdGlvbiA9PT0gJ2xlZnQnICYmIGljb259XG5cbiAgICAgICAge2NoaWxkcmVuICYmIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+fVxuXG4gICAgICAgIHtpY29uICYmIGljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJiBpY29ufVxuICAgICAgPC9CdXR0b25TdHlsZWQ+XG4gICAgKTtcbiAgfVxuKTtcbiIsICJpbXBvcnQgc3R5bGVkLCB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmltcG9ydCB7IEJ1dHRvblByb3BzIH0gZnJvbSAnLi8nO1xuXG5leHBvcnQgY29uc3QgdmFyaWFudHMgPSAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gKHtcbiAgLyoqXG4gICAqIFZhcmlhbnQgdHlwZXNcbiAgICovXG4gIHZhcmlhbnQ6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucGluazEsXG5cbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucGluazJcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy50ZWFsMVxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnBpbmszXG4gICAgICB9LFxuICAgICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ncmV5MSxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5M1xuICAgICAgfVxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZ3JleTQsXG5cbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZ3JleTVcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmdyZXk1LFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnRlYWwxXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZ3JleTVcbiAgICAgIH0sXG4gICAgICAnJjpkaXNhYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmdyZXkxLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzXG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cnVjdGl2ZToge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5yZWQxLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5yZWQxLFxuXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnJlZDUwXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMudGVhbDFcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5yZWQ1MFxuICAgICAgfSxcbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxLFxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZ3JleTUwXG4gICAgICB9XG4gICAgfSxcbiAgICBvdXRsaW5lOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnBpbmsxLFxuXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy50ZWFsMVxuICAgICAgfSxcbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxXG4gICAgICB9XG4gICAgfSxcbiAgICBuYWtlZDoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5waW5rMSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucGluazIsXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5waW5rNTBcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy50ZWFsMVxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5waW5rMixcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvKipcbiAgICogU2hhcGUgdHlwZXNcbiAgICovXG4gIHNoYXBlOiB7XG4gICAgcm91bmRlZDoge1xuICAgICAgc3F1YXJlZDoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IDBcbiAgICAgIH0sXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLmZ1bGxcbiAgICB9XG4gIH0sXG4gIC8qKlxuICAgKiBTaXplIHR5cGVzXG4gICAqL1xuICBzaXplOiB7XG4gICAgc206IHtcbiAgICAgIG1pbldpZHRoOiAzMixcbiAgICAgIGhlaWdodDogMzIsXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnhzLFxuICAgICAgcGFkZGluZzogYDAgJHt0aGVtZS5zcGFjZXNbNF19YFxuICAgIH0sXG4gICAgbWQ6IHtcbiAgICAgIG1pbldpZHRoOiA0MCxcbiAgICAgIGhlaWdodDogNDAsXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgcGFkZGluZzogYDAgJHt0aGVtZS5zcGFjZXNbNl19YFxuICAgIH1cbiAgfSxcbiAgZmx1aWQ6IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvblN0eWxlZCA9IHN0eWxlZCgnYnV0dG9uJyk8QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgdmFyaWFudCwgc2l6ZSwgZmx1aWQsIHNoYXBlIH0pID0+ICh7XG4gICAgLy8gcmVzZXRcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBvdXRsaW5lOiAwLFxuXG4gICAgLy8gYmFzZSBzdHlsZXNcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGdhcDogdGhlbWUuc3BhY2VzWzJdLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS5kdXJhdGlvbnMuZmFzdCxcblxuICAgICcmOm5vdCg6ZGlzYWJsZWQpJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9LFxuXG4gICAgLy8gY29uZGl0aW9uYWwgc3R5bGVzXG4gICAgLi4uKGZsdWlkICYmIHZhcmlhbnRzKHRoZW1lKS5mbHVpZCksXG5cbiAgICAvLyB2YXJpYW50IHN0eWxlc1xuICAgIC4uLnZhcmlhbnRzKHRoZW1lKS52YXJpYW50W3ZhcmlhbnQhXSxcbiAgICAuLi52YXJpYW50cyh0aGVtZSkuc2hhcGVbc2hhcGUhXSxcbiAgICAuLi52YXJpYW50cyh0aGVtZSkuc2l6ZVtzaXplIV1cbiAgfSlcbik7XG4iLCAiZXhwb3J0ICogZnJvbSAnLi9zcmMnO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdAbmVvbi1kaXN0cmljdC9ob29rcyc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L2J1dHRvbic7XG5cbmltcG9ydCB7XG4gIFdyYXBwZXIsXG4gIEZ1bGxMaW5lLFxuICBMaW5lLFxuICBEZXNjcmlwdGlvbixcbiAgSGVhZGluZ1N0eWxlZCxcbiAgRmxleEVuZCxcbiAgQm90dG9tLFxuICBUaXRsZVxufSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIFBhZ2VIZWFkaW5nUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlSGVhZGluZyA9ICh7XG4gIGRlc2NyaXB0aW9uLFxuICBjaGlsZHJlbixcbiAgdGl0bGUsXG4gIC4uLmFyZ3Ncbn06IFBhZ2VIZWFkaW5nUHJvcHMpID0+IHtcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KCcobWF4LXdpZHRoOiA3NjhweCknKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIHsuLi5hcmdzfT5cbiAgICAgIDxIZWFkaW5nU3R5bGVkPlxuICAgICAgICA8VGl0bGUgaGF2ZUJ1dHRvbj17ISFjaGlsZHJlbn0+e3RpdGxlfTwvVGl0bGU+XG4gICAgICAgIDxMaW5lIGhhdmVCdXR0b249eyEhY2hpbGRyZW59IGhhdmVEZXNjcmlwdGlvbj17ISFkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPEZsZXhFbmQ+XG4gICAgICAgICAgeyFpc01vYmlsZSAmJiAoXG4gICAgICAgICAgICA8Q2hpbGRyZW5CdXR0b25zIGNoaWxkcmVuPXtjaGlsZHJlbn0gaXNNb2JpbGU9e2lzTW9iaWxlfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleEVuZD5cbiAgICAgIDwvSGVhZGluZ1N0eWxlZD5cbiAgICAgIDxGdWxsTGluZSBoYXZlQnV0dG9uPXshIWNoaWxkcmVufSBoYXZlRGVzY3JpcHRpb249eyEhZGVzY3JpcHRpb259IC8+XG4gICAgICA8Qm90dG9tPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uPn1cbiAgICAgICAge2lzTW9iaWxlICYmIChcbiAgICAgICAgICA8Q2hpbGRyZW5CdXR0b25zIGNoaWxkcmVuPXtjaGlsZHJlbn0gaXNNb2JpbGU9e2lzTW9iaWxlfSAvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3R0b20+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxudHlwZSBDaGlsZHJlbkJ1dHRvbnNQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaXNNb2JpbGU6IGJvb2xlYW47XG59O1xuXG5jb25zdCBDaGlsZHJlbkJ1dHRvbnMgPSAoeyBjaGlsZHJlbiwgaXNNb2JpbGUgfTogQ2hpbGRyZW5CdXR0b25zUHJvcHMpID0+IChcbiAgPD5cbiAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGNoaWxkPy50eXBlID09PSBCdXR0b24gJiYgaXNNb2JpbGUpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSl9XG4gIDwvPlxuKTtcbiIsICJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmdTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWycyeGwnXX07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxPHsgaGF2ZUJ1dHRvbj86IGJvb2xlYW4gfT5gXG4gICR7KHsgdGhlbWUsIGhhdmVCdXR0b24gfSkgPT4gY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy5tZH0pIHtcbiAgICAgICR7aGF2ZUJ1dHRvbiAmJiAnanVzdGlmeS1jb250ZW50OiBjZW50ZXI7J31cbiAgICB9XG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgRmxleEVuZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXNbMV19O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuZGl2PHtcbiAgaGF2ZUJ1dHRvbj86IGJvb2xlYW47XG4gIGhhdmVEZXNjcmlwdGlvbj86IGJvb2xlYW47XG59PmBcbiAgJHsoeyB0aGVtZSwgaGF2ZUJ1dHRvbiwgaGF2ZURlc2NyaXB0aW9uIH0pID0+IGNzc2BcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC04cHg7XG5cbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5NH07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy5tZH0pIHtcbiAgICAgICR7aGF2ZUJ1dHRvbiAmJiAhaGF2ZURlc2NyaXB0aW9uICYmICdkaXNwbGF5OiBub25lOyd9XG4gICAgfVxuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTR9O1xuICAgIHBhZGRpbmctbGVmdDogJHt0aGVtZS5zcGFjZXNbMl19O1xuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2VzWzJdfTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLm1kfSkge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGdWxsTGluZSA9IHN0eWxlZC5ocjx7XG4gIGhhdmVCdXR0b24/OiBib29sZWFuO1xuICBoYXZlRGVzY3JpcHRpb24/OiBib29sZWFuO1xufT5gXG4gICR7KHsgdGhlbWUsIGhhdmVCdXR0b24sIGhhdmVEZXNjcmlwdGlvbiB9KSA9PiBjc3NgXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweDtcbiAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLm1kfSkge1xuICAgICAgJHtoYXZlQnV0dG9uICYmICFoYXZlRGVzY3JpcHRpb24gJiYgJ2JvcmRlcjogbm9uZTsnfVxuICAgIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAke3RoZW1lLnNwYWNlc1s0XX07XG4gIGB9XG5gO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBYTtBQUFiO0FBQUE7QUFBTyxJQUFNLG9CQUNYLE9BQU8sYUFBYSxjQUNoQixJQUFLLFNBQVEsUUFBWSxJQUFLLFVBQVUsWUFBWSxPQUNuRCxTQUFTLGlCQUFpQixTQUFTLGNBQWMsT0FDbEQsSUFBSSxJQUFJLFdBQVcsU0FBUyxTQUFTO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKM0MsY0FBQSxTQUFBO01BQUEsZUFBQSxNQUFBOztBQ0FBLFFBQUEsZ0JBQW9DLFlBQUEsUUFB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
