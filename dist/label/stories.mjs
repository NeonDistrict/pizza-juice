import {
  Label
} from "../chunk-FUWPC7QF.mjs";
import "../chunk-TK2AI5J2.mjs";
import "../chunk-IBDD2OAA.mjs";
import {
  __spreadValues
} from "../chunk-KKM2LXRG.mjs";

// src/components/label/stories.tsx
import React from "react";
import { BsCheck } from "react-icons/bs";
import { HiHand } from "react-icons/hi";
import { BiSad } from "react-icons/bi";
var stories_default = {
  title: "Components/Data Display/Label",
  component: Label,
  argTypes: {
    variant: {
      options: ["success", "danger", "warning"],
      control: { type: "select" }
    },
    icon: {
      table: { disable: true }
    }
  }
};
var Default = (args) => /* @__PURE__ */ React.createElement(Label, __spreadValues({}, args));
Default.args = {
  children: "Link Copied",
  variant: "success"
};
var LinkCopiedWithIcon = (args) => /* @__PURE__ */ React.createElement(Label, __spreadValues({}, args));
LinkCopiedWithIcon.args = {
  children: "Link Copied",
  variant: "success",
  icon: /* @__PURE__ */ React.createElement(BsCheck, null)
};
var InProgressWithIcon = (args) => /* @__PURE__ */ React.createElement(Label, __spreadValues({}, args));
InProgressWithIcon.args = {
  children: "In Progress",
  variant: "danger",
  icon: /* @__PURE__ */ React.createElement(HiHand, null)
};
var WarningWithIcon = (args) => /* @__PURE__ */ React.createElement(Label, __spreadValues({}, args));
WarningWithIcon.args = {
  children: "Warning",
  variant: "warning",
  icon: /* @__PURE__ */ React.createElement(BiSad, null)
};
export {
  Default,
  InProgressWithIcon,
  LinkCopiedWithIcon,
  WarningWithIcon,
  stories_default as default
};
//# sourceMappingURL=stories.mjs.map
