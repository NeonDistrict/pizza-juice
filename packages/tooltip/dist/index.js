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
  Tooltip: () => Tooltip
});

// src/index.tsx
var import_react = __toModule(require("react"));
var import_react_tooltip2 = __toModule(require("@radix-ui/react-tooltip"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var import_react_tooltip = __toModule(require("@radix-ui/react-tooltip"));
var slideUpAndFade = import_system.css`
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
`;
var slideRightAndFade = import_system.css`
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
`;
var slideDownAndFade = import_system.css`
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
`;
var slideLeftAndFade = import_system.css`
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
`;
var Content = (0, import_system.default)(import_react_tooltip.Content)`
  ${({ theme }) => import_system.css`
    padding: ${theme.spaces[2]};
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.white};
    background: ${theme.colors.black};
    border: 1px solid;
    border-color: ${theme.colors.grey4};

    &[data-state='delayed-open'] {
      &[data-side='top'] {
        animation-name: ${slideDownAndFade};
      }

      &[data-side='right'] {
        animation-name: ${slideLeftAndFade};
      }

      &[data-side='bottom'] {
        animation-name: ${slideUpAndFade};
      }

      &[data-side='left'] {
        animation-name: ${slideRightAndFade};
      }
    }
  `}
`;
var Arrow = (0, import_system.default)(import_react_tooltip.Arrow)`
  ${({ theme }) => import_system.css`
    fill: ${theme.colors.grey4};
  `}
`;

// src/index.tsx
var Tooltip = ({
  text,
  position = "right",
  children
}) => {
  return /* @__PURE__ */ import_react.default.createElement(import_react_tooltip2.Root, null, /* @__PURE__ */ import_react.default.createElement(import_react_tooltip2.Trigger, {
    asChild: true
  }, children), /* @__PURE__ */ import_react.default.createElement(Content, {
    sideOffset: 5,
    side: position
  }, text, /* @__PURE__ */ import_react.default.createElement(Arrow, {
    width: 15,
    height: 10
  })));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tooltip
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUm9vdCwgVHJpZ2dlciB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC10b29sdGlwJztcblxuaW1wb3J0IHsgQ29udGVudCwgQXJyb3cgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIFRvb2x0aXBQcm9wcyA9IHtcbiAgLyoqXG4gICAqXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICpcbiAgICogQGRlZmF1bHQgXCJyaWdodFwiXG4gICAqL1xuICBwb3NpdGlvbj86ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnO1xuICAvKipcbiAgICpcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAoe1xuICB0ZXh0LFxuICBwb3NpdGlvbiA9ICdyaWdodCcsXG4gIGNoaWxkcmVuXG59OiBUb29sdGlwUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um9vdD5cbiAgICAgIDxUcmlnZ2VyIGFzQ2hpbGQ+e2NoaWxkcmVufTwvVHJpZ2dlcj5cblxuICAgICAgPENvbnRlbnQgc2lkZU9mZnNldD17NX0gc2lkZT17cG9zaXRpb259PlxuICAgICAgICB7dGV4dH1cblxuICAgICAgICA8QXJyb3cgd2lkdGg9ezE1fSBoZWlnaHQ9ezEwfSAvPlxuICAgICAgPC9Db250ZW50PlxuICAgIDwvUm9vdD5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdAbmVvbi1kaXN0cmljdC9zeXN0ZW0nO1xuXG5pbXBvcnQge1xuICBDb250ZW50IGFzIEJhc2VDb250ZW50LFxuICBBcnJvdyBhcyBCYXNlQXJyb3dcbn0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXAnO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVVcEFuZEZhZGUgPSBjc3NgXG4gIEBrZXlmcmFtZXMgaWRlbnRpZmllciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBzbGlkZVJpZ2h0QW5kRmFkZSA9IGNzc2BcbiAgQGtleWZyYW1lcyBpZGVudGlmaWVyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVEb3duQW5kRmFkZSA9IGNzc2BcbiAgQGtleWZyYW1lcyBpZGVudGlmaWVyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVMZWZ0QW5kRmFkZSA9IGNzc2BcbiAgQGtleWZyYW1lcyBpZGVudGlmaWVyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkKEJhc2VDb250ZW50KWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjZXNbMl19O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXMuc219O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTR9O1xuXG4gICAgJltkYXRhLXN0YXRlPSdkZWxheWVkLW9wZW4nXSB7XG4gICAgICAmW2RhdGEtc2lkZT0ndG9wJ10ge1xuICAgICAgICBhbmltYXRpb24tbmFtZTogJHtzbGlkZURvd25BbmRGYWRlfTtcbiAgICAgIH1cblxuICAgICAgJltkYXRhLXNpZGU9J3JpZ2h0J10ge1xuICAgICAgICBhbmltYXRpb24tbmFtZTogJHtzbGlkZUxlZnRBbmRGYWRlfTtcbiAgICAgIH1cblxuICAgICAgJltkYXRhLXNpZGU9J2JvdHRvbSddIHtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6ICR7c2xpZGVVcEFuZEZhZGV9O1xuICAgICAgfVxuXG4gICAgICAmW2RhdGEtc2lkZT0nbGVmdCddIHtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6ICR7c2xpZGVSaWdodEFuZEZhZGV9O1xuICAgICAgfVxuICAgIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZChCYXNlQXJyb3cpYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBmaWxsOiAke3RoZW1lLmNvbG9ycy5ncmV5NH07XG4gIGB9XG5gO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7O0FDQUEsbUJBQWtCO0FBRWxCLDRCQUE4Qjs7O0FDRjlCLG9CQUE0QjtBQUU1QiwyQkFHTztBQUVBLElBQU0saUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY3ZCLElBQU0sb0JBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWExQixJQUFNLG1CQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhekIsSUFBTSxtQkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYXpCLElBQU0sVUFBVSwyQkFBTztBQUFBLElBQzFCLENBQUMsRUFBRSxZQUFZO0FBQUEsZUFDSixNQUFNLE9BQU87QUFBQSxpQkFDWCxNQUFNLFVBQVU7QUFBQSxhQUNwQixNQUFNLE9BQU87QUFBQSxrQkFDUixNQUFNLE9BQU87QUFBQTtBQUFBLG9CQUVYLE1BQU0sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUlQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNbkIsSUFBTSxRQUFRLDJCQUFPO0FBQUEsSUFDeEIsQ0FBQyxFQUFFLFlBQVk7QUFBQSxZQUNQLE1BQU0sT0FBTztBQUFBO0FBQUE7OztBRHJFbEIsSUFBTSxVQUFVLENBQUM7QUFBQSxFQUN0QjtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1g7QUFBQSxNQUNrQjtBQUNsQixTQUNFLG1EQUFDLDRCQUFELE1BQ0UsbURBQUMsK0JBQUQ7QUFBQSxJQUFTLFNBQU87QUFBQSxLQUFFLFdBRWxCLG1EQUFDLFNBQUQ7QUFBQSxJQUFTLFlBQVk7QUFBQSxJQUFHLE1BQU07QUFBQSxLQUMzQixNQUVELG1EQUFDLE9BQUQ7QUFBQSxJQUFPLE9BQU87QUFBQSxJQUFJLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
