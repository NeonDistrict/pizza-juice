import {
  Stack
} from "../chunk-BCGWEHBR.mjs";
import {
  Box
} from "../chunk-7OGRNXUT.mjs";
import {
  __spreadProps,
  __spreadValues
} from "../chunk-KKM2LXRG.mjs";

// src/components/stack/stories.tsx
import React from "react";
var stories_default = {
  title: "Components/Layout/Stack",
  component: Stack,
  argTypes: {
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: { type: "radio" }
    }
  }
};
var Default = (args) => /* @__PURE__ */ React.createElement(Stack, __spreadProps(__spreadValues({}, args), {
  css: { $$gap: "$space$10" }
}), [...Array(3)].map((_, i) => /* @__PURE__ */ React.createElement(Box, {
  key: i,
  css: { size: 30, bg: "$pink-500" }
})));
Default.args = {};
export {
  Default,
  stories_default as default
};
//# sourceMappingURL=stories.mjs.map
