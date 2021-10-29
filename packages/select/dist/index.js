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
  Select: () => Select
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var LabelBase = __toModule(require("@radix-ui/react-label"));
var Wrapper = import_system.default.div`
  ${({ theme }) => import_system.css`
    color: ${theme.colors.white};
  `}
`;
var Label = (0, import_system.default)(LabelBase.Root)`
  ${({ theme }) => import_system.css`
    display: block;
    margin-bottom: ${theme.spaces[1]};
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.medium};
  `}
`;
var selectModifiers = (theme) => ({
  size: {
    xs: import_system.css`
      padding: ${theme.spaces[1]} ${theme.spaces[2]};
      font-size: ${theme.fontSizes["3xs"]};
    `,
    sm: import_system.css`
      padding: ${theme.spaces[3]} ${theme.spaces[4]};
      font-size: ${theme.fontSizes["2xs"]};
    `,
    md: import_system.css`
      padding: ${theme.spaces[3]} ${theme.spaces[4]};
      font-size: ${theme.fontSizes.xs};
    `,
    lg: import_system.css`
      padding: ${theme.spaces[3]} ${theme.spaces[4]};
      font-size: ${theme.fontSizes.md};
    `
  },
  variant: {
    solid: import_system.css`
      background: ${theme.colors.black};
    `,
    outline: import_system.css`
      background: ${theme.colors.grey5};
    `
  },
  disabled: import_system.css`
    opacity: 0.5;
    cursor: not-allowed;
  `
});
var WrapperSelect = import_system.default.div`
  ${({ theme, disabled, variant }) => import_system.css`
    display: flex;
    align-items: center;
    border: 1px solid;
    border-color: ${theme.colors.grey1};
    padding-right: ${theme.spaces[2]};

    ${selectModifiers(theme).variant[variant]}
    ${disabled && selectModifiers(theme).disabled}

    &:hover {
      border-color: ${theme.colors.pink2};
    }

    &:active {
      border-color: ${theme.colors.teal1};
    }
  `}
`;
var SelectStyled = import_system.default.select`
  ${({ theme, variant, selectSize }) => import_system.css`
    width: ${theme.sizes.full};
    color: ${theme.colors.white};
    font-family: inherit;
    appearance: none;
    border: none;
    transition: 0.2s;

    ${selectModifiers(theme).variant[variant]}
    ${selectModifiers(theme).size[selectSize]}
  `}
`;
var Message = import_system.default.small`
  ${({ theme }) => import_system.css`
    color: ${theme.colors.grey1};
    font-size: ${theme.fontSizes.xs};
    margin-top: 5px;
    display: block;
  `}
`;
var Error2 = import_system.default.div`
  ${({ theme }) => import_system.css`
    color: ${theme.colors.red1};
    font-size: ${theme.fontSizes.xs};
  `}
`;

// src/index.tsx
var ChevronDownIcon = () => /* @__PURE__ */ import_react.default.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "1.5rem",
  height: "1.5rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ import_react.default.createElement("path", {
  fill: "currentColor",
  d: "M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
}));
var Select = (_a) => {
  var _b = _a, {
    label,
    name,
    hint,
    size = "md",
    disabled = false,
    variant = "solid",
    defaultValue = "",
    error,
    placeholder,
    children
  } = _b, props = __objRest(_b, [
    "label",
    "name",
    "hint",
    "size",
    "disabled",
    "variant",
    "defaultValue",
    "error",
    "placeholder",
    "children"
  ]);
  return /* @__PURE__ */ import_react.default.createElement(Wrapper, null, label && /* @__PURE__ */ import_react.default.createElement(Label, {
    htmlFor: `select-${name}`
  }, label), /* @__PURE__ */ import_react.default.createElement(WrapperSelect, {
    disabled,
    variant
  }, /* @__PURE__ */ import_react.default.createElement(SelectStyled, __spreadValues({
    defaultValue,
    selectSize: size,
    variant,
    id: `select-${name}`,
    disabled
  }, props), /* @__PURE__ */ import_react.default.createElement("option", {
    value: "",
    hidden: true
  }, placeholder), children), /* @__PURE__ */ import_react.default.createElement(ChevronDownIcon, null)), /* @__PURE__ */ import_react.default.createElement(Message, null, hint), /* @__PURE__ */ import_react.default.createElement(Error2, null, error));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Select
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IFNlbGVjdEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBXcmFwcGVyLFxuICBTZWxlY3RTdHlsZWQsXG4gIExhYmVsLFxuICBNZXNzYWdlLFxuICBFcnJvcixcbiAgV3JhcHBlclNlbGVjdFxufSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IENoZXZyb25Eb3duSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHdpZHRoPVwiMS41cmVtXCJcbiAgICBoZWlnaHQ9XCIxLjVyZW1cIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgZD1cIk0xNi4yOTMgOS4yOTMgMTIgMTMuNTg2IDcuNzA3IDkuMjkzbC0xLjQxNCAxLjQxNEwxMiAxNi40MTRsNS43MDctNS43MDd6XCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCB0eXBlIFNlbGVjdFByb3BzID0ge1xuICAvKipcbiAgICpcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nO1xuICAvKipcbiAgICpcbiAgICovXG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgaGludD86IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqL1xuICB2YXJpYW50PzogJ3NvbGlkJyB8ICdvdXRsaW5lJztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBlcnJvcj86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAvKipcbiAgICpcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAvKipcbiAgICpcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufSAmIE9taXQ8U2VsZWN0SFRNTEF0dHJpYnV0ZXM8SFRNTFNlbGVjdEVsZW1lbnQ+LCAnc2l6ZSc+O1xuXG5leHBvcnQgY29uc3QgU2VsZWN0ID0gKHtcbiAgbGFiZWwsXG4gIG5hbWUsXG4gIGhpbnQsXG4gIHNpemUgPSAnbWQnLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB2YXJpYW50ID0gJ3NvbGlkJyxcbiAgZGVmYXVsdFZhbHVlID0gJycsXG4gIGVycm9yLFxuICBwbGFjZWhvbGRlcixcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59OiBTZWxlY3RQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAge2xhYmVsICYmIDxMYWJlbCBodG1sRm9yPXtgc2VsZWN0LSR7bmFtZX1gfT57bGFiZWx9PC9MYWJlbD59XG5cbiAgICAgIDxXcmFwcGVyU2VsZWN0IGRpc2FibGVkPXtkaXNhYmxlZH0gdmFyaWFudD17dmFyaWFudH0+XG4gICAgICAgIDxTZWxlY3RTdHlsZWRcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICBzZWxlY3RTaXplPXtzaXplfVxuICAgICAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XG4gICAgICAgICAgaWQ9e2BzZWxlY3QtJHtuYW1lfWB9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBoaWRkZW4+XG4gICAgICAgICAgICB7cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgPC9vcHRpb24+XG5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU2VsZWN0U3R5bGVkPlxuXG4gICAgICAgIDxDaGV2cm9uRG93bkljb24gLz5cbiAgICAgIDwvV3JhcHBlclNlbGVjdD5cblxuICAgICAgPE1lc3NhZ2U+e2hpbnR9PC9NZXNzYWdlPlxuXG4gICAgICA8RXJyb3I+e2Vycm9yfTwvRXJyb3I+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcbiIsICJpbXBvcnQgc3R5bGVkLCB7IGNzcywgRGVmYXVsdFRoZW1lIH0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuaW1wb3J0ICogYXMgTGFiZWxCYXNlIGZyb20gJ0ByYWRpeC11aS9yZWFjdC1sYWJlbCc7XG5cbmltcG9ydCB7IFNlbGVjdFByb3BzIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZChMYWJlbEJhc2UuUm9vdClgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2VzWzFdfTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bX07XG4gIGB9XG5gO1xuXG5jb25zdCBzZWxlY3RNb2RpZmllcnMgPSAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gKHtcbiAgc2l6ZToge1xuICAgIHhzOiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlc1sxXX0gJHt0aGVtZS5zcGFjZXNbMl19O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1snM3hzJ119O1xuICAgIGAsXG4gICAgc206IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2VzWzNdfSAke3RoZW1lLnNwYWNlc1s0XX07XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWycyeHMnXX07XG4gICAgYCxcbiAgICBtZDogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjZXNbM119ICR7dGhlbWUuc3BhY2VzWzRdfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXMueHN9O1xuICAgIGAsXG4gICAgbGc6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2VzWzNdfSAke3RoZW1lLnNwYWNlc1s0XX07XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzLm1kfTtcbiAgICBgXG4gIH0sXG4gIHZhcmlhbnQ6IHtcbiAgICBzb2xpZDogY3NzYFxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgIGAsXG4gICAgb3V0bGluZTogY3NzYFxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZ3JleTV9O1xuICAgIGBcbiAgfSxcbiAgZGlzYWJsZWQ6IGNzc2BcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYFxufSk7XG5cbnR5cGUgU2VsZWN0U3R5bGVkUHJvcHMgPSB7XG4gIHNlbGVjdFNpemU/OiBTZWxlY3RQcm9wc1snc2l6ZSddO1xufSAmIFBpY2s8U2VsZWN0UHJvcHMsICdkaXNhYmxlZCcgfCAndmFyaWFudCc+O1xuXG5leHBvcnQgY29uc3QgV3JhcHBlclNlbGVjdCA9IHN0eWxlZC5kaXY8U2VsZWN0U3R5bGVkUHJvcHM+YFxuICAkeyh7IHRoZW1lLCBkaXNhYmxlZCwgdmFyaWFudCB9KSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTF9O1xuICAgIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuc3BhY2VzWzJdfTtcblxuICAgICR7c2VsZWN0TW9kaWZpZXJzKHRoZW1lKS52YXJpYW50W3ZhcmlhbnQhXX1cbiAgICAke2Rpc2FibGVkICYmIHNlbGVjdE1vZGlmaWVycyh0aGVtZSkuZGlzYWJsZWR9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMucGluazJ9O1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMudGVhbDF9O1xuICAgIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RTdHlsZWQgPSBzdHlsZWQuc2VsZWN0PFNlbGVjdFN0eWxlZFByb3BzPmBcbiAgJHsoeyB0aGVtZSwgdmFyaWFudCwgc2VsZWN0U2l6ZSB9KSA9PiBjc3NgXG4gICAgd2lkdGg6ICR7dGhlbWUuc2l6ZXMuZnVsbH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgJHtzZWxlY3RNb2RpZmllcnModGhlbWUpLnZhcmlhbnRbdmFyaWFudCFdfVxuICAgICR7c2VsZWN0TW9kaWZpZXJzKHRoZW1lKS5zaXplW3NlbGVjdFNpemUhXX1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlID0gc3R5bGVkLnNtYWxsYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTF9O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXMueHN9O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5yZWQxfTtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzLnhzfTtcbiAgYH1cbmA7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLG1CQUE0Qzs7O0FDQTVDLG9CQUEwQztBQUUxQyxnQkFBMkI7QUFJcEIsSUFBTSxVQUFVLHNCQUFPO0FBQUEsSUFDMUIsQ0FBQyxFQUFFLFlBQVk7QUFBQSxhQUNOLE1BQU0sT0FBTztBQUFBO0FBQUE7QUFJbkIsSUFBTSxRQUFRLDJCQUFpQjtBQUFBLElBQ2xDLENBQUMsRUFBRSxZQUFZO0FBQUE7QUFBQSxxQkFFRSxNQUFNLE9BQU87QUFBQTtBQUFBLG1CQUVmLE1BQU0sWUFBWTtBQUFBO0FBQUE7QUFJckMsSUFBTSxrQkFBa0IsQ0FBQyxVQUF5QjtBQUFBLEVBQ2hELE1BQU07QUFBQSxJQUNKLElBQUk7QUFBQSxpQkFDUyxNQUFNLE9BQU8sTUFBTSxNQUFNLE9BQU87QUFBQSxtQkFDOUIsTUFBTSxVQUFVO0FBQUE7QUFBQSxJQUUvQixJQUFJO0FBQUEsaUJBQ1MsTUFBTSxPQUFPLE1BQU0sTUFBTSxPQUFPO0FBQUEsbUJBQzlCLE1BQU0sVUFBVTtBQUFBO0FBQUEsSUFFL0IsSUFBSTtBQUFBLGlCQUNTLE1BQU0sT0FBTyxNQUFNLE1BQU0sT0FBTztBQUFBLG1CQUM5QixNQUFNLFVBQVU7QUFBQTtBQUFBLElBRS9CLElBQUk7QUFBQSxpQkFDUyxNQUFNLE9BQU8sTUFBTSxNQUFNLE9BQU87QUFBQSxtQkFDOUIsTUFBTSxVQUFVO0FBQUE7QUFBQTtBQUFBLEVBR2pDLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxvQkFDUyxNQUFNLE9BQU87QUFBQTtBQUFBLElBRTdCLFNBQVM7QUFBQSxvQkFDTyxNQUFNLE9BQU87QUFBQTtBQUFBO0FBQUEsRUFHL0IsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUwsSUFBTSxnQkFBZ0Isc0JBQU87QUFBQSxJQUNoQyxDQUFDLEVBQUUsT0FBTyxVQUFVLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFJbEIsTUFBTSxPQUFPO0FBQUEscUJBQ1osTUFBTSxPQUFPO0FBQUE7QUFBQSxNQUU1QixnQkFBZ0IsT0FBTyxRQUFRO0FBQUEsTUFDL0IsWUFBWSxnQkFBZ0IsT0FBTztBQUFBO0FBQUE7QUFBQSxzQkFHbkIsTUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSWIsTUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBSzVCLElBQU0sZUFBZSxzQkFBTztBQUFBLElBQy9CLENBQUMsRUFBRSxPQUFPLFNBQVMsaUJBQWlCO0FBQUEsYUFDM0IsTUFBTSxNQUFNO0FBQUEsYUFDWixNQUFNLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNcEIsZ0JBQWdCLE9BQU8sUUFBUTtBQUFBLE1BQy9CLGdCQUFnQixPQUFPLEtBQUs7QUFBQTtBQUFBO0FBSTNCLElBQU0sVUFBVSxzQkFBTztBQUFBLElBQzFCLENBQUMsRUFBRSxZQUFZO0FBQUEsYUFDTixNQUFNLE9BQU87QUFBQSxpQkFDVCxNQUFNLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU0xQixJQUFNLFNBQVEsc0JBQU87QUFBQSxJQUN4QixDQUFDLEVBQUUsWUFBWTtBQUFBLGFBQ04sTUFBTSxPQUFPO0FBQUEsaUJBQ1QsTUFBTSxVQUFVO0FBQUE7QUFBQTs7O0FEOUZqQyxJQUFNLGtCQUFrQixNQUN0QixtREFBQyxPQUFEO0FBQUEsRUFDRSxTQUFRO0FBQUEsRUFDUixPQUFNO0FBQUEsRUFDTixRQUFPO0FBQUEsRUFDUCxXQUFVO0FBQUEsRUFDVixlQUFZO0FBQUEsR0FFWixtREFBQyxRQUFEO0FBQUEsRUFDRSxNQUFLO0FBQUEsRUFDTCxHQUFFO0FBQUE7QUF3Q0QsSUFBTSxTQUFTLENBQUMsT0FZSjtBQVpJLGVBQ3JCO0FBQUE7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsZUFBZTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLE1BVnFCLElBV2xCLGtCQVhrQixJQVdsQjtBQUFBLElBVkg7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUdBLFNBQ0UsbURBQUMsU0FBRCxNQUNHLFNBQVMsbURBQUMsT0FBRDtBQUFBLElBQU8sU0FBUyxVQUFVO0FBQUEsS0FBUyxRQUU3QyxtREFBQyxlQUFEO0FBQUEsSUFBZTtBQUFBLElBQW9CO0FBQUEsS0FDakMsbURBQUMsY0FBRDtBQUFBLElBQ0U7QUFBQSxJQUNBLFlBQVk7QUFBQSxJQUNaO0FBQUEsSUFDQSxJQUFJLFVBQVU7QUFBQSxJQUNkO0FBQUEsS0FDSSxRQUVKLG1EQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxJQUFHLFFBQU07QUFBQSxLQUNwQixjQUdGLFdBR0gsbURBQUMsaUJBQUQsUUFHRixtREFBQyxTQUFELE1BQVUsT0FFVixtREFBQyxRQUFELE1BQVE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
