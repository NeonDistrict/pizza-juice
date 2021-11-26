import {
  useMediaQuery
} from "../chunk-PYUDTHSX.mjs";
import {
  Button
} from "../chunk-INOBXNG7.mjs";
import "../chunk-EPW2VHTO.mjs";
import "../chunk-RWQXSO4V.mjs";
import {
  __objRest,
  __spreadValues,
  styled
} from "../chunk-KKM2LXRG.mjs";

// src/components/page-heading/index.tsx
import React from "react";

// src/components/page-heading/styles.ts
var Wrapper = styled("div", {
  textTransform: "uppercase",
  fontWeight: "$medium"
});
var HeadingStyled = styled("div", {
  fontSize: "$2xl",
  d: "flex",
  align: "center",
  justify: "space-between",
  position: "relative",
  mb: "$1"
});
var Title = styled("h1", {
  w: "$full",
  d: "flex",
  align: "center",
  color: "$white",
  fontSize: "$lg",
  fontWeight: "$medium",
  m: 0,
  lineHeight: "24px",
  letterSpacing: "0.1em",
  variants: {
    haveButton: {
      true: {
        justify: "center",
        "@md": {
          justify: "flex-start"
        }
      }
    }
  }
});
var FlexEnd = styled("div", {
  d: "flex",
  gap: "$1",
  align: "center"
});
var Line = styled("div", {
  position: "absolute",
  bottom: -7,
  w: 160,
  h: 2,
  bg: "$grey-700",
  variants: {
    haveButton: {
      true: {}
    },
    haveDescription: {
      true: {}
    }
  },
  compoundVariants: [
    {
      haveButton: "true",
      haveDescription: "false",
      css: {
        d: "none",
        "@md": {
          d: "block"
        }
      }
    }
  ]
});
var Description = styled("div", {
  color: "$grey-600",
  mt: "$2",
  border: "none",
  "@md": {
    borderLeft: "2px solid",
    borderColor: "$grey-700",
    pl: "$2"
  }
});
var FullLine = styled("hr", {
  borderWidth: "0px 0px 1px",
  borderColor: "$grey-700",
  borderStyle: "solid",
  w: "100%",
  m: 0,
  variants: {
    haveButton: {
      true: {}
    },
    haveDescription: {
      true: {}
    }
  },
  compoundVariants: [
    {
      haveButton: "true",
      haveDescription: "false",
      css: {
        d: "none",
        "@md": {
          d: "block"
        }
      }
    }
  ]
});
var Bottom = styled("div", {
  d: "flex",
  flexDirection: "column",
  gap: "$4",
  variants: {
    haveButton: {
      true: {}
    },
    haveDescription: {
      true: {}
    }
  },
  compoundVariants: [
    {
      haveButton: "true",
      haveDescription: "true",
      css: {
        textAlign: "center",
        "@md": {
          textAlign: "start"
        }
      }
    }
  ]
});

// src/components/page-heading/index.tsx
var PageHeading = (_a) => {
  var _b = _a, {
    description,
    children,
    title
  } = _b, props = __objRest(_b, [
    "description",
    "children",
    "title"
  ]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return /* @__PURE__ */ React.createElement(Wrapper, __spreadValues({}, props), /* @__PURE__ */ React.createElement(HeadingStyled, null, /* @__PURE__ */ React.createElement(Title, {
    haveButton: !!children
  }, title), /* @__PURE__ */ React.createElement(Line, {
    haveButton: !!children,
    haveDescription: !!description
  }), !isMobile && /* @__PURE__ */ React.createElement(FlexEnd, null, /* @__PURE__ */ React.createElement(ChildrenButtons, {
    children,
    isMobile
  }))), /* @__PURE__ */ React.createElement(FullLine, {
    haveButton: !!children,
    haveDescription: !!description
  }), /* @__PURE__ */ React.createElement(Bottom, {
    haveButton: !!children,
    haveDescription: !!description
  }, description && /* @__PURE__ */ React.createElement(Description, null, description), isMobile && /* @__PURE__ */ React.createElement(ChildrenButtons, {
    children,
    isMobile
  })));
};
var ChildrenButtons = ({ children, isMobile }) => /* @__PURE__ */ React.createElement(React.Fragment, null, React.Children.map(children, (child) => {
  if ((child == null ? void 0 : child.type) === Button && isMobile) {
    return React.cloneElement(child, {
      fluid: true
    });
  }
  return child;
}));
export {
  PageHeading
};
//# sourceMappingURL=index.mjs.map
