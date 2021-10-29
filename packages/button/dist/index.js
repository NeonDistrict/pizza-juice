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
  Button: () => Button
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var variants = (theme) => ({
  variant: {
    primary: {
      background: theme.colors.pink1,
      "&:hover": {
        background: theme.colors.pink2
      },
      "&:focus": {
        borderColor: theme.colors.teal1
      },
      "&:active": {
        background: theme.colors.pink3
      },
      "&:disabled": {
        background: theme.colors.grey1,
        color: theme.colors.grey3
      }
    },
    secondary: {
      background: theme.colors.grey4,
      "&:hover": {
        background: theme.colors.grey5
      },
      "&:focus": {
        background: theme.colors.grey5,
        borderColor: theme.colors.teal1
      },
      "&:active": {
        background: theme.colors.grey5
      },
      "&:disabled": {
        background: theme.colors.grey1,
        color: theme.colors.grey3
      }
    },
    destructive: {
      color: theme.colors.red1,
      borderColor: theme.colors.red1,
      "&:hover": {
        background: theme.colors.red50
      },
      "&:focus": {
        borderColor: theme.colors.teal1
      },
      "&:active": {
        background: theme.colors.red50
      },
      "&:disabled": {
        color: theme.colors.grey3,
        borderColor: theme.colors.grey1,
        background: theme.colors.grey50
      }
    },
    outline: {
      borderColor: theme.colors.pink1,
      "&:focus": {
        borderColor: theme.colors.teal1
      },
      "&:disabled": {
        color: theme.colors.grey3,
        borderColor: theme.colors.grey1
      }
    },
    naked: {
      color: theme.colors.pink1,
      "&:hover": {
        color: theme.colors.pink2,
        background: theme.colors.pink50
      },
      "&:focus": {
        borderColor: theme.colors.teal1
      },
      "&:active": {
        color: theme.colors.pink2,
        background: "transparent"
      },
      "&:disabled": {
        color: theme.colors.grey3,
        background: "transparent"
      }
    }
  },
  shape: {
    rounded: {
      squared: {
        borderRadius: 0
      },
      borderRadius: theme.radii.full
    }
  },
  size: {
    sm: {
      minWidth: 32,
      height: 32,
      fontSize: theme.fontSizes.xs,
      padding: `0 ${theme.spaces[4]}`
    },
    md: {
      minWidth: 40,
      height: 40,
      fontSize: theme.fontSizes.sm,
      padding: `0 ${theme.spaces[6]}`
    }
  },
  fluid: {
    width: theme.sizes.full
  }
});
var ButtonStyled = (0, import_system.default)("button")(({ theme, variant, size, fluid, shape }) => __spreadValues(__spreadValues(__spreadValues(__spreadValues({
  appearance: "none",
  border: "1px solid",
  borderColor: "transparent",
  background: "transparent",
  fontFamily: "inherit",
  outline: 0,
  fontWeight: 600,
  textTransform: "uppercase",
  color: theme.colors.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spaces[2],
  userSelect: "none",
  transition: theme.durations.fast,
  "&:not(:disabled)": {
    cursor: "pointer"
  }
}, fluid && variants(theme).fluid), variants(theme).variant[variant]), variants(theme).shape[shape]), variants(theme).size[size]));

// src/index.tsx
var Button = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, {
    type = "button",
    variant = "primary",
    size = "md",
    shape = "squared",
    icon,
    iconPosition = "left",
    children
  } = _b, props = __objRest(_b, [
    "type",
    "variant",
    "size",
    "shape",
    "icon",
    "iconPosition",
    "children"
  ]);
  return /* @__PURE__ */ import_react.default.createElement(ButtonStyled, __spreadValues({
    ref,
    type,
    variant,
    size,
    shape
  }, props), icon && iconPosition === "left" && icon, children && /* @__PURE__ */ import_react.default.createElement("span", null, children), icon && iconPosition === "right" && icon);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uU3R5bGVkIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgdHlwZSBCdXR0b25Qcm9wcyA9IHtcbiAgLyoqXG4gICAqIFZhcmlhbnQgc3R5bGUgb2YgdGhlIGJ1dHRvblxuICAgKiBAZGVmYXVsdCBcInByaW1hcnlcIlxuICAgKi9cbiAgdmFyaWFudD86ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ2Rlc3RydWN0aXZlJyB8ICdvdXRsaW5lJyB8ICduYWtlZCc7XG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBidXR0b25cbiAgICogQGRlZmF1bHQgXCJtZFwiXG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCc7XG4gIC8qKlxuICAgKiBpZiBgdHJ1ZWAgYWRkIFwid2lkdGg6MTAwJVwiIHRvIGJ1dHRvblxuICAgKiBAZGVmYXVsdCBcImZhbHNlXCJcbiAgICovXG4gIGZsdWlkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNoYXBlIG9mIHRoZSBidXR0b25cbiAgICogQGRlZmF1bHQgXCJzcXVhcmVkXCJcbiAgICovXG4gIHNoYXBlPzogJ3NxdWFyZWQnIHwgJ3JvdW5kZWQnO1xuICAvKipcbiAgICogQWRkIGFuIGljb24gYmVzaWRlIHRleHRcbiAgICovXG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKlxuICAgKiBQb3NpdGlvbiBvZiB0aGUgaWNvblxuICAgKiBAZGVmYXVsdCBcImxlZnRcIlxuICAgKi9cbiAgaWNvblBvc2l0aW9uPzogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIEJ1dHRvbiB0ZXh0XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn0gJiBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD47XG5cbi8qKlxuICogQnV0dG9uIGNvbXBvbmVudFxuICpcbiAqIEBkZXNjcmlwdGlvbiB1c2VkIHRvIHRyaWdnZXIgYW4gYWN0aW9uIG9yIGV2ZW50LlxuICovXG5leHBvcnQgY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MQnV0dG9uRWxlbWVudCwgQnV0dG9uUHJvcHM+KFxuICAoXG4gICAge1xuICAgICAgdHlwZSA9ICdidXR0b24nLFxuICAgICAgdmFyaWFudCA9ICdwcmltYXJ5JyxcbiAgICAgIHNpemUgPSAnbWQnLFxuICAgICAgc2hhcGUgPSAnc3F1YXJlZCcsXG4gICAgICBpY29uLFxuICAgICAgaWNvblBvc2l0aW9uID0gJ2xlZnQnLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAuLi5wcm9wc1xuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uU3R5bGVkXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICBzaGFwZT17c2hhcGV9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2ljb24gJiYgaWNvblBvc2l0aW9uID09PSAnbGVmdCcgJiYgaWNvbn1cblxuICAgICAgICB7Y2hpbGRyZW4gJiYgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj59XG5cbiAgICAgICAge2ljb24gJiYgaWNvblBvc2l0aW9uID09PSAncmlnaHQnICYmIGljb259XG4gICAgICA8L0J1dHRvblN0eWxlZD5cbiAgICApO1xuICB9XG4pO1xuIiwgImltcG9ydCBzdHlsZWQsIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuaW1wb3J0IHsgQnV0dG9uUHJvcHMgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBjb25zdCB2YXJpYW50cyA9ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiAoe1xuICAvKipcbiAgICogVmFyaWFudCB0eXBlc1xuICAgKi9cbiAgdmFyaWFudDoge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5waW5rMSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5waW5rMlxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnRlYWwxXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucGluazNcbiAgICAgIH0sXG4gICAgICAnJjpkaXNhYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmdyZXkxLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzXG4gICAgICB9XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ncmV5NCxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ncmV5NVxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZ3JleTUsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMudGVhbDFcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ncmV5NVxuICAgICAgfSxcbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZ3JleTEsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTNcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3RydWN0aXZlOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnJlZDEsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnJlZDEsXG5cbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucmVkNTBcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy50ZWFsMVxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnJlZDUwXG4gICAgICB9LFxuICAgICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTMsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEsXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ncmV5NTBcbiAgICAgIH1cbiAgICB9LFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMucGluazEsXG5cbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnRlYWwxXG4gICAgICB9LFxuICAgICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTMsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTFcbiAgICAgIH1cbiAgICB9LFxuICAgIG5ha2VkOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnBpbmsxLFxuXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5waW5rMixcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnBpbms1MFxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnRlYWwxXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnBpbmsyLFxuICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gICAgICB9LFxuICAgICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTMsXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8qKlxuICAgKiBTaGFwZSB0eXBlc1xuICAgKi9cbiAgc2hhcGU6IHtcbiAgICByb3VuZGVkOiB7XG4gICAgICBzcXVhcmVkOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogMFxuICAgICAgfSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaWkuZnVsbFxuICAgIH1cbiAgfSxcbiAgLyoqXG4gICAqIFNpemUgdHlwZXNcbiAgICovXG4gIHNpemU6IHtcbiAgICBzbToge1xuICAgICAgbWluV2lkdGg6IDMyLFxuICAgICAgaGVpZ2h0OiAzMixcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMueHMsXG4gICAgICBwYWRkaW5nOiBgMCAke3RoZW1lLnNwYWNlc1s0XX1gXG4gICAgfSxcbiAgICBtZDoge1xuICAgICAgbWluV2lkdGg6IDQwLFxuICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc20sXG4gICAgICBwYWRkaW5nOiBgMCAke3RoZW1lLnNwYWNlc1s2XX1gXG4gICAgfVxuICB9LFxuICBmbHVpZDoge1xuICAgIHdpZHRoOiB0aGVtZS5zaXplcy5mdWxsXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uU3R5bGVkID0gc3R5bGVkKCdidXR0b24nKTxCdXR0b25Qcm9wcz4oXG4gICh7IHRoZW1lLCB2YXJpYW50LCBzaXplLCBmbHVpZCwgc2hhcGUgfSkgPT4gKHtcbiAgICAvLyByZXNldFxuICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIG91dGxpbmU6IDAsXG5cbiAgICAvLyBiYXNlIHN0eWxlc1xuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZ2FwOiB0aGVtZS5zcGFjZXNbMl0sXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLmR1cmF0aW9ucy5mYXN0LFxuXG4gICAgJyY6bm90KDpkaXNhYmxlZCknOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH0sXG5cbiAgICAvLyBjb25kaXRpb25hbCBzdHlsZXNcbiAgICAuLi4oZmx1aWQgJiYgdmFyaWFudHModGhlbWUpLmZsdWlkKSxcblxuICAgIC8vIHZhcmlhbnQgc3R5bGVzXG4gICAgLi4udmFyaWFudHModGhlbWUpLnZhcmlhbnRbdmFyaWFudCFdLFxuICAgIC4uLnZhcmlhbnRzKHRoZW1lKS5zaGFwZVtzaGFwZSFdLFxuICAgIC4uLnZhcmlhbnRzKHRoZW1lKS5zaXplW3NpemUhXVxuICB9KVxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7O0FDQUEsbUJBQWtCOzs7QUNBbEIsb0JBQXFDO0FBSTlCLElBQU0s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
