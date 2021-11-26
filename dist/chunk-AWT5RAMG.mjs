import {
  __objRest,
  __spreadValues,
  styled
} from "./chunk-KKM2LXRG.mjs";

// src/components/image/index.tsx
import React, { forwardRef } from "react";

// src/components/image/styles.tsx
var Image = styled("img", {
  size: "$full",
  variants: {
    objectFit: {
      true: {
        objectFit: "cover"
      },
      false: {
        objectFit: "contain"
      }
    },
    cover: {
      true: {
        backgroundSize: "cover"
      },
      false: {
        backgroundSize: "contain"
      }
    }
  },
  defaultVariants: {
    objectFit: "true",
    cover: "true"
  }
});

// src/components/image/index.tsx
var Image2 = forwardRef((_a, ref) => {
  var _b = _a, { fallbackSrc } = _b, props = __objRest(_b, ["fallbackSrc"]);
  const onError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackSrc || "";
  };
  return /* @__PURE__ */ React.createElement(Image, __spreadValues({
    ref,
    loading: "lazy",
    onError
  }, props));
});
Image2.displayName = "Image";

export {
  Image2 as Image
};
//# sourceMappingURL=chunk-AWT5RAMG.mjs.map
