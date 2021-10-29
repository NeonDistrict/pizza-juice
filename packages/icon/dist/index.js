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
  createIcon: () => createIcon
});

// src/index.tsx
var import_react = __toModule(require("react"));
var createIcon = ({
  viewBox = "0 0 24 24",
  path,
  d: pathDefinition,
  defaultProps
}) => {
  const defaults = __spreadValues({
    width: "1em",
    height: "1em"
  }, defaultProps);
  const Comp = () => /* @__PURE__ */ import_react.default.createElement("svg", __spreadValues({
    viewBox
  }, defaults), path != null ? path : /* @__PURE__ */ import_react.default.createElement("path", {
    fill: "currentColor",
    d: pathDefinition
  }));
  return Comp;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createIcon
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSAnLi9zcmMnO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgQ3JlYXRlSWNvblByb3BzID0ge1xuICAvKipcbiAgICogVGhlIGljb24gYHN2Z2Agdmlld0JveFxuICAgKiBAZGVmYXVsdCBcIjAgMCAyNCAyNFwiXG4gICAqL1xuICB2aWV3Qm94Pzogc3RyaW5nO1xuICAvKipcbiAgICogSWYgdGhlIGhhcyBhIHNpbmdsZSBwYXRoLCBzaW1wbHkgY29weSB0aGUgcGF0aCdzIGBkYCBhdHRyaWJ1dGVcbiAgICovXG4gIGQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgYHN2Z2AgcGF0aCBvciBncm91cCBlbGVtZW50XG4gICAqIEB0eXBlIFJlYWN0LlJlYWN0RWxlbWVudCB8IFJlYWN0LlJlYWN0RWxlbWVudFtdXG4gICAqL1xuICBwYXRoPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgUmVhY3QuUmVhY3RFbGVtZW50W107XG4gIC8qKlxuICAgKiBEZWZhdWx0IHByb3BzIGF1dG9tYXRpY2FsbHkgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQ7IG92ZXJ3cml0ZWFibGVcbiAgICovXG4gIGRlZmF1bHRQcm9wcz86IFJlYWN0LlNWR0F0dHJpYnV0ZXM8U1ZHRWxlbWVudD47XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSWNvbiA9ICh7XG4gIHZpZXdCb3ggPSAnMCAwIDI0IDI0JyxcbiAgcGF0aCxcbiAgZDogcGF0aERlZmluaXRpb24sXG4gIGRlZmF1bHRQcm9wc1xufTogQ3JlYXRlSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIHdpZHRoOiAnMWVtJyxcbiAgICBoZWlnaHQ6ICcxZW0nLFxuICAgIC4uLmRlZmF1bHRQcm9wc1xuICB9O1xuXG4gIGNvbnN0IENvbXAgPSAoKSA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PXt2aWV3Qm94fSB7Li4uZGVmYXVsdHN9PlxuICAgICAge3BhdGggPz8gPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e3BhdGhEZWZpbml0aW9ufSAvPn1cbiAgICA8L3N2Zz5cbiAgKTtcblxuICByZXR1cm4gQ29tcDtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLG1CQUFrQjtBQXVCWCxJQUFNLGFBQWEsQ0FBQztBQUFBLEVBQ3pCLFVBQVU7QUFBQSxFQUNWO0FBQUEsRUFDQSxHQUFHO0FBQUEsRUFDSDtBQUFBLE1BQ3FCO0FBQ3JCLFFBQU0sV0FBVztBQUFBLElBQ2YsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLEtBQ0w7QUFHTCxRQUFNLE9BQU8sTUFDWCxtREFBQyxPQUFEO0FBQUEsSUFBSztBQUFBLEtBQXNCLFdBQ3hCLHNCQUFRLG1EQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFlLEdBQUc7QUFBQTtBQUkxQyxTQUFPO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
