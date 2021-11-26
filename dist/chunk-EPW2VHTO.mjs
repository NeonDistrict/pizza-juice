import {
  Spinner
} from "./chunk-RWQXSO4V.mjs";
import {
  styled
} from "./chunk-KKM2LXRG.mjs";

// src/components/button/styles.ts
var Button = styled("button", {
  appearance: "none",
  bg: "transparent",
  fontFamily: "inherit",
  border: "1px solid",
  borderColor: "transparent",
  whiteSpace: "nowrap",
  outline: 0,
  py: "$2",
  fontWeight: 600,
  textTransform: "uppercase",
  color: "$white",
  d: "flex",
  align: "center",
  justify: "center",
  gap: "$2",
  userSelect: "none",
  transition: "$fast",
  "&:not(:disabled)": {
    cursor: "pointer"
  },
  variants: {
    variant: {
      primary: {
        bg: "$pink-500",
        "&:hover": {
          bg: "$pink-600"
        },
        "&:focus": {
          borderColor: "$teal-500"
        },
        "&:active": {
          bg: "$pink-700"
        },
        "&:disabled": {
          bg: "$grey-400",
          color: "$grey-600"
        }
      },
      secondary: {
        bg: "$grey-700",
        "&:hover": {
          bg: "$grey-800"
        },
        "&:focus": {
          bg: "$grey-800",
          borderColor: "$teal-500"
        },
        "&:active": {
          bg: "$grey-800"
        },
        "&:disabled": {
          bg: "$grey-400",
          color: "$grey-600"
        }
      },
      destructive: {
        color: "$red-500",
        borderColor: "$red-500",
        "&:hover": {
          bg: "$red-900"
        },
        "&:focus": {
          borderColor: "$teal-500"
        },
        "&:active": {
          bg: "$red-900"
        },
        "&:disabled": {
          color: "$grey-600",
          borderColor: "$grey-400",
          bg: "$grey-8000"
        }
      },
      outline: {
        borderColor: "$pink-500",
        "&:focus": {
          borderColor: "$teal-500"
        },
        "&:disabled": {
          color: "$grey-600",
          borderColor: "$grey-400"
        }
      },
      naked: {
        color: "$pink-500",
        "&:hover": {
          color: "$pink-600",
          bg: "$red-900"
        },
        "&:focus": {
          borderColor: "$teal-500"
        },
        "&:active": {
          color: "$pink-600",
          bg: "transparent"
        },
        "&:disabled": {
          color: "$grey-600",
          bg: "transparent"
        }
      }
    },
    shape: {
      rounded: {
        br: "$full"
      },
      squared: {
        br: 0
      }
    },
    size: {
      sm: {
        minW: 32,
        h: 32,
        fontSize: "$xs",
        p: "$2"
      },
      md: {
        minW: 40,
        h: 40,
        fontSize: "$sm",
        px: "$6"
      }
    },
    loading: {
      true: {
        "span, svg": {
          opacity: 0
        },
        svg: {
          opacity: 0
        }
      }
    },
    fluid: {
      true: {
        w: "$full"
      }
    },
    onlyIcon: {
      true: {}
    }
  },
  compoundVariants: [
    {
      size: "md",
      onlyIcon: "true",
      css: {
        p: "$2"
      }
    },
    {
      size: "sm",
      onlyIcon: "true",
      css: {
        p: "$2"
      }
    }
  ],
  defaultVariants: {
    variant: "primary",
    shape: "squared",
    size: "md",
    loading: false
  }
});
var Spinner2 = styled(Spinner, {
  d: "flex",
  align: "center",
  position: "absolute",
  marginInlineEnd: 0
});

export {
  Button,
  Spinner2 as Spinner
};
//# sourceMappingURL=chunk-EPW2VHTO.mjs.map
