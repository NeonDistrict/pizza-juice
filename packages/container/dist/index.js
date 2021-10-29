var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  Container: () => Container
});

// src/index.tsx
var import_system = __toModule(require("@neon-district/system"));
var Container = (0, import_system.default)("div")(({ theme }) => ({
  boxSizing: "border-box",
  flexShrink: 0,
  width: theme.spaces.full,
  maxWidth: theme.breakpoints["2xl"],
  margin: "0 auto",
  padding: `0 ${theme.spaces[4]}`
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Container
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSAnLi9zcmMnO1xuIiwgImltcG9ydCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmV4cG9ydCB0eXBlIENvbnRhaW5lclByb3BzID0gSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+O1xuXG4vKipcbiAqIENvbnRhaW5lciBjb21wb25lbnRcbiAqXG4gKiBAZGVzY3JpcHRpb24gQSBjb250YWluZXIgY29tcG9uZW50IHRoYXQgY2FuIGJlIHVzZWQgdG8gd3JhcCBvdGhlciBjb21wb25lbnRzLlxuICovXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKTxDb250YWluZXJQcm9wcz4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgLy8gcmVzZXRcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIGZsZXhTaHJpbms6IDAsXG5cbiAgd2lkdGg6IHRoZW1lLnNwYWNlcy5mdWxsLFxuICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHNbJzJ4bCddLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICBwYWRkaW5nOiBgMCAke3RoZW1lLnNwYWNlc1s0XX1gXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOzs7QUNFQSxvQkFBbUI7QUFTWixJQUFNLFlBQVksMkJBQU8sT0FBdUIsQ0FBQyxFQUFFLFlBQWE7QUFBQSxFQUVyRSxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFFWixPQUFPLE1BQU0sT0FBTztBQUFBLEVBQ3BCLFVBQVUsTUFBTSxZQUFZO0FBQUEsRUFDNUIsUUFBUTtBQUFBLEVBQ1IsU0FBUyxLQUFLLE1BQU0sT0FBTztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
