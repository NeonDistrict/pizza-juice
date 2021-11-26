import {
  Box
} from "../chunk-7OGRNXUT.mjs";
import {
  Divider
} from "../chunk-3UEKQ7RY.mjs";
import {
  __spreadValues
} from "../chunk-KKM2LXRG.mjs";

// src/components/divider/stories.tsx
import React from "react";
var stories_default = {
  title: "Components/Data Display/Divider",
  component: Divider,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" }
    },
    ref: {
      table: { disable: true }
    },
    as: {
      table: { disable: true }
    },
    css: {
      table: { disable: true }
    }
  }
};
var Horizontal = (args) => /* @__PURE__ */ React.createElement(Divider, __spreadValues({}, args));
Horizontal.args = {
  orientation: "horizontal"
};
var Vertical = (args) => /* @__PURE__ */ React.createElement(Box, {
  css: { h: 50 }
}, /* @__PURE__ */ React.createElement(Divider, __spreadValues({}, args)));
Vertical.args = {
  orientation: "vertical"
};
export {
  Horizontal,
  Vertical,
  stories_default as default
};
//# sourceMappingURL=stories.mjs.map
