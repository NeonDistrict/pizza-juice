var w=Object.create;var o=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,S=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(i,r,s)=>r in i?o(i,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[r]=s,l=(i,r)=>{for(var s in r||(r={}))c.call(r,s)&&u(i,s,r[s]);if(a)for(var s of a(r))g.call(r,s)&&u(i,s,r[s]);return i};var f=i=>o(i,"__esModule",{value:!0});var d=(i,r)=>{var s={};for(var e in i)c.call(i,e)&&r.indexOf(e)<0&&(s[e]=i[e]);if(i!=null&&a)for(var e of a(i))r.indexOf(e)<0&&g.call(i,e)&&(s[e]=i[e]);return s};var A=(i,r)=>{f(i);for(var s in r)o(i,s,{get:r[s],enumerable:!0})},C=(i,r,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of v(r))!c.call(i,e)&&e!=="default"&&o(i,e,{get:()=>r[e],enumerable:!(s=x(r,e))||s.enumerable});return i},p=i=>C(f(o(i!=null?w(S(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i);A(exports,{BaseCarousel:()=>P});var t=p(require("react")),m=p(require("react-slick"));var n=p(require("@neon-district/system")),h=n.default.section`
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
`,k=n.default.button`
  ${({theme:i})=>n.css`
    width: 40px;
    height: 40px;
    margin: 0 ${i.spaces[4]};
    position: absolute;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${i.colors.grey4};
    color: ${i.colors.white};
    border: none;
    border-radius: ${i.radii.full};
    cursor: pointer;
    transition: ${i.durations.fast};

    &:hover {
      background: ${i.colors.grey3};
    }
  `}
`;var y=({d:i})=>t.default.createElement("svg",{width:"1rem",height:"1rem",focusable:"false","aria-hidden":"true"},t.default.createElement("path",{fill:"currentColor",d:i})),B=r=>{var i=d(r,[]);return t.default.createElement(k,l({},i),t.default.createElement(y,{d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}))},$=r=>{var i=d(r,[]);return t.default.createElement(k,l({},i),t.default.createElement(y,{d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}))},z=({children:i,settings:r},s)=>{let e=l({nextArrow:t.default.createElement($,null),prevArrow:t.default.createElement(B,null)},r);return t.default.createElement(h,null,t.default.createElement(m.default,l({ref:s},e),i))},P=(0,t.forwardRef)(z);0&&(module.exports={BaseCarousel});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTbGlja1NsaWRlciwgeyBTZXR0aW5ncyB9IGZyb20gJ3JlYWN0LXNsaWNrJztcblxuaW1wb3J0IHsgV3JhcHBlciwgQXJyb3cgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIEJhc2VDYXJvdXNlbFNldHRpbmdzID0gU2V0dGluZ3M7XG5cbmV4cG9ydCB0eXBlIEJhc2VDYXJvdXNlbFByb3BzID0ge1xuICAvKipcbiAgICpcbiAgICovXG4gIHNldHRpbmdzOiBCYXNlQ2Fyb3VzZWxTZXR0aW5ncztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuY29uc3QgQmFzZUljb24gPSAoeyBkIH0pID0+IChcbiAgPHN2ZyB3aWR0aD1cIjFyZW1cIiBoZWlnaHQ9XCIxcmVtXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD17ZH0gLz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCBQcmV2QXJyb3cgPSAoeyAuLi5wcm9wcyB9KSA9PiAoXG4gIDxBcnJvdyB7Li4ucHJvcHN9PlxuICAgIDxCYXNlSWNvbiBkPVwiTTExLjM1NCAxLjY0NmEuNS41IDAgMCAxIDAgLjcwOEw1LjcwNyA4bDUuNjQ3IDUuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTYtNmEuNS41IDAgMCAxIDAtLjcwOGw2LTZhLjUuNSAwIDAgMSAuNzA4IDB6XCIgLz5cbiAgPC9BcnJvdz5cbik7XG5cbmNvbnN0IE5leHRBcnJvdyA9ICh7IC4uLnByb3BzIH0pID0+IChcbiAgPEFycm93IHsuLi5wcm9wc30+XG4gICAgPEJhc2VJY29uIGQ9XCJNNC42NDYgMS42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEgMCAuNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTAuMjkzIDggNC42NDYgMi4zNTRhLjUuNSAwIDAgMSAwLS43MDh6XCIgLz5cbiAgPC9BcnJvdz5cbik7XG5cbmNvbnN0IENhcm91c2VsOiBSZWFjdC5Gb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb248XG4gIFNsaWNrU2xpZGVyLFxuICBCYXNlQ2Fyb3VzZWxQcm9wc1xuPiA9ICh7IGNoaWxkcmVuLCBzZXR0aW5ncyB9LCByZWYpID0+IHtcbiAgY29uc3QgZGVmYXVsdFNldHRpbmdzOiBCYXNlQ2Fyb3VzZWxTZXR0aW5ncyA9IHtcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IC8+LFxuICAgIC4uLnNldHRpbmdzXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxTbGlja1NsaWRlciByZWY9e3JlZn0gey4uLmRlZmF1bHRTZXR0aW5nc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU2xpY2tTbGlkZXI+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEJhc2VDYXJvdXNlbCA9IGZvcndhcmRSZWYoQ2Fyb3VzZWwpO1xuIiwgImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgLnNsaWNrLXNsaWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5zbGljay1saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5zbGljay1saXN0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLnNsaWNrLWxpc3QuZHJhZ2dpbmcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjdXJzb3I6IGhhbmQ7XG4gIH1cblxuICAuc2xpY2stc2xpZGVyIC5zbGljay10cmFjayxcbiAgLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICAuc2xpY2stdHJhY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zbGljay10cmFjazpiZWZvcmUsXG4gIC5zbGljay10cmFjazphZnRlciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY29udGVudDogJyc7XG4gIH1cblxuICAuc2xpY2stdHJhY2s6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXRyYWNrIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuc2xpY2stc2xpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5zbGljay1zbGlkZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLnNsaWNrLXNsaWRlIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2xpY2stc2xpZGUuc2xpY2stbG9hZGluZyBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2xpY2stc2xpZGUuZHJhZ2dpbmcgaW1nIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXNsaWRlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuc2xpY2stdmVydGljYWwgLnNsaWNrLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQXJyb3cgPSBzdHlsZWQuYnV0dG9uYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwICR7dGhlbWUuc3BhY2VzWzRdfTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZ3JleTR9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUucmFkaWkuZnVsbH07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUuZHVyYXRpb25zLmZhc3R9O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gICAgfVxuICBgfVxuYDtcbiJdLAogICJtYXBwaW5ncyI6ICJvZ0NBQUEsZ0NDQUEsTUFBa0Msb0JBRWxDLEVBQXNDLDBCQ0Z0QyxNQUE0QixvQ0FFZixFQUFVLFVBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXlHakIsRUFBUSxVQUFPO0FBQUEsSUFDeEIsQ0FBQyxDQUFFLFdBQVk7QUFBQTtBQUFBO0FBQUEsZ0JBR0gsRUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU1YLEVBQU0sT0FBTztBQUFBLGFBQ2xCLEVBQU0sT0FBTztBQUFBO0FBQUEscUJBRUwsRUFBTSxNQUFNO0FBQUE7QUFBQSxrQkFFZixFQUFNLFVBQVU7QUFBQTtBQUFBO0FBQUEsb0JBR2QsRUFBTSxPQUFPO0FBQUE7QUFBQTtFRDFHakMsR0FBTSxHQUFXLENBQUMsQ0FBRSxPQUNsQix3QkFBQyxNQUFELENBQUssTUFBTSxPQUFPLE9BQU8sT0FBTyxVQUFVLFFBQVEsY0FBWSxRQUM1RCx3QkFBQyxPQUFELENBQU0sS0FBSyxlQUFlLEVBQUcsS0FJM0IsRUFBWSxBQUFDLEdBQWMsQ0FBZCxHQUFLLEtBQUwsRUFBSyxJQUN0QiwrQkFBQyxFQUFELEtBQVcsR0FDVCx3QkFBQyxFQUFELENBQVUsRUFBRSw0SEFJVixFQUFZLEFBQUMsR0FBYyxDQUFkLEdBQUssS0FBTCxFQUFLLElBQ3RCLCtCQUFDLEVBQUQsS0FBVyxHQUNULHdCQUFDLEVBQUQsQ0FBVSxFQUFFLDZIQUlWLEVBR0YsQ0FBQyxDQUFFLFdBQVUsWUFBWSxJQUFRLENBQ25DLEdBQU0sR0FBd0MsR0FDNUMsVUFBVyx3QkFBQyxFQUFELE1BQ1gsVUFBVyx3QkFBQyxFQUFELE9BQ1IsR0FHTCxNQUNFLHlCQUFDLEVBQUQsS0FDRSx3QkFBQyxVQUFELEdBQWEsSUFBSyxHQUFTLEdBQ3hCLEtBTUksRUFBZSxpQkFBVyIsCiAgIm5hbWVzIjogW10KfQo=
