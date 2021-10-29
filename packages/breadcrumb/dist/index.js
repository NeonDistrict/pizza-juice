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
  Breadcrumb: () => Breadcrumb,
  BreadcrumbItem: () => BreadcrumbItem
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var Main = (0, import_system.default)("div")({
  display: "flex",
  alignItems: "center",
  userSelect: "none"
});
var Section = (0, import_system.default)("div")(({ theme, active }) => ({
  color: active ? theme.colors.pink1 : theme.colors.grey1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: theme.fontSizes.xs,
  gap: theme.spaces[1],
  fontWeight: 600
}));
var Divider = (0, import_system.default)("div")(({ theme }) => ({
  padding: `0 ${theme.spaces[2]}`,
  height: theme.spaces.full,
  color: theme.colors.white
}));
var Text = (0, import_system.default)("h1")(({ theme }) => ({
  margin: 0,
  fontSize: theme.fontSizes.sm,
  fontWeight: 600,
  textTransform: "uppercase",
  color: theme.colors.pink1
}));

// src/index.tsx
var HomeIcon = () => /* @__PURE__ */ import_react.default.createElement("svg", {
  viewBox: "0 0 16 16",
  width: "16",
  height: "16",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ import_react.default.createElement("path", {
  fill: "currentColor",
  d: "M8.36 1.37l6.36 5.8-.71.71L13 6.964v6.526l-.5.5h-3l-.5-.5v-3.5H7v3.5l-.5.5h-3l-.5-.5V6.972L2 7.88l-.71-.71 6.35-5.8h.72zM4 6.063v6.927h2v-3.5l.5-.5h3l.5.5v3.5h2V6.057L8 2.43 4 6.063z"
}));
var Breadcrumb = ({ children }) => /* @__PURE__ */ import_react.default.createElement(Main, null, children);
var BreadcrumbItem = ({ active, isHome, children }) => {
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(Section, {
    active
  }, isHome && /* @__PURE__ */ import_react.default.createElement(HomeIcon, null), /* @__PURE__ */ import_react.default.createElement(Text, {
    active
  }, children)), /* @__PURE__ */ import_react.default.createElement(Divider, {
    active
  }, "|"));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Breadcrumb,
  BreadcrumbItem
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VjdGlvbiwgRGl2aWRlciwgTWFpbiwgVGV4dCB9IGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgSG9tZUljb24gPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICBkPVwiTTguMzYgMS4zN2w2LjM2IDUuOC0uNzEuNzFMMTMgNi45NjR2Ni41MjZsLS41LjVoLTNsLS41LS41di0zLjVIN3YzLjVsLS41LjVoLTNsLS41LS41VjYuOTcyTDIgNy44OGwtLjcxLS43MSA2LjM1LTUuOGguNzJ6TTQgNi4wNjN2Ni45MjdoMnYtMy41bC41LS41aDNsLjUuNXYzLjVoMlY2LjA1N0w4IDIuNDMgNCA2LjA2M3pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IHR5cGUgQnJlYWRjcnVtYlByb3BzID0ge1xuICAvKipcbiAgICogVGhlIGJyZWFkY3J1bWIgaXRlbXMuXG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuLyoqXG4gKiBCcmVhZGNydW1iIGNvbXBvbmVudHNcbiAqXG4gKiBAZGVzY3JpcHRpb24gVGhlIGJyZWFkY3J1bWIgY29tcG9uZW50IGlzIHVzZWQgdG8gZGlzcGxheSBhIGxpc3Qgb2YgaXRlbXMgdGhhdFxuICovXG5jb25zdCBCcmVhZGNydW1iID0gKHsgY2hpbGRyZW4gfTogQnJlYWRjcnVtYlByb3BzKSA9PiA8TWFpbj57Y2hpbGRyZW59PC9NYWluPjtcblxuZXhwb3J0IHR5cGUgQnJlYWRjcnVtYkl0ZW1Qcm9wcyA9IHtcbiAgLyoqXG4gICAqIElmIGFjdGl2ZSBpcyB0cnVlLCB0aGUgaXRlbSB3aWxsIGJlIHJlbmRlcmVkIHdpdGggYSBkaWZmZXJlbnQgc3R5bGUuXG4gICAqL1xuICBhY3RpdmU/OiBib29sZWFuO1xuICAvKipcbiAgICogaWYgaXMgYHRydWVgLCBpdCBzaG93cyBob21lIGljb24uXG4gICAqL1xuICBpc0hvbWU/OiBib29sZWFuO1xuICAvKipcbiAgICogVGhlIHRleHQgdG8gZGlzcGxheVxuICAgKi9cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IEJyZWFkY3J1bWJJdGVtID0gKHsgYWN0aXZlLCBpc0hvbWUsIGNoaWxkcmVuIH06IEJyZWFkY3J1bWJJdGVtUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlY3Rpb24gYWN0aXZlPXthY3RpdmV9PlxuICAgICAgICB7aXNIb21lICYmIDxIb21lSWNvbiAvPn1cblxuICAgICAgICA8VGV4dCBhY3RpdmU9e2FjdGl2ZX0+e2NoaWxkcmVufTwvVGV4dD5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPERpdmlkZXIgYWN0aXZlPXthY3RpdmV9Pnw8L0RpdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBCcmVhZGNydW1iLCBCcmVhZGNydW1iSXRlbSB9O1xuIiwgImltcG9ydCBzdHlsZWQgZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuaW1wb3J0IHsgQnJlYWRjcnVtYlByb3BzLCBCcmVhZGNydW1iSXRlbVByb3BzIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gc3R5bGVkKCdkaXYnKTxCcmVhZGNydW1iUHJvcHM+KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnXG59KTtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQoJ2RpdicpPEJyZWFkY3J1bWJJdGVtUHJvcHM+KFxuICAoeyB0aGVtZSwgYWN0aXZlIH0pID0+ICh7XG4gICAgY29sb3I6IGFjdGl2ZSA/IHRoZW1lLmNvbG9ycy5waW5rMSA6IHRoZW1lLmNvbG9ycy5ncmV5MSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMueHMsXG4gICAgZ2FwOiB0aGVtZS5zcGFjZXNbMV0sXG4gICAgZm9udFdlaWdodDogNjAwXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgRGl2aWRlciA9IHN0eWxlZCgnZGl2Jyk8QnJlYWRjcnVtYkl0ZW1Qcm9wcz4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGFkZGluZzogYDAgJHt0aGVtZS5zcGFjZXNbMl19YCxcbiAgaGVpZ2h0OiB0aGVtZS5zcGFjZXMuZnVsbCxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZVxufSkpO1xuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZCgnaDEnKTxCcmVhZGNydW1iSXRlbVByb3BzPigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IDAsXG4gIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc20sXG4gIGZvbnRXZWlnaHQ6IDYwMCxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMucGluazFcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsbUJBQWtCOzs7QUNBbEIsb0JBQW1CO0FBSVosSUFBTSxPQUFPLDJCQUFPLE9BQXdCO0FBQUEsRUFDakQsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBO0FBR1AsSUFBTSxVQUFVLDJCQUFPLE9BQzVCLENBQUMsRUFBRSxPQUFPLGFBQWM7QUFBQSxFQUN0QixPQUFPLFNBQVMsTUFBTSxPQUFPLFFBQVEsTUFBTSxPQUFPO0FBQUEsRUFDbEQsU0FBUztBQUFBLEVBQ1QsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osVUFBVSxNQUFNLFVBQVU7QUFBQSxFQUMxQixLQUFLLE1BQU0sT0FBTztBQUFBLEVBQ2xCLFlBQVk7QUFBQTtBQUlULElBQU0sVUFBVSwyQkFBTyxPQUE0QixDQUFDLEVBQUUsWUFBYTtBQUFBLEVBQ3hFLFNBQVMsS0FBSyxNQUFNLE9BQU87QUFBQSxFQUMzQixRQUFRLE1BQU0sT0FBTztBQUFBLEVBQ3JCLE9BQU8sTUFBTSxPQUFPO0FBQUE7QUFHZixJQUFNLE9BQU8sMkJBQU8sTUFBMkIsQ0FBQyxFQUFFLFlBQWE7QUFBQSxFQUNwRSxRQUFRO0FBQUEsRUFDUixVQUFVLE1BQU0sVUFBVTtBQUFBLEVBQzFCLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLE9BQU8sTUFBTSxPQUFPO0FBQUE7OztBRDdCdEIsSUFBTSxXQUFXLE1BQ2YsbURBQUMsT0FBRDtBQUFBLEVBQ0UsU0FBUTtBQUFBLEVBQ1IsT0FBTTtBQUFBLEVBQ04sUUFBTztBQUFBLEVBQ1AsV0FBVTtBQUFBLEVBQ1YsZUFBWTtBQUFBLEdBRVosbURBQUMsUUFBRDtBQUFBLEVBQ0UsTUFBSztBQUFBLEVBQ0wsR0FBRTtBQUFBO0FBaUJSLElBQU0sYUFBYSxDQUFDLEVBQUUsZUFBZ0MsbURBQUMsTUFBRCxNQUFPO0FBaUI3RCxJQUFNLGlCQUFpQixDQUFDLEVBQUUsUUFBUSxRQUFRLGVBQW9DO0FBQzVFLFNBQ0Usd0ZBQ0UsbURBQUMsU0FBRDtBQUFBLElBQVM7QUFBQSxLQUNOLFVBQVUsbURBQUMsVUFBRCxPQUVYLG1EQUFDLE1BQUQ7QUFBQSxJQUFNO0FBQUEsS0FBaUIsWUFHekIsbURBQUMsU0FBRDtBQUFBLElBQVM7QUFBQSxLQUFnQjtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
