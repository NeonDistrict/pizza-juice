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
  Badge: () => Badge
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var variants = (theme) => ({
  type: {}
});
var BadgeStyled = (0, import_system.default)("label")(({ theme, type }) => __spreadValues({
  display: "inline-block",
  height: 16,
  padding: `0 ${theme.spaces[1]}`,
  color: theme.colors.white,
  background: theme.colors.pink1,
  fontSize: theme.fontSizes.xs,
  fontWeight: theme.fontWeights.bold,
  textTransform: "uppercase",
  lineHeight: "150%",
  userSelect: "none"
}, type && variants(theme).type[type]));

// src/index.tsx
var Badge = ({ type, children }) => {
  return /* @__PURE__ */ import_react.default.createElement(BadgeStyled, {
    type
  }, children);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQmFkZ2VTdHlsZWQgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIEJhZGdlUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBTaG91bGQgYmUgZGVmaW5lZCBpbiBmaWdtYSB5ZXQuXG4gICAqXG4gICAqIEBkZWZhdWx0ID9cbiAgICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCYWRnZSB0ZXh0XG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuLyoqXG4gKiBCYWRnZSBjb21wb25lbnRcbiAqXG4gKiBAZGVzY3JpcHRpb24gQmFkZ2VzIGFyZSB1c2VkIHRvIGhpZ2hsaWdodCBhbiBpdGVtJ3Mgc3RhdHVzIGZvciBxdWljayByZWNvZ25pdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IEJhZGdlID0gKHsgdHlwZSwgY2hpbGRyZW4gfTogQmFkZ2VQcm9wcykgPT4ge1xuICByZXR1cm4gPEJhZGdlU3R5bGVkIHR5cGU9e3R5cGV9PntjaGlsZHJlbn08L0JhZGdlU3R5bGVkPjtcbn07XG4iLCAiaW1wb3J0IHN0eWxlZCwgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICdAbmVvbi1kaXN0cmljdC9zeXN0ZW0nO1xuXG5pbXBvcnQgeyBCYWRnZVByb3BzIH0gZnJvbSAnLic7XG5cbmNvbnN0IHZhcmlhbnRzID0gKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+ICh7XG4gIHR5cGU6IHt9XG59KTtcblxuZXhwb3J0IGNvbnN0IEJhZGdlU3R5bGVkID0gc3R5bGVkKCdsYWJlbCcpPEJhZGdlUHJvcHM+KCh7IHRoZW1lLCB0eXBlIH0pID0+ICh7XG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBoZWlnaHQ6IDE2LFxuICBwYWRkaW5nOiBgMCAke3RoZW1lLnNwYWNlc1sxXX1gLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucGluazEsXG4gIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMueHMsXG4gIGZvbnRXZWlnaHQ6IHRoZW1lLmZvbnRXZWlnaHRzLmJvbGQsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICBsaW5lSGVpZ2h0OiAnMTUwJScsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcblxuICAvLyB2YXJpYW50IHN0eWxlc1xuICAuLi4odHlwZSAmJiB2YXJpYW50cyh0aGVtZSkudHlwZVt0eXBlIV0pXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLG1CQUFrQjs7O0FDQWxCLG9CQUFxQztBQUlyQyxJQUFNLFdBQVcsQ0FBQyxVQUF5QjtBQUFBLEVBQ3pDLE1BQU07QUFBQTtBQUdELElBQU0sY0FBYywyQkFBTyxTQUFxQixDQUFDLEVBQUUsT0FBTyxXQUFZO0FBQUEsRUFDM0UsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsU0FBUyxLQUFLLE1BQU0sT0FBTztBQUFBLEVBQzNCLE9BQU8sTUFBTSxPQUFPO0FBQUEsRUFDcEIsWUFBWSxNQUFNLE9BQU87QUFBQSxFQUN6QixVQUFVLE1BQU0sVUFBVTtBQUFBLEVBQzFCLFlBQVksTUFBTSxZQUFZO0FBQUEsRUFDOUIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEdBR1IsUUFBUSxTQUFTLE9BQU8sS0FBSzs7O0FEQzVCLElBQU0sUUFBUSxDQUFDLEVBQUUsTUFBTSxlQUEyQjtBQUN2RCxTQUFPLG1EQUFDLGFBQUQ7QUFBQSxJQUFhO0FBQUEsS0FBYTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
