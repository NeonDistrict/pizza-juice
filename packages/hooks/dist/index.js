var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
  useMediaQuery: () => useMediaQuery
});

// src/useMediaQuery.ts
var import_react = __toModule(require("react"));
var useMediaQuery = (query) => {
  const [matches, setMatches] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useMediaQuery
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL3VzZU1lZGlhUXVlcnkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gJy4vc3JjJztcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIFJlYWN0IGhvb2sgdGhhdCB0cmFja3Mgc3RhdGUgb2YgYSBDU1MgbWVkaWEgcXVlcnlcbiAqXG4gKiBAcGFyYW0gcXVlcnkgdGhlIG1lZGlhIHF1ZXJ5IHRvIG1hdGNoXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VNZWRpYVF1ZXJ5ID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG4gICAgaWYgKG1lZGlhLm1hdGNoZXMgIT09IG1hdGNoZXMpIHtcbiAgICAgIHNldE1hdGNoZXMobWVkaWEubWF0Y2hlcyk7XG4gICAgfVxuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4gc2V0TWF0Y2hlcyhtZWRpYS5tYXRjaGVzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpO1xuICB9LCBbbWF0Y2hlcywgcXVlcnldKTtcblxuICByZXR1cm4gbWF0Y2hlcztcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxtQkFBb0M7QUFPN0IsSUFBTSxnQkFBZ0IsQ0FBQyxVQUFrQjtBQUM5QyxRQUFNLENBQUMsU0FBUyxjQUFjLDJCQUFTO0FBRXZDLDhCQUFVLE1BQU07QUFDZCxVQUFNLFFBQVEsT0FBTyxXQUFXO0FBQ2hDLFFBQUksTUFBTSxZQUFZLFNBQVM7QUFDN0IsaUJBQVcsTUFBTTtBQUFBO0FBRW5CLFVBQU0sV0FBVyxNQUFNLFdBQVcsTUFBTTtBQUN4QyxXQUFPLGlCQUFpQixVQUFVO0FBQ2xDLFdBQU8sTUFBTSxPQUFPLG9CQUFvQixVQUFVO0FBQUEsS0FDakQsQ0FBQyxTQUFTO0FBRWIsU0FBTztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
