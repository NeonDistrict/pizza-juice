import {
  styled
} from "../chunk-KKM2LXRG.mjs";

// src/components/textarea/index.tsx
import React from "react";

// src/components/textarea/styles.ts
import ResizeTextarea from "react-textarea-autosize";
import {
  Root
} from "@radix-ui/react-label";
var Wrapper = styled("div", {
  color: "$white"
});
var Label = styled(Root, {
  d: "block",
  mb: "$1",
  textTransform: "uppercase",
  fontWeight: "$medium"
});
var TextAreaInput = styled(ResizeTextarea, {
  width: "$full",
  p: "$2",
  fontSize: "$md",
  outline: "none",
  bg: "$black",
  color: "$white",
  border: "1px solid",
  borderColor: "$grey-600",
  "&:hover": {
    borderColor: "$pink-600"
  },
  "&:focus": {
    borderColor: "$teal-500"
  },
  "&:disabled": {
    bg: "$grey-400",
    cursor: "not-allowed"
  },
  variants: {
    error: {
      true: {
        bg: "$red-500"
      }
    }
  }
});
var Message = styled("small", {
  mt: "$1",
  color: "$grey-400",
  d: "block"
});
var Error = styled("div", {
  color: "$red-500"
});

// src/components/textarea/index.tsx
var Textarea = React.forwardRef(({ label, hint, name, error, minRows = 3, css }, ref) => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, label && /* @__PURE__ */ React.createElement(Label, {
    htmlFor: `textarea-${name}`
  }, label), /* @__PURE__ */ React.createElement(TextAreaInput, {
    ref,
    id: `textarea-${name}`,
    minRows,
    css
  }), /* @__PURE__ */ React.createElement(Message, null, hint), /* @__PURE__ */ React.createElement(Error, null, error));
});
Textarea.displayName = "Textarea";
export {
  Textarea
};
//# sourceMappingURL=index.mjs.map
