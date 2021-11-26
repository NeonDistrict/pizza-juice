import {
  Image
} from "../chunk-AWT5RAMG.mjs";
import {
  __spreadValues
} from "../chunk-KKM2LXRG.mjs";

// src/components/image/stories.tsx
import React from "react";
var stories_default = {
  title: "Components/Data Display/Image",
  component: Image,
  argTypes: {
    css: {
      table: { disable: true }
    },
    objectFit: {
      control: { type: "boolean" }
    },
    cover: {
      control: { type: "boolean" }
    }
  }
};
var Default = (args) => /* @__PURE__ */ React.createElement(Image, __spreadValues({}, args));
Default.args = {
  src: "https://picsum.photos/200/200",
  alt: "Random image",
  objectFit: true,
  cover: true,
  css: {
    size: 200
  }
};
Default.argTypes = {
  fallbackSrc: {
    table: { disable: true }
  }
};
var WithError = (args) => /* @__PURE__ */ React.createElement(Image, __spreadValues({}, args));
WithError.args = {
  src: "https://wrong-path.com",
  fallbackSrc: "https://via.placeholder.com/150",
  alt: "Random image",
  objectFit: true,
  cover: true,
  css: {
    size: 200
  }
};
export {
  Default,
  WithError,
  stories_default as default
};
//# sourceMappingURL=stories.mjs.map
