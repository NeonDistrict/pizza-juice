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
  Label: () => Label
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var variants = (theme) => ({
  success: import_system.css`
    color: ${theme.colors.white};
    background: ${theme.colors.green1};
  `,
  warning: import_system.css`
    color: ${theme.colors.grey5};
    background: ${theme.colors.yellow1};
  `,
  danger: import_system.css`
    color: ${theme.colors.white};
    background: ${theme.colors.red1};
  `
});
var LabelStyles = import_system.default.div`
  ${({ theme, variant, icon }) => import_system.css`
    padding: ${theme.spaces[1]} ${theme.spaces[2]};
    display: inline-flex;
    align-items: center;
    gap: 10px;

    ${icon && (0, import_system.css)({
  paddingLeft: "10px"
})}
    ${variant && variants(theme)[variant]}
  `}
`;
var Text = import_system.default.label`
  ${({ theme }) => import_system.css`
    user-select: none;
    text-transform: uppercase;
    line-height: 150%;
    font-size: ${theme.fontSizes.sm};
  `}
`;

// src/index.tsx
var Label = ({ children, icon, variant = "success" }) => {
  return /* @__PURE__ */ import_react.default.createElement(LabelStyles, {
    variant
  }, icon && icon, /* @__PURE__ */ import_react.default.createElement(Text, null, children));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Label
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhYmVsU3R5bGVzLCBUZXh0IH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgdHlwZSBMYWJlbFByb3BzID0ge1xuICAvKipcbiAgICpcbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdmFyaWFudD86ICdzdWNjZXNzJyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnO1xuICAvKipcbiAgICpcbiAgICogQGRlZmF1bHQgXCJzdWNjZXNzXCJcbiAgICovXG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSAoeyBjaGlsZHJlbiwgaWNvbiwgdmFyaWFudCA9ICdzdWNjZXNzJyB9OiBMYWJlbFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExhYmVsU3R5bGVzIHZhcmlhbnQ9e3ZhcmlhbnR9PlxuICAgICAge2ljb24gJiYgaWNvbn1cbiAgICAgIDxUZXh0PntjaGlsZHJlbn08L1RleHQ+XG4gICAgPC9MYWJlbFN0eWxlcz5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIERlZmF1bHRUaGVtZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5pbXBvcnQgeyBMYWJlbFByb3BzIH0gZnJvbSAnLic7XG5cbmNvbnN0IHZhcmlhbnRzID0gKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+ICh7XG4gIHN1Y2Nlc3M6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmdyZWVuMX07XG4gIGAsXG4gIHdhcm5pbmc6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTV9O1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnllbGxvdzF9O1xuICBgLFxuICBkYW5nZXI6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnJlZDF9O1xuICBgXG59KTtcblxuZXhwb3J0IGNvbnN0IExhYmVsU3R5bGVzID0gc3R5bGVkLmRpdjxQaWNrPExhYmVsUHJvcHMsICd2YXJpYW50JyB8ICdpY29uJz4+YFxuICAkeyh7IHRoZW1lLCB2YXJpYW50LCBpY29uIH0pID0+IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlc1sxXX0gJHt0aGVtZS5zcGFjZXNbMl19O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgJHtpY29uICYmXG4gICAgY3NzKHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMTBweCdcbiAgICB9KX1cbiAgICAke3ZhcmlhbnQgJiYgdmFyaWFudHModGhlbWUpW3ZhcmlhbnRdfVxuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQubGFiZWxgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplcy5zbX07XG4gIGB9XG5gO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7O0FDQUEsbUJBQWtCOzs7QUNBbEIsb0JBQTBDO0FBRzFDLElBQU0sV0FBVyxDQUFDLFVBQXlCO0FBQUEsRUFDekMsU0FBUztBQUFBLGFBQ0UsTUFBTSxPQUFPO0FBQUEsa0JBQ1IsTUFBTSxPQUFPO0FBQUE7QUFBQSxFQUU3QixTQUFTO0FBQUEsYUFDRSxNQUFNLE9BQU87QUFBQSxrQkFDUixNQUFNLE9BQU87QUFBQTtBQUFBLEVBRTdCLFFBQVE7QUFBQSxhQUNHLE1BQU0sT0FBTztBQUFBLGtCQUNSLE1BQU0sT0FBTztBQUFBO0FBQUE7QUFJeEIsSUFBTSxjQUFjLHNCQUFPO0FBQUEsSUFDOUIsQ0FBQyxFQUFFLE9BQU8sU0FBUyxXQUFXO0FBQUEsZUFDbkIsTUFBTSxPQUFPLE1BQU0sTUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUt6QyxRQUNGLHVCQUFJO0FBQUEsRUFDRixhQUFhO0FBQUE7QUFBQSxNQUViLFdBQVcsU0FBUyxPQUFPO0FBQUE7QUFBQTtBQUkxQixJQUFNLE9BQU8sc0JBQU87QUFBQSxJQUN2QixDQUFDLEVBQUUsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUlGLE1BQU0sVUFBVTtBQUFBO0FBQUE7OztBRG5CMUIsSUFBTSxRQUFRLENBQUMsRUFBRSxVQUFVLE1BQU0sVUFBVSxnQkFBNEI7QUFDNUUsU0FDRSxtREFBQyxhQUFEO0FBQUEsSUFBYTtBQUFBLEtBQ1YsUUFBUSxNQUNULG1EQUFDLE1BQUQsTUFBTztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
