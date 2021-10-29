var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  ContentHeading: () => ContentHeading
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var Wrapper = (0, import_system.default)("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spaces[2]
}));
var Title = (0, import_system.default)("h3")(({ theme }) => ({
  display: "inline-flex",
  gap: theme.spaces[2],
  alignItems: "center",
  fontFamily: "Titillium Web",
  fontWeight: theme.fontWeights.medium,
  fontSize: theme.fontSizes.lg,
  lineHeight: "24px",
  margin: 0,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: theme.colors.white,
  [`@media (max-width: ${theme.breakpoints.md})`]: {
    fontSize: theme.fontSizes.md,
    lineHeight: "20px",
    letterSpacing: "0.1em"
  },
  svg: {
    color: theme.colors.white,
    fontSize: "19px",
    [`@media (max-width: ${theme.breakpoints.md})`]: {
      fontSize: "13px"
    }
  }
}));
var Description = (0, import_system.default)("p")(({ theme, line }) => __spreadProps(__spreadValues({
  fontFamily: "Titillium Web",
  fontSize: theme.fontSizes.md,
  fontWeight: theme.fontWeights.medium,
  lineHeight: "24px",
  color: theme.colors.grey3,
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  margin: 0
}, line && {
  borderLeft: `2px solid ${theme.colors.white}`,
  paddingLeft: "1rem"
}), {
  [`@media (max-width: ${theme.breakpoints.md})`]: {
    fontSize: theme.fontSizes.sm,
    lineHeight: "20px",
    fontWeight: theme.fontWeights.normal,
    letterSpacing: 0
  }
}));

// src/index.tsx
var InfoIcon = () => /* @__PURE__ */ import_react.default.createElement("svg", {
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ import_react.default.createElement("path", {
  fill: "currentColor",
  d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
}));
var ContentHeading = ({
  title,
  description,
  info,
  line = true
}) => /* @__PURE__ */ import_react.default.createElement(Wrapper, null, /* @__PURE__ */ import_react.default.createElement(Title, null, title, info && /* @__PURE__ */ import_react.default.createElement(InfoIcon, null)), description && /* @__PURE__ */ import_react.default.createElement(Description, {
  line
}, description));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ContentHeading
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGVzY3JpcHRpb24sIFRpdGxlLCBXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBJbmZvSWNvbiA9ICgpID0+IChcbiAgPHN2ZyB3aWR0aD1cIjFyZW1cIiBoZWlnaHQ9XCIxcmVtXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICBkPVwiTTggMTZBOCA4IDAgMSAwIDggMGE4IDggMCAwIDAgMCAxNnptLjkzLTkuNDEyLTEgNC43MDVjLS4wNy4zNC4wMjkuNTMzLjMwNC41MzMuMTk0IDAgLjQ4Ny0uMDcuNjg2LS4yNDZsLS4wODguNDE2Yy0uMjg3LjM0Ni0uOTIuNTk4LTEuNDY1LjU5OC0uNzAzIDAtMS4wMDItLjQyMi0uODA4LTEuMzE5bC43MzgtMy40NjhjLjA2NC0uMjkzLjAwNi0uMzk5LS4yODctLjQ3bC0uNDUxLS4wODEuMDgyLS4zODEgMi4yOS0uMjg3ek04IDUuNWExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJ6XCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCB0eXBlIENvbnRlbnRIZWFkaW5nUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKlxuICAgKiBAZGVmYXVsdCBgZmFsc2VcbiAgICovXG4gIGluZm8/OiBib29sZWFuO1xuICAvKipcbiAgICpcbiAgICogQGRlZmF1bHQgYHRydWVgXG4gICAqL1xuICBsaW5lPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQ29udGVudEhlYWRpbmcgY29tcG9uZW50XG4gKlxuICogQGRlc2NyaXB0aW9uIEEgY29tcG9uZW50IHRvIGRpc3BsYXkgYSB0aXRsZSBhbmQgZGVzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRlbnRIZWFkaW5nID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBpbmZvLFxuICBsaW5lID0gdHJ1ZVxufTogQ29udGVudEhlYWRpbmdQcm9wcykgPT4gKFxuICA8V3JhcHBlcj5cbiAgICA8VGl0bGU+XG4gICAgICB7dGl0bGV9XG5cbiAgICAgIHtpbmZvICYmIDxJbmZvSWNvbiAvPn1cbiAgICA8L1RpdGxlPlxuXG4gICAge2Rlc2NyaXB0aW9uICYmIDxEZXNjcmlwdGlvbiBsaW5lPXtsaW5lfT57ZGVzY3JpcHRpb259PC9EZXNjcmlwdGlvbj59XG4gIDwvV3JhcHBlcj5cbik7XG4iLCAiaW1wb3J0IHN0eWxlZCBmcm9tICdAbmVvbi1kaXN0cmljdC9zeXN0ZW0nO1xuXG5pbXBvcnQgeyBDb250ZW50SGVhZGluZ1Byb3BzIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBnYXA6IHRoZW1lLnNwYWNlc1syXVxufSkpO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQoJ2gzJykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgZ2FwOiB0aGVtZS5zcGFjZXNbMl0sXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBmb250RmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsXG4gIGZvbnRXZWlnaHQ6IHRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bSxcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5sZyxcbiAgbGluZUhlaWdodDogJzI0cHgnLFxuICBtYXJnaW46IDAsXG4gIGxldHRlclNwYWNpbmc6ICcwLjA1ZW0nLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcblxuICBbYEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLm1kfSlgXToge1xuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMubWQsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjFlbSdcbiAgfSxcbiAgc3ZnOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICBmb250U2l6ZTogJzE5cHgnLFxuXG4gICAgW2BAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy5tZH0pYF06IHtcbiAgICAgIGZvbnRTaXplOiAnMTNweCdcbiAgICB9XG4gIH1cbn0pKTtcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkKCdwJyk8Q29udGVudEhlYWRpbmdQcm9wcz4oXG4gICh7IHRoZW1lLCBsaW5lIH0pID0+ICh7XG4gICAgZm9udEZhbWlseTogJ1RpdGlsbGl1bSBXZWInLFxuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMubWQsXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubWVkaXVtLFxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjAzZW0nLFxuICAgIG1hcmdpbjogMCxcblxuICAgIC4uLihsaW5lICYmIHtcbiAgICAgIGJvcmRlckxlZnQ6IGAycHggc29saWQgJHt0aGVtZS5jb2xvcnMud2hpdGV9YCxcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMXJlbSdcbiAgICB9KSxcblxuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMubWR9KWBdOiB7XG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgIH1cbiAgfSlcbik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLG1CQUFrQjs7O0FDQWxCLG9CQUFtQjtBQUlaLElBQU0sVUFBVSwyQkFBTyxPQUFPLENBQUMsRUFBRSxZQUFhO0FBQUEsRUFDbkQsU0FBUztBQUFBLEVBQ1QsZUFBZTtBQUFBLEVBQ2YsS0FBSyxNQUFNLE9BQU87QUFBQTtBQUdiLElBQU0sUUFBUSwyQkFBTyxNQUFNLENBQUMsRUFBRSxZQUFhO0FBQUEsRUFDaEQsU0FBUztBQUFBLEVBQ1QsS0FBSyxNQUFNLE9BQU87QUFBQSxFQUNsQixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixZQUFZLE1BQU0sWUFBWTtBQUFBLEVBQzlCLFVBQVUsTUFBTSxVQUFVO0FBQUEsRUFDMUIsWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsT0FBTyxNQUFNLE9BQU87QUFBQSxHQUVuQixzQkFBc0IsTUFBTSxZQUFZLFFBQVE7QUFBQSxJQUMvQyxVQUFVLE1BQU0sVUFBVTtBQUFBLElBQzFCLFlBQVk7QUFBQSxJQUNaLGVBQWU7QUFBQTtBQUFBLEVBRWpCLEtBQUs7QUFBQSxJQUNILE9BQU8sTUFBTSxPQUFPO0FBQUEsSUFDcEIsVUFBVTtBQUFBLEtBRVQsc0JBQXNCLE1BQU0sWUFBWSxRQUFRO0FBQUEsTUFDL0MsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUtULElBQU0sY0FBYywyQkFBTyxLQUNoQyxDQUFDLEVBQUUsT0FBTyxXQUFZO0FBQUEsRUFDcEIsWUFBWTtBQUFBLEVBQ1osVUFBVSxNQUFNLFVBQVU7QUFBQSxFQUMxQixZQUFZLE1BQU0sWUFBWTtBQUFBLEVBQzlCLFlBQVk7QUFBQSxFQUNaLE9BQU8sTUFBTSxPQUFPO0FBQUEsRUFDcEIsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsUUFBUTtBQUFBLEdBRUosUUFBUTtBQUFBLEVBQ1YsWUFBWSxhQUFhLE1BQU0sT0FBTztBQUFBLEVBQ3RDLGFBQWE7QUFBQSxJQVpLO0FBQUEsR0FlbkIsc0JBQXNCLE1BQU0sWUFBWSxRQUFRO0FBQUEsSUFDL0MsVUFBVSxNQUFNLFVBQVU7QUFBQSxJQUMxQixZQUFZO0FBQUEsSUFDWixZQUFZLE1BQU0sWUFBWTtBQUFBLElBQzlCLGVBQWU7QUFBQTtBQUFBOzs7QUR0RHJCLElBQU0sV0FBVyxNQUNmLG1EQUFDLE9BQUQ7QUFBQSxFQUFLLE9BQU07QUFBQSxFQUFPLFFBQU87QUFBQSxFQUFPLFdBQVU7QUFBQSxFQUFRLGVBQVk7QUFBQSxHQUM1RCxtREFBQyxRQUFEO0FBQUEsRUFDRSxNQUFLO0FBQUEsRUFDTCxHQUFFO0FBQUE7QUErQkQsSUFBTSxpQkFBaUIsQ0FBQztBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLE9BQU87QUFBQSxNQUVQLG1EQUFDLFNBQUQsTUFDRSxtREFBQyxPQUFELE1BQ0csT0FFQSxRQUFRLG1EQUFDLFVBQUQsUUFHVixlQUFlLG1EQUFDLGFBQUQ7QUFBQSxFQUFhO0FBQUEsR0FBYTsiLAogICJuYW1lcyI6IFtdCn0K
