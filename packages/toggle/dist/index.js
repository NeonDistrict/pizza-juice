var y=Object.create;var a=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,P=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;var d=(o,r,t)=>r in o?a(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,c=(o,r)=>{for(var t in r||(r={}))p.call(r,t)&&d(o,t,r[t]);if(i)for(var t of i(r))n.call(r,t)&&d(o,t,r[t]);return o};var u=o=>a(o,"__esModule",{value:!0});var f=(o,r)=>{var t={};for(var e in o)p.call(o,e)&&r.indexOf(e)<0&&(t[e]=o[e]);if(o!=null&&i)for(var e of i(o))r.indexOf(e)<0&&n.call(o,e)&&(t[e]=o[e]);return t};var W=(o,r)=>{u(o);for(var t in r)a(o,t,{get:r[t],enumerable:!0})},z=(o,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of w(r))!p.call(o,e)&&e!=="default"&&a(o,e,{get:()=>r[e],enumerable:!(t=k(r,e))||t.enumerable});return o},l=o=>z(u(a(o!=null?y(P(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);W(exports,{Toggle:()=>D});var g=l(require("react"));var s=l(require("@neon-district/system")),x=l(require("@radix-ui/react-label")),b=l(require("@radix-ui/react-toggle")),B=o=>({size:{xs:s.css``,sm:s.css``,md:s.css``,lg:s.css``},disabled:s.css`
    &[data-state='on'] + span {
      background: ${o.colors.grey1};
    }

    + span {
      cursor: not-allowed;
    }
  `}),T=(0,s.default)(x.Root)`
  ${({theme:o})=>s.css`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  `}
`,$=(0,s.default)(b.Root)`
  ${({theme:o,disabled:r})=>s.css`
    opacity: 0;
    width: 0;
    height: 0;

    &[data-state='on'] + span {
      background: ${o.colors.green1};
    }

    &[data-state='on'] + span:before {
      transform: translateX(26px);
    }

    ${r&&B(o).disabled}
  `}
`,h=s.default.span`
  ${({theme:o})=>s.css`
    position: absolute;
    inset: 0;
    background: ${o.colors.grey3};
    transition: ${o.durations.fast};
    border-radius: ${o.radii.full};
    cursor: pointer;

    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background: ${o.colors.white};
      transition: ${o.durations.fast};
      border-radius: ${o.radii.half};
    }
  `}
`;var D=t=>{var e=t,{name:o}=e,r=f(e,["name"]);return g.default.createElement(T,{htmlFor:`toggle-${o}`},g.default.createElement($,c({id:`toggle-${o}`,name:o},r)),g.default.createElement(h,null))};0&&(module.exports={Toggle});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBUb2dnbGVQcm9wcyBhcyBUb2dnbGVQcm9wc0Jhc2UgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtdG9nZ2xlJztcblxuaW1wb3J0IHsgV3JhcHBlciwgVG9nZ2xlSW5wdXQsIFRvZ2dsZVNsaWRlciB9IGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgVG9nZ2xlUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqIEBkZWZhdWx0IFwibWRcIlxuICAgKi9cbiAgc2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZyc7XG59ICYgVG9nZ2xlUHJvcHNCYXNlO1xuXG5leHBvcnQgY29uc3QgVG9nZ2xlID0gKHsgbmFtZSwgLi4ucHJvcHMgfTogVG9nZ2xlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBodG1sRm9yPXtgdG9nZ2xlLSR7bmFtZX1gfT5cbiAgICAgIDxUb2dnbGVJbnB1dCBpZD17YHRvZ2dsZS0ke25hbWV9YH0gbmFtZT17bmFtZX0gey4uLnByb3BzfSAvPlxuICAgICAgPFRvZ2dsZVNsaWRlciAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIERlZmF1bHRUaGVtZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmltcG9ydCAqIGFzIExhYmVsIGZyb20gJ0ByYWRpeC11aS9yZWFjdC1sYWJlbCc7XG5pbXBvcnQgKiBhcyBUb2dnbGUgZnJvbSAnQHJhZGl4LXVpL3JlYWN0LXRvZ2dsZSc7XG5cbmNvbnN0IHRvZ2dsZU1vZGlmaWVycyA9ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiAoe1xuICBzaXplOiB7XG4gICAgeHM6IGNzc2BgLFxuICAgIHNtOiBjc3NgYCxcbiAgICBtZDogY3NzYGAsXG4gICAgbGc6IGNzc2BgXG4gIH0sXG4gIGRpc2FibGVkOiBjc3NgXG4gICAgJltkYXRhLXN0YXRlPSdvbiddICsgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5MX07XG4gICAgfVxuXG4gICAgKyBzcGFuIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICBgXG59KTtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoTGFiZWwuUm9vdClgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvZ2dsZUlucHV0ID0gc3R5bGVkKFRvZ2dsZS5Sb290KWBcbiAgJHsoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gY3NzYFxuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuXG4gICAgJltkYXRhLXN0YXRlPSdvbiddICsgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmVlbjF9O1xuICAgIH1cblxuICAgICZbZGF0YS1zdGF0ZT0nb24nXSArIHNwYW46YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB9XG5cbiAgICAke2Rpc2FibGVkICYmIHRvZ2dsZU1vZGlmaWVycyh0aGVtZSkuZGlzYWJsZWR9XG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgVG9nZ2xlU2xpZGVyID0gc3R5bGVkLnNwYW5gXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS5kdXJhdGlvbnMuZmFzdH07XG4gICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5yYWRpaS5mdWxsfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgbGVmdDogNHB4O1xuICAgICAgYm90dG9tOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICB0cmFuc2l0aW9uOiAke3RoZW1lLmR1cmF0aW9ucy5mYXN0fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUucmFkaWkuaGFsZn07XG4gICAgfVxuICBgfVxuYDtcbiJdLAogICJtYXBwaW5ncyI6ICJvZ0NBQUEsMEJDQUEsTUFBa0Isb0JDQWxCLE1BQTBDLG9DQUUxQyxFQUF1QixvQ0FDdkIsRUFBd0IscUNBRWxCLEVBQWtCLEFBQUMsR0FBeUIsRUFDaEQsS0FBTSxDQUNKLEdBQUksUUFDSixHQUFJLFFBQ0osR0FBSSxRQUNKLEdBQUksU0FFTixTQUFVO0FBQUE7QUFBQSxvQkFFUSxFQUFNLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFTcEIsRUFBVSxjQUFhO0FBQUEsSUFDaEMsQ0FBQyxDQUFFLFdBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRTixFQUFjLGNBQWM7QUFBQSxJQUNyQyxDQUFDLENBQUUsUUFBTyxjQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU1ULEVBQU0sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTzNCLEdBQVksRUFBZ0IsR0FBTztBQUFBO0FBQUEsRUFJNUIsRUFBZSxVQUFPO0FBQUEsSUFDL0IsQ0FBQyxDQUFFLFdBQVk7QUFBQTtBQUFBO0FBQUEsa0JBR0QsRUFBTSxPQUFPO0FBQUEsa0JBQ2IsRUFBTSxVQUFVO0FBQUEscUJBQ2IsRUFBTSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVWIsRUFBTSxPQUFPO0FBQUEsb0JBQ2IsRUFBTSxVQUFVO0FBQUEsdUJBQ2IsRUFBTSxNQUFNO0FBQUE7QUFBQTtFRGxENUIsR0FBTSxHQUFTLEFBQUMsR0FBb0MsQ0FBcEMsUUFBRSxTQUFGLEVBQVcsSUFBWCxFQUFXLENBQVQsU0FDdkIsTUFDRSx5QkFBQyxFQUFELENBQVMsUUFBUyxVQUFVLEtBQzFCLHdCQUFDLEVBQUQsR0FBYSxHQUFJLFVBQVUsSUFBUSxLQUFNLEdBQVUsSUFDbkQsd0JBQUMsRUFBRCIsCiAgIm5hbWVzIjogW10KfQo=
