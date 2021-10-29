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
  BaseCarousel: () => BaseCarousel
});

// src/index.tsx
var import_react = __toModule(require("react"));
var import_react_slick = __toModule(require("react-slick"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var Wrapper = import_system.default.section`
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }
`;
var Arrow = import_system.default.button`
  ${({ theme }) => import_system.css`
    width: 40px;
    height: 40px;
    margin: 0 ${theme.spaces[4]};
    position: absolute;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.grey4};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.radii.full};
    cursor: pointer;
    transition: ${theme.durations.fast};

    &:hover {
      background: ${theme.colors.grey3};
    }
  `}
`;

// src/index.tsx
var BaseIcon = ({ d }) => /* @__PURE__ */ import_react.default.createElement("svg", {
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ import_react.default.createElement("path", {
  fill: "currentColor",
  d
}));
var PrevArrow = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ import_react.default.createElement(Arrow, __spreadValues({}, props), /* @__PURE__ */ import_react.default.createElement(BaseIcon, {
    d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }));
};
var NextArrow = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ import_react.default.createElement(Arrow, __spreadValues({}, props), /* @__PURE__ */ import_react.default.createElement(BaseIcon, {
    d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
  }));
};
var Carousel = ({ children, settings }, ref) => {
  const defaultSettings = __spreadValues({
    nextArrow: /* @__PURE__ */ import_react.default.createElement(NextArrow, null),
    prevArrow: /* @__PURE__ */ import_react.default.createElement(PrevArrow, null)
  }, settings);
  return /* @__PURE__ */ import_react.default.createElement(Wrapper, null, /* @__PURE__ */ import_react.default.createElement(import_react_slick.default, __spreadValues({
    ref
  }, defaultSettings), children));
};
var BaseCarousel = (0, import_react.forwardRef)(Carousel);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseCarousel
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTbGlja1NsaWRlciwgeyBTZXR0aW5ncyB9IGZyb20gJ3JlYWN0LXNsaWNrJztcblxuaW1wb3J0IHsgV3JhcHBlciwgQXJyb3cgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIEJhc2VDYXJvdXNlbFNldHRpbmdzID0gU2V0dGluZ3M7XG5cbmV4cG9ydCB0eXBlIEJhc2VDYXJvdXNlbFByb3BzID0ge1xuICAvKipcbiAgICpcbiAgICovXG4gIHNldHRpbmdzOiBCYXNlQ2Fyb3VzZWxTZXR0aW5ncztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuY29uc3QgQmFzZUljb24gPSAoeyBkIH0pID0+IChcbiAgPHN2ZyB3aWR0aD1cIjFyZW1cIiBoZWlnaHQ9XCIxcmVtXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD17ZH0gLz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCBQcmV2QXJyb3cgPSAoeyAuLi5wcm9wcyB9KSA9PiAoXG4gIDxBcnJvdyB7Li4ucHJvcHN9PlxuICAgIDxCYXNlSWNvbiBkPVwiTTExLjM1NCAxLjY0NmEuNS41IDAgMCAxIDAgLjcwOEw1LjcwNyA4bDUuNjQ3IDUuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTYtNmEuNS41IDAgMCAxIDAtLjcwOGw2LTZhLjUuNSAwIDAgMSAuNzA4IDB6XCIgLz5cbiAgPC9BcnJvdz5cbik7XG5cbmNvbnN0IE5leHRBcnJvdyA9ICh7IC4uLnByb3BzIH0pID0+IChcbiAgPEFycm93IHsuLi5wcm9wc30+XG4gICAgPEJhc2VJY29uIGQ9XCJNNC42NDYgMS42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEgMCAuNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTAuMjkzIDggNC42NDYgMi4zNTRhLjUuNSAwIDAgMSAwLS43MDh6XCIgLz5cbiAgPC9BcnJvdz5cbik7XG5cbmNvbnN0IENhcm91c2VsOiBSZWFjdC5Gb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb248XG4gIFNsaWNrU2xpZGVyLFxuICBCYXNlQ2Fyb3VzZWxQcm9wc1xuPiA9ICh7IGNoaWxkcmVuLCBzZXR0aW5ncyB9LCByZWYpID0+IHtcbiAgY29uc3QgZGVmYXVsdFNldHRpbmdzOiBCYXNlQ2Fyb3VzZWxTZXR0aW5ncyA9IHtcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IC8+LFxuICAgIC4uLnNldHRpbmdzXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxTbGlja1NsaWRlciByZWY9e3JlZn0gey4uLmRlZmF1bHRTZXR0aW5nc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU2xpY2tTbGlkZXI+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEJhc2VDYXJvdXNlbCA9IGZvcndhcmRSZWYoQ2Fyb3VzZWwpO1xuIiwgImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgLnNsaWNrLXNsaWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5zbGljay1saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5zbGljay1saXN0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLnNsaWNrLWxpc3QuZHJhZ2dpbmcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjdXJzb3I6IGhhbmQ7XG4gIH1cblxuICAuc2xpY2stc2xpZGVyIC5zbGljay10cmFjayxcbiAgLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICAuc2xpY2stdHJhY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zbGljay10cmFjazpiZWZvcmUsXG4gIC5zbGljay10cmFjazphZnRlciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY29udGVudDogJyc7XG4gIH1cblxuICAuc2xpY2stdHJhY2s6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXRyYWNrIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuc2xpY2stc2xpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5zbGljay1zbGlkZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLnNsaWNrLXNsaWRlIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2xpY2stc2xpZGUuc2xpY2stbG9hZGluZyBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2xpY2stc2xpZGUuZHJhZ2dpbmcgaW1nIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXNsaWRlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuc2xpY2stdmVydGljYWwgLnNsaWNrLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQXJyb3cgPSBzdHlsZWQuYnV0dG9uYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwICR7dGhlbWUuc3BhY2VzWzRdfTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZ3JleTR9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUucmFkaWkuZnVsbH07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUuZHVyYXRpb25zLmZhc3R9O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gICAgfVxuICBgfVxuYDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7O0FDQUEsbUJBQWtDO0FBRWxDLHlCQUFzQzs7O0FDRnRDLG9CQUE0QjtBQUVyQixJQUFNLFVBQVUsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlHdkIsSUFBTSxRQUFRLHNCQUFPO0FBQUEsSUFDeEIsQ0FBQyxFQUFFLFlBQVk7QUFBQTtBQUFBO0FBQUEsZ0JBR0gsTUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU1YLE1BQU0sT0FBTztBQUFBLGFBQ2xCLE1BQU0sT0FBTztBQUFBO0FBQUEscUJBRUwsTUFBTSxNQUFNO0FBQUE7QUFBQSxrQkFFZixNQUFNLFVBQVU7QUFBQTtBQUFBO0FBQUEsb0JBR2QsTUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBOzs7QUQxR2pDLElBQU0sV0FBVyxDQUFDLEVBQUUsUUFDbEIsbURBQUMsT0FBRDtBQUFBLEVBQUssT0FBTTtBQUFBLEVBQU8sUUFBTztBQUFBLEVBQU8sV0FBVTtBQUFBLEVBQVEsZUFBWTtBQUFBLEdBQzVELG1EQUFDLFFBQUQ7QUFBQSxFQUFNLE1BQUs7QUFBQSxFQUFlO0FBQUE7QUFJOUIsSUFBTSxZQUFZLENBQUMsT0FBYztBQUFkLE1BQUssa0JBQUwsSUFBSztBQUN0Qiw0REFBQyxPQUFELG1CQUFXLFFBQ1QsbURBQUMsVUFBRDtBQUFBLElBQVUsR0FBRTtBQUFBO0FBQUE7QUFJaEIsSUFBTSxZQUFZLENBQUMsT0FBYztBQUFkLE1BQUssa0JBQUwsSUFBSztBQUN0Qiw0REFBQyxPQUFELG1CQUFXLFFBQ1QsbURBQUMsVUFBRDtBQUFBLElBQVUsR0FBRTtBQUFBO0FBQUE7QUFJaEIsSUFBTSxXQUdGLENBQUMsRUFBRSxVQUFVLFlBQVksUUFBUTtBQUNuQyxRQUFNLGtCQUF3QztBQUFBLElBQzVDLFdBQVcsbURBQUMsV0FBRDtBQUFBLElBQ1gsV0FBVyxtREFBQyxXQUFEO0FBQUEsS0FDUjtBQUdMLFNBQ0UsbURBQUMsU0FBRCxNQUNFLG1EQUFDLDRCQUFEO0FBQUEsSUFBYTtBQUFBLEtBQWMsa0JBQ3hCO0FBQUE7QUFNRixJQUFNLGVBQWUsNkJBQVc7IiwKICAibmFtZXMiOiBbXQp9Cg==
