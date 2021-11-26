import {
  __objRest,
  __spreadValues,
  keyframes,
  styled
} from "./chunk-KKM2LXRG.mjs";

// src/components/spinner/index.tsx
import React2 from "react";

// src/components/visually-hidden/index.tsx
import React from "react";
import { Root } from "@radix-ui/react-visually-hidden";
var VisuallyHidden = ({ children }) => {
  return /* @__PURE__ */ React.createElement(Root, null, children);
};

// src/components/spinner/styles.ts
var spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" }
});
var Spinner = styled("div", {
  $$color: "currentColor",
  $$size: "16px",
  $$thickness: 1.5,
  $$speed: "0.4s",
  d: "inline-block",
  color: "$$color",
  size: "$$size",
  borderTopColor: "currentcolor",
  borderRightColor: "currentcolor",
  borderStyle: "solid",
  br: "$full",
  borderWidth: "$$thickness",
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
  animation: `${spin} $$speed linear infinite`
});

// src/components/spinner/index.tsx
var Spinner2 = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React2.createElement(Spinner, __spreadValues({}, props), /* @__PURE__ */ React2.createElement(VisuallyHidden, null, "Loading"));
};

export {
  Spinner2 as Spinner
};
//# sourceMappingURL=chunk-RWQXSO4V.mjs.map
