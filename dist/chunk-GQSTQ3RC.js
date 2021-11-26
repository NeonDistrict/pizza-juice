"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDHEOC6CNjs = require('./chunk-DHEOC6CN.js');

// src/components/label/styles.ts
var Label = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
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



exports.Label = Label;
//# sourceMappingURL=chunk-GQSTQ3RC.js.map
