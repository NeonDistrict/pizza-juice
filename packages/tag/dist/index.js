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

// ../avatar/dist/index.js
var require_dist = __commonJS({
  "../avatar/dist/index.js"(exports) {
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
      Avatar: () => Avatar2
    });
    var import_react2 = __toModule2(require("react"));
    var import_system2 = __toModule2(require("@neon-district/system"));
    var variants = (theme) => ({
      sizes: {
        "3xl": {
          width: 240,
          height: 240
        },
        "2xl": {
          width: 192,
          height: 192
        },
        xl: {
          width: 160,
          height: 160
        },
        lg: {
          width: 88,
          height: 88
        },
        md: {
          width: 80,
          height: 80
        },
        sm: {
          width: 64,
          height: 64
        },
        xs: {
          width: 40,
          height: 40
        },
        "2xs": {
          width: 32,
          height: 32
        },
        "3xs": {
          width: 24,
          height: 24,
          borderRadius: theme.radii.full
        }
      }
    });
    var AvatarStyled = (0, import_system2.default)("img")(({ theme, size }) => __spreadValues2({}, size && variants(theme).sizes[size]));
    var Avatar2 = (_a) => {
      var _b = _a, { size = "md" } = _b, props = __objRest2(_b, ["size"]);
      return /* @__PURE__ */ import_react2.default.createElement(AvatarStyled, __spreadValues2({
        size
      }, props));
    };
  }
});

// index.ts
__export(exports, {
  Tag: () => Tag
});
init_cjs_shims();

// src/index.tsx
init_cjs_shims();
var import_react = __toModule(require("react"));

// src/styles.ts
init_cjs_shims();
var import_system = __toModule(require("@neon-district/system"));
var import_avatar = __toModule(require_dist());
var tagVariants = {
  active: (theme) => import_system.css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.grey1};
    border-color: transparent;
  `,
  removable: import_system.css`
    padding-right: 5px;
  `
};
var leftVariants = (theme) => ({
  image: import_system.css`
    padding-left: 0;
    gap: ${theme.spaces[1]};
  `,
  icon: import_system.css`
    padding-left: 10px;
    gap: 6px;
  `
});
var TagStyles = import_system.default.div`
  ${({ theme, active, removable, image, icon }) => import_system.css`
    padding: 0px ${theme.spaces[4]};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    gap: ${theme.spaces[1]};
    text-transform: uppercase;
    color: ${theme.colors.grey3};
    border: 1px solid ${theme.colors.grey3};
    border-radius: ${theme.radii.md};
    line-height: 150%;
    font-weight: ${theme.fontWeights.bold};

    svg {
      color: ${active ? theme.colors.grey3 : theme.colors.grey4};
    }

    ${active && tagVariants.active(theme)}
    ${removable && tagVariants.removable}
    ${image && leftVariants(theme)["image"]}
    ${icon && leftVariants(theme)["icon"]}
  `}
`;
var RemoveWrapper = import_system.default.div`
  ${({ theme, active }) => import_system.css`
    color: ${theme.colors.black};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.radii.full};
    cursor: pointer;
    background: ${active ? theme.colors.white : theme.colors.grey1};
  `}
`;
var RelativeAvatar = (0, import_system.default)(import_avatar.default)`
  position: relative;
  left: -1px;
`;

// src/index.tsx
var BaseIcon = ({ d }) => /* @__PURE__ */ import_react.default.createElement("svg", {
  viewBox: "0 0 16 16",
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ import_react.default.createElement("path", {
  fill: "currentColor",
  d
}));
var ArchiveIcon = () => /* @__PURE__ */ import_react.default.createElement(BaseIcon, {
  d: "M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
});
var CloseIcon = () => /* @__PURE__ */ import_react.default.createElement(BaseIcon, {
  d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
});
var Remove = ({
  active,
  onRemove
}) => /* @__PURE__ */ import_react.default.createElement(RemoveWrapper, {
  active,
  onClick: onRemove
}, /* @__PURE__ */ import_react.default.createElement(CloseIcon, null));
var Tag = (_a) => {
  var _b = _a, {
    size = "md",
    label,
    active = false,
    removable,
    onRemove,
    image,
    icon
  } = _b, args = __objRest(_b, [
    "size",
    "label",
    "active",
    "removable",
    "onRemove",
    "image",
    "icon"
  ]);
  if (image && icon) {
    throw new Error("Tag cannot have both image and icon");
  }
  return /* @__PURE__ */ import_react.default.createElement(TagStyles, __spreadValues({
    active,
    removable,
    image,
    icon
  }, args), image && /* @__PURE__ */ import_react.default.createElement(RelativeAvatar, {
    image: typeof image === "string" ? image : void 0,
    size: 24
  }), icon && /* @__PURE__ */ import_react.default.createElement(ArchiveIcon, null), label, removable && /* @__PURE__ */ import_react.default.createElement(Remove, {
    active,
    onRemove
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tag
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzdXAvYXNzZXRzL2Nqc19zaGltcy5qcyIsICIuLi8uLi9hdmF0YXIvaW5kZXgudHMiLCAiLi4vLi4vYXZhdGFyL3NyYy9pbmRleC50c3giLCAiLi4vLi4vYXZhdGFyL3NyYy9zdHlsZXMudHMiLCAiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY29uc3QgaW1wb3J0TWV0YVVybFNoaW0gPVxuICB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnXG4gICAgPyBuZXcgKHJlcXVpcmUoJ3UnICsgJ3JsJykuVVJMKSgnZmlsZTonICsgX19maWxlbmFtZSkuaHJlZlxuICAgIDogKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpIHx8XG4gICAgICBuZXcgVVJMKCdtYWluLmpzJywgZG9jdW1lbnQuYmFzZVVSSSkuaHJlZlxuIiwgImV4cG9ydCAqIGZyb20gJy4vc3JjJztcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBdmF0YXJTdHlsZWQgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIEF2YXRhclByb3BzID0ge1xuICAvKipcbiAgICogQXZhdGFyIHNpemUgaW4gcGl4ZWxzLlxuICAgKiBAZGVmYXVsdCBcIm1kXCJcbiAgICovXG4gIHNpemU6ICczeHMnIHwgJzJ4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcyeGwnIHwgJzN4bCc7XG4gIC8qKlxuICAgKiBBdmF0YXIgdXJsLlxuICAgKi9cbiAgc3JjPzogc3RyaW5nO1xuICAvKipcbiAgICogQXZhdGFyIGRlc2NyaXB0aW9uXG4gICAqL1xuICBhbHQ/OiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIEF2YXRhciBjb21wb25lbnRcbiAqXG4gKiBAZGVzY3JpcHRpb24gaXMgdXNlZCB0byByZXByZXNlbnQgYSBjaGFyYWN0ZXIgYW5kIGRpc3BsYXlzIHRoZSBwaWN0dXJlLlxuICovXG5leHBvcnQgY29uc3QgQXZhdGFyID0gKHsgc2l6ZSA9ICdtZCcsIC4uLnByb3BzIH06IEF2YXRhclByb3BzKSA9PiB7XG4gIHJldHVybiA8QXZhdGFyU3R5bGVkIHNpemU9e3NpemV9IHsuLi5wcm9wc30gLz47XG59O1xuIiwgImltcG9ydCBzdHlsZWQsIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuaW1wb3J0IHsgQXZhdGFyUHJvcHMgfSBmcm9tICcuJztcblxuY29uc3QgdmFyaWFudHMgPSAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gKHtcbiAgc2l6ZXM6IHtcbiAgICAnM3hsJzoge1xuICAgICAgd2lkdGg6IDI0MCxcbiAgICAgIGhlaWdodDogMjQwXG4gICAgfSxcbiAgICAnMnhsJzoge1xuICAgICAgd2lkdGg6IDE5MixcbiAgICAgIGhlaWdodDogMTkyXG4gICAgfSxcbiAgICB4bDoge1xuICAgICAgd2lkdGg6IDE2MCxcbiAgICAgIGhlaWdodDogMTYwXG4gICAgfSxcbiAgICBsZzoge1xuICAgICAgd2lkdGg6IDg4LFxuICAgICAgaGVpZ2h0OiA4OFxuICAgIH0sXG4gICAgbWQ6IHtcbiAgICAgIHdpZHRoOiA4MCxcbiAgICAgIGhlaWdodDogODBcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICB3aWR0aDogNjQsXG4gICAgICBoZWlnaHQ6IDY0XG4gICAgfSxcbiAgICB4czoge1xuICAgICAgd2lkdGg6IDQwLFxuICAgICAgaGVpZ2h0OiA0MFxuICAgIH0sXG4gICAgJzJ4cyc6IHtcbiAgICAgIHdpZHRoOiAzMixcbiAgICAgIGhlaWdodDogMzJcbiAgICB9LFxuICAgICczeHMnOiB7XG4gICAgICB3aWR0aDogMjQsXG4gICAgICBoZWlnaHQ6IDI0LFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5mdWxsXG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEF2YXRhclN0eWxlZCA9IHN0eWxlZCgnaW1nJyk8QXZhdGFyUHJvcHM+KCh7IHRoZW1lLCBzaXplIH0pID0+ICh7XG4gIC8vIHZhcmlhbnQgc3R5bGVzXG4gIC4uLihzaXplICYmIHZhcmlhbnRzKHRoZW1lKS5zaXplc1tzaXplIV0pXG59KSk7XG4iLCAiZXhwb3J0ICogZnJvbSAnLi9zcmMnO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFJlbGF0aXZlQXZhdGFyLCBSZW1vdmVXcmFwcGVyLCBUYWdTdHlsZXMgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IEJhc2VJY29uID0gKHsgZCB9KSA9PiAoXG4gIDxzdmdcbiAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICB3aWR0aD1cIjFyZW1cIlxuICAgIGhlaWdodD1cIjFyZW1cIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICA+XG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e2R9IC8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgQXJjaGl2ZUljb24gPSAoKSA9PiAoXG4gIDxCYXNlSWNvbiBkPVwiTTEyLjY0MyAxNUMxMy45NzkgMTUgMTUgMTMuODQ1IDE1IDEyLjVWNUgxdjcuNUMxIDEzLjg0NSAyLjAyMSAxNSAzLjM1NyAxNWg5LjI4NnpNNS41IDdoNWEuNS41IDAgMCAxIDAgMWgtNWEuNS41IDAgMCAxIDAtMXpNLjggMWEuOC44IDAgMCAwLS44LjhWM2EuOC44IDAgMCAwIC44LjhoMTQuNEEuOC44IDAgMCAwIDE2IDNWMS44YS44LjggMCAwIDAtLjgtLjhILjh6XCIgLz5cbik7XG5cbmNvbnN0IENsb3NlSWNvbiA9ICgpID0+IChcbiAgPEJhc2VJY29uIGQ9XCJNMjg5Ljk0IDI1Nmw5NS05NUEyNCAyNCAwIDAwMzUxIDEyN2wtOTUgOTUtOTUtOTVhMjQgMjQgMCAwMC0zNCAzNGw5NSA5NS05NSA5NWEyNCAyNCAwIDEwMzQgMzRsOTUtOTUgOTUgOTVhMjQgMjQgMCAwMDM0LTM0elwiIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBUYWdQcm9wc0Jhc2UgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNpemU/OiAnc20nIHwgJ21kJztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgcmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgb25SZW1vdmU/OiAoKSA9PiB2b2lkO1xufTtcblxudHlwZSBUYWdQcm9wc1dpdGhJbWFnZSA9IFRhZ1Byb3BzQmFzZSAmIHtcbiAgaWNvbj86IG5ldmVyO1xuICBpbWFnZTogc3RyaW5nIHwgYm9vbGVhbjtcbn07XG5cbnR5cGUgVGFnUHJvcHNXaXRoSWNvbiA9IFRhZ1Byb3BzQmFzZSAmIHtcbiAgaWNvbj86IGJvb2xlYW47XG4gIGltYWdlPzogbmV2ZXI7XG59O1xuXG5leHBvcnQgdHlwZSBUYWdQcm9wcyA9IFRhZ1Byb3BzV2l0aEljb24gfCBUYWdQcm9wc1dpdGhJbWFnZTtcblxuZXhwb3J0IHR5cGUgU3R5bGVkVGFnUHJvcHMgPSBUYWdQcm9wc0Jhc2UgJiB7XG4gIGltYWdlOiBzdHJpbmcgfCBib29sZWFuO1xuICBpY29uPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IFJlbW92ZSA9ICh7XG4gIGFjdGl2ZSxcbiAgb25SZW1vdmVcbn06IFBpY2s8VGFnUHJvcHMsICdhY3RpdmUnIHwgJ29uUmVtb3ZlJz4pID0+IChcbiAgPFJlbW92ZVdyYXBwZXIgYWN0aXZlPXthY3RpdmV9IG9uQ2xpY2s9e29uUmVtb3ZlfT5cbiAgICA8Q2xvc2VJY29uIC8+XG4gIDwvUmVtb3ZlV3JhcHBlcj5cbik7XG5cbmV4cG9ydCBjb25zdCBUYWcgPSAoe1xuICBzaXplID0gJ21kJyxcbiAgbGFiZWwsXG4gIGFjdGl2ZSA9IGZhbHNlLFxuICByZW1vdmFibGUsXG4gIG9uUmVtb3ZlLFxuICBpbWFnZSxcbiAgaWNvbixcbiAgLi4uYXJnc1xufTogVGFnUHJvcHMpID0+IHtcbiAgaWYgKGltYWdlICYmIGljb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhZyBjYW5ub3QgaGF2ZSBib3RoIGltYWdlIGFuZCBpY29uJyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUYWdTdHlsZXNcbiAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgcmVtb3ZhYmxlPXtyZW1vdmFibGV9XG4gICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICBpY29uPXtpY29ufVxuICAgICAgey4uLmFyZ3N9XG4gICAgPlxuICAgICAge2ltYWdlICYmIChcbiAgICAgICAgPFJlbGF0aXZlQXZhdGFyXG4gICAgICAgICAgaW1hZ2U9e3R5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycgPyBpbWFnZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBzaXplPXsyNH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7aWNvbiAmJiA8QXJjaGl2ZUljb24gLz59XG4gICAgICB7bGFiZWx9XG4gICAgICB7cmVtb3ZhYmxlICYmIDxSZW1vdmUgYWN0aXZlPXthY3RpdmV9IG9uUmVtb3ZlPXtvblJlbW92ZX0gLz59XG4gICAgPC9UYWdTdHlsZXM+XG4gICk7XG59O1xuIiwgImltcG9ydCBzdHlsZWQsIHsgY3NzLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdAbmVvbi1kaXN0cmljdC9zeXN0ZW0nO1xuXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BuZW9uLWRpc3RyaWN0L2F2YXRhcic7XG5cbmltcG9ydCB7IFN0eWxlZFRhZ1Byb3BzIH0gZnJvbSAnLic7XG5cbmNvbnN0IHRhZ1ZhcmlhbnRzID0ge1xuICAvLyBOZWVkIHRvIGFkZCB0aGUgc2l6ZSB2YXJpYW50XG4gIGFjdGl2ZTogKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkxfTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBgLFxuICByZW1vdmFibGU6IGNzc2BcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGBcbn07XG5cbmNvbnN0IGxlZnRWYXJpYW50cyA9ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiAoe1xuICBpbWFnZTogY3NzYFxuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBnYXA6ICR7dGhlbWUuc3BhY2VzWzFdfTtcbiAgYCxcbiAgaWNvbjogY3NzYFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBnYXA6IDZweDtcbiAgYFxufSk7XG5cbmV4cG9ydCBjb25zdCBUYWdTdHlsZXMgPSBzdHlsZWQuZGl2PFBhcnRpYWw8U3R5bGVkVGFnUHJvcHM+PmBcbiAgJHsoeyB0aGVtZSwgYWN0aXZlLCByZW1vdmFibGUsIGltYWdlLCBpY29uIH0pID0+IGNzc2BcbiAgICBwYWRkaW5nOiAwcHggJHt0aGVtZS5zcGFjZXNbNF19O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGdhcDogJHt0aGVtZS5zcGFjZXNbMV19O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5yYWRpaS5tZH07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUuZm9udFdlaWdodHMuYm9sZH07XG5cbiAgICBzdmcge1xuICAgICAgY29sb3I6ICR7YWN0aXZlID8gdGhlbWUuY29sb3JzLmdyZXkzIDogdGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgICB9XG5cbiAgICAke2FjdGl2ZSAmJiB0YWdWYXJpYW50cy5hY3RpdmUodGhlbWUpfVxuICAgICR7cmVtb3ZhYmxlICYmIHRhZ1ZhcmlhbnRzLnJlbW92YWJsZX1cbiAgICAke2ltYWdlICYmIGxlZnRWYXJpYW50cyh0aGVtZSlbJ2ltYWdlJ119XG4gICAgJHtpY29uICYmIGxlZnRWYXJpYW50cyh0aGVtZSlbJ2ljb24nXX1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBSZW1vdmVXcmFwcGVyID0gc3R5bGVkLmRpdjxQYXJ0aWFsPFN0eWxlZFRhZ1Byb3BzPj5gXG4gICR7KHsgdGhlbWUsIGFjdGl2ZSB9KSA9PiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUucmFkaWkuZnVsbH07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICR7YWN0aXZlID8gdGhlbWUuY29sb3JzLndoaXRlIDogdGhlbWUuY29sb3JzLmdyZXkxfTtcbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBSZWxhdGl2ZUF2YXRhciA9IHN0eWxlZChBdmF0YXIpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG5gO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBYTtBQUFiO0FBQUE7QUFBTyxJQUFNLG9CQUNYLE9BQU8sYUFBYSxjQUNoQixJQUFLLFNBQVEsUUFBWSxJQUFLLFVBQVUsWUFBWSxPQUNuRCxTQUFTLGlCQUFpQixTQUFTLGNBQWMsT0FDbEQsSUFBSSxJQUFJLFdBQVcsU0FBUyxTQUFTO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
