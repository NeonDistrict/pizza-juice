var g=Object.create;var a=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var l=e=>a(e,"__esModule",{value:!0});var u=(e,o)=>{l(e);for(var s in o)a(e,s,{get:o[s],enumerable:!0})},y=(e,o,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of b(o))!x.call(e,t)&&t!=="default"&&a(e,t,{get:()=>o[t],enumerable:!(s=$(o,t))||s.enumerable});return e},n=e=>y(l(a(e!=null?g(f(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);u(exports,{Label:()=>m});var c=n(require("react"));var r=n(require("@neon-district/system")),L=e=>({success:r.css`
    color: ${e.colors.white};
    background: ${e.colors.green1};
  `,warning:r.css`
    color: ${e.colors.grey5};
    background: ${e.colors.yellow1};
  `,danger:r.css`
    color: ${e.colors.white};
    background: ${e.colors.red1};
  `}),p=r.default.div`
  ${({theme:e,variant:o,icon:s})=>r.css`
    padding: ${e.spaces[1]} ${e.spaces[2]};
    display: inline-flex;
    align-items: center;
    gap: 10px;

    ${s&&(0,r.css)({paddingLeft:"10px"})}
    ${o&&L(e)[o]}
  `}
`,d=r.default.label`
  ${({theme:e})=>r.css`
    user-select: none;
    text-transform: uppercase;
    line-height: 150%;
    font-size: ${e.fontSizes.sm};
  `}
`;var m=({children:e,icon:o,variant:s="success"})=>c.default.createElement(p,{variant:s},o&&o,c.default.createElement(d,null,e));0&&(module.exports={Label});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhYmVsU3R5bGVzLCBUZXh0IH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgdHlwZSBMYWJlbFByb3BzID0ge1xuICAvKipcbiAgICpcbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdmFyaWFudD86ICdzdWNjZXNzJyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnO1xuICAvKipcbiAgICpcbiAgICogQGRlZmF1bHQgXCJzdWNjZXNzXCJcbiAgICovXG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSAoeyBjaGlsZHJlbiwgaWNvbiwgdmFyaWFudCA9ICdzdWNjZXNzJyB9OiBMYWJlbFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExhYmVsU3R5bGVzIHZhcmlhbnQ9e3ZhcmlhbnR9PlxuICAgICAge2ljb24gJiYgaWNvbn1cbiAgICAgIDxUZXh0PntjaGlsZHJlbn08L1RleHQ+XG4gICAgPC9MYWJlbFN0eWxlcz5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIERlZmF1bHRUaGVtZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5pbXBvcnQgeyBMYWJlbFByb3BzIH0gZnJvbSAnLic7XG5cbmNvbnN0IHZhcmlhbnRzID0gKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+ICh7XG4gIHN1Y2Nlc3M6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmdyZWVuMX07XG4gIGAsXG4gIHdhcm5pbmc6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTV9O1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnllbGxvdzF9O1xuICBgLFxuICBkYW5nZXI6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnJlZDF9O1xuICBgXG59KTtcblxuZXhwb3J0IGNvbnN0IExhYmVsU3R5bGVzID0gc3R5bGVkLmRpdjxQaWNrPExhYmVsUHJvcHMsICd2YXJpYW50JyB8ICdpY29uJz4+YFxuICAkeyh7IHRoZW1lLCB2YXJpYW50LCBpY29uIH0pID0+IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlc1sxXX0gJHt0aGVtZS5zcGFjZXNbMl19O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgJHtpY29uICYmXG4gICAgY3NzKHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMTBweCdcbiAgICB9KX1cbiAgICAke3ZhcmlhbnQgJiYgdmFyaWFudHModGhlbWUpW3ZhcmlhbnRdfVxuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQubGFiZWxgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplcy5zbX07XG4gIGB9XG5gO1xuIl0sCiAgIm1hcHBpbmdzIjogIm1sQkFBQSx5QkNBQSxNQUFrQixvQkNBbEIsTUFBMEMsb0NBR3BDLEVBQVcsQUFBQyxHQUF5QixFQUN6QyxRQUFTO0FBQUEsYUFDRSxFQUFNLE9BQU87QUFBQSxrQkFDUixFQUFNLE9BQU87QUFBQSxJQUU3QixRQUFTO0FBQUEsYUFDRSxFQUFNLE9BQU87QUFBQSxrQkFDUixFQUFNLE9BQU87QUFBQSxJQUU3QixPQUFRO0FBQUEsYUFDRyxFQUFNLE9BQU87QUFBQSxrQkFDUixFQUFNLE9BQU87QUFBQSxNQUlsQixFQUFjLFVBQU87QUFBQSxJQUM5QixDQUFDLENBQUUsUUFBTyxVQUFTLFVBQVc7QUFBQSxlQUNuQixFQUFNLE9BQU8sTUFBTSxFQUFNLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS3pDLEdBQ0YsVUFBSSxDQUNGLFlBQWE7QUFBQSxNQUViLEdBQVcsRUFBUyxHQUFPO0FBQUE7QUFBQSxFQUlwQixFQUFPLFVBQU87QUFBQSxJQUN2QixDQUFDLENBQUUsV0FBWTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUlGLEVBQU0sVUFBVTtBQUFBO0VEbkIxQixHQUFNLEdBQVEsQ0FBQyxDQUFFLFdBQVUsT0FBTSxVQUFVLGFBRTlDLHdCQUFDLEVBQUQsQ0FBYSxRQUFTLEdBQ25CLEdBQVEsRUFDVCx3QkFBQyxFQUFELEtBQU8iLAogICJuYW1lcyI6IFtdCn0K
