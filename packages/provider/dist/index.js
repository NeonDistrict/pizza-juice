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
  ThemeProvider: () => ThemeProvider
});

// src/index.tsx
var import_react = __toModule(require("react"));
var import_system2 = __toModule(require("@neon-district/system"));
var import_theme = __toModule(require("@neon-district/theme"));

// src/reset.ts
var import_system = __toModule(require("@neon-district/system"));
var ResetStyles = import_system.createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
var reset_default = ResetStyles;

// src/index.tsx
var ThemeProvider = ({
  resetCss = true,
  children
}) => {
  return /* @__PURE__ */ import_react.default.createElement(import_system2.ThemeProvider, {
    theme: import_theme.default
  }, resetCss && /* @__PURE__ */ import_react.default.createElement(reset_default, null), children);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThemeProvider
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvcmVzZXQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gJy4vc3JjJztcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBUaGVtZVByb3ZpZGVyIGFzIFN0eWxlZFByb3ZpZGVyLFxuICBEZWZhdWx0VGhlbWVcbn0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuaW1wb3J0IHRoZW1lIGZyb20gJ0BuZW9uLWRpc3RyaWN0L3RoZW1lJztcblxuaW1wb3J0IFJlc2V0U3R5bGVzIGZyb20gJy4vcmVzZXQnO1xuXG50eXBlIFRoZW1lUHJvdmlkZXJQcm9wcyA9IHtcbiAgLyoqXG4gICAqXG4gICAqL1xuICB0aGVtZT86IERlZmF1bHRUaGVtZTtcbiAgLyoqXG4gICAqXG4gICAqL1xuICByZXNldENzcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBAZGVmYXVsdCBgdHJ1ZWBcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoe1xuICByZXNldENzcyA9IHRydWUsXG4gIGNoaWxkcmVuXG59OiBUaGVtZVByb3ZpZGVyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIHtyZXNldENzcyAmJiA8UmVzZXRTdHlsZXMgLz59XG5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZFByb3ZpZGVyPlxuICApO1xufTtcbiIsICJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmNvbnN0IFJlc2V0U3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIGh0bWwsXG4gIGJvZHksXG4gIGRpdixcbiAgc3BhbixcbiAgYXBwbGV0LFxuICBvYmplY3QsXG4gIGlmcmFtZSxcbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNixcbiAgcCxcbiAgYmxvY2txdW90ZSxcbiAgcHJlLFxuICBhLFxuICBhYmJyLFxuICBhY3JvbnltLFxuICBhZGRyZXNzLFxuICBiaWcsXG4gIGNpdGUsXG4gIGNvZGUsXG4gIGRlbCxcbiAgZGZuLFxuICBlbSxcbiAgaW1nLFxuICBpbnMsXG4gIGtiZCxcbiAgcSxcbiAgcyxcbiAgc2FtcCxcbiAgc21hbGwsXG4gIHN0cmlrZSxcbiAgc3Ryb25nLFxuICBzdWIsXG4gIHN1cCxcbiAgdHQsXG4gIHZhcixcbiAgYixcbiAgdSxcbiAgaSxcbiAgY2VudGVyLFxuICBkbCxcbiAgZHQsXG4gIGRkLFxuICBvbCxcbiAgdWwsXG4gIGxpLFxuICBmaWVsZHNldCxcbiAgZm9ybSxcbiAgbGFiZWwsXG4gIGxlZ2VuZCxcbiAgdGFibGUsXG4gIGNhcHRpb24sXG4gIHRib2R5LFxuICB0Zm9vdCxcbiAgdGhlYWQsXG4gIHRyLFxuICB0aCxcbiAgdGQsXG4gIGFydGljbGUsXG4gIGFzaWRlLFxuICBjYW52YXMsXG4gIGRldGFpbHMsXG4gIGVtYmVkLFxuICBmaWd1cmUsXG4gIGZpZ2NhcHRpb24sXG4gIGZvb3RlcixcbiAgaGVhZGVyLFxuICBoZ3JvdXAsXG4gIG1lbnUsXG4gIG5hdixcbiAgb3V0cHV0LFxuICBydWJ5LFxuICBzZWN0aW9uLFxuICBzdW1tYXJ5LFxuICB0aW1lLFxuICBtYXJrLFxuICBhdWRpbyxcbiAgdmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cbiAgYXJ0aWNsZSxcbiAgYXNpZGUsXG4gIGRldGFpbHMsXG4gIGZpZ2NhcHRpb24sXG4gIGZpZ3VyZSxcbiAgZm9vdGVyLFxuICBoZWFkZXIsXG4gIGhncm91cCxcbiAgbWVudSxcbiAgbmF2LFxuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICBvbCxcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgYmxvY2txdW90ZSxcbiAgcSB7XG4gICAgcXVvdGVzOiBub25lO1xuICB9XG4gIGJsb2NrcXVvdGU6YmVmb3JlLFxuICBibG9ja3F1b3RlOmFmdGVyLFxuICBxOmJlZm9yZSxcbiAgcTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbiAgfVxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRTdHlsZXM7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxtQkFBa0I7QUFFbEIscUJBR087QUFFUCxtQkFBa0I7OztBQ1BsQixvQkFBa0M7QUFFbEMsSUFBTSxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4SHBCLElBQU8sZ0JBQVE7OztBRHRHUixJQUFNLGdCQUFnQixDQUFDO0FBQUEsRUFDNUIsV0FBVztBQUFBLEVBQ1g7QUFBQSxNQUN3QjtBQUN4QixTQUNFLG1EQUFDLDhCQUFEO0FBQUEsSUFBZ0IsT0FBTztBQUFBLEtBQ3BCLFlBQVksbURBQUMsZUFBRCxPQUVaO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
