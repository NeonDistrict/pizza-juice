import {
  __objRest,
  __spreadValues,
  styled
} from "../chunk-KKM2LXRG.mjs";

// src/components/content-heading/index.tsx
import React2 from "react";

// src/components/content-heading/icon.tsx
import React from "react";
var InfoIcon = () => /* @__PURE__ */ React.createElement("svg", {
  width: "1rem",
  height: "1rem",
  focusable: "false",
  "aria-hidden": "true"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "currentColor",
  d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
}));

// src/components/content-heading/styles.ts
var Wrapper = styled("div", {
  d: "flex",
  flexDirection: "column",
  gap: "$2"
});
var Title = styled("h3", {
  d: "inline-flex",
  gap: "$2",
  align: "center",
  fontWeight: "$medium",
  fontSize: "$lg",
  lineHeight: "24px",
  m: 0,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: "$white",
  "@md": {
    fontSize: "$md",
    lineHeight: "20px",
    letterSpacing: "0.1em"
  },
  svg: {
    color: "$white",
    fontSize: "19px",
    "@md": {
      fontSize: "13px"
    }
  }
});
var Description = styled("p", {
  fontFamily: "inherit",
  fontSize: "$md",
  fontWeight: "$medium",
  lineHeight: "24px",
  color: "$grey-600",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  m: 0,
  "@md": {
    fontSize: "$sm",
    lineHeight: "20px",
    fontWeight: "$normal",
    letterSpacing: 0
  },
  variants: {
    line: {
      true: {
        borderLeft: "2px solid $white",
        pl: "$4"
      }
    }
  },
  defaultVariants: {
    line: "true"
  }
});

// src/components/content-heading/index.tsx
var ContentHeading = (_a) => {
  var _b = _a, {
    title,
    description,
    line,
    info
  } = _b, props = __objRest(_b, [
    "title",
    "description",
    "line",
    "info"
  ]);
  return /* @__PURE__ */ React2.createElement(Wrapper, __spreadValues({}, props), /* @__PURE__ */ React2.createElement(Title, null, title, info && /* @__PURE__ */ React2.createElement(InfoIcon, null)), description && /* @__PURE__ */ React2.createElement(Description, {
    line
  }, description));
};
export {
  ContentHeading
};
//# sourceMappingURL=index.mjs.map
