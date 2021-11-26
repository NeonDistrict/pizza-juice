import {
  __objRest,
  __spreadValues,
  styled
} from "../chunk-KKM2LXRG.mjs";

// src/components/tooltip/index.tsx
import React from "react";

// src/components/tooltip/styles.ts
import {
  Arrow,
  Content,
  Root,
  Trigger
} from "@radix-ui/react-tooltip";
var Root2 = styled(Root);
var Trigger2 = styled(Trigger);
var Content2 = styled(Content, {
  color: "$white",
  bg: "$transparent",
  p: "$2",
  textTransform: "uppercase",
  fontSize: "$sm",
  border: "1px solid $grey-700"
});
var Arrow2 = styled(Arrow, {
  fill: "$grey-700"
});

// src/components/tooltip/index.tsx
var Tooltip = (_a) => {
  var _b = _a, {
    text,
    position = "right",
    children
  } = _b, props = __objRest(_b, [
    "text",
    "position",
    "children"
  ]);
  return /* @__PURE__ */ React.createElement(Root2, null, /* @__PURE__ */ React.createElement(Trigger2, {
    asChild: true
  }, children), /* @__PURE__ */ React.createElement(Content2, __spreadValues({
    sideOffset: 5,
    side: position
  }, props), text, /* @__PURE__ */ React.createElement(Arrow2, {
    width: 15,
    height: 10
  })));
};
export {
  Tooltip
};
//# sourceMappingURL=index.mjs.map
