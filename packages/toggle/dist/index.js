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
  Toggle: () => Toggle2
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var Label = __toModule(require("@radix-ui/react-label"));
var Toggle = __toModule(require("@radix-ui/react-toggle"));
var toggleModifiers = (theme) => ({
  size: {
    xs: import_system.css``,
    sm: import_system.css``,
    md: import_system.css``,
    lg: import_system.css``
  },
  disabled: import_system.css`
    &[data-state='on'] + span {
      background: ${theme.colors.grey1};
    }

    + span {
      cursor: not-allowed;
    }
  `
});
var Wrapper = (0, import_system.default)(Label.Root)`
  ${({ theme }) => import_system.css`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  `}
`;
var ToggleInput = (0, import_system.default)(Toggle.Root)`
  ${({ theme, disabled }) => import_system.css`
    opacity: 0;
    width: 0;
    height: 0;

    &[data-state='on'] + span {
      background: ${theme.colors.green1};
    }

    &[data-state='on'] + span:before {
      transform: translateX(26px);
    }

    ${disabled && toggleModifiers(theme).disabled}
  `}
`;
var ToggleSlider = import_system.default.span`
  ${({ theme }) => import_system.css`
    position: absolute;
    inset: 0;
    background: ${theme.colors.grey3};
    transition: ${theme.durations.fast};
    border-radius: ${theme.radii.full};
    cursor: pointer;

    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background: ${theme.colors.white};
      transition: ${theme.durations.fast};
      border-radius: ${theme.radii.half};
    }
  `}
`;

// src/index.tsx
var Toggle2 = (_a) => {
  var _b = _a, { name } = _b, props = __objRest(_b, ["name"]);
  return /* @__PURE__ */ import_react.default.createElement(Wrapper, {
    htmlFor: `toggle-${name}`
  }, /* @__PURE__ */ import_react.default.createElement(ToggleInput, __spreadValues({
    id: `toggle-${name}`,
    name
  }, props)), /* @__PURE__ */ import_react.default.createElement(ToggleSlider, null));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Toggle
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBUb2dnbGVQcm9wcyBhcyBUb2dnbGVQcm9wc0Jhc2UgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtdG9nZ2xlJztcblxuaW1wb3J0IHsgV3JhcHBlciwgVG9nZ2xlSW5wdXQsIFRvZ2dsZVNsaWRlciB9IGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgVG9nZ2xlUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqIEBkZWZhdWx0IFwibWRcIlxuICAgKi9cbiAgc2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZyc7XG59ICYgVG9nZ2xlUHJvcHNCYXNlO1xuXG5leHBvcnQgY29uc3QgVG9nZ2xlID0gKHsgbmFtZSwgLi4ucHJvcHMgfTogVG9nZ2xlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBodG1sRm9yPXtgdG9nZ2xlLSR7bmFtZX1gfT5cbiAgICAgIDxUb2dnbGVJbnB1dCBpZD17YHRvZ2dsZS0ke25hbWV9YH0gbmFtZT17bmFtZX0gey4uLnByb3BzfSAvPlxuICAgICAgPFRvZ2dsZVNsaWRlciAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIERlZmF1bHRUaGVtZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmltcG9ydCAqIGFzIExhYmVsIGZyb20gJ0ByYWRpeC11aS9yZWFjdC1sYWJlbCc7XG5pbXBvcnQgKiBhcyBUb2dnbGUgZnJvbSAnQHJhZGl4LXVpL3JlYWN0LXRvZ2dsZSc7XG5cbmNvbnN0IHRvZ2dsZU1vZGlmaWVycyA9ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiAoe1xuICBzaXplOiB7XG4gICAgeHM6IGNzc2BgLFxuICAgIHNtOiBjc3NgYCxcbiAgICBtZDogY3NzYGAsXG4gICAgbGc6IGNzc2BgXG4gIH0sXG4gIGRpc2FibGVkOiBjc3NgXG4gICAgJltkYXRhLXN0YXRlPSdvbiddICsgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5MX07XG4gICAgfVxuXG4gICAgKyBzcGFuIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICBgXG59KTtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoTGFiZWwuUm9vdClgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvZ2dsZUlucHV0ID0gc3R5bGVkKFRvZ2dsZS5Sb290KWBcbiAgJHsoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gY3NzYFxuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuXG4gICAgJltkYXRhLXN0YXRlPSdvbiddICsgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmVlbjF9O1xuICAgIH1cblxuICAgICZbZGF0YS1zdGF0ZT0nb24nXSArIHNwYW46YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB9XG5cbiAgICAke2Rpc2FibGVkICYmIHRvZ2dsZU1vZGlmaWVycyh0aGVtZSkuZGlzYWJsZWR9XG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgVG9nZ2xlU2xpZGVyID0gc3R5bGVkLnNwYW5gXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS5kdXJhdGlvbnMuZmFzdH07XG4gICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5yYWRpaS5mdWxsfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgbGVmdDogNHB4O1xuICAgICAgYm90dG9tOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICB0cmFuc2l0aW9uOiAke3RoZW1lLmR1cmF0aW9ucy5mYXN0fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUucmFkaWkuaGFsZn07XG4gICAgfVxuICBgfVxuYDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7O0FDQUEsbUJBQWtCOzs7QUNBbEIsb0JBQTBDO0FBRTFDLFlBQXVCO0FBQ3ZCLGFBQXdCO0FBRXhCLElBQU0sa0JBQWtCLENBQUMsVUFBeUI7QUFBQSxFQUNoRCxNQUFNO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUE7QUFBQSxFQUVOLFVBQVU7QUFBQTtBQUFBLG9CQUVRLE1BQU0sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUzFCLElBQU0sVUFBVSwyQkFBYTtBQUFBLElBQ2hDLENBQUMsRUFBRSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUVosSUFBTSxjQUFjLDJCQUFjO0FBQUEsSUFDckMsQ0FBQyxFQUFFLE9BQU8sZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFNVCxNQUFNLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU8zQixZQUFZLGdCQUFnQixPQUFPO0FBQUE7QUFBQTtBQUlsQyxJQUFNLGVBQWUsc0JBQU87QUFBQSxJQUMvQixDQUFDLEVBQUUsWUFBWTtBQUFBO0FBQUE7QUFBQSxrQkFHRCxNQUFNLE9BQU87QUFBQSxrQkFDYixNQUFNLFVBQVU7QUFBQSxxQkFDYixNQUFNLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFVYixNQUFNLE9BQU87QUFBQSxvQkFDYixNQUFNLFVBQVU7QUFBQSx1QkFDYixNQUFNLE1BQU07QUFBQTtBQUFBO0FBQUE7OztBRGxENUIsSUFBTSxVQUFTLENBQUMsT0FBb0M7QUFBcEMsZUFBRSxXQUFGLElBQVcsa0JBQVgsSUFBVyxDQUFUO0FBQ3ZCLFNBQ0UsbURBQUMsU0FBRDtBQUFBLElBQVMsU0FBUyxVQUFVO0FBQUEsS0FDMUIsbURBQUMsYUFBRDtBQUFBLElBQWEsSUFBSSxVQUFVO0FBQUEsSUFBUTtBQUFBLEtBQWdCLFNBQ25ELG1EQUFDLGNBQUQ7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
