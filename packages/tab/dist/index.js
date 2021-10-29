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
  Tab: () => Tab
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var ItemContainer = import_system.default.div`
  color: white;
  display: flex;
  flex-direction: column;
`;
var Container = import_system.default.div`
  position: relative;
`;
var List = import_system.default.ul`
  ${({ theme }) => import_system.css`
    display: flex;
    list-style: none;
    border-bottom: 1px solid ${theme.colors.white};
    margin: 0;
    padding: 0;
  `}
`;
var ListItem = import_system.default.li`
  ${({ theme, selectedTab, index }) => import_system.css`
    cursor: pointer;
    text-transform: uppercase;
    color: ${theme.colors.grey3};
    padding: 7px 45px;
    font-weight: 600;

    ${index === selectedTab && import_system.css`
      border: 1px solid ${theme.colors.white};
      margin-bottom: -1px;
      border-bottom: 1px solid ${theme.colors.black};
      color: ${theme.colors.white};
      font-weight: 700;
    `}
  `}
`;

// src/index.tsx
var Tab = ({ children }) => {
  const [selectedTab, setSelectedTab] = (0, import_react.useState)(0);
  return /* @__PURE__ */ import_react.default.createElement(ItemContainer, null, /* @__PURE__ */ import_react.default.createElement(List, null, children == null ? void 0 : children.map((item, index) => /* @__PURE__ */ import_react.default.createElement(TabTitle, {
    key: index,
    label: item.props.label,
    index,
    selectedTab,
    setSelectedTab
  }))), children && children[selectedTab]);
};
var TabTitle = ({
  label,
  index,
  selectedTab,
  setSelectedTab
}) => {
  const onClick = (0, import_react.useCallback)(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);
  return /* @__PURE__ */ import_react.default.createElement(ListItem, {
    index,
    selectedTab,
    onClick
  }, label);
};
var Item = ({ children, label }) => /* @__PURE__ */ import_react.default.createElement(Container, {
  label
}, children);
Tab.Item = Item;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tab
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBJdGVtQ29udGFpbmVyLCBMaXN0LCBMaXN0SXRlbSB9IGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgVGFiUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50W107XG59O1xuXG5leHBvcnQgY29uc3QgVGFiID0gKHsgY2hpbGRyZW4gfTogVGFiUHJvcHMpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxJdGVtQ29udGFpbmVyPlxuICAgICAgPExpc3Q+XG4gICAgICAgIHtjaGlsZHJlbj8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxUYWJUaXRsZVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGxhYmVsPXtpdGVtLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgc2VsZWN0ZWRUYWI9e3NlbGVjdGVkVGFifVxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWI9e3NldFNlbGVjdGVkVGFifVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuXG4gICAgICB7Y2hpbGRyZW4gJiYgY2hpbGRyZW5bc2VsZWN0ZWRUYWJdfVxuICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB0eXBlIFRhYlRpdGxlUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBpbmRleDogbnVtYmVyO1xuICAvKipcbiAgICpcbiAgICovXG4gIHNlbGVjdGVkVGFiOiBudW1iZXI7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgc2V0U2VsZWN0ZWRUYWI6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xufTtcblxuY29uc3QgVGFiVGl0bGUgPSAoe1xuICBsYWJlbCxcbiAgaW5kZXgsXG4gIHNlbGVjdGVkVGFiLFxuICBzZXRTZWxlY3RlZFRhYlxufTogVGFiVGl0bGVQcm9wcykgPT4ge1xuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkVGFiKGluZGV4KTtcbiAgfSwgW3NldFNlbGVjdGVkVGFiLCBpbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RJdGVtIGluZGV4PXtpbmRleH0gc2VsZWN0ZWRUYWI9e3NlbGVjdGVkVGFifSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0xpc3RJdGVtPlxuICApO1xufTtcblxuZXhwb3J0IHR5cGUgSXRlbVByb3BzID0ge1xuICAvKipcbiAgICpcbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbn07XG5cbmNvbnN0IEl0ZW0gPSAoeyBjaGlsZHJlbiwgbGFiZWwgfTogSXRlbVByb3BzKSA9PiAoXG4gIDxDb250YWluZXIgbGFiZWw9e2xhYmVsfT57Y2hpbGRyZW59PC9Db250YWluZXI+XG4pO1xuXG5UYWIuSXRlbSA9IEl0ZW07XG4iLCAiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdAbmVvbi1kaXN0cmljdC9zeXN0ZW0nO1xuXG5pbXBvcnQgeyBJdGVtUHJvcHMsIFRhYlRpdGxlUHJvcHMgfSBmcm9tICcuJztcblxuZXhwb3J0IGNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxJdGVtUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIGB9XG5gO1xuXG50eXBlIExpc3RJdGVtUHJvcHMgPSBQaWNrPFRhYlRpdGxlUHJvcHMsICdzZWxlY3RlZFRhYicgfCAnaW5kZXgnPjtcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpPExpc3RJdGVtUHJvcHM+YFxuICAkeyh7IHRoZW1lLCBzZWxlY3RlZFRhYiwgaW5kZXggfSkgPT4gY3NzYFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gICAgcGFkZGluZzogN3B4IDQ1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICR7aW5kZXggPT09IHNlbGVjdGVkVGFiICYmXG4gICAgY3NzYFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBgfVxuICBgfVxuYDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLG1CQUE2Qzs7O0FDQTdDLG9CQUE0QjtBQUlyQixJQUFNLGdCQUFnQixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTTdCLElBQU0sWUFBWSxzQkFBTztBQUFBO0FBQUE7QUFJekIsSUFBTSxPQUFPLHNCQUFPO0FBQUEsSUFDdkIsQ0FBQyxFQUFFLFlBQVk7QUFBQTtBQUFBO0FBQUEsK0JBR1ksTUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRckMsSUFBTSxXQUFXLHNCQUFPO0FBQUEsSUFDM0IsQ0FBQyxFQUFFLE9BQU8sYUFBYSxZQUFZO0FBQUE7QUFBQTtBQUFBLGFBRzFCLE1BQU0sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSXBCLFVBQVUsZUFDWjtBQUFBLDBCQUNzQixNQUFNLE9BQU87QUFBQTtBQUFBLGlDQUVOLE1BQU0sT0FBTztBQUFBLGVBQy9CLE1BQU0sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUQ1QnJCLElBQU0sTUFBTSxDQUFDLEVBQUUsZUFBeUI7QUFDN0MsUUFBTSxDQUFDLGFBQWEsa0JBQWtCLDJCQUFTO0FBRS9DLFNBQ0UsbURBQUMsZUFBRCxNQUNFLG1EQUFDLE1BQUQsTUFDRyxxQ0FBVSxJQUFJLENBQUMsTUFBTSxVQUNwQixtREFBQyxVQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxPQUFPLEtBQUssTUFBTTtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxRQUtMLFlBQVksU0FBUztBQUFBO0FBd0I1QixJQUFNLFdBQVcsQ0FBQztBQUFBLEVBQ2hCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsTUFDbUI7QUFDbkIsUUFBTSxVQUFVLDhCQUFZLE1BQU07QUFDaEMsbUJBQWU7QUFBQSxLQUNkLENBQUMsZ0JBQWdCO0FBRXBCLFNBQ0UsbURBQUMsVUFBRDtBQUFBLElBQVU7QUFBQSxJQUFjO0FBQUEsSUFBMEI7QUFBQSxLQUMvQztBQUFBO0FBZ0JQLElBQU0sT0FBTyxDQUFDLEVBQUUsVUFBVSxZQUN4QixtREFBQyxXQUFEO0FBQUEsRUFBVztBQUFBLEdBQWU7QUFHNUIsSUFBSSxPQUFPOyIsCiAgIm5hbWVzIjogW10KfQo=
