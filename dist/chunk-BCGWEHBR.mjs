import {
  styled
} from "./chunk-KKM2LXRG.mjs";

// src/components/stack/index.tsx
var childWithGap = "> * + *";
var Stack = styled("div", {
  d: "flex",
  $$gap: "0px",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
        [childWithGap]: { m: "0 0 0 $$gap" }
      },
      "row-reverse": {
        flexDirection: "row-reverse",
        [childWithGap]: { m: "0 $$gap 0 0" }
      },
      column: {
        flexDirection: "column",
        [childWithGap]: { m: "$$gap 0 0 0" }
      },
      "column-reverse": {
        flexDirection: "column-reverse",
        [childWithGap]: { m: "0 0 $$gap 0" }
      }
    }
  },
  defaultVariants: {
    direction: "row"
  }
});

export {
  Stack
};
//# sourceMappingURL=chunk-BCGWEHBR.mjs.map
