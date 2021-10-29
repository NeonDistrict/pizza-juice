var b=Object.create;var i=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var l=e=>i(e,"__esModule",{value:!0});var g=(e,t)=>{l(e);for(var o in t)i(e,o,{get:t[o],enumerable:!0})},v=(e,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of f(t))!y.call(e,r)&&r!=="default"&&i(e,r,{get:()=>t[r],enumerable:!(o=h(t,r))||o.enumerable});return e},a=e=>v(l(i(e!=null?b(u(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);g(exports,{ThemeProvider:()=>k});var s=a(require("react")),c=a(require("@neon-district/system")),p=a(require("@neon-district/theme"));var n=a(require("@neon-district/system")),q=n.createGlobalStyle`
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
`,m=q;var k=({resetCss:e=!0,children:t})=>s.default.createElement(c.ThemeProvider,{theme:p.default},e&&s.default.createElement(m,null),t);0&&(module.exports={ThemeProvider});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvcmVzZXQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gJy4vc3JjJztcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBUaGVtZVByb3ZpZGVyIGFzIFN0eWxlZFByb3ZpZGVyLFxuICBEZWZhdWx0VGhlbWVcbn0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuaW1wb3J0IHRoZW1lIGZyb20gJ0BuZW9uLWRpc3RyaWN0L3RoZW1lJztcblxuaW1wb3J0IFJlc2V0U3R5bGVzIGZyb20gJy4vcmVzZXQnO1xuXG50eXBlIFRoZW1lUHJvdmlkZXJQcm9wcyA9IHtcbiAgLyoqXG4gICAqXG4gICAqL1xuICB0aGVtZT86IERlZmF1bHRUaGVtZTtcbiAgLyoqXG4gICAqXG4gICAqL1xuICByZXNldENzcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBAZGVmYXVsdCBgdHJ1ZWBcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoe1xuICByZXNldENzcyA9IHRydWUsXG4gIGNoaWxkcmVuXG59OiBUaGVtZVByb3ZpZGVyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIHtyZXNldENzcyAmJiA8UmVzZXRTdHlsZXMgLz59XG5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZFByb3ZpZGVyPlxuICApO1xufTtcbiIsICJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmNvbnN0IFJlc2V0U3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIGh0bWwsXG4gIGJvZHksXG4gIGRpdixcbiAgc3BhbixcbiAgYXBwbGV0LFxuICBvYmplY3QsXG4gIGlmcmFtZSxcbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNixcbiAgcCxcbiAgYmxvY2txdW90ZSxcbiAgcHJlLFxuICBhLFxuICBhYmJyLFxuICBhY3JvbnltLFxuICBhZGRyZXNzLFxuICBiaWcsXG4gIGNpdGUsXG4gIGNvZGUsXG4gIGRlbCxcbiAgZGZuLFxuICBlbSxcbiAgaW1nLFxuICBpbnMsXG4gIGtiZCxcbiAgcSxcbiAgcyxcbiAgc2FtcCxcbiAgc21hbGwsXG4gIHN0cmlrZSxcbiAgc3Ryb25nLFxuICBzdWIsXG4gIHN1cCxcbiAgdHQsXG4gIHZhcixcbiAgYixcbiAgdSxcbiAgaSxcbiAgY2VudGVyLFxuICBkbCxcbiAgZHQsXG4gIGRkLFxuICBvbCxcbiAgdWwsXG4gIGxpLFxuICBmaWVsZHNldCxcbiAgZm9ybSxcbiAgbGFiZWwsXG4gIGxlZ2VuZCxcbiAgdGFibGUsXG4gIGNhcHRpb24sXG4gIHRib2R5LFxuICB0Zm9vdCxcbiAgdGhlYWQsXG4gIHRyLFxuICB0aCxcbiAgdGQsXG4gIGFydGljbGUsXG4gIGFzaWRlLFxuICBjYW52YXMsXG4gIGRldGFpbHMsXG4gIGVtYmVkLFxuICBmaWd1cmUsXG4gIGZpZ2NhcHRpb24sXG4gIGZvb3RlcixcbiAgaGVhZGVyLFxuICBoZ3JvdXAsXG4gIG1lbnUsXG4gIG5hdixcbiAgb3V0cHV0LFxuICBydWJ5LFxuICBzZWN0aW9uLFxuICBzdW1tYXJ5LFxuICB0aW1lLFxuICBtYXJrLFxuICBhdWRpbyxcbiAgdmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cbiAgYXJ0aWNsZSxcbiAgYXNpZGUsXG4gIGRldGFpbHMsXG4gIGZpZ2NhcHRpb24sXG4gIGZpZ3VyZSxcbiAgZm9vdGVyLFxuICBoZWFkZXIsXG4gIGhncm91cCxcbiAgbWVudSxcbiAgbmF2LFxuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICBvbCxcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgYmxvY2txdW90ZSxcbiAgcSB7XG4gICAgcXVvdGVzOiBub25lO1xuICB9XG4gIGJsb2NrcXVvdGU6YmVmb3JlLFxuICBibG9ja3F1b3RlOmFmdGVyLFxuICBxOmJlZm9yZSxcbiAgcTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbiAgfVxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRTdHlsZXM7XG4iXSwKICAibWFwcGluZ3MiOiAibWxCQUFBLGlDQ0FBLE1BQWtCLG9CQUVsQixFQUdPLG9DQUVQLEVBQWtCLG1DQ1BsQixNQUFrQyxvQ0FFNUIsRUFBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBOEhiLEVBQVEsRUR0R1IsR0FBTSxHQUFnQixDQUFDLENBQzVCLFdBQVcsR0FDWCxjQUdFLHdCQUFDLGdCQUFELENBQWdCLE1BQU8sV0FDcEIsR0FBWSx3QkFBQyxFQUFELE1BRVoiLAogICJuYW1lcyI6IFtdCn0K
