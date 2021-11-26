"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDHEOC6CNjs = require('./chunk-DHEOC6CN.js');

// src/components/stack/index.tsx
var childWithGap = "> * + *";
var Stack = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
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



exports.Stack = Stack;
//# sourceMappingURL=chunk-QSLS45BS.js.map
