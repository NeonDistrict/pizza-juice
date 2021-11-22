import {
  Juice_default
} from "./chunk-GXEOH3UY.mjs";
import {
  Neon_default
} from "./chunk-MAUD3LEX.mjs";
import {
  Parts_default
} from "./chunk-JXDRKYMQ.mjs";
import {
  Item,
  Separator,
  Text,
  Wrapper
} from "./chunk-UPGFFOUJ.mjs";

// src/components/resources-bar/index.tsx
import React from "react";
var Resources = ({
  neon,
  juice,
  parts,
  hasIcon,
  hasText
}) => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Item, null, hasIcon && /* @__PURE__ */ React.createElement(Neon_default, null), /* @__PURE__ */ React.createElement(Text, null, hasText && "Neon: ", neon), /* @__PURE__ */ React.createElement(Separator, null)), /* @__PURE__ */ React.createElement(Item, null, hasIcon && /* @__PURE__ */ React.createElement(Juice_default, null), /* @__PURE__ */ React.createElement(Text, null, hasText && "Juice: ", juice), /* @__PURE__ */ React.createElement(Separator, null)), /* @__PURE__ */ React.createElement(Item, null, hasIcon && /* @__PURE__ */ React.createElement(Parts_default, null), /* @__PURE__ */ React.createElement(Text, null, hasText && "Parts: ", parts)));
};

export {
  Resources
};
//# sourceMappingURL=chunk-KHMV3YDL.mjs.map
