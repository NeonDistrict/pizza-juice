import {
  Pagination
} from "../chunk-NVB6YKTS.mjs";
import "../chunk-PYUDTHSX.mjs";
import {
  __spreadValues
} from "../chunk-KKM2LXRG.mjs";

// src/components/pagination/stories.tsx
import React from "react";
var stories_default = {
  title: "Components/Data Display/Pagination",
  component: Pagination
};
var Default = (args) => /* @__PURE__ */ React.createElement(Pagination, __spreadValues({}, args));
Default.args = {
  canNext: true,
  canPrevious: true,
  totalCount: 335,
  currentPage: 1,
  pageSize: 10
};
var WithJumpButtons = (args) => /* @__PURE__ */ React.createElement(Pagination, __spreadValues({}, args));
WithJumpButtons.args = {
  canNext: true,
  canPrevious: true,
  totalCount: 335,
  currentPage: 1,
  pageSize: 10,
  quickJumpButton: true
};
export {
  Default,
  WithJumpButtons,
  stories_default as default
};
//# sourceMappingURL=stories.mjs.map
