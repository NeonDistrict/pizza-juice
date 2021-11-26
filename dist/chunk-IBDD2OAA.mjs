import {
  styled
} from "./chunk-KKM2LXRG.mjs";

// src/components/label/styles.ts
var Label = styled("div", {
  userSelect: "none",
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  d: "inline-flex",
  p: "$2",
  align: "center",
  gap: "$2",
  color: "$grey-800",
  variants: {
    variant: {
      success: {
        bg: "$green-500"
      },
      warning: {
        bg: "$yellow-500"
      },
      danger: {
        bg: "$red-500"
      }
    },
    icon: {
      true: {
        pl: "10px"
      }
    }
  },
  defaultVariants: {
    variant: "success"
  }
});

export {
  Label
};
//# sourceMappingURL=chunk-IBDD2OAA.mjs.map
