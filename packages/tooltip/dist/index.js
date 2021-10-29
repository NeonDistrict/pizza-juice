var y=Object.create;var s=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var l=t=>s(t,"__esModule",{value:!0});var w=(t,o)=>{l(t);for(var e in o)s(t,e,{get:o[e],enumerable:!0})},b=(t,o,e)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of g(o))!A.call(t,a)&&a!=="default"&&s(t,a,{get:()=>o[a],enumerable:!(e=x(o,a))||e.enumerable});return t},n=t=>b(l(s(t!=null?y($(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);w(exports,{Tooltip:()=>u});var i=n(require("react")),p=n(require("@radix-ui/react-tooltip"));var r=n(require("@neon-district/system")),d=n(require("@radix-ui/react-tooltip")),h=r.css`
  @keyframes identifier {
    0% {
      opacity: 0;
      transform: translateY(2px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,k=r.css`
  @keyframes identifier {
    0% {
      opacity: 0;
      transform: translateX(-2px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,C=r.css`
  @keyframes identifier {
    0% {
      opacity: 0;
      transform: translateY(-2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,T=r.css`
  @keyframes identifier {
    0% {
      opacity: 0;
      transform: translateX(2px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,c=(0,r.default)(d.Content)`
  ${({theme:t})=>r.css`
    padding: ${t.spaces[2]};
    font-size: ${t.fontSizes.sm};
    color: ${t.colors.white};
    background: ${t.colors.black};
    border: 1px solid;
    border-color: ${t.colors.grey4};

    &[data-state='delayed-open'] {
      &[data-side='top'] {
        animation-name: ${C};
      }

      &[data-side='right'] {
        animation-name: ${T};
      }

      &[data-side='bottom'] {
        animation-name: ${h};
      }

      &[data-side='left'] {
        animation-name: ${k};
      }
    }
  `}
`,f=(0,r.default)(d.Arrow)`
  ${({theme:t})=>r.css`
    fill: ${t.colors.grey4};
  `}
`;var u=({text:t,position:o="right",children:e})=>i.default.createElement(p.Root,null,i.default.createElement(p.Trigger,{asChild:!0},e),i.default.createElement(c,{sideOffset:5,side:o},t,i.default.createElement(f,{width:15,height:10})));0&&(module.exports={Tooltip});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUm9vdCwgVHJpZ2dlciB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC10b29sdGlwJztcblxuaW1wb3J0IHsgQ29udGVudCwgQXJyb3cgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIFRvb2x0aXBQcm9wcyA9IHtcbiAgLyoqXG4gICAqXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICpcbiAgICogQGRlZmF1bHQgXCJyaWdodFwiXG4gICAqL1xuICBwb3NpdGlvbj86ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnO1xuICAvKipcbiAgICpcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAoe1xuICB0ZXh0LFxuICBwb3NpdGlvbiA9ICdyaWdodCcsXG4gIGNoaWxkcmVuXG59OiBUb29sdGlwUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um9vdD5cbiAgICAgIDxUcmlnZ2VyIGFzQ2hpbGQ+e2NoaWxkcmVufTwvVHJpZ2dlcj5cblxuICAgICAgPENvbnRlbnQgc2lkZU9mZnNldD17NX0gc2lkZT17cG9zaXRpb259PlxuICAgICAgICB7dGV4dH1cblxuICAgICAgICA8QXJyb3cgd2lkdGg9ezE1fSBoZWlnaHQ9ezEwfSAvPlxuICAgICAgPC9Db250ZW50PlxuICAgIDwvUm9vdD5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdAbmVvbi1kaXN0cmljdC9zeXN0ZW0nO1xuXG5pbXBvcnQge1xuICBDb250ZW50IGFzIEJhc2VDb250ZW50LFxuICBBcnJvdyBhcyBCYXNlQXJyb3dcbn0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXAnO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVVcEFuZEZhZGUgPSBjc3NgXG4gIEBrZXlmcmFtZXMgaWRlbnRpZmllciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBzbGlkZVJpZ2h0QW5kRmFkZSA9IGNzc2BcbiAgQGtleWZyYW1lcyBpZGVudGlmaWVyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVEb3duQW5kRmFkZSA9IGNzc2BcbiAgQGtleWZyYW1lcyBpZGVudGlmaWVyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVMZWZ0QW5kRmFkZSA9IGNzc2BcbiAgQGtleWZyYW1lcyBpZGVudGlmaWVyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkKEJhc2VDb250ZW50KWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjZXNbMl19O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXMuc219O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTR9O1xuXG4gICAgJltkYXRhLXN0YXRlPSdkZWxheWVkLW9wZW4nXSB7XG4gICAgICAmW2RhdGEtc2lkZT0ndG9wJ10ge1xuICAgICAgICBhbmltYXRpb24tbmFtZTogJHtzbGlkZURvd25BbmRGYWRlfTtcbiAgICAgIH1cblxuICAgICAgJltkYXRhLXNpZGU9J3JpZ2h0J10ge1xuICAgICAgICBhbmltYXRpb24tbmFtZTogJHtzbGlkZUxlZnRBbmRGYWRlfTtcbiAgICAgIH1cblxuICAgICAgJltkYXRhLXNpZGU9J2JvdHRvbSddIHtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6ICR7c2xpZGVVcEFuZEZhZGV9O1xuICAgICAgfVxuXG4gICAgICAmW2RhdGEtc2lkZT0nbGVmdCddIHtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6ICR7c2xpZGVSaWdodEFuZEZhZGV9O1xuICAgICAgfVxuICAgIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZChCYXNlQXJyb3cpYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBmaWxsOiAke3RoZW1lLmNvbG9ycy5ncmV5NH07XG4gIGB9XG5gO1xuIl0sCiAgIm1hcHBpbmdzIjogIm1sQkFBQSwyQkNBQSxNQUFrQixvQkFFbEIsRUFBOEIsc0NDRjlCLE1BQTRCLG9DQUU1QixFQUdPLHNDQUVNLEVBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBY2pCLEVBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWFwQixFQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFhbkIsRUFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYW5CLEVBQVUsY0FBTztBQUFBLElBQzFCLENBQUMsQ0FBRSxXQUFZO0FBQUEsZUFDSixFQUFNLE9BQU87QUFBQSxpQkFDWCxFQUFNLFVBQVU7QUFBQSxhQUNwQixFQUFNLE9BQU87QUFBQSxrQkFDUixFQUFNLE9BQU87QUFBQTtBQUFBLG9CQUVYLEVBQU0sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUlQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNYixFQUFRLGNBQU87QUFBQSxJQUN4QixDQUFDLENBQUUsV0FBWTtBQUFBLFlBQ1AsRUFBTSxPQUFPO0FBQUE7RURyRWxCLEdBQU0sR0FBVSxDQUFDLENBQ3RCLE9BQ0EsV0FBVyxRQUNYLGNBR0Usd0JBQUMsT0FBRCxLQUNFLHdCQUFDLFVBQUQsQ0FBUyxRQUFPLElBQUUsR0FFbEIsd0JBQUMsRUFBRCxDQUFTLFdBQVksRUFBRyxLQUFNLEdBQzNCLEVBRUQsd0JBQUMsRUFBRCxDQUFPLE1BQU8sR0FBSSxPQUFRIiwKICAibmFtZXMiOiBbXQp9Cg==
