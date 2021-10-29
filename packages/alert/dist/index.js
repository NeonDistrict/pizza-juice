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
  Alert: () => Alert
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var variants = (theme) => ({
  variant: {
    solid: {
      color: theme.colors.white,
      background: theme.colors.black,
      borderColor: theme.colors.grey1
    },
    outline: {
      background: "transparent"
    }
  },
  type: {
    success: {},
    error: {},
    warning: {},
    default: {}
  }
});
var Wrapper = (0, import_system.default)("div")(({ theme, type, variant }) => __spreadValues(__spreadValues({
  width: theme.sizes.full,
  display: "flex",
  justifyContent: "space-between",
  padding: "16px",
  border: "1px solid",
  textTransform: "uppercase"
}, variants(theme).variant[variant]), variants(theme).type[type]));
var TextStyled = (0, import_system.default)("div")(({ theme }) => ({
  fontWeight: theme.fontWeights.bold
}));

// src/index.tsx
var Alert = (_a) => {
  var _b = _a, {
    title,
    message,
    variant = "solid",
    type = "default",
    button
  } = _b, props = __objRest(_b, [
    "title",
    "message",
    "variant",
    "type",
    "button"
  ]);
  return /* @__PURE__ */ import_react.default.createElement(Wrapper, __spreadValues({
    type,
    variant
  }, props), /* @__PURE__ */ import_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(TextStyled, null, title), /* @__PURE__ */ import_react.default.createElement(TextStyled, null, message))), button);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgV3JhcHBlciwgVGV4dFN0eWxlZCB9IGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgQWxlcnRQcm9wcyA9IHtcbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSBhbGVydFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBNZXNzYWdlIG9mIHRoZSBhbGVydFxuICAgKi9cbiAgbWVzc2FnZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFZhcmlhbnQgc3R5bGUgb2YgdGhlIGFsZXJ0XG4gICAqIEBkZWZhdWx0IFwic29saWRcIlxuICAgKi9cbiAgdmFyaWFudD86ICdzb2xpZCcgfCAnb3V0bGluZSc7XG4gIC8qKlxuICAgKiBJdCBhZGRzIGEgY29sb3IgdG8gdGhlIGFsZXJ0XG4gICAqIEBkZWZhdWx0IFwiZGVmYXVsdFwiXG4gICAqL1xuICB0eXBlPzogJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJztcbiAgLyoqXG4gICAqIEFjdGlvbiBidXR0b24gb2YgdGhlIGFsZXJ0XG4gICAqL1xuICBidXR0b24/OiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG4vKipcbiAqIEFsZXJ0IGNvbXBvbmVudFxuICpcbiAqIEBkZXNjcmlwdGlvbiB1c2VkIHRvIGNvbW11bmljYXRlIGEgc3RhdGUgdGhhdCBhZmZlY3RzIGEgc3lzdGVtLCBmZWF0dXJlIG9yIHBhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBBbGVydCA9ICh7XG4gIHRpdGxlLFxuICBtZXNzYWdlLFxuICB2YXJpYW50ID0gJ3NvbGlkJyxcbiAgdHlwZSA9ICdkZWZhdWx0JyxcbiAgYnV0dG9uLFxuICAuLi5wcm9wc1xufTogQWxlcnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIHR5cGU9e3R5cGV9IHZhcmlhbnQ9e3ZhcmlhbnR9IHsuLi5wcm9wc30+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRleHRTdHlsZWQ+e3RpdGxlfTwvVGV4dFN0eWxlZD5cblxuICAgICAgICAgIDxUZXh0U3R5bGVkPnttZXNzYWdlfTwvVGV4dFN0eWxlZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2J1dHRvbn1cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuIiwgImltcG9ydCBzdHlsZWQsIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuaW1wb3J0IHsgQWxlcnRQcm9wcyB9IGZyb20gJy4nO1xuXG5jb25zdCB2YXJpYW50cyA9ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiAoe1xuICB2YXJpYW50OiB7XG4gICAgc29saWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxXG4gICAgfSxcbiAgICBvdXRsaW5lOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gICAgfVxuICB9LFxuICB0eXBlOiB7XG4gICAgc3VjY2Vzczoge30sXG4gICAgZXJyb3I6IHt9LFxuICAgIHdhcm5pbmc6IHt9LFxuICAgIGRlZmF1bHQ6IHt9XG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZCgnZGl2Jyk8QWxlcnRQcm9wcz4oXG4gICh7IHRoZW1lLCB0eXBlLCB2YXJpYW50IH0pID0+ICh7XG4gICAgd2lkdGg6IHRoZW1lLnNpemVzLmZ1bGwsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgcGFkZGluZzogJzE2cHgnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG5cbiAgICAvLyB2YXJpYW50IHN0eWxlc1xuICAgIC4uLnZhcmlhbnRzKHRoZW1lKS52YXJpYW50W3ZhcmlhbnQhXSxcbiAgICAuLi52YXJpYW50cyh0aGVtZSkudHlwZVt0eXBlIV1cbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBUZXh0U3R5bGVkID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBmb250V2VpZ2h0OiB0aGVtZS5mb250V2VpZ2h0cy5ib2xkXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLG1CQUFrQjs7O0FDQWxCLG9CQUFxQztBQUlyQyxJQUFNLFdBQVcsQ0FBQyxVQUF5QjtBQUFBLEVBQ3pDLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE9BQU8sTUFBTSxPQUFPO0FBQUEsTUFDcEIsWUFBWSxNQUFNLE9BQU87QUFBQSxNQUN6QixhQUFhLE1BQU0sT0FBTztBQUFBO0FBQUEsSUFFNUIsU0FBUztBQUFBLE1BQ1AsWUFBWTtBQUFBO0FBQUE7QUFBQSxFQUdoQixNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUE7QUFBQTtBQUlOLElBQU0sVUFBVSwyQkFBTyxPQUM1QixDQUFDLEVBQUUsT0FBTyxNQUFNLGNBQWU7QUFBQSxFQUM3QixPQUFPLE1BQU0sTUFBTTtBQUFBLEVBQ25CLFNBQVM7QUFBQSxFQUNULGdCQUFnQjtBQUFBLEVBQ2hCLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLGVBQWU7QUFBQSxHQUdaLFNBQVMsT0FBTyxRQUFRLFdBQ3hCLFNBQVMsT0FBTyxLQUFLO0FBSXJCLElBQU0sYUFBYSwyQkFBTyxPQUFPLENBQUMsRUFBRSxZQUFhO0FBQUEsRUFDdEQsWUFBWSxNQUFNLFlBQVk7QUFBQTs7O0FETHpCLElBQU0sUUFBUSxDQUFDLE9BT0o7QUFQSSxlQUNwQjtBQUFBO0FBQUEsSUFDQTtBQUFBLElBQ0EsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1A7QUFBQSxNQUxvQixJQU1qQixrQkFOaUIsSUFNakI7QUFBQSxJQUxIO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBR0EsU0FDRSxtREFBQyxTQUFEO0FBQUEsSUFBUztBQUFBLElBQVk7QUFBQSxLQUFzQixRQUN6QyxtREFBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUE7QUFBQSxLQUdkLG1EQUFDLE9BQUQsTUFDRSxtREFBQyxZQUFELE1BQWEsUUFFYixtREFBQyxZQUFELE1BQWEsWUFJaEI7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
