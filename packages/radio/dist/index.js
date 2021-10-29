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
  Radio: () => Radio
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var RadioGroupBase = __toModule(require("@radix-ui/react-radio-group"));
var RadioInputItem = (0, import_system.default)(RadioGroupBase.Item)`
  ${({ theme }) => import_system.css`
    all: unset;
    background-color: ${theme.colors.white};
    width: ${theme.spaces[5]};
    height: ${theme.spaces[5]};
    border-radius: ${theme.radii.full};
    box-shadow: 0 0 0 1px ${theme.colors.grey2};
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 1px ${theme.colors.pink2};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${theme.colors.grey1};
    }

    &:active {
      box-shadow: 0 0 0 1px ${theme.colors.teal1};
    }

    &[aria-checked='true'] {
      box-shadow: 0 0 0 1px ${theme.colors.pink1};
    }
  `}
`;
var RadioIndicator = (0, import_system.default)(RadioGroupBase.Indicator)`
  ${({ theme }) => import_system.css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.sizes.full};
    height: ${theme.sizes.full};
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 14px;
      height: 14px;
      border-radius: ${theme.radii.full};
      background-color: ${theme.colors.pink1};
    }
  `}
`;
var radioGroupModifiers = {
  rowDirection: (theme) => import_system.css`
    display: flex;

    & > :not(:last-child) {
      margin-right: ${theme.spaces[4]};
    }
  `
};
var RadioInputGroup = (0, import_system.default)(RadioGroupBase.Root)`
  ${({ theme, direction }) => import_system.css`
    color: ${theme.colors.white};

    ${direction === "row" && radioGroupModifiers.rowDirection(theme)};
  `}
`;
var Wrapper = import_system.default.div`
  ${({ theme }) => import_system.css`
    display: flex;
    align-items: center;
    margin: ${theme.spaces[3]} 0;
  `}
`;
var Label = import_system.default.label`
  ${({ theme }) => import_system.css`
    color: ${theme.colors.grey1};
    font-size: ${theme.fontSizes.md};
    padding-left: ${theme.spaces[1]};
    line-height: 1;
    user-select: none;
    cursor: pointer;
  `}
`;

// src/index.tsx
var RadioGroup = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { direction = "column", label, children } = _b, props = __objRest(_b, ["direction", "label", "children"]);
  return /* @__PURE__ */ import_react.default.createElement(RadioInputGroup, __spreadValues({
    ref,
    "aria-label": label,
    direction
  }, props), children);
});
var RadioItem = (_a) => {
  var _b = _a, { value, children } = _b, props = __objRest(_b, ["value", "children"]);
  return /* @__PURE__ */ import_react.default.createElement(Wrapper, null, /* @__PURE__ */ import_react.default.createElement(RadioInputItem, __spreadValues({
    value,
    id: `radio-${value}`
  }, props), /* @__PURE__ */ import_react.default.createElement(RadioIndicator, null)), /* @__PURE__ */ import_react.default.createElement(Label, {
    htmlFor: `radio-${value}`
  }, children));
};
var Radio = () => {
};
Radio.Group = RadioGroup;
Radio.Item = RadioItem;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Radio
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHR5cGUgKiBhcyBSYWRpb0dyb3VwQmFzZSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtcmFkaW8tZ3JvdXAnO1xuXG5pbXBvcnQge1xuICBSYWRpb0lucHV0R3JvdXAsXG4gIFJhZGlvSW5kaWNhdG9yLFxuICBSYWRpb0lucHV0SXRlbSxcbiAgV3JhcHBlcixcbiAgTGFiZWxcbn0gZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgdHlwZSBSYWRpb0dyb3VwUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgZGlyZWN0aW9uPzogJ3JvdycgfCAnY29sdW1uJztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBsYWJlbD86IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn0gJiBSYWRpb0dyb3VwQmFzZS5SYWRpb0dyb3VwUHJvcHM7XG5cbmNvbnN0IFJhZGlvR3JvdXAgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBSYWRpb0dyb3VwUHJvcHM+KFxuICAoXG4gICAgeyBkaXJlY3Rpb24gPSAnY29sdW1uJywgbGFiZWwsIGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBSYWRpb0dyb3VwUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8UmFkaW9JbnB1dEdyb3VwXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9SYWRpb0lucHV0R3JvdXA+XG4gICAgKTtcbiAgfVxuKTtcblxuZXhwb3J0IHR5cGUgUmFkaW9JdGVtUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufSAmIFJhZGlvR3JvdXBCYXNlLlJhZGlvR3JvdXBJdGVtUHJvcHM7XG5cbmNvbnN0IFJhZGlvSXRlbSA9ICh7IHZhbHVlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfTogUmFkaW9JdGVtUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxSYWRpb0lucHV0SXRlbSB2YWx1ZT17dmFsdWV9IGlkPXtgcmFkaW8tJHt2YWx1ZX1gfSB7Li4ucHJvcHN9PlxuICAgICAgICA8UmFkaW9JbmRpY2F0b3IgLz5cbiAgICAgIDwvUmFkaW9JbnB1dEl0ZW0+XG5cbiAgICAgIDxMYWJlbCBodG1sRm9yPXtgcmFkaW8tJHt2YWx1ZX1gfT57Y2hpbGRyZW59PC9MYWJlbD5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgUmFkaW8gPSAoKSA9PiB7fTtcblxuUmFkaW8uR3JvdXAgPSBSYWRpb0dyb3VwO1xuXG5SYWRpby5JdGVtID0gUmFkaW9JdGVtO1xuIiwgImltcG9ydCBzdHlsZWQsIHsgY3NzLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdAbmVvbi1kaXN0cmljdC9zeXN0ZW0nO1xuXG5pbXBvcnQgKiBhcyBSYWRpb0dyb3VwQmFzZSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtcmFkaW8tZ3JvdXAnO1xuXG5pbXBvcnQgeyBSYWRpb0dyb3VwUHJvcHMgfSBmcm9tICcuJztcblxuZXhwb3J0IGNvbnN0IFJhZGlvSW5wdXRJdGVtID0gc3R5bGVkKFJhZGlvR3JvdXBCYXNlLkl0ZW0pYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBhbGw6IHVuc2V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICB3aWR0aDogJHt0aGVtZS5zcGFjZXNbNV19O1xuICAgIGhlaWdodDogJHt0aGVtZS5zcGFjZXNbNV19O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUucmFkaWkuZnVsbH07XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLmdyZXkyfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy5waW5rMn07XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggJHt0aGVtZS5jb2xvcnMuZ3JleTF9O1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy50ZWFsMX07XG4gICAgfVxuXG4gICAgJlthcmlhLWNoZWNrZWQ9J3RydWUnXSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMucGluazF9O1xuICAgIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBSYWRpb0luZGljYXRvciA9IHN0eWxlZChSYWRpb0dyb3VwQmFzZS5JbmRpY2F0b3IpYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6ICR7dGhlbWUuc2l6ZXMuZnVsbH07XG4gICAgaGVpZ2h0OiAke3RoZW1lLnNpemVzLmZ1bGx9O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5yYWRpaS5mdWxsfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBpbmsxfTtcbiAgICB9XG4gIGB9XG5gO1xuXG5jb25zdCByYWRpb0dyb3VwTW9kaWZpZXJzID0ge1xuICByb3dEaXJlY3Rpb246ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICYgPiA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2VzWzRdfTtcbiAgICB9XG4gIGBcbn07XG5cbmV4cG9ydCBjb25zdCBSYWRpb0lucHV0R3JvdXAgPSBzdHlsZWQoUmFkaW9Hcm91cEJhc2UuUm9vdCk8UmFkaW9Hcm91cFByb3BzPmBcbiAgJHsoeyB0aGVtZSwgZGlyZWN0aW9uIH0pID0+IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuXG4gICAgJHtkaXJlY3Rpb24gPT09ICdyb3cnICYmIHJhZGlvR3JvdXBNb2RpZmllcnMucm93RGlyZWN0aW9uKHRoZW1lKX07XG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2VzWzNdfSAwO1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTF9O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXMubWR9O1xuICAgIHBhZGRpbmctbGVmdDogJHt0aGVtZS5zcGFjZXNbMV19O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgYH1cbmA7XG4iXSwKICAibWFwcGlu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
