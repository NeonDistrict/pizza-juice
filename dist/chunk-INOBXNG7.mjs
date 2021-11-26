import {
  Button,
  Spinner
} from "./chunk-EPW2VHTO.mjs";
import {
  __objRest,
  __spreadValues
} from "./chunk-KKM2LXRG.mjs";

// src/components/button/index.tsx
import React from "react";
var Button2 = React.forwardRef((_a, ref) => {
  var _b = _a, {
    type = "button",
    icon,
    iconPosition = "left",
    loading,
    children
  } = _b, props = __objRest(_b, [
    "type",
    "icon",
    "iconPosition",
    "loading",
    "children"
  ]);
  return /* @__PURE__ */ React.createElement(Button, __spreadValues({
    ref,
    type,
    onlyIcon: !!icon && !children,
    loading
  }, props), icon && iconPosition === "left" && icon, children && /* @__PURE__ */ React.createElement("span", null, children), loading && /* @__PURE__ */ React.createElement(Spinner, null), icon && iconPosition === "right" && icon);
});
Button2.displayName = "Button";

export {
  Button2 as Button
};
//# sourceMappingURL=chunk-INOBXNG7.mjs.map
