var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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

// index.ts
__export(exports, {
  Avatar: () => Avatar
});

// src/index.tsx
var import_react = __toModule(require("react"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var variants = (theme) => ({
  sizes: {
    "3xl": {
      width: 240,
      height: 240
    },
    "2xl": {
      width: 192,
      height: 192
    },
    xl: {
      width: 160,
      height: 160
    },
    lg: {
      width: 88,
      height: 88
    },
    md: {
      width: 80,
      height: 80
    },
    sm: {
      width: 64,
      height: 64
    },
    xs: {
      width: 40,
      height: 40
    },
    "2xs": {
      width: 32,
      height: 32
    },
    "3xs": {
      width: 24,
      height: 24,
      borderRadius: theme.radii.full
    }
  }
});
var AvatarStyled = (0, import_system.default)("img")(({ theme, size }) => __spreadValues({}, size && variants(theme).sizes[size]));

// src/index.tsx
var Avatar = (_a) => {
  var _b = _a, { size = "md" } = _b, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ import_react.default.createElement(AvatarStyled, __spreadValues({
    size
  }, props));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXZhdGFyU3R5bGVkIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgdHlwZSBBdmF0YXJQcm9wcyA9IHtcbiAgLyoqXG4gICAqIEF2YXRhciBzaXplIGluIHBpeGVscy5cbiAgICogQGRlZmF1bHQgXCJtZFwiXG4gICAqL1xuICBzaXplOiAnM3hzJyB8ICcyeHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnMnhsJyB8ICczeGwnO1xuICAvKipcbiAgICogQXZhdGFyIHVybC5cbiAgICovXG4gIHNyYz86IHN0cmluZztcbiAgLyoqXG4gICAqIEF2YXRhciBkZXNjcmlwdGlvblxuICAgKi9cbiAgYWx0Pzogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBBdmF0YXIgY29tcG9uZW50XG4gKlxuICogQGRlc2NyaXB0aW9uIGlzIHVzZWQgdG8gcmVwcmVzZW50IGEgY2hhcmFjdGVyIGFuZCBkaXNwbGF5cyB0aGUgcGljdHVyZS5cbiAqL1xuZXhwb3J0IGNvbnN0IEF2YXRhciA9ICh7IHNpemUgPSAnbWQnLCAuLi5wcm9wcyB9OiBBdmF0YXJQcm9wcykgPT4ge1xuICByZXR1cm4gPEF2YXRhclN0eWxlZCBzaXplPXtzaXplfSB7Li4ucHJvcHN9IC8+O1xufTtcbiIsICJpbXBvcnQgc3R5bGVkLCB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmltcG9ydCB7IEF2YXRhclByb3BzIH0gZnJvbSAnLic7XG5cbmNvbnN0IHZhcmlhbnRzID0gKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+ICh7XG4gIHNpemVzOiB7XG4gICAgJzN4bCc6IHtcbiAgICAgIHdpZHRoOiAyNDAsXG4gICAgICBoZWlnaHQ6IDI0MFxuICAgIH0sXG4gICAgJzJ4bCc6IHtcbiAgICAgIHdpZHRoOiAxOTIsXG4gICAgICBoZWlnaHQ6IDE5MlxuICAgIH0sXG4gICAgeGw6IHtcbiAgICAgIHdpZHRoOiAxNjAsXG4gICAgICBoZWlnaHQ6IDE2MFxuICAgIH0sXG4gICAgbGc6IHtcbiAgICAgIHdpZHRoOiA4OCxcbiAgICAgIGhlaWdodDogODhcbiAgICB9LFxuICAgIG1kOiB7XG4gICAgICB3aWR0aDogODAsXG4gICAgICBoZWlnaHQ6IDgwXG4gICAgfSxcbiAgICBzbToge1xuICAgICAgd2lkdGg6IDY0LFxuICAgICAgaGVpZ2h0OiA2NFxuICAgIH0sXG4gICAgeHM6IHtcbiAgICAgIHdpZHRoOiA0MCxcbiAgICAgIGhlaWdodDogNDBcbiAgICB9LFxuICAgICcyeHMnOiB7XG4gICAgICB3aWR0aDogMzIsXG4gICAgICBoZWlnaHQ6IDMyXG4gICAgfSxcbiAgICAnM3hzJzoge1xuICAgICAgd2lkdGg6IDI0LFxuICAgICAgaGVpZ2h0OiAyNCxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaWkuZnVsbFxuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBBdmF0YXJTdHlsZWQgPSBzdHlsZWQoJ2ltZycpPEF2YXRhclByb3BzPigoeyB0aGVtZSwgc2l6ZSB9KSA9PiAoe1xuICAvLyB2YXJpYW50IHN0eWxlc1xuICAuLi4oc2l6ZSAmJiB2YXJpYW50cyh0aGVtZSkuc2l6ZXNbc2l6ZSFdKVxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxtQkFBa0I7OztBQ0FsQixvQkFBcUM7QUFJckMsSUFBTSxXQUFXLENBQUMsVUFBeUI7QUFBQSxFQUN6QyxPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUE7QUFBQSxJQUVWLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQTtBQUFBLElBRVYsSUFBSTtBQUFBLE1BQ0YsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBO0FBQUEsSUFFVixJQUFJO0FBQUEsTUFDRixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUE7QUFBQSxJQUVWLElBQUk7QUFBQSxNQUNGLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQTtBQUFBLElBRVYsSUFBSTtBQUFBLE1BQ0YsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBO0FBQUEsSUFFVixJQUFJO0FBQUEsTUFDRixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUE7QUFBQSxJQUVWLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQTtBQUFBLElBRVYsT0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsY0FBYyxNQUFNLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFLekIsSUFBTSxlQUFlLDJCQUFPLE9BQW9CLENBQUMsRUFBRSxPQUFPLFdBQVksbUJBRXZFLFFBQVEsU0FBUyxPQUFPLE1BQU07OztBRHZCN0IsSUFBTSxTQUFTLENBQUMsT0FBMkM7QUFBM0MsZUFBRSxTQUFPLFNBQVQsSUFBa0Isa0JBQWxCLElBQWtCLENBQWhCO0FBQ3ZCLFNBQU8sbURBQUMsY0FBRDtBQUFBLElBQWM7QUFBQSxLQUFnQjtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
