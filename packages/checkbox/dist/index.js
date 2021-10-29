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

// index.ts
__export(exports, {
  Checkbox: () => Checkbox
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var CheckboxBase = __toModule(require("@radix-ui/react-checkbox"));
var checkboxInputVariants = {
  size: {
    sm: {
      width: 12,
      height: 12
    },
    md: {
      width: 16,
      height: 16
    },
    lg: {
      width: 20,
      height: 20
    }
  }
};
var CheckboxInput = (0, import_system.default)(CheckboxBase.Root)(({ theme, size }) => __spreadValues({
  all: "unset",
  background: theme.colors.black,
  color: theme.colors.pink1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid",
  borderColor: theme.colors.grey1,
  "&:hover": {
    borderColor: theme.colors.pink1
  },
  "&:active": {
    borderColor: theme.colors.teal1
  },
  "&:disabled": {
    background: theme.colors.grey1,
    color: theme.colors.grey3
  }
}, checkboxInputVariants.size[size]));
var CheckboxIndicator = (0, import_system.default)(CheckboxBase.Indicator)({
  color: "currentColor"
});
var Wrapper = (0, import_system.default)("div")({
  display: "flex",
  alignItems: "center"
});
var labelVariants = (theme) => ({
  size: {
    sm: {
      fontSize: theme.fontSizes.xs
    },
    md: {
      fontSize: theme.fontSizes.sm
    },
    lg: {
      fontSize: theme.fontSizes.md
    }
  }
});
var Label = (0, import_system.default)("label")(({ theme, size }) => __spreadValues({
  color: theme.colors.grey1,
  paddingLeft: theme.spaces[1],
  lineHeight: 1,
  userSelect: "none"
}, labelVariants(theme).size[size]));

// src/index.tsx
var CheckIcon = () => /* @__PURE__ */ import_react.default.createElement("svg", {
  viewBox: "0 0 1024 1024",
  height: "12",
  width: "12"
}, /* @__PURE__ */ import_react.default.createElement("path", {
  fill: "currentColor",
  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
}));
var Checkbox = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { name, size = "md", children } = _b, props = __objRest(_b, ["name", "size", "children"]);
  return /* @__PURE__ */ import_react.default.createElement(Wrapper, null, /* @__PURE__ */ import_react.default.createElement(CheckboxInput, __spreadValues({
    ref,
    id: `checkbox-${name}`,
    size
  }, props), /* @__PURE__ */ import_react.default.createElement(CheckboxIndicator, null, /* @__PURE__ */ import_react.default.createElement(CheckIcon, null))), /* @__PURE__ */ import_react.default.createElement(Label, {
    htmlFor: `checkbox-${name}`,
    size
  }, children));
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checkbox
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHR5cGUgKiBhcyBDaGVja2JveEJhc2UgZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWNoZWNrYm94JztcblxuaW1wb3J0IHsgV3JhcHBlciwgTGFiZWwsIENoZWNrYm94SW5wdXQsIENoZWNrYm94SW5kaWNhdG9yIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBDaGVja0ljb24gPSAoKSA9PiAoXG4gIDxzdmcgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiBoZWlnaHQ9XCIxMlwiIHdpZHRoPVwiMTJcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICBkPVwiTTkxMiAxOTBoLTY5LjljLTkuOCAwLTE5LjEgNC41LTI1LjEgMTIuMkw0MDQuNyA3MjQuNSAyMDcgNDc0YTMyIDMyIDAgMCAwLTI1LjEtMTIuMkgxMTJjLTYuNyAwLTEwLjQgNy43LTYuMyAxMi45bDI3My45IDM0N2MxMi44IDE2LjIgMzcuNCAxNi4yIDUwLjMgMGw0ODguNC02MTguOWM0LjEtNS4xLjQtMTIuOC02LjMtMTIuOHpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IHR5cGUgQ2hlY2tib3hQcm9wcyA9IHtcbiAgLyoqXG4gICAqIENoZWNrYm94IHNpemVcbiAgICpcbiAgICogQGRlZmF1bHQgXCJtZFwiXG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnO1xuICAvKipcbiAgICogQ2hlY2tib3ggdGV4dFxuICAgKi9cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0gJiBDaGVja2JveEJhc2UuQ2hlY2tib3hQcm9wcztcblxuLyoqXG4gKiBDaGVja2JveCBjb21wb25lbnRcbiAqXG4gKiBAZGVzY3JpcHRpb24gdXNlZCBpbiBmb3JtcyB3aGVuIGEgdXNlciBuZWVkcyB0byBzZWxlY3QgbXVsdGlwbGUgdmFsdWVzIGZyb20gc2V2ZXJhbCBvcHRpb25zLlxuICpcbiAqIE1hZGUgd2l0aCByYWRpeC11aVxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cucmFkaXgtdWkuY29tL2RvY3MvcHJpbWl0aXZlcy9jb21wb25lbnRzL2NoZWNrYm94XG4gKi9cbmV4cG9ydCBjb25zdCBDaGVja2JveCA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIENoZWNrYm94UHJvcHM+KFxuICAoeyBuYW1lLCBzaXplID0gJ21kJywgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPENoZWNrYm94SW5wdXQgcmVmPXtyZWZ9IGlkPXtgY2hlY2tib3gtJHtuYW1lfWB9IHNpemU9e3NpemV9IHsuLi5wcm9wc30+XG4gICAgICAgICAgPENoZWNrYm94SW5kaWNhdG9yPlxuICAgICAgICAgICAgPENoZWNrSWNvbiAvPlxuICAgICAgICAgIDwvQ2hlY2tib3hJbmRpY2F0b3I+XG4gICAgICAgIDwvQ2hlY2tib3hJbnB1dD5cblxuICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGNoZWNrYm94LSR7bmFtZX1gfSBzaXplPXtzaXplfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxuKTtcbiIsICJpbXBvcnQgc3R5bGVkLCB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmltcG9ydCAqIGFzIENoZWNrYm94QmFzZSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3gnO1xuXG5pbXBvcnQgeyBDaGVja2JveFByb3BzIH0gZnJvbSAnLic7XG5cbmNvbnN0IGNoZWNrYm94SW5wdXRWYXJpYW50cyA9IHtcbiAgc2l6ZToge1xuICAgIHNtOiB7XG4gICAgICB3aWR0aDogMTIsXG4gICAgICBoZWlnaHQ6IDEyXG4gICAgfSxcbiAgICBtZDoge1xuICAgICAgd2lkdGg6IDE2LFxuICAgICAgaGVpZ2h0OiAxNlxuICAgIH0sXG4gICAgbGc6IHtcbiAgICAgIHdpZHRoOiAyMCxcbiAgICAgIGhlaWdodDogMjBcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveElucHV0ID0gc3R5bGVkKENoZWNrYm94QmFzZS5Sb290KTxDaGVja2JveFByb3BzPihcbiAgKHsgdGhlbWUsIHNpemUgfSkgPT4gKHtcbiAgICBhbGw6ICd1bnNldCcsXG4gICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucGluazEsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEsXG5cbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMucGluazFcbiAgICB9LFxuICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMudGVhbDFcbiAgICB9LFxuICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmdyZXkxLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5M1xuICAgIH0sXG5cbiAgICAuLi5jaGVja2JveElucHV0VmFyaWFudHMuc2l6ZVtzaXplIV1cbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveEluZGljYXRvciA9IHN0eWxlZChDaGVja2JveEJhc2UuSW5kaWNhdG9yKSh7XG4gIGNvbG9yOiAnY3VycmVudENvbG9yJ1xufSk7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkKCdkaXYnKSh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pO1xuXG5jb25zdCBsYWJlbFZhcmlhbnRzID0gKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+ICh7XG4gIHNpemU6IHtcbiAgICBzbToge1xuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy54c1xuICAgIH0sXG4gICAgbWQ6IHtcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc21cbiAgICB9LFxuICAgIGxnOiB7XG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLm1kXG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkKCdsYWJlbCcpPENoZWNrYm94UHJvcHM+KCh7IHRoZW1lLCBzaXplIH0pID0+ICh7XG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEsXG4gIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjZXNbMV0sXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcblxuICAuLi5sYWJlbFZhcmlhbnRzKHRoZW1lKS5zaXplW3NpemUhXVxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxtQkFBa0I7OztBQ0FsQixvQkFBcUM7QUFFckMsbUJBQThCO0FBSTlCLElBQU0sd0JBQXdCO0FBQUEsRUFDNUIsTUFBTTtBQUFBLElBQ0osSUFBSTtBQUFBLE1BQ0YsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBO0FBQUEsSUFFVixJQUFJO0FBQUEsTUFDRixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUE7QUFBQSxJQUVWLElBQUk7QUFBQSxNQUNGLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFLUCxJQUFNLGdCQUFnQiwyQkFBb0IsbUJBQy9DLENBQUMsRUFBRSxPQUFPLFdBQVk7QUFBQSxFQUNwQixLQUFLO0FBQUEsRUFDTCxZQUFZLE1BQU0sT0FBTztBQUFBLEVBQ3pCLE9BQU8sTUFBTSxPQUFPO0FBQUEsRUFDcEIsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsUUFBUTtBQUFBLEVBQ1IsYUFBYSxNQUFNLE9BQU87QUFBQSxFQUUxQixXQUFXO0FBQUEsSUFDVCxhQUFhLE1BQU0sT0FBTztBQUFBO0FBQUEsRUFFNUIsWUFBWTtBQUFBLElBQ1YsYUFBYSxNQUFNLE9BQU87QUFBQTtBQUFBLEVBRTVCLGNBQWM7QUFBQSxJQUNaLFlBQVksTUFBTSxPQUFPO0FBQUEsSUFDekIsT0FBTyxNQUFNLE9BQU87QUFBQTtBQUFBLEdBR25CLHNCQUFzQixLQUFLO0FBSTNCLElBQU0sb0JBQW9CLDJCQUFvQix3QkFBVztBQUFBLEVBQzlELE9BQU87QUFBQTtBQUdGLElBQU0sVUFBVSwyQkFBTyxPQUFPO0FBQUEsRUFDbkMsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBO0FBR2QsSUFBTSxnQkFBZ0IsQ0FBQyxVQUF5QjtBQUFBLEVBQzlDLE1BQU07QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLFVBQVUsTUFBTSxVQUFVO0FBQUE7QUFBQSxJQUU1QixJQUFJO0FBQUEsTUFDRixVQUFVLE1BQU0sVUFBVTtBQUFBO0FBQUEsSUFFNUIsSUFBSTtBQUFBLE1BQ0YsVUFBVSxNQUFNLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFLekIsSUFBTSxRQUFRLDJCQUFPLFNBQXdCLENBQUMsRUFBRSxPQUFPLFdBQVk7QUFBQSxFQUN4RSxPQUFPLE1BQU0sT0FBTztBQUFBLEVBQ3BCLGFBQWEsTUFBTSxPQUFPO0FBQUEsRUFDMUIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEdBRVQsY0FBYyxPQUFPLEtBQUs7OztBRHhFL0IsSUFBTSxZQUFZLE1BQ2hCLG1EQUFDLE9BQUQ7QUFBQSxFQUFLLFNBQVE7QUFBQSxFQUFnQixRQUFPO0FBQUEsRUFBSyxPQUFNO0FBQUEsR0FDN0MsbURBQUMsUUFBRDtBQUFBLEVBQ0UsTUFBSztBQUFBLEVBQ0wsR0FBRTtBQUFBO0FBMkJELElBQU0sV0FBVyxxQkFBTSxXQUM1QixDQUFDLElBQTJDLFFBQVE7QUFBbkQsZUFBRSxRQUFNLE9BQU8sTUFBTSxhQUFyQixJQUFrQyxrQkFBbEMsSUFBa0MsQ0FBaEMsUUFBTSxRQUFhO0FBQ3BCLFNBQ0UsbURBQUMsU0FBRCxNQUNFLG1EQUFDLGVBQUQ7QUFBQSxJQUFlO0FBQUEsSUFBVSxJQUFJLFlBQVk7QUFBQSxJQUFRO0FBQUEsS0FBZ0IsUUFDL0QsbURBQUMsbUJBQUQsTUFDRSxtREFBQyxXQUFELFNBSUosbURBQUMsT0FBRDtBQUFBLElBQU8sU0FBUyxZQUFZO0FBQUEsSUFBUTtBQUFBLEtBQ2pDO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
