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
  Steps: () => Steps
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var Main = import_system.default.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  text-transform: uppercase;
  width: 100%;
  font-weight: 600;
  letter-spacing: 0.8px;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
var StepsItemWrapper = import_system.default.div`
  ${({ theme, active }) => import_system.css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.white};
    color: ${active ? theme.colors.white : theme.colors.grey4};

    &:last-of-type {
      svg {
        display: none;
      }
    }
  `}
`;
var StepsItem = import_system.default.div`
  ${({ theme, active }) => import_system.css`
    padding: 0.41rem;
    width: 100%;

    ${active ? import_system.css`
          background: ${theme.colors.white};
          color: ${theme.colors.grey5};
        ` : import_system.css`
          background: ${theme.colors.grey4};
          color: ${theme.colors.grey3};
        `}
  `}
`;

// src/index.tsx
var CaretRightIcon = () => /* @__PURE__ */ import_react.default.createElement("svg", {
  viewBox: "0 0 192 512",
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ import_react.default.createElement("path", {
  fill: "currentColor",
  d: "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
}));
var Steps = ({ children }) => {
  return /* @__PURE__ */ import_react.default.createElement(Main, null, children);
};
var Item = ({ title, active = false }) => {
  return /* @__PURE__ */ import_react.default.createElement(StepsItemWrapper, {
    active
  }, /* @__PURE__ */ import_react.default.createElement(StepsItem, {
    active
  }, title), /* @__PURE__ */ import_react.default.createElement(CaretRightIcon, null));
};
Steps.Item = Item;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Steps
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWFpbiwgU3RlcHNJdGVtLCBTdGVwc0l0ZW1XcmFwcGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG4vKipcbiAqIEljb25cbiAqL1xuY29uc3QgQ2FyZXRSaWdodEljb24gPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB2aWV3Qm94PVwiMCAwIDE5MiA1MTJcIlxuICAgIHdpZHRoPVwiMXJlbVwiXG4gICAgaGVpZ2h0PVwiMXJlbVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICBkPVwiTTAgMzg0LjY2MlYxMjcuMzM4YzAtMTcuODE4IDIxLjU0My0yNi43NDEgMzQuMTQyLTE0LjE0MmwxMjguNjYyIDEyOC42NjJjNy44MSA3LjgxIDcuODEgMjAuNDc0IDAgMjguMjg0TDM0LjE0MiAzOTguODA0QzIxLjU0MyA0MTEuNDA0IDAgNDAyLjQ4IDAgMzg0LjY2MnpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuLyoqXG4gKiBTdGVwIGNvbXBvbmVudFxuICovXG5leHBvcnQgdHlwZSBTdGVwc1Byb3BzID0ge1xuICAvKipcbiAgICpcbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgU3RlcHMgPSAoeyBjaGlsZHJlbiB9OiBTdGVwc1Byb3BzKSA9PiB7XG4gIHJldHVybiA8TWFpbj57Y2hpbGRyZW59PC9NYWluPjtcbn07XG5cbi8qKlxuICogSXRlbSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IHR5cGUgU3RlcEl0ZW1Qcm9wcyA9IHtcbiAgLyoqXG4gICAqXG4gICAqL1xuICB0aXRsZTogc3RyaW5nO1xuICAvKipcbiAgICpcbiAgICovXG4gIGFjdGl2ZT86IGJvb2xlYW47XG59O1xuXG5jb25zdCBJdGVtID0gKHsgdGl0bGUsIGFjdGl2ZSA9IGZhbHNlIH06IFN0ZXBJdGVtUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3RlcHNJdGVtV3JhcHBlciBhY3RpdmU9e2FjdGl2ZX0+XG4gICAgICA8U3RlcHNJdGVtIGFjdGl2ZT17YWN0aXZlfT57dGl0bGV9PC9TdGVwc0l0ZW0+XG5cbiAgICAgIDxDYXJldFJpZ2h0SWNvbiAvPlxuICAgIDwvU3RlcHNJdGVtV3JhcHBlcj5cbiAgKTtcbn07XG5cblN0ZXBzLkl0ZW0gPSBJdGVtO1xuIiwgImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuaW1wb3J0IHsgU3RlcEl0ZW1Qcm9wcyB9IGZyb20gJy4nO1xuXG5leHBvcnQgY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuYDtcblxudHlwZSBTdGVwc0l0ZW1XcmFwcGVyUHJvcHMgPSBQaWNrPFN0ZXBJdGVtUHJvcHMsICdhY3RpdmUnPjtcblxuZXhwb3J0IGNvbnN0IFN0ZXBzSXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2PFN0ZXBzSXRlbVdyYXBwZXJQcm9wcz5gXG4gICR7KHsgdGhlbWUsIGFjdGl2ZSB9KSA9PiBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGNvbG9yOiAke2FjdGl2ZSA/IHRoZW1lLmNvbG9ycy53aGl0ZSA6IHRoZW1lLmNvbG9ycy5ncmV5NH07XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBzdmcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdGVwc0l0ZW0gPSBzdHlsZWQuZGl2PFBpY2s8U3RlcEl0ZW1Qcm9wcywgJ2FjdGl2ZSc+PmBcbiAgJHsoeyB0aGVtZSwgYWN0aXZlIH0pID0+IGNzc2BcbiAgICBwYWRkaW5nOiAwLjQxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJHthY3RpdmVcbiAgICAgID8gY3NzYFxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTV9O1xuICAgICAgICBgXG4gICAgICA6IGNzc2BcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5NH07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgICAgICAgYH1cbiAgYH1cbmA7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxtQkFBa0I7OztBQ0FsQixvQkFBNEI7QUFJckIsSUFBTSxPQUFPLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JwQixJQUFNLG1CQUFtQixzQkFBTztBQUFBLElBQ25DLENBQUMsRUFBRSxPQUFPLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUtJLE1BQU0sT0FBTztBQUFBLGFBQy9CLFNBQVMsTUFBTSxPQUFPLFFBQVEsTUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVqRCxJQUFNLFlBQVksc0JBQU87QUFBQSxJQUM1QixDQUFDLEVBQUUsT0FBTyxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJckIsU0FDRTtBQUFBLHdCQUNnQixNQUFNLE9BQU87QUFBQSxtQkFDbEIsTUFBTSxPQUFPO0FBQUEsWUFFeEI7QUFBQSx3QkFDZ0IsTUFBTSxPQUFPO0FBQUEsbUJBQ2xCLE1BQU0sT0FBTztBQUFBO0FBQUE7QUFBQTs7O0FEMUNoQyxJQUFNLGlCQUFpQixNQUNyQixtREFBQyxPQUFEO0FBQUEsRUFDRSxTQUFRO0FBQUEsRUFDUixPQUFNO0FBQUEsRUFDTixRQUFPO0FBQUEsRUFDUCxXQUFVO0FBQUEsRUFDVixlQUFZO0FBQUEsR0FFWixtREFBQyxRQUFEO0FBQUEsRUFDRSxNQUFLO0FBQUEsRUFDTCxHQUFFO0FBQUE7QUFlRCxJQUFNLFFBQVEsQ0FBQyxFQUFFLGVBQTJCO0FBQ2pELFNBQU8sbURBQUMsTUFBRCxNQUFPO0FBQUE7QUFpQmhCLElBQU0sT0FBTyxDQUFDLEVBQUUsT0FBTyxTQUFTLFlBQTJCO0FBQ3pELFNBQ0UsbURBQUMsa0JBQUQ7QUFBQSxJQUFrQjtBQUFBLEtBQ2hCLG1EQUFDLFdBQUQ7QUFBQSxJQUFXO0FBQUEsS0FBaUIsUUFFNUIsbURBQUMsZ0JBQUQ7QUFBQTtBQUtOLE1BQU0sT0FBTzsiLAogICJuYW1lcyI6IFtdCn0K
