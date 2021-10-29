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
  Input: () => Input
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var Wrapper = (0, import_system.default)("div")(({ theme }) => ({
  color: theme.colors.white
}));
var Label = (0, import_system.default)("label")(({ theme }) => ({
  display: "block",
  marginBottom: theme.spaces[1],
  textTransform: "uppercase",
  fontWeight: theme.fontWeights.medium
}));
var variants = (theme) => ({
  color: {
    default: {
      background: theme.colors.white,
      color: theme.colors.black,
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      borderBottomColor: theme.colors.grey3
    },
    line: {
      border: "1px solid",
      borderColor: theme.colors.grey2
    }
  },
  size: {
    sm: {
      height: 31
    },
    md: {
      height: 40
    }
  },
  error: {
    background: theme.colors.red1
  }
});
var InputStyles = (0, import_system.default)("input")(({ theme, color, inputSize, hasError }) => __spreadValues(__spreadValues({
  width: theme.sizes.full,
  padding: `0 ${theme.spaces[4]}`,
  fontSize: theme.fontSizes.md,
  outline: 0,
  background: theme.colors.black,
  color: theme.colors.white,
  border: "none",
  transition: theme.durations.default,
  "&:hover": {
    borderColor: theme.colors.pink2
  },
  "&:focus": {
    borderColor: theme.colors.teal1,
    borderBottomWidth: "1px"
  },
  "&:disabled": {
    background: "#ccc"
  }
}, hasError && variants(theme).error), variants(theme).size[inputSize]));
var Message = (0, import_system.default)("small")(({ theme }) => ({
  color: theme.colors.grey1,
  marginTop: theme.spaces[1],
  display: "block"
}));
var Error2 = (0, import_system.default)("div")(({ theme }) => ({
  color: theme.colors.red1
}));

// src/index.tsx
var Input = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, {
    label,
    inputSize = "md",
    hint,
    error,
    color = "default",
    disabled
  } = _b, props = __objRest(_b, [
    "label",
    "inputSize",
    "hint",
    "error",
    "color",
    "disabled"
  ]);
  return /* @__PURE__ */ import_react.default.createElement(Wrapper, null, label && /* @__PURE__ */ import_react.default.createElement(Label, null, label), /* @__PURE__ */ import_react.default.createElement(InputStyles, __spreadValues({
    ref,
    inputSize,
    color,
    hasError: !!error,
    disabled
  }, props)), /* @__PURE__ */ import_react.default.createElement(Message, null, hint), /* @__PURE__ */ import_react.default.createElement(Error2, null, error));
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFdyYXBwZXIsIExhYmVsLCBJbnB1dFN0eWxlcywgTWVzc2FnZSwgRXJyb3IgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIElucHV0UHJvcHMgPSB7XG4gIC8qKlxuICAgKiBJbnB1dCBsYWJlbFxuICAgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbnB1dCBzaXplXG4gICAqXG4gICAqIEBkZWZhdWx0IFwibWRcIlxuICAgKi9cbiAgaW5wdXRTaXplPzogJ3NtJyB8ICdtZCc7XG4gIC8qKlxuICAgKiBTaG93IGlucHV0IG1lc3NhZ2VcbiAgICovXG4gIGhpbnQ/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFNob3cgaW5wdXQgZXJyb3JcbiAgICovXG4gIGVycm9yPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIC8qKlxuICAgKlxuICAgKiBAZGVmYXVsdCBcImRlZmF1bHRcIlxuICAgKi9cbiAgY29sb3I/OiAnZGVmYXVsdCcgfCAnbGluZSc7XG59ICYgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PjtcblxuLyoqXG4gKiBJbnB1dCBjb21wb25lbnRcbiAqXG4gKiBAZGVzY3JpcHRpb24gaXMgYSBjb21wb25lbnQgdGhhdCBpcyB1c2VkIHRvIGdldCB1c2VyIGlucHV0IGluIGEgdGV4dCBmaWVsZC5cbiAqL1xuZXhwb3J0IGNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MSW5wdXRFbGVtZW50LCBJbnB1dFByb3BzPihcbiAgKFxuICAgIHtcbiAgICAgIGxhYmVsLFxuICAgICAgaW5wdXRTaXplID0gJ21kJyxcbiAgICAgIGhpbnQsXG4gICAgICBlcnJvcixcbiAgICAgIGNvbG9yID0gJ2RlZmF1bHQnLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAge2xhYmVsICYmIDxMYWJlbD57bGFiZWx9PC9MYWJlbD59XG5cbiAgICAgICAgPElucHV0U3R5bGVzXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgaW5wdXRTaXplPXtpbnB1dFNpemV9XG4gICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgIGhhc0Vycm9yPXshIWVycm9yfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPE1lc3NhZ2U+e2hpbnR9PC9NZXNzYWdlPlxuXG4gICAgICAgIDxFcnJvcj57ZXJyb3J9PC9FcnJvcj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG4pO1xuIiwgImltcG9ydCBzdHlsZWQsIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuaW1wb3J0IHsgSW5wdXRQcm9wcyB9IGZyb20gJy4nO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZVxufSkpO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjZXNbMV0sXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICBmb250V2VpZ2h0OiB0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW1cbn0pKTtcblxuY29uc3QgdmFyaWFudHMgPSAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gKHtcbiAgY29sb3I6IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCcsXG4gICAgICBib3JkZXJCb3R0b21Db2xvcjogdGhlbWUuY29sb3JzLmdyZXkzXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MlxuICAgIH1cbiAgfSxcbiAgc2l6ZToge1xuICAgIHNtOiB7XG4gICAgICBoZWlnaHQ6IDMxXG4gICAgfSxcbiAgICBtZDoge1xuICAgICAgaGVpZ2h0OiA0MFxuICAgIH1cbiAgfSxcblxuICBlcnJvcjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5yZWQxXG4gIH1cbn0pO1xuXG50eXBlIElucHV0U3R5bGVzUHJvcHMgPSB7XG4gIGhhc0Vycm9yOiBib29sZWFuO1xufSAmIFBpY2s8SW5wdXRQcm9wcywgJ2NvbG9yJyB8ICdkaXNhYmxlZCcgfCAnZXJyb3InIHwgJ2lucHV0U2l6ZSc+O1xuXG5leHBvcnQgY29uc3QgSW5wdXRTdHlsZXMgPSBzdHlsZWQoJ2lucHV0Jyk8SW5wdXRTdHlsZXNQcm9wcz4oXG4gICh7IHRoZW1lLCBjb2xvciwgaW5wdXRTaXplLCBoYXNFcnJvciB9KSA9PiAoe1xuICAgIHdpZHRoOiB0aGVtZS5zaXplcy5mdWxsLFxuICAgIHBhZGRpbmc6IGAwICR7dGhlbWUuc3BhY2VzWzRdfWAsXG4gICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5tZCxcbiAgICBvdXRsaW5lOiAwLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLmR1cmF0aW9ucy5kZWZhdWx0LFxuXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnBpbmsyXG4gICAgfSxcbiAgICAnJjpmb2N1cyc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMudGVhbDEsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICB9LFxuICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgYmFja2dyb3VuZDogJyNjY2MnXG4gICAgfSxcblxuICAgIC8vIGNvbmRpdGlvbmFsIHN0eWxlc1xuICAgIC4uLihoYXNFcnJvciAmJiB2YXJpYW50cyh0aGVtZSkuZXJyb3IpLFxuXG4gICAgLy8gdmFyaWFudCBzdHlsZXNcbiAgICAvLyAuLi52YXJpYW50cyh0aGVtZSkuY29sb3JbY29sb3IhXSxcbiAgICAuLi52YXJpYW50cyh0aGVtZSkuc2l6ZVtpbnB1dFNpemUhXVxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2UgPSBzdHlsZWQoJ3NtYWxsJykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MSxcbiAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjZXNbMV0sXG4gIGRpc3BsYXk6ICdibG9jaydcbn0pKTtcblxuZXhwb3J0IGNvbnN0IEVycm9yID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnJlZDFcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7O0FDQUEsbUJBQTJDOzs7QUNBM0Msb0JBQXFDO0FBSTlCLElBQU0sVUFBVSwyQkFBTyxPQUFPLENBQUMsRUFBRSxZQUFhO0FBQUEsRUFDbkQsT0FBTyxNQUFNLE9BQU87QUFBQTtBQUdmLElBQU0sUUFBUSwyQkFBTyxTQUFTLENBQUMsRUFBRSxZQUFhO0FBQUEsRUFDbkQsU0FBUztBQUFBLEVBQ1QsY0FBYyxNQUFNLE9BQU87QUFBQSxFQUMzQixlQUFlO0FBQUEsRUFDZixZQUFZLE1BQU0sWUFBWTtBQUFBO0FBR2hDLElBQU0sV0FBVyxDQUFDLFVBQXlCO0FBQUEsRUFDekMsT0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsWUFBWSxNQUFNLE9BQU87QUFBQSxNQUN6QixPQUFPLE1BQU0sT0FBTztBQUFBLE1BQ3BCLG1CQUFtQjtBQUFBLE1BQ25CLG1CQUFtQjtBQUFBLE1BQ25CLG1CQUFtQixNQUFNLE9BQU87QUFBQTtBQUFBLElBRWxDLE1BQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSLGFBQWEsTUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBLEVBRzlCLE1BQU07QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQTtBQUFBLElBRVYsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBO0FBQUE7QUFBQSxFQUlaLE9BQU87QUFBQSxJQUNMLFlBQVksTUFBTSxPQUFPO0FBQUE7QUFBQTtBQVF0QixJQUFNLGNBQWMsMkJBQU8sU0FDaEMsQ0FBQyxFQUFFLE9BQU8sT0FBTyxXQUFXLGVBQWdCO0FBQUEsRUFDMUMsT0FBTyxNQUFNLE1BQU07QUFBQSxFQUNuQixTQUFTLEtBQUssTUFBTSxPQUFPO0FBQUEsRUFDM0IsVUFBVSxNQUFNLFVBQVU7QUFBQSxFQUMxQixTQUFTO0FBQUEsRUFDVCxZQUFZLE1BQU0sT0FBTztBQUFBLEVBQ3pCLE9BQU8sTUFBTSxPQUFPO0FBQUEsRUFDcEIsUUFBUTtBQUFBLEVBQ1IsWUFBWSxNQUFNLFVBQVU7QUFBQSxFQUU1QixXQUFXO0FBQUEsSUFDVCxhQUFhLE1BQU0sT0FBTztBQUFBO0FBQUEsRUFFNUIsV0FBVztBQUFBLElBQ1QsYUFBYSxNQUFNLE9BQU87QUFBQSxJQUMxQixtQkFBbUI7QUFBQTtBQUFBLEVBRXJCLGNBQWM7QUFBQSxJQUNaLFlBQVk7QUFBQTtBQUFBLEdBSVYsWUFBWSxTQUFTLE9BQU8sUUFJN0IsU0FBUyxPQUFPLEtBQUs7QUFJckIsSUFBTSxVQUFVLDJCQUFPLFNBQVMsQ0FBQyxFQUFFLFlBQWE7QUFBQSxFQUNyRCxPQUFPLE1BQU0sT0FBTztBQUFBLEVBQ3BCLFdBQVcsTUFBTSxPQUFPO0FBQUEsRUFDeEIsU0FBUztBQUFBO0FBR0osSUFBTSxTQUFRLDJCQUFPLE9BQU8sQ0FBQyxFQUFFLFlBQWE7QUFBQSxFQUNqRCxPQUFPLE1BQU0sT0FBTztBQUFBOzs7QURsRGYsSUFBTSxRQUFRLHFCQUFNLFdBQ3pCLENBQ0UsSUFTQSxRQUNHO0FBVkgsZUFDRTtBQUFBO0FBQUEsSUFDQSxZQUFZO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSO0FBQUEsTUFORixJQU9LLGtCQVBMLElBT0s7QUFBQSxJQU5IO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUtGLFNBQ0UsbURBQUMsU0FBRCxNQUNHLFNBQVMsbURBQUMsT0FBRCxNQUFRLFFBRWxCLG1EQUFDLGFBQUQ7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLFVBQVUsQ0FBQyxDQUFDO0FBQUEsSUFDWjtBQUFBLEtBQ0ksU0FHTixtREFBQyxTQUFELE1BQVUsT0FFVixtREFBQyxRQUFELE1BQVE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
