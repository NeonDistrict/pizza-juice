var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// ../../node_modules/tsup/assets/cjs_shims.js
var importMetaUrlShim;
var init_cjs_shims = __esm({
  "../../node_modules/tsup/assets/cjs_shims.js"() {
    importMetaUrlShim = typeof document === "undefined" ? new (require("url")).URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
  }
});

// ../../node_modules/@radix-ui/react-context/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/@radix-ui/react-context/dist/index.js"(exports) {
    init_cjs_shims();
    var e;
    var t;
    var n = (e = {}, t = require("react"), Object.keys(t).forEach(function(n2) {
      n2 !== "default" && n2 !== "__esModule" && Object.defineProperty(e, n2, { enumerable: true, get: function() {
        return t[n2];
      } });
    }), e);
    function o(...e2) {
      const t2 = e2[0];
      if (e2.length === 1)
        return t2;
      const o2 = () => {
        const o3 = e2.map((e3) => ({ useScope: e3(), scopeName: e3.scopeName }));
        return function(e3) {
          const r = o3.reduce((t3, { useScope: n2, scopeName: o4 }) => __spreadValues(__spreadValues({}, t3), n2(e3)[`__scope${o4}`]), {});
          return n.useMemo(() => ({ [`__scope${t2.scopeName}`]: r }), [r]);
        };
      };
      return o2.scopeName = t2.scopeName, o2;
    }
    exports.createContext = function(e2, t2) {
      const o2 = /* @__PURE__ */ n.createContext(t2);
      function r(e3) {
        const _a = e3, { children: t3 } = _a, r2 = __objRest(_a, ["children"]), c = n.useMemo(() => r2, Object.values(r2));
        return n.createElement(o2.Provider, { value: c }, t3);
      }
      return r.displayName = e2 + "Provider", [r, function(r2) {
        const c = n.useContext(o2);
        if (c)
          return c;
        if (t2 !== void 0)
          return t2;
        throw new Error(`\`${r2}\` must be used within \`${e2}\``);
      }];
    }, exports.createContextScope = function(e2, t2 = []) {
      let r = [];
      const c = () => {
        const t3 = r.map((e3) => /* @__PURE__ */ n.createContext(e3));
        return function(o2) {
          const r2 = (o2 == null ? void 0 : o2[e2]) || t3;
          return n.useMemo(() => ({ [`__scope${e2}`]: __spreadProps(__spreadValues({}, o2), { [e2]: r2 }) }), [o2, r2]);
        };
      };
      return c.scopeName = e2, [function(t3, o2) {
        const c2 = /* @__PURE__ */ n.createContext(o2), u = r.length;
        function s(t4) {
          const _a = t4, { scope: o3, children: r2 } = _a, s2 = __objRest(_a, ["scope", "children"]), i = (o3 == null ? void 0 : o3[e2][u]) || c2, a = n.useMemo(() => s2, Object.values(s2));
          return n.createElement(i.Provider, { value: a }, r2);
        }
        return r = [...r, o2], s.displayName = t3 + "Provider", [s, function(r2, s2) {
          const i = (s2 == null ? void 0 : s2[e2][u]) || c2, a = n.useContext(i);
          if (a)
            return a;
          if (o2 !== void 0)
            return o2;
          throw new Error(`\`${r2}\` must be used within \`${t3}\``);
        }];
      }, o(c, ...t2)];
    };
  }
});

// ../../node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "../../node_modules/@babel/runtime/helpers/extends.js"(exports, module2) {
    init_cjs_shims();
    function _extends() {
      module2.exports = _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      return _extends.apply(this, arguments);
    }
    module2.exports = _extends;
    module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
  }
});

// ../../node_modules/@radix-ui/react-id/dist/index.js
var require_dist2 = __commonJS({
  "../../node_modules/@radix-ui/react-id/dist/index.js"(exports) {
    init_cjs_shims();
    var e;
    var r;
    var n;
    var t = require_dist().createContext;
    var o = (e = {}, r = require("react"), Object.keys(r).forEach(function(n2) {
      n2 !== "default" && n2 !== "__esModule" && Object.defineProperty(e, n2, { enumerable: true, get: function() {
        return r[n2];
      } });
    }), e);
    var i = (n = require_extends()) && n.__esModule ? n.default : n;
    var d = { prefix: Math.round(1e10 * Math.random()), current: 0 };
    var [u, a] = t("IdProvider", d);
    exports.IdProvider = (e2) => {
      const r2 = a("IdProvider"), n2 = r2 === d;
      return o.createElement(u, i({ prefix: n2 ? 0 : ++r2.prefix, current: 0 }, e2));
    }, exports.useId = function(e2) {
      const r2 = a("IdProviderConsumer");
      return Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) || r2 !== d || console.warn("When server rendering, you must wrap your application in an <IdProvider> to ensure consistent ids are generated between the client and server."), o.useMemo(() => e2 || `radix-id-${r2.prefix}-${++r2.current}`, [e2]);
    };
  }
});

// ../../node_modules/@radix-ui/react-compose-refs/dist/index.js
var require_dist3 = __commonJS({
  "../../node_modules/@radix-ui/react-compose-refs/dist/index.js"(exports) {
    init_cjs_shims();
    var e;
    var n;
    var r = (e = {}, n = require("react"), Object.keys(n).forEach(function(r2) {
      r2 !== "default" && r2 !== "__esModule" && Object.defineProperty(e, r2, { enumerable: true, get: function() {
        return n[r2];
      } });
    }), e);
    function t(...e2) {
      return (n2) => e2.forEach((e3) => function(e4, n3) {
        typeof e4 == "function" ? e4(n3) : e4 != null && (e4.current = n3);
      }(e3, n2));
    }
    exports.composeRefs = t, exports.useComposedRefs = function(...e2) {
      return r.useCallback(t(...e2), e2);
    };
  }
});

// ../../node_modules/@radix-ui/react-slot/dist/index.js
var require_dist4 = __commonJS({
  "../../node_modules/@radix-ui/react-slot/dist/index.js"(exports) {
    init_cjs_shims();
    var e;
    var r;
    var t;
    var n = require_dist3().composeRefs;
    var l = (e = {}, r = require("react"), Object.keys(r).forEach(function(t2) {
      t2 !== "default" && t2 !== "__esModule" && Object.defineProperty(e, t2, { enumerable: true, get: function() {
        return r[t2];
      } });
    }), e);
    var o = (t = require_extends()) && t.__esModule ? t.default : t;
    var s = /* @__PURE__ */ l.forwardRef((e2, r2) => {
      const _a = e2, { children: t2 } = _a, n2 = __objRest(_a, ["children"]), s2 = l.Children.toArray(t2);
      return s2.some(i) ? /* @__PURE__ */ l.createElement(l.Fragment, null, s2.map((e3) => i(e3) ? /* @__PURE__ */ l.createElement(c, o({}, n2, { ref: r2 }), e3.props.children) : e3)) : /* @__PURE__ */ l.createElement(c, o({}, n2, { ref: r2 }), t2);
    });
    exports.Slot = s, s.displayName = "Slot";
    var c = /* @__PURE__ */ l.forwardRef((e2, r2) => {
      const _a = e2, { children: t2 } = _a, o2 = __objRest(_a, ["children"]);
      return l.isValidElement(t2) ? /* @__PURE__ */ l.cloneElement(t2, __spreadProps(__spreadValues({}, u(o2, t2.props)), { ref: n(r2, t2.ref) })) : l.Children.count(t2) > 1 ? l.Children.only(null) : null;
    });
    c.displayName = "SlotClone";
    var a = ({ children: e2 }) => /* @__PURE__ */ l.createElement(l.Fragment, null, e2);
    function i(e2) {
      return l.isValidElement(e2) && e2.type === a;
    }
    function u(e2, r2) {
      const t2 = __spreadValues({}, r2);
      for (const n2 in r2) {
        const l2 = e2[n2], o2 = r2[n2];
        /^on[A-Z]/.test(n2) ? t2[n2] = (...e3) => {
          o2 == null || o2(...e3), l2 == null || l2(...e3);
        } : n2 === "style" ? t2[n2] = __spreadValues(__spreadValues({}, l2), o2) : n2 === "className" && (t2[n2] = [l2, o2].filter(Boolean).join(" "));
      }
      return __spreadValues(__spreadValues({}, e2), t2);
    }
    exports.Slottable = a;
    var d = s;
    exports.Root = d;
  }
});

// ../../node_modules/@radix-ui/react-primitive/dist/index.js
var require_dist5 = __commonJS({
  "../../node_modules/@radix-ui/react-primitive/dist/index.js"(exports) {
    init_cjs_shims();
    var e;
    var r;
    var t;
    var i = require_dist4().Slot;
    var o = (e = {}, r = require("react"), Object.keys(r).forEach(function(t2) {
      t2 !== "default" && t2 !== "__esModule" && Object.defineProperty(e, t2, { enumerable: true, get: function() {
        return r[t2];
      } });
    }), e);
    var n = (t = require_extends()) && t.__esModule ? t.default : t;
    var s = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "p", "span", "svg", "ul"].reduce((e2, r2) => __spreadProps(__spreadValues({}, e2), { [r2]: /* @__PURE__ */ o.forwardRef((e3, t2) => {
      const _a = e3, { asChild: s2 } = _a, u2 = __objRest(_a, ["asChild"]), d = s2 ? i : r2;
      return o.useEffect(() => {
        window[Symbol.for("radix-ui")] = true;
      }, []), e3.as && console.error(a), /* @__PURE__ */ o.createElement(d, n({}, u2, { ref: t2 }));
    }) }), {});
    exports.Primitive = s;
    var a = "Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element";
    var u = s;
    exports.Root = u;
  }
});

// ../../node_modules/@radix-ui/react-label/dist/index.js
var require_dist6 = __commonJS({
  "../../node_modules/@radix-ui/react-label/dist/index.js"(exports) {
    init_cjs_shims();
    var e;
    var r;
    var t;
    var n = require_dist2().useId;
    var l = require_dist5().Primitive;
    var u = require_dist3().useComposedRefs;
    var o = require_dist().createContext;
    var i = (e = {}, r = require("react"), Object.keys(r).forEach(function(t2) {
      t2 !== "default" && t2 !== "__esModule" && Object.defineProperty(e, t2, { enumerable: true, get: function() {
        return r[t2];
      } });
    }), e);
    var a = (t = require_extends()) && t.__esModule ? t.default : t;
    var [c, s] = o("Label", { id: void 0, controlRef: { current: null } });
    var d = /* @__PURE__ */ i.forwardRef((e2, r2) => {
      const _a = e2, { htmlFor: t2, id: o2 } = _a, s2 = __objRest(_a, ["htmlFor", "id"]), d2 = i.useRef(null), f2 = i.useRef(null), b = u(r2, f2), v = n(o2);
      return i.useEffect(() => {
        if (t2) {
          const e3 = document.getElementById(t2);
          if (f2.current && e3) {
            const r3 = () => e3.getAttribute("aria-labelledby"), t3 = [r3(), v].filter(Boolean).join(" ");
            return e3.setAttribute("aria-labelledby", t3), d2.current = e3, () => {
              var t4;
              const n2 = (t4 = r3()) === null || t4 === void 0 ? void 0 : t4.replace(v, "");
              n2 === "" ? e3.removeAttribute("aria-labelledby") : n2 && e3.setAttribute("aria-labelledby", n2);
            };
          }
        }
      }, [v, t2]), /* @__PURE__ */ i.createElement(c, { id: v, controlRef: d2 }, /* @__PURE__ */ i.createElement(l.span, a({ role: "label", id: v }, s2, { ref: b, onMouseDown: (r3) => {
        var t3;
        (t3 = e2.onMouseDown) === null || t3 === void 0 || t3.call(e2, r3), !r3.defaultPrevented && r3.detail > 1 && r3.preventDefault();
      }, onClick: (r3) => {
        var t3;
        if ((t3 = e2.onClick) === null || t3 === void 0 || t3.call(e2, r3), !d2.current || r3.defaultPrevented)
          return;
        const n2 = d2.current.contains(r3.target), l2 = r3.isTrusted === true;
        !n2 && l2 && (d2.current.click(), d2.current.focus());
      } })));
    });
    exports.Label = d;
    exports.useLabelContext = (e2) => {
      const r2 = s("LabelConsumer"), { controlRef: t2 } = r2;
      return i.useEffect(() => {
        e2 && (t2.current = e2);
      }, [e2, t2]), r2.id;
    };
    var f = d;
    exports.Root = f;
  }
});

// index.ts
__export(exports, {
  Textarea: () => Textarea
});
init_cjs_shims();

// src/index.tsx
init_cjs_shims();
var import_react = __toModule(require("react"));

// src/styles.ts
init_cjs_shims();
var import_system = __toModule(require("@neon-district/system"));
var import_react_textarea_autosize = __toModule(require("react-textarea-autosize"));
var LabelBase = __toModule(require_dist6());
var Wrapper = import_system.default.div`
  color: white;
`;
var Label = (0, import_system.default)(LabelBase.Root)`
  ${({ theme }) => import_system.css`
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.medium};
  `}
`;
var textAreaInputVariants = (theme) => ({
  disabled: import_system.css`
    &:disabled {
      background: ${theme.colors.grey1};
      cursor: not-allowed;
    }
  `,
  hasError: import_system.css`
    background: ${theme.colors.red1};
  `
});
var TextAreaInput = (0, import_system.default)(import_react_textarea_autosize.default)`
  ${({ theme, disabled, error }) => import_system.css`
    width: 100%;
    padding: ${theme.spaces[2]};
    font-size: ${theme.fontSizes.md};
    outline: none;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border: 1px solid;
    border-color: ${theme.colors.grey3};

    &:hover {
      border-color: ${theme.colors.pink2};
    }

    &:focus {
      border-color: ${theme.colors.teal1};
    }

    /* Modifiers */
    ${disabled && textAreaInputVariants(theme).disabled}
    ${error && textAreaInputVariants(theme).hasError}
  `}
`;
var Message = import_system.default.small`
  ${({ theme }) => import_system.css`
    margin-top: ${theme.spaces[1]};
    color: ${theme.colors.grey1};
    display: block;
  `}
`;
var Error2 = import_system.default.div`
  ${({ theme }) => import_system.css`
    color: ${theme.colors.red1};
  `}
`;

// src/index.tsx
var Textarea = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { label, hint, name, error, minRows = 3 } = _b, props = __objRest(_b, ["label", "hint", "name", "error", "minRows"]);
  return /* @__PURE__ */ import_react.default.createElement(Wrapper, null, label && /* @__PURE__ */ import_react.default.createElement(Label, {
    htmlFor: `textarea-${name}`
  }, label), /* @__PURE__ */ import_react.default.createElement(TextAreaInput, __spreadValues({
    ref,
    id: `textarea-${name}`,
    minRows,
    hasError: !!error
  }, props)), /* @__PURE__ */ import_react.default.createElement(Message, null, hint), /* @__PURE__ */ import_react.default.createElement(Error2, null, error));
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Textarea
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzdXAvYXNzZXRzL2Nqc19zaGltcy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQvZGlzdC9ub2RlX21vZHVsZXMvQHBhcmNlbC9zY29wZS1ob2lzdGluZy9saWIvaGVscGVycy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQvZGlzdC9wYWNrYWdlcy9yZWFjdC9jb250ZXh0L3NyYy9jcmVhdGVDb250ZXh0LnRzeCIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtaWQvZGlzdC9ub2RlX21vZHVsZXMvQHBhcmNlbC9zY29wZS1ob2lzdGluZy9saWIvaGVscGVycy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWlkL2Rpc3QvcGFja2FnZXMvcmVhY3QvaWQvc3JjL2lkLnRzeCIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmcy9kaXN0L25vZGVfbW9kdWxlcy9AcGFyY2VsL3Njb3BlLWhvaXN0aW5nL2xpYi9oZWxwZXJzLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzL2Rpc3QvcGFja2FnZXMvcmVhY3QvY29tcG9zZS1yZWZzL3NyYy9jb21wb3NlUmVmcy50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1zbG90L2Rpc3Qvbm9kZV9tb2R1bGVzL0BwYXJjZWwvc2NvcGUtaG9pc3RpbmcvbGliL2hlbHBlcnMuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1zbG90L2Rpc3QvcGFja2FnZXMvcmVhY3Qvc2xvdC9zcmMvU2xvdC50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1wcmltaXRpdmUvZGlzdC9ub2RlX21vZHVsZXMvQHBhcmNlbC9zY29wZS1ob2lzdGluZy9saWIvaGVscGVycy5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByaW1pdGl2ZS9kaXN0L3BhY2thZ2VzL3JlYWN0L3ByaW1pdGl2ZS9zcmMvUHJpbWl0aXZlLnRzeCIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWxhYmVsL2Rpc3Qvbm9kZV9tb2R1bGVzL0BwYXJjZWwvc2NvcGUtaG9pc3RpbmcvbGliL2hlbHBlcnMuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1sYWJlbC9kaXN0L3BhY2thZ2VzL3JlYWN0L2xhYmVsL3NyYy9MYWJlbC50c3giLCAiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY29uc3QgaW1wb3J0TWV0YVVybFNoaW0gPVxuICB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnXG4gICAgPyBuZXcgKHJlcXVpcmUoJ3UnICsgJ3JsJykuVVJMKSgnZmlsZTonICsgX19maWxlbmFtZSkuaHJlZlxuICAgIDogKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpIHx8XG4gICAgICBuZXcgVVJMKCdtYWluLmpzJywgZG9jdW1lbnQuYmFzZVVSSSkuaHJlZlxuIiwgImZ1bmN0aW9uICRwYXJjZWwkaW50ZXJvcERlZmF1bHQoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhLmRlZmF1bHQgOiBhO1xufVxuXG5mdW5jdGlvbiAkcGFyY2VsJGRlZmluZUludGVyb3BGbGFnKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59XG5cbmZ1bmN0aW9uICRwYXJjZWwkcmVleHBvcnQoZSwgbiwgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgbiwge2dldDogdiwgZW51bWVyYWJsZTogdHJ1ZX0pO1xufVxuXG5mdW5jdGlvbiAkcGFyY2VsJGV4cG9ydFdpbGRjYXJkKGRlc3QsIHNvdXJjZSkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn1cblxuZnVuY3Rpb24gJHBhcmNlbCRtaXNzaW5nTW9kdWxlKG5hbWUpIHtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBuYW1lICsgXCInXCIpO1xuICBlcnIuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcbiAgdGhyb3cgZXJyO1xufVxuXG52YXIgJHBhcmNlbCRnbG9iYWwgPVxuICB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IGdsb2JhbFRoaXNcbiAgICA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJ1xuICAgID8gc2VsZlxuICAgIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHdpbmRvd1xuICAgIDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IGdsb2JhbFxuICAgIDoge307XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0PENvbnRleHRWYWx1ZVR5cGUgZXh0ZW5kcyBvYmplY3QgfCBudWxsPihcbiAgcm9vdENvbXBvbmVudE5hbWU6IHN0cmluZyxcbiAgZGVmYXVsdENvbnRleHQ/OiBDb250ZXh0VmFsdWVUeXBlXG4pIHtcbiAgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dFZhbHVlVHlwZSB8IHVuZGVmaW5lZD4oZGVmYXVsdENvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIFByb3ZpZGVyKHByb3BzOiBDb250ZXh0VmFsdWVUeXBlICYgeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5jb250ZXh0IH0gPSBwcm9wcztcbiAgICAvLyBPbmx5IHJlLW1lbW9pemUgd2hlbiBwcm9wIHZhbHVlcyBjaGFuZ2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgY29uc3QgdmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IGNvbnRleHQsIE9iamVjdC52YWx1ZXMoY29udGV4dCkpIGFzIENvbnRleHRWYWx1ZVR5cGU7XG4gICAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XG4gIH1cblxuICBmdW5jdGlvbiB1c2VDb250ZXh0KGNvbnN1bWVyTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgaWYgKGNvbnRleHQpIHJldHVybiBjb250ZXh0O1xuICAgIGlmIChkZWZhdWx0Q29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG4gICAgLy8gaWYgYSBkZWZhdWx0Q29udGV4dCB3YXNuJ3Qgc3BlY2lmaWVkLCBpdCdzIGEgcmVxdWlyZWQgY29udGV4dC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYCR7Y29uc3VtZXJOYW1lfVxcYCBtdXN0IGJlIHVzZWQgd2l0aGluIFxcYCR7cm9vdENvbXBvbmVudE5hbWV9XFxgYCk7XG4gIH1cblxuICBQcm92aWRlci5kaXNwbGF5TmFtZSA9IHJvb3RDb21wb25lbnROYW1lICsgJ1Byb3ZpZGVyJztcbiAgcmV0dXJuIFtQcm92aWRlciwgdXNlQ29udGV4dF0gYXMgY29uc3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGNyZWF0ZUNvbnRleHRTY29wZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG50eXBlIFNjb3BlPEMgPSBhbnk+ID0geyBbc2NvcGVOYW1lOiBzdHJpbmddOiBSZWFjdC5Db250ZXh0PEM+W10gfSB8IHVuZGVmaW5lZDtcbnR5cGUgU2NvcGVIb29rID0gKHNjb3BlOiBTY29wZSkgPT4geyBbX19zY29wZVByb3A6IHN0cmluZ106IFNjb3BlIH07XG5pbnRlcmZhY2UgQ3JlYXRlU2NvcGUge1xuICBzY29wZU5hbWU6IHN0cmluZztcbiAgKCk6IFNjb3BlSG9vaztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dFNjb3BlKHNjb3BlTmFtZTogc3RyaW5nLCBjcmVhdGVDb250ZXh0U2NvcGVEZXBzOiBDcmVhdGVTY29wZVtdID0gW10pIHtcbiAgbGV0IGRlZmF1bHRDb250ZXh0czogYW55W10gPSBbXTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBjcmVhdGVDb250ZXh0XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29udGV4dDxDb250ZXh0VmFsdWVUeXBlIGV4dGVuZHMgb2JqZWN0IHwgbnVsbD4oXG4gICAgcm9vdENvbXBvbmVudE5hbWU6IHN0cmluZyxcbiAgICBkZWZhdWx0Q29udGV4dD86IENvbnRleHRWYWx1ZVR5cGVcbiAgKSB7XG4gICAgY29uc3QgQmFzZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENvbnRleHRWYWx1ZVR5cGUgfCB1bmRlZmluZWQ+KGRlZmF1bHRDb250ZXh0KTtcbiAgICBjb25zdCBpbmRleCA9IGRlZmF1bHRDb250ZXh0cy5sZW5ndGg7XG4gICAgZGVmYXVsdENvbnRleHRzID0gWy4uLmRlZmF1bHRDb250ZXh0cywgZGVmYXVsdENvbnRleHRdO1xuXG4gICAgZnVuY3Rpb24gUHJvdmlkZXIoXG4gICAgICBwcm9wczogQ29udGV4dFZhbHVlVHlwZSAmIHsgc2NvcGU6IFNjb3BlPENvbnRleHRWYWx1ZVR5cGU+OyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH1cbiAgICApIHtcbiAgICAgIGNvbnN0IHsgc2NvcGUsIGNoaWxkcmVuLCAuLi5jb250ZXh0IH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IENvbnRleHQgPSBzY29wZT8uW3Njb3BlTmFtZV1baW5kZXhdIHx8IEJhc2VDb250ZXh0O1xuICAgICAgLy8gT25seSByZS1tZW1vaXplIHdoZW4gcHJvcCB2YWx1ZXMgY2hhbmdlXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgICBjb25zdCB2YWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gY29udGV4dCwgT2JqZWN0LnZhbHVlcyhjb250ZXh0KSkgYXMgQ29udGV4dFZhbHVlVHlwZTtcbiAgICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVzZUNvbnRleHQoY29uc3VtZXJOYW1lOiBzdHJpbmcsIHNjb3BlOiBTY29wZTxDb250ZXh0VmFsdWVUeXBlIHwgdW5kZWZpbmVkPikge1xuICAgICAgY29uc3QgQ29udGV4dCA9IHNjb3BlPy5bc2NvcGVOYW1lXVtpbmRleF0gfHwgQmFzZUNvbnRleHQ7XG4gICAgICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTtcbiAgICAgIGlmIChjb250ZXh0KSByZXR1cm4gY29udGV4dDtcbiAgICAgIGlmIChkZWZhdWx0Q29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG4gICAgICAvLyBpZiBhIGRlZmF1bHRDb250ZXh0IHdhc24ndCBzcGVjaWZpZWQsIGl0J3MgYSByZXF1aXJlZCBjb250ZXh0LlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGAke2NvbnN1bWVyTmFtZX1cXGAgbXVzdCBiZSB1c2VkIHdpdGhpbiBcXGAke3Jvb3RDb21wb25lbnROYW1lfVxcYGApO1xuICAgIH1cblxuICAgIFByb3ZpZGVyLmRpc3BsYXlOYW1lID0gcm9vdENvbXBvbmVudE5hbWUgKyAnUHJvdmlkZXInO1xuICAgIHJldHVybiBbUHJvdmlkZXIsIHVzZUNvbnRleHRdIGFzIGNvbnN0O1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogY3JlYXRlU2NvcGVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBjb25zdCBjcmVhdGVTY29wZTogQ3JlYXRlU2NvcGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2NvcGVDb250ZXh0cyA9IGRlZmF1bHRDb250ZXh0cy5tYXAoKGRlZmF1bHRDb250ZXh0KSA9PiB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0Q29udGV4dCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVzZVNjb3BlKHNjb3BlOiBTY29wZSkge1xuICAgICAgY29uc3QgY29udGV4dHMgPSBzY29wZT8uW3Njb3BlTmFtZV0gfHwgc2NvcGVDb250ZXh0cztcbiAgICAgIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgICAgICAoKSA9PiAoeyBbYF9fc2NvcGUke3Njb3BlTmFtZX1gXTogeyAuLi5zY29wZSwgW3Njb3BlTmFtZV06IGNvbnRleHRzIH0gfSksXG4gICAgICAgIFtzY29wZSwgY29udGV4dHNdXG4gICAgICApO1xuICAgIH07XG4gIH07XG5cbiAgY3JlYXRlU2NvcGUuc2NvcGVOYW1lID0gc2NvcGVOYW1lO1xuICByZXR1cm4gW2NyZWF0ZUNvbnRleHQsIGNvbXBvc2VDb250ZXh0U2NvcGVzKGNyZWF0ZVNjb3BlLCAuLi5jcmVhdGVDb250ZXh0U2NvcGVEZXBzKV0gYXMgY29uc3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGNvbXBvc2VDb250ZXh0U2NvcGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmZ1bmN0aW9uIGNvbXBvc2VDb250ZXh0U2NvcGVzKC4uLnNjb3BlczogQ3JlYXRlU2NvcGVbXSkge1xuICBjb25zdCBiYXNlU2NvcGUgPSBzY29wZXNbMF07XG4gIGlmIChzY29wZXMubGVuZ3RoID09PSAxKSByZXR1cm4gYmFzZVNjb3BlO1xuXG4gIGNvbnN0IGNyZWF0ZVNjb3BlOiBDcmVhdGVTY29wZSA9ICgpID0+IHtcbiAgICBjb25zdCBzY29wZUhvb2tzID0gc2NvcGVzLm1hcCgoY3JlYXRlU2NvcGUpID0+ICh7XG4gICAgICB1c2VTY29wZTogY3JlYXRlU2NvcGUoKSxcbiAgICAgIHNjb3BlTmFtZTogY3JlYXRlU2NvcGUuc2NvcGVOYW1lLFxuICAgIH0pKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB1c2VDb21wb3NlZFNjb3BlcyhvdmVycmlkZVNjb3Blcykge1xuICAgICAgY29uc3QgbmV4dFNjb3BlcyA9IHNjb3BlSG9va3MucmVkdWNlKChuZXh0U2NvcGVzLCB7IHVzZVNjb3BlLCBzY29wZU5hbWUgfSkgPT4ge1xuICAgICAgICAvLyBXZSBhcmUgY2FsbGluZyBhIGhvb2sgaW5zaWRlIGEgY2FsbGJhY2sgd2hpY2ggUmVhY3Qgd2FybnMgYWdhaW5zdCB0byBhdm9pZCBpbmNvbnNpc3RlbnRcbiAgICAgICAgLy8gcmVuZGVycywgaG93ZXZlciwgc2NvcGluZyBkb2Vzbid0IGhhdmUgcmVuZGVyIHNpZGUgZWZmZWN0cyBzbyB3ZSBpZ25vcmUgdGhlIHJ1bGUuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBzY29wZVByb3BzID0gdXNlU2NvcGUob3ZlcnJpZGVTY29wZXMpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2NvcGUgPSBzY29wZVByb3BzW2BfX3Njb3BlJHtzY29wZU5hbWV9YF07XG4gICAgICAgIHJldHVybiB7IC4uLm5leHRTY29wZXMsIC4uLmN1cnJlbnRTY29wZSB9O1xuICAgICAgfSwge30pO1xuXG4gICAgICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBbYF9fc2NvcGUke2Jhc2VTY29wZS5zY29wZU5hbWV9YF06IG5leHRTY29wZXMgfSksIFtuZXh0U2NvcGVzXSk7XG4gICAgfTtcbiAgfTtcblxuICBjcmVhdGVTY29wZS5zY29wZU5hbWUgPSBiYXNlU2NvcGUuc2NvcGVOYW1lO1xuICByZXR1cm4gY3JlYXRlU2NvcGU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZXhwb3J0IHsgY3JlYXRlQ29udGV4dCwgY3JlYXRlQ29udGV4dFNjb3BlIH07XG5leHBvcnQgdHlwZSB7IENyZWF0ZVNjb3BlLCBTY29wZSB9O1xuIiwgImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsICJmdW5jdGlvbiAkcGFyY2VsJGludGVyb3BEZWZhdWx0KGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYS5kZWZhdWx0IDogYTtcbn1cblxuZnVuY3Rpb24gJHBhcmNlbCRkZWZpbmVJbnRlcm9wRmxhZyhhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufVxuXG5mdW5jdGlvbiAkcGFyY2VsJHJlZXhwb3J0KGUsIG4sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIG4sIHtnZXQ6IHYsIGVudW1lcmFibGU6IHRydWV9KTtcbn1cblxuZnVuY3Rpb24gJHBhcmNlbCRleHBvcnRXaWxkY2FyZChkZXN0LCBzb3VyY2UpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbmZ1bmN0aW9uICRwYXJjZWwkbWlzc2luZ01vZHVsZShuYW1lKSB7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbiAgZXJyLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG4gIHRocm93IGVycjtcbn1cblxudmFyICRwYXJjZWwkZ2xvYmFsID1cbiAgdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXG4gICAgPyBnbG9iYWxUaGlzXG4gICAgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHNlbGZcbiAgICA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyB3aW5kb3dcbiAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnXG4gICAgPyBnbG9iYWxcbiAgICA6IHt9O1xuIiwgIi8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgaGVhdmlseSBpbnNwaXJlZCBieSByZWFjdC1hcmlhJ3MgaW1wbGVtZW50YXRpb25cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Fkb2JlL3JlYWN0LXNwZWN0cnVtL2Jsb2IvbWFpbi9wYWNrYWdlcy8lNDByZWFjdC1hcmlhL3Nzci9zcmMvU1NSUHJvdmlkZXIudHN4XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtY29udGV4dCc7XG5cbmNvbnN0IFBST1ZJREVSX05BTUUgPSAnSWRQcm92aWRlcic7XG5cbmNvbnN0IGRlZmF1bHRJZENvbnRleHQgPSB7XG4gIHByZWZpeDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDApLFxuICBjdXJyZW50OiAwLFxufTtcblxuY29uc3QgW0lkUHJvdmlkZXJJbXBsLCB1c2VJZENvbnRleHRdID0gY3JlYXRlQ29udGV4dChQUk9WSURFUl9OQU1FLCBkZWZhdWx0SWRDb250ZXh0KTtcblxuY29uc3QgSWRQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0gdXNlSWRDb250ZXh0KFBST1ZJREVSX05BTUUpO1xuICBjb25zdCBpc1Jvb3RJZFByb3ZpZGVyID0gY3VycmVudENvbnRleHQgPT09IGRlZmF1bHRJZENvbnRleHQ7XG4gIHJldHVybiAoXG4gICAgPElkUHJvdmlkZXJJbXBsXG4gICAgICBwcmVmaXg9e2lzUm9vdElkUHJvdmlkZXIgPyAwIDogKytjdXJyZW50Q29udGV4dC5wcmVmaXh9XG4gICAgICBjdXJyZW50PXswfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG5mdW5jdGlvbiB1c2VJZChkZXRlcm1pbmlzdGljSWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjb250ZXh0ID0gdXNlSWRDb250ZXh0KCdJZFByb3ZpZGVyQ29uc3VtZXInKTtcbiAgY29uc3QgaXNCcm93c2VyID0gQm9vbGVhbihnbG9iYWxUaGlzPy5kb2N1bWVudCk7XG5cbiAgaWYgKCFpc0Jyb3dzZXIgJiYgY29udGV4dCA9PT0gZGVmYXVsdElkQ29udGV4dCkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdXaGVuIHNlcnZlciByZW5kZXJpbmcsIHlvdSBtdXN0IHdyYXAgeW91ciBhcHBsaWNhdGlvbiBpbiBhbiA8SWRQcm92aWRlcj4gdG8gZW5zdXJlIGNvbnNpc3RlbnQgaWRzIGFyZSBnZW5lcmF0ZWQgYmV0d2VlbiB0aGUgY2xpZW50IGFuZCBzZXJ2ZXIuJ1xuICAgICk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBkZXRlcm1pbmlzdGljSWQgfHwgYHJhZGl4LWlkLSR7Y29udGV4dC5wcmVmaXh9LSR7Kytjb250ZXh0LmN1cnJlbnR9YCxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW2RldGVybWluaXN0aWNJZF1cbiAgKTtcbn1cblxuZXhwb3J0IHsgSWRQcm92aWRlciwgdXNlSWQgfTtcbiIsICJmdW5jdGlvbiAkcGFyY2VsJGludGVyb3BEZWZhdWx0KGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYS5kZWZhdWx0IDogYTtcbn1cblxuZnVuY3Rpb24gJHBhcmNlbCRkZWZpbmVJbnRlcm9wRmxhZyhhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufVxuXG5mdW5jdGlvbiAkcGFyY2VsJHJlZXhwb3J0KGUsIG4sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIG4sIHtnZXQ6IHYsIGVudW1lcmFibGU6IHRydWV9KTtcbn1cblxuZnVuY3Rpb24gJHBhcmNlbCRleHBvcnRXaWxkY2FyZChkZXN0LCBzb3VyY2UpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbmZ1bmN0aW9uICRwYXJjZWwkbWlzc2luZ01vZHVsZShuYW1lKSB7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbiAgZXJyLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG4gIHRocm93IGVycjtcbn1cblxudmFyICRwYXJjZWwkZ2xvYmFsID1cbiAgdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXG4gICAgPyBnbG9iYWxUaGlzXG4gICAgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHNlbGZcbiAgICA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyB3aW5kb3dcbiAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnXG4gICAgPyBnbG9iYWxcbiAgICA6IHt9O1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQb3NzaWJsZVJlZjxUPiA9IFJlYWN0LlJlZjxUPiB8IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBTZXQgYSBnaXZlbiByZWYgdG8gYSBnaXZlbiB2YWx1ZVxuICogVGhpcyB1dGlsaXR5IHRha2VzIGNhcmUgb2YgZGlmZmVyZW50IHR5cGVzIG9mIHJlZnM6IGNhbGxiYWNrIHJlZnMgYW5kIFJlZk9iamVjdChzKVxuICovXG5mdW5jdGlvbiBzZXRSZWY8VD4ocmVmOiBQb3NzaWJsZVJlZjxUPiwgdmFsdWU6IFQpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWYodmFsdWUpO1xuICB9IGVsc2UgaWYgKHJlZiAhPT0gbnVsbCAmJiByZWYgIT09IHVuZGVmaW5lZCkge1xuICAgIChyZWYgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxUPikuY3VycmVudCA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogQSB1dGlsaXR5IHRvIGNvbXBvc2UgbXVsdGlwbGUgcmVmcyB0b2dldGhlclxuICogQWNjZXB0cyBjYWxsYmFjayByZWZzIGFuZCBSZWZPYmplY3QocylcbiAqL1xuZnVuY3Rpb24gY29tcG9zZVJlZnM8VD4oLi4ucmVmczogUG9zc2libGVSZWY8VD5bXSkge1xuICByZXR1cm4gKG5vZGU6IFQpID0+IHJlZnMuZm9yRWFjaCgocmVmKSA9PiBzZXRSZWYocmVmLCBub2RlKSk7XG59XG5cbi8qKlxuICogQSBjdXN0b20gaG9vayB0aGF0IGNvbXBvc2VzIG11bHRpcGxlIHJlZnNcbiAqIEFjY2VwdHMgY2FsbGJhY2sgcmVmcyBhbmQgUmVmT2JqZWN0KHMpXG4gKi9cbmZ1bmN0aW9uIHVzZUNvbXBvc2VkUmVmczxUPiguLi5yZWZzOiBQb3NzaWJsZVJlZjxUPltdKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGNvbXBvc2VSZWZzKC4uLnJlZnMpLCByZWZzKTtcbn1cblxuZXhwb3J0IHsgY29tcG9zZVJlZnMsIHVzZUNvbXBvc2VkUmVmcyB9O1xuIiwgImZ1bmN0aW9uICRwYXJjZWwkaW50ZXJvcERlZmF1bHQoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhLmRlZmF1bHQgOiBhO1xufVxuXG5mdW5jdGlvbiAkcGFyY2VsJGRlZmluZUludGVyb3BGbGFnKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59XG5cbmZ1bmN0aW9uICRwYXJjZWwkcmVleHBvcnQoZSwgbiwgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgbiwge2dldDogdiwgZW51bWVyYWJsZTogdHJ1ZX0pO1xufVxuXG5mdW5jdGlvbiAkcGFyY2VsJGV4cG9ydFdpbGRjYXJkKGRlc3QsIHNvdXJjZSkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn1cblxuZnVuY3Rpb24gJHBhcmNlbCRtaXNzaW5nTW9kdWxlKG5hbWUpIHtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBuYW1lICsgXCInXCIpO1xuICBlcnIuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcbiAgdGhyb3cgZXJyO1xufVxuXG52YXIgJHBhcmNlbCRnbG9iYWwgPVxuICB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IGdsb2JhbFRoaXNcbiAgICA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJ1xuICAgID8gc2VsZlxuICAgIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHdpbmRvd1xuICAgIDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IGdsb2JhbFxuICAgIDoge307XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZVJlZnMgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzJztcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogU2xvdFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbnRlcmZhY2UgU2xvdFByb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+IHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IFNsb3QgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBTbG90UHJvcHM+KChwcm9wcywgZm9yd2FyZGVkUmVmKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnNsb3RQcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IGNoaWxkQXJyYXkgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcblxuICBpZiAoY2hpbGRBcnJheS5zb21lKGlzU2xvdHRhYmxlKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7Y2hpbGRBcnJheS5tYXAoKGNoaWxkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGlzU2xvdHRhYmxlKGNoaWxkKSA/IChcbiAgICAgICAgICAgIDxTbG90Q2xvbmUgey4uLnNsb3RQcm9wc30gcmVmPXtmb3J3YXJkZWRSZWZ9PlxuICAgICAgICAgICAgICB7Y2hpbGQucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L1Nsb3RDbG9uZT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTbG90Q2xvbmUgey4uLnNsb3RQcm9wc30gcmVmPXtmb3J3YXJkZWRSZWZ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2xvdENsb25lPlxuICApO1xufSk7XG5cblNsb3QuZGlzcGxheU5hbWUgPSAnU2xvdCc7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFNsb3RDbG9uZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbnRlcmZhY2UgU2xvdENsb25lUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBTbG90Q2xvbmUgPSBSZWFjdC5mb3J3YXJkUmVmPGFueSwgU2xvdENsb25lUHJvcHM+KChwcm9wcywgZm9yd2FyZGVkUmVmKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnNsb3RQcm9wcyB9ID0gcHJvcHM7XG5cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgIC4uLm1lcmdlUHJvcHMoc2xvdFByb3BzLCBjaGlsZHJlbi5wcm9wcyksXG4gICAgICByZWY6IGNvbXBvc2VSZWZzKGZvcndhcmRlZFJlZiwgKGNoaWxkcmVuIGFzIGFueSkucmVmKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAxID8gUmVhY3QuQ2hpbGRyZW4ub25seShudWxsKSA6IG51bGw7XG59KTtcblxuU2xvdENsb25lLmRpc3BsYXlOYW1lID0gJ1Nsb3RDbG9uZSc7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFNsb3R0YWJsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBTbG90dGFibGUgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG50eXBlIEFueVByb3BzID0gUmVjb3JkPHN0cmluZywgYW55PjtcblxuZnVuY3Rpb24gaXNTbG90dGFibGUoY2hpbGQ6IFJlYWN0LlJlYWN0Tm9kZSk6IGNoaWxkIGlzIFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIHJldHVybiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQudHlwZSA9PT0gU2xvdHRhYmxlO1xufVxuXG5mdW5jdGlvbiBtZXJnZVByb3BzKHNsb3RQcm9wczogQW55UHJvcHMsIGNoaWxkUHJvcHM6IEFueVByb3BzKSB7XG4gIC8vIGFsbCBjaGlsZCBwcm9wcyBzaG91bGQgb3ZlcnJpZGVcbiAgY29uc3Qgb3ZlcnJpZGVQcm9wcyA9IHsgLi4uY2hpbGRQcm9wcyB9O1xuXG4gIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hpbGRQcm9wcykge1xuICAgIGNvbnN0IHNsb3RQcm9wVmFsdWUgPSBzbG90UHJvcHNbcHJvcE5hbWVdO1xuICAgIGNvbnN0IGNoaWxkUHJvcFZhbHVlID0gY2hpbGRQcm9wc1twcm9wTmFtZV07XG5cbiAgICBjb25zdCBpc0hhbmRsZXIgPSAvXm9uW0EtWl0vLnRlc3QocHJvcE5hbWUpO1xuICAgIC8vIGlmIGl0J3MgYSBoYW5kbGVyLCBtb2RpZnkgdGhlIG92ZXJyaWRlIGJ5IGNvbXBvc2luZyB0aGUgYmFzZSBoYW5kbGVyXG4gICAgaWYgKGlzSGFuZGxlcikge1xuICAgICAgb3ZlcnJpZGVQcm9wc1twcm9wTmFtZV0gPSAoLi4uYXJnczogdW5rbm93bltdKSA9PiB7XG4gICAgICAgIGNoaWxkUHJvcFZhbHVlPy4oLi4uYXJncyk7XG4gICAgICAgIHNsb3RQcm9wVmFsdWU/LiguLi5hcmdzKTtcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIGlmIGl0J3MgYHN0eWxlYCwgd2UgbWVyZ2UgdGhlbVxuICAgIGVsc2UgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XG4gICAgICBvdmVycmlkZVByb3BzW3Byb3BOYW1lXSA9IHsgLi4uc2xvdFByb3BWYWx1ZSwgLi4uY2hpbGRQcm9wVmFsdWUgfTtcbiAgICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgb3ZlcnJpZGVQcm9wc1twcm9wTmFtZV0gPSBbc2xvdFByb3BWYWx1ZSwgY2hpbGRQcm9wVmFsdWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgLi4uc2xvdFByb3BzLCAuLi5vdmVycmlkZVByb3BzIH07XG59XG5cbmNvbnN0IFJvb3QgPSBTbG90O1xuXG5leHBvcnQge1xuICBTbG90LFxuICBTbG90dGFibGUsXG4gIC8vXG4gIFJvb3QsXG59O1xuZXhwb3J0IHR5cGUgeyBTbG90UHJvcHMgfTtcbiIsICJmdW5jdGlvbiAkcGFyY2VsJGludGVyb3BEZWZhdWx0KGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYS5kZWZhdWx0IDogYTtcbn1cblxuZnVuY3Rpb24gJHBhcmNlbCRkZWZpbmVJbnRlcm9wRmxhZyhhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufVxuXG5mdW5jdGlvbiAkcGFyY2VsJHJlZXhwb3J0KGUsIG4sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIG4sIHtnZXQ6IHYsIGVudW1lcmFibGU6IHRydWV9KTtcbn1cblxuZnVuY3Rpb24gJHBhcmNlbCRleHBvcnRXaWxkY2FyZChkZXN0LCBzb3VyY2UpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbmZ1bmN0aW9uICRwYXJjZWwkbWlzc2luZ01vZHVsZShuYW1lKSB7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbiAgZXJyLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG4gIHRocm93IGVycjtcbn1cblxudmFyICRwYXJjZWwkZ2xvYmFsID1cbiAgdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXG4gICAgPyBnbG9iYWxUaGlzXG4gICAgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHNlbGZcbiAgICA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyB3aW5kb3dcbiAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnXG4gICAgPyBnbG9iYWxcbiAgICA6IHt9O1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNsb3QgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3Qtc2xvdCc7XG5cbmNvbnN0IE5PREVTID0gW1xuICAnYScsXG4gICdidXR0b24nLFxuICAnZGl2JyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2ltZycsXG4gICdsaScsXG4gICduYXYnLFxuICAncCcsXG4gICdzcGFuJyxcbiAgJ3N2ZycsXG4gICd1bCcsXG5dIGFzIGNvbnN0O1xuXG4vLyBUZW1wb3Jhcnkgd2hpbGUgd2UgYXdhaXQgbWVyZ2Ugb2YgdGhpcyBmaXg6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGVmaW5pdGVseVR5cGVkL0RlZmluaXRlbHlUeXBlZC9wdWxsLzU1Mzk2XG4vLyBwcmV0dGllci1pZ25vcmVcbnR5cGUgUHJvcHNXaXRob3V0UmVmPFA+ID0gUCBleHRlbmRzIGFueSA/ICgncmVmJyBleHRlbmRzIGtleW9mIFAgPyBQaWNrPFAsIEV4Y2x1ZGU8a2V5b2YgUCwgJ3JlZic+PiA6IFApIDogUDtcbnR5cGUgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFQgZXh0ZW5kcyBSZWFjdC5FbGVtZW50VHlwZT4gPSBQcm9wc1dpdGhvdXRSZWY8XG4gIFJlYWN0LkNvbXBvbmVudFByb3BzPFQ+XG4+O1xuXG50eXBlIFByaW1pdGl2ZXMgPSB7IFtFIGluIHR5cGVvZiBOT0RFU1tudW1iZXJdXTogUHJpbWl0aXZlRm9yd2FyZFJlZkNvbXBvbmVudDxFPiB9O1xudHlwZSBQcmltaXRpdmVQcm9wc1dpdGhSZWY8RSBleHRlbmRzIFJlYWN0LkVsZW1lbnRUeXBlPiA9IFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aFJlZjxFPiAmIHtcbiAgYXNDaGlsZD86IGJvb2xlYW47XG59O1xuXG5pbnRlcmZhY2UgUHJpbWl0aXZlRm9yd2FyZFJlZkNvbXBvbmVudDxFIGV4dGVuZHMgUmVhY3QuRWxlbWVudFR5cGU+XG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxQcmltaXRpdmVQcm9wc1dpdGhSZWY8RT4+IHt9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaW1pdGl2ZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBQcmltaXRpdmUgPSBOT0RFUy5yZWR1Y2UoXG4gIChwcmltaXRpdmUsIG5vZGUpID0+ICh7XG4gICAgLi4ucHJpbWl0aXZlLFxuICAgIFtub2RlXTogUmVhY3QuZm9yd2FyZFJlZigocHJvcHM6IFByaW1pdGl2ZVByb3BzV2l0aFJlZjx0eXBlb2Ygbm9kZT4sIGZvcndhcmRlZFJlZjogYW55KSA9PiB7XG4gICAgICBjb25zdCB7IGFzQ2hpbGQsIC4uLnByaW1pdGl2ZVByb3BzIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IENvbXA6IGFueSA9IGFzQ2hpbGQgPyBTbG90IDogbm9kZTtcblxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKHdpbmRvdyBhcyBhbnkpW1N5bWJvbC5mb3IoJ3JhZGl4LXVpJyldID0gdHJ1ZTtcbiAgICAgIH0sIFtdKTtcblxuICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLmFzKSBjb25zb2xlLmVycm9yKEFTX0VSUk9SKTtcbiAgICAgIHJldHVybiA8Q29tcCB7Li4ucHJpbWl0aXZlUHJvcHN9IHJlZj17Zm9yd2FyZGVkUmVmfSAvPjtcbiAgICB9KSxcbiAgfSksXG4gIHt9IGFzIFByaW1pdGl2ZXNcbik7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgQVNfRVJST1IgPSBgV2FybmluZzogVGhlIFxcYGFzXFxgIHByb3AgaGFzIGJlZW4gcmVtb3ZlZCBpbiBmYXZvdXIgb2YgXFxgYXNDaGlsZFxcYC4gRm9yIGRldGFpbHMsIHNlZSBodHRwczovL3JhZGl4LXVpLmNvbS9kb2NzL3ByaW1pdGl2ZXMvb3ZlcnZpZXcvc3R5bGluZyNjaGFuZ2luZy10aGUtcmVuZGVyZWQtZWxlbWVudGA7XG5cbmNvbnN0IFJvb3QgPSBQcmltaXRpdmU7XG5cbmV4cG9ydCB7XG4gIFByaW1pdGl2ZSxcbiAgLy9cbiAgUm9vdCxcbn07XG5leHBvcnQgdHlwZSB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiwgUHJpbWl0aXZlUHJvcHNXaXRoUmVmIH07XG4iLCAiZnVuY3Rpb24gJHBhcmNlbCRpbnRlcm9wRGVmYXVsdChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEuZGVmYXVsdCA6IGE7XG59XG5cbmZ1bmN0aW9uICRwYXJjZWwkZGVmaW5lSW50ZXJvcEZsYWcoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn1cblxuZnVuY3Rpb24gJHBhcmNlbCRyZWV4cG9ydChlLCBuLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBuLCB7Z2V0OiB2LCBlbnVtZXJhYmxlOiB0cnVlfSk7XG59XG5cbmZ1bmN0aW9uICRwYXJjZWwkZXhwb3J0V2lsZGNhcmQoZGVzdCwgc291cmNlKSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufVxuXG5mdW5jdGlvbiAkcGFyY2VsJG1pc3NpbmdNb2R1bGUobmFtZSkge1xuICB2YXIgZXJyID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG5hbWUgKyBcIidcIik7XG4gIGVyci5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuICB0aHJvdyBlcnI7XG59XG5cbnZhciAkcGFyY2VsJGdsb2JhbCA9XG4gIHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJ1xuICAgID8gZ2xvYmFsVGhpc1xuICAgIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnXG4gICAgPyBzZWxmXG4gICAgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJ1xuICAgID8gZ2xvYmFsXG4gICAgOiB7fTtcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29tcG9zZWRSZWZzIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmcyc7XG5pbXBvcnQgeyBQcmltaXRpdmUgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtcHJpbWl0aXZlJztcbmltcG9ydCB7IHVzZUlkIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWlkJztcblxuaW1wb3J0IHR5cGUgKiBhcyBSYWRpeCBmcm9tICdAcmFkaXgtdWkvcmVhY3QtcHJpbWl0aXZlJztcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTGFiZWxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgTkFNRSA9ICdMYWJlbCc7XG5cbnR5cGUgTGFiZWxDb250ZXh0VmFsdWUgPSB7IGlkPzogc3RyaW5nOyBjb250cm9sUmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxFbGVtZW50IHwgbnVsbD4gfTtcbmNvbnN0IFtMYWJlbFByb3ZpZGVyLCB1c2VMYWJlbENvbnRleHRJbXBsXSA9IGNyZWF0ZUNvbnRleHQ8TGFiZWxDb250ZXh0VmFsdWU+KE5BTUUsIHtcbiAgaWQ6IHVuZGVmaW5lZCxcbiAgY29udHJvbFJlZjogeyBjdXJyZW50OiBudWxsIH0sXG59KTtcblxudHlwZSBMYWJlbEVsZW1lbnQgPSBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBQcmltaXRpdmUuc3Bhbj47XG50eXBlIFByaW1pdGl2ZVNwYW5Qcm9wcyA9IFJhZGl4LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgUHJpbWl0aXZlLnNwYW4+O1xuaW50ZXJmYWNlIExhYmVsUHJvcHMgZXh0ZW5kcyBQcmltaXRpdmVTcGFuUHJvcHMge1xuICBodG1sRm9yPzogc3RyaW5nO1xufVxuXG5jb25zdCBMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWY8TGFiZWxFbGVtZW50LCBMYWJlbFByb3BzPigocHJvcHMsIGZvcndhcmRlZFJlZikgPT4ge1xuICBjb25zdCB7IGh0bWxGb3IsIGlkOiBpZFByb3AsIC4uLmxhYmVsUHJvcHMgfSA9IHByb3BzO1xuICBjb25zdCBjb250cm9sUmVmID0gUmVhY3QudXNlUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb21wb3NlZFJlZnMgPSB1c2VDb21wb3NlZFJlZnMoZm9yd2FyZGVkUmVmLCByZWYpO1xuICBjb25zdCBpZCA9IHVzZUlkKGlkUHJvcCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaHRtbEZvcikge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGh0bWxGb3IpO1xuICAgICAgY29uc3QgbGFiZWwgPSByZWYuY3VycmVudDtcbiAgICAgIGlmIChsYWJlbCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGdldEFyaWFMYWJlbCA9ICgpID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknKTtcbiAgICAgICAgY29uc3QgYXJpYUxhYmVsbGVkQnkgPSBbZ2V0QXJpYUxhYmVsKCksIGlkXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgYXJpYUxhYmVsbGVkQnkpO1xuICAgICAgICBjb250cm9sUmVmLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFdlIGdldCB0aGUgbGF0ZXN0IGF0dHJpYnV0ZSB2YWx1ZSBiZWNhdXNlIGF0IHRoZSB0aW1lIHRoYXQgdGhpcyBjbGVhbnVwIGZpcmVzLFxuICAgICAgICAgICAqIHRoZSB2YWx1ZXMgZnJvbSB0aGUgY2xvc3VyZSBtYXkgaGF2ZSBjaGFuZ2VkLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IGFyaWFMYWJlbGxlZEJ5ID0gZ2V0QXJpYUxhYmVsKCk/LnJlcGxhY2UoaWQsICcnKTtcbiAgICAgICAgICBpZiAoYXJpYUxhYmVsbGVkQnkgPT09ICcnKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5Jyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmlhTGFiZWxsZWRCeSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGFyaWFMYWJlbGxlZEJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9LCBbaWQsIGh0bWxGb3JdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYWJlbFByb3ZpZGVyIGlkPXtpZH0gY29udHJvbFJlZj17Y29udHJvbFJlZn0+XG4gICAgICA8UHJpbWl0aXZlLnNwYW5cbiAgICAgICAgcm9sZT1cImxhYmVsXCJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICAgICAgcmVmPXtjb21wb3NlZFJlZnN9XG4gICAgICAgIG9uTW91c2VEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBwcm9wcy5vbk1vdXNlRG93bj8uKGV2ZW50KTtcbiAgICAgICAgICAvLyBwcmV2ZW50IHRleHQgc2VsZWN0aW9uIHdoZW4gZG91YmxlIGNsaWNraW5nIGxhYmVsXG4gICAgICAgICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIGV2ZW50LmRldGFpbCA+IDEpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgIHByb3BzLm9uQ2xpY2s/LihldmVudCk7XG4gICAgICAgICAgaWYgKCFjb250cm9sUmVmLmN1cnJlbnQgfHwgZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IGlzQ2xpY2tpbmdDb250cm9sID0gY29udHJvbFJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKTtcbiAgICAgICAgICAvLyBFbnN1cmUgZXZlbnQgd2FzIGdlbmVyYXRlZCBieSBhIHVzZXIgYWN0aW9uXG4gICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L2lzVHJ1c3RlZFxuICAgICAgICAgIGNvbnN0IGlzVXNlckNsaWNrID0gZXZlbnQuaXNUcnVzdGVkID09PSB0cnVlO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFdoZW4gYSBsYWJlbCBpcyB3cmFwcGVkIGFyb3VuZCB0aGUgY29udHJvbCBpdCBsYWJlbHMsIHdlIHRyaWdnZXIgdGhlIGFwcHJvcHJpYXRlIGV2ZW50c1xuICAgICAgICAgICAqIG9uIHRoZSBjb250cm9sIHdoZW4gdGhlIGxhYmVsIGlzIGNsaWNrZWQuIFdlIGRvIG5vdGhpbmcgaWYgdGhlIHVzZXIgaXMgYWxyZWFkeSBjbGlja2luZyB0aGVcbiAgICAgICAgICAgKiBjb250cm9sIGluc2lkZSB0aGUgbGFiZWwuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKCFpc0NsaWNraW5nQ29udHJvbCAmJiBpc1VzZXJDbGljaykge1xuICAgICAgICAgICAgY29udHJvbFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgICAgICAgICBjb250cm9sUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvTGFiZWxQcm92aWRlcj5cbiAgKTtcbn0pO1xuXG5MYWJlbC5kaXNwbGF5TmFtZSA9IE5BTUU7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgdXNlTGFiZWxDb250ZXh0ID0gKGVsZW1lbnQ/OiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUxhYmVsQ29udGV4dEltcGwoJ0xhYmVsQ29uc3VtZXInKTtcbiAgY29uc3QgeyBjb250cm9sUmVmIH0gPSBjb250ZXh0O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIGNvbnRyb2xSZWYuY3VycmVudCA9IGVsZW1lbnQ7XG4gIH0sIFtlbGVtZW50LCBjb250cm9sUmVmXSk7XG5cbiAgcmV0dXJuIGNvbnRleHQuaWQ7XG59O1xuXG5jb25zdCBSb290ID0gTGFiZWw7XG5cbmV4cG9ydCB7XG4gIExhYmVsLFxuICAvL1xuICBSb290LFxuICAvL1xuICB1c2VMYWJlbENvbnRleHQsXG59O1xuZXhwb3J0IHR5cGUgeyBMYWJlbFByb3BzIH07XG4iLCAiZXhwb3J0ICogZnJvbSAnLi9zcmMnO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0eXBlIHsgVGV4dGFyZWFBdXRvc2l6ZVByb3BzIH0gZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xuXG5pbXBvcnQgeyBXcmFwcGVyLCBMYWJlbCwgVGV4dEFyZWFJbnB1dCwgTWVzc2FnZSwgRXJyb3IgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIFRleHRhcmVhUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgaGludD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAvKipcbiAgICpcbiAgICovXG4gIGVycm9yPzogc3RyaW5nIHwgc3RyaW5nW107XG59ICYgVGV4dGFyZWFBdXRvc2l6ZVByb3BzO1xuXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQsIFRleHRhcmVhUHJvcHM+KFxuICAoeyBsYWJlbCwgaGludCwgbmFtZSwgZXJyb3IsIG1pblJvd3MgPSAzLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIHtsYWJlbCAmJiA8TGFiZWwgaHRtbEZvcj17YHRleHRhcmVhLSR7bmFtZX1gfT57bGFiZWx9PC9MYWJlbD59XG5cbiAgICAgICAgPFRleHRBcmVhSW5wdXRcbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBpZD17YHRleHRhcmVhLSR7bmFtZX1gfVxuICAgICAgICAgIG1pblJvd3M9e21pblJvd3N9XG4gICAgICAgICAgaGFzRXJyb3I9eyEhZXJyb3J9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxNZXNzYWdlPntoaW50fTwvTWVzc2FnZT5cblxuICAgICAgICA8RXJyb3I+e2Vycm9yfTwvRXJyb3I+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxuKTtcbiIsICJpbXBvcnQgc3R5bGVkLCB7IGNzcywgRGVmYXVsdFRoZW1lIH0gZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuaW1wb3J0IFJlc2l6ZVRleHRhcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcblxuaW1wb3J0ICogYXMgTGFiZWxCYXNlIGZyb20gJ0ByYWRpeC11aS9yZWFjdC1sYWJlbCc7XG5cbmltcG9ydCB7IFRleHRhcmVhUHJvcHMgfSBmcm9tICcuJztcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoTGFiZWxCYXNlLlJvb3QpYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICBgfVxuYDtcblxuY29uc3QgdGV4dEFyZWFJbnB1dFZhcmlhbnRzID0gKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+ICh7XG4gIGRpc2FibGVkOiBjc3NgXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5MX07XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgYCxcbiAgaGFzRXJyb3I6IGNzc2BcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5yZWQxfTtcbiAgYFxufSk7XG5cbnR5cGUgVGV4dGFyZWFTdHlsZXNQcm9wcyA9IHtcbiAgaGFzRXJyb3I6IGJvb2xlYW47XG59ICYgUGljazxUZXh0YXJlYVByb3BzLCAnY29sb3InIHwgJ2Rpc2FibGVkJyB8ICdlcnJvcic+O1xuXG5leHBvcnQgY29uc3QgVGV4dEFyZWFJbnB1dCA9IHN0eWxlZChSZXNpemVUZXh0YXJlYSk8VGV4dGFyZWFTdHlsZXNQcm9wcz5gXG4gICR7KHsgdGhlbWUsIGRpc2FibGVkLCBlcnJvciB9KSA9PiBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjZXNbMl19O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXMubWR9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMucGluazJ9O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZWFsMX07XG4gICAgfVxuXG4gICAgLyogTW9kaWZpZXJzICovXG4gICAgJHtkaXNhYmxlZCAmJiB0ZXh0QXJlYUlucHV0VmFyaWFudHModGhlbWUpLmRpc2FibGVkfVxuICAgICR7ZXJyb3IgJiYgdGV4dEFyZWFJbnB1dFZhcmlhbnRzKHRoZW1lKS5oYXNFcnJvcn1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlID0gc3R5bGVkLnNtYWxsYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNlc1sxXX07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkxfTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5yZWQxfTtcbiAgYH1cbmA7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFhO0FBQWI7QUFBQTtBQUFPLElBQU0sb0JBQ1gsT0FBTyxhQUFhLGNBQ2hCLElBQUssU0FBUSxRQUFZLElBQUssVUFBVSxZQUFZLE9BQ25ELFNBQVMsaUJBQWlCLFNBQVMsY0FBYyxPQUNsRCxJQUFJLElBQUksV0FBVyxTQUFTLFNBQVM7QUFBQTtBQUFBOzs7Ozs7UUNRWDtRQUFNO1FBQUEsSUFBTixLQUFBLElBQU0sSUFBQSxRQUFBLFVBQ3BDLE9BQU8sS0FBSyxHQUFRLFFBQVEsU0FBUyxJQUFBO0FBQ3ZCLE1BQVIsT0FBUSxhQUFxQixBQUFSLE9BQVEsZ0JBSWpDLE9BQU8sZUFBZSxHQUFNLElBQUssRUFDL0IsWUFB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
