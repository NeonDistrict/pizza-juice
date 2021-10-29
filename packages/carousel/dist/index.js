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
  Carousel: () => Carousel
});

// src/index.tsx
var import_react = __toModule(require("react"));
var import_base_carousel = __toModule(require("@neon-district/base-carousel"));
var import_button = __toModule(require("@neon-district/button"));

// src/styles.ts
var import_system = __toModule(require("@neon-district/system"));
var Wrapper = (0, import_system.default)("section")(({ theme }) => ({
  ".slick-track, .slick-list": {
    display: "flex"
  },
  ".slick-list": {
    margin: 0 - theme.spaces[4]
  },
  ".slick-prev": {
    left: -theme.spaces[4]
  },
  ".slick-next": {
    right: -theme.spaces[4]
  },
  ".slick-prev.slick-disabled, .slick-next.slick-disabled": {
    visibility: "hidden"
  },
  ".slick-prev, .slick-next": {
    bottom: -17
  },
  ".slick-dots": {
    listStyle: "none",
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spaces[8],
    li: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: theme.spaces[2],
      height: theme.spaces[2],
      margin: `0 ${theme.spaces[1]}`,
      background: theme.colors.pink1,
      borderRadius: theme.radii.full,
      cursor: "pointer",
      transition: `box-shadow ${theme.durations.fast}`,
      "&.slick-active": {
        background: theme.colors.pink1
      },
      button: {
        opacity: 0,
        width: theme.spaces[2],
        height: theme.spaces[2],
        cursor: "pointer"
      }
    }
  }
}));
var Item = (0, import_system.default)("article")(({ theme }) => ({
  position: "relative",
  height: 190,
  display: "flex",
  justifyContent: "center",
  flex: "1 0 auto",
  margin: `0 ${theme.spaces[4]}`,
  padding: theme.spaces[8],
  border: `1px solid ${theme.colors.white}`,
  button: {
    position: "absolute",
    bottom: 50,
    textTransform: "uppercase"
  },
  img: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    objectFit: "cover"
  }
}));

// src/index.tsx
var Carousel = ({ items, settings }) => {
  const defaultSettings = {
    dots: true,
    slidesToShow: 4,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.1
        }
      }
    ]
  };
  return /* @__PURE__ */ import_react.default.createElement(Wrapper, null, /* @__PURE__ */ import_react.default.createElement(import_base_carousel.BaseCarousel, {
    settings: settings || defaultSettings
  }, items == null ? void 0 : items.map((item) => /* @__PURE__ */ import_react.default.createElement(CarouselItem, __spreadValues({
    key: item.label
  }, item)))));
};
var CarouselItem = ({ src, alt, label }) => {
  return /* @__PURE__ */ import_react.default.createElement(Item, null, /* @__PURE__ */ import_react.default.createElement("img", {
    src,
    alt
  }), /* @__PURE__ */ import_react.default.createElement(import_button.Button, null, label));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Carousel
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQmFzZUNhcm91c2VsLFxuICBCYXNlQ2Fyb3VzZWxTZXR0aW5nc1xufSBmcm9tICdAbmVvbi1kaXN0cmljdC9iYXNlLWNhcm91c2VsJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG5lb24tZGlzdHJpY3QvYnV0dG9uJztcblxuaW1wb3J0IHsgSXRlbSwgV3JhcHBlciB9IGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgQ2Fyb3VzZWxQcm9wcyA9IHtcbiAgLyoqXG4gICAqIEl0ZW1zIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgY2Fyb3VzZWxcbiAgICovXG4gIGl0ZW1zPzogQ2Fyb3VzZWxJdGVtUHJvcHNbXTtcbiAgLyoqXG4gICAqIFNldHRpbmdzIGZvciB0aGUgY2Fyb3VzZWxcbiAgICovXG4gIHNldHRpbmdzPzogQmFzZUNhcm91c2VsU2V0dGluZ3M7XG59O1xuXG4vKipcbiAqIENhcm91c2VsIGNvbXBvbmVudFxuICpcbiAqIEBkZXNjcmlwdGlvbiB3cmFwcGVyIG9mIHRoZSBjYXJvdXNlbCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IENhcm91c2VsID0gKHsgaXRlbXMsIHNldHRpbmdzIH06IENhcm91c2VsUHJvcHMpID0+IHtcbiAgY29uc3QgZGVmYXVsdFNldHRpbmdzOiBCYXNlQ2Fyb3VzZWxTZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMzc1LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA1NzAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDM3NSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEuMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8QmFzZUNhcm91c2VsIHNldHRpbmdzPXtzZXR0aW5ncyB8fCBkZWZhdWx0U2V0dGluZ3N9PlxuICAgICAgICB7aXRlbXM/Lm1hcChpdGVtID0+IChcbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtIGtleT17aXRlbS5sYWJlbH0gey4uLml0ZW19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9CYXNlQ2Fyb3VzZWw+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuLyoqXG4gKiBDYXJvdXNlbEl0ZW0gY29tcG9uZW50XG4gKlxuICogQGRlc2NyaXB0aW9uIFVzZWQgdG8gZGlzcGxheSBhbiBpdGVtIGluIHRoZSBjYXJvdXNlbFxuICovXG50eXBlIENhcm91c2VsSXRlbVByb3BzID0ge1xuICAvKipcbiAgICogSW1hZ2Ugc291cmNlXG4gICAqL1xuICBzcmM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBvZiB0aGUgaW1hZ2VcbiAgICovXG4gIGFsdD86IHN0cmluZztcbiAgLyoqXG4gICAqIExhYmVsIGZvciB0aGUgaXRlbVxuICAgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBDYXJvdXNlbEl0ZW0gPSAoeyBzcmMsIGFsdCwgbGFiZWwgfTogQ2Fyb3VzZWxJdGVtUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SXRlbT5cbiAgICAgIDxpbWcgc3JjPXtzcmN9IGFsdD17YWx0fSAvPlxuXG4gICAgICA8QnV0dG9uPntsYWJlbH08L0J1dHRvbj5cbiAgICA8L0l0ZW0+XG4gICk7XG59O1xuIiwgImltcG9ydCBzdHlsZWQgZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKSgoeyB0aGVtZSB9KSA9PiAoe1xuICAnLnNsaWNrLXRyYWNrLCAuc2xpY2stbGlzdCc6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcblxuICAnLnNsaWNrLWxpc3QnOiB7XG4gICAgbWFyZ2luOiAwIC0gdGhlbWUuc3BhY2VzWzRdXG4gIH0sXG5cbiAgJy5zbGljay1wcmV2Jzoge1xuICAgIGxlZnQ6IC10aGVtZS5zcGFjZXNbNF1cbiAgfSxcblxuICAnLnNsaWNrLW5leHQnOiB7XG4gICAgcmlnaHQ6IC10aGVtZS5zcGFjZXNbNF1cbiAgfSxcblxuICAnLnNsaWNrLXByZXYuc2xpY2stZGlzYWJsZWQsIC5zbGljay1uZXh0LnNsaWNrLWRpc2FibGVkJzoge1xuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gIH0sXG5cbiAgJy5zbGljay1wcmV2LCAuc2xpY2stbmV4dCc6IHtcbiAgICBib3R0b206IC0xN1xuICB9LFxuXG4gICcuc2xpY2stZG90cyc6IHtcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCAhaW1wb3J0YW50JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjZXNbOF0sXG5cbiAgICBsaToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2VzWzJdLFxuICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjZXNbMl0sXG4gICAgICBtYXJnaW46IGAwICR7dGhlbWUuc3BhY2VzWzFdfWAsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucGluazEsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLmZ1bGwsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRyYW5zaXRpb246IGBib3gtc2hhZG93ICR7dGhlbWUuZHVyYXRpb25zLmZhc3R9YCxcblxuICAgICAgJyYuc2xpY2stYWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucGluazFcbiAgICAgIH0sXG5cbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2VzWzJdLFxuICAgICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNlc1syXSxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pKTtcblxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBzdHlsZWQoJ2FydGljbGUnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgaGVpZ2h0OiAxOTAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBmbGV4OiAnMSAwIGF1dG8nLFxuICBtYXJnaW46IGAwICR7dGhlbWUuc3BhY2VzWzRdfWAsXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNlc1s4XSxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLndoaXRlfWAsXG5cbiAgYnV0dG9uOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiA1MCxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9LFxuXG4gIGltZzoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgb2JqZWN0Rml0OiAnY292ZXInXG4gIH1cbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7O0FDQUEsbUJBQWtCO0FBRWxCLDJCQUdPO0FBRVAsb0JBQXVCOzs7QUNQdkIsb0JBQW1CO0FBRVosSUFBTSxVQUFVLDJCQUFPLFdBQVcsQ0FBQyxFQUFFLFlBQWE7QUFBQSxFQUN2RCw2QkFBNkI7QUFBQSxJQUMzQixTQUFTO0FBQUE7QUFBQSxFQUdYLGVBQWU7QUFBQSxJQUNiLFFBQVEsSUFBSSxNQUFNLE9BQU87QUFBQTtBQUFBLEVBRzNCLGVBQWU7QUFBQSxJQUNiLE1BQU0sQ0FBQyxNQUFNLE9BQU87QUFBQTtBQUFBLEVBR3RCLGVBQWU7QUFBQSxJQUNiLE9BQU8sQ0FBQyxNQUFNLE9BQU87QUFBQTtBQUFBLEVBR3ZCLDBEQUEwRDtBQUFBLElBQ3hELFlBQVk7QUFBQTtBQUFBLEVBR2QsNEJBQTRCO0FBQUEsSUFDMUIsUUFBUTtBQUFBO0FBQUEsRUFHVixlQUFlO0FBQUEsSUFDYixXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsSUFDVCxZQUFZO0FBQUEsSUFDWixnQkFBZ0I7QUFBQSxJQUNoQixXQUFXLE1BQU0sT0FBTztBQUFBLElBRXhCLElBQUk7QUFBQSxNQUNGLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU8sTUFBTSxPQUFPO0FBQUEsTUFDcEIsUUFBUSxNQUFNLE9BQU87QUFBQSxNQUNyQixRQUFRLEtBQUssTUFBTSxPQUFPO0FBQUEsTUFDMUIsWUFBWSxNQUFNLE9BQU87QUFBQSxNQUN6QixjQUFjLE1BQU0sTUFBTTtBQUFBLE1BQzFCLFFBQVE7QUFBQSxNQUNSLFlBQVksY0FBYyxNQUFNLFVBQVU7QUFBQSxNQUUxQyxrQkFBa0I7QUFBQSxRQUNoQixZQUFZLE1BQU0sT0FBTztBQUFBO0FBQUEsTUFHM0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsT0FBTyxNQUFNLE9BQU87QUFBQSxRQUNwQixRQUFRLE1BQU0sT0FBTztBQUFBLFFBQ3JCLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1ULElBQU0sT0FBTywyQkFBTyxXQUFXLENBQUMsRUFBRSxZQUFhO0FBQUEsRUFDcEQsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsZ0JBQWdCO0FBQUEsRUFDaEIsTUFBTTtBQUFBLEVBQ04sUUFBUSxLQUFLLE1BQU0sT0FBTztBQUFBLEVBQzFCLFNBQVMsTUFBTSxPQUFPO0FBQUEsRUFDdEIsUUFBUSxhQUFhLE1BQU0sT0FBTztBQUFBLEVBRWxDLFFBQVE7QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQTtBQUFBLEVBR2pCLEtBQUs7QUFBQSxJQUNILE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLGdCQUFnQjtBQUFBLElBQ2hCLFdBQVc7QUFBQTtBQUFBOzs7QURyRFIsSUFBTSxXQUFXLENBQUMsRUFBRSxPQUFPLGVBQThCO0FBQzlELFFBQU0sa0JBQXdDO0FBQUEsSUFDNUMsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxRQUNFLFlBQVk7QUFBQSxRQUNaLFVBQVU7QUFBQSxVQUNSLGNBQWM7QUFBQTtBQUFBO0FBQUEsTUFHbEI7QUFBQSxRQUNFLFlBQVk7QUFBQSxRQUNaLFVBQVU7QUFBQSxVQUNSLGNBQWM7QUFBQTtBQUFBO0FBQUEsTUFHbEI7QUFBQSxRQUNFLFlBQVk7QUFBQSxRQUNaLFVBQVU7QUFBQSxVQUNSLGNBQWM7QUFBQTtBQUFBO0FBQUEsTUFHbEI7QUFBQSxRQUNFLFlBQVk7QUFBQSxRQUNaLFVBQVU7QUFBQSxVQUNSLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU10QixTQUNFLG1EQUFDLFNBQUQsTUFDRSxtREFBQyxtQ0FBRDtBQUFBLElBQWMsVUFBVSxZQUFZO0FBQUEsS0FDakMsK0JBQU8sSUFBSSxVQUNWLG1EQUFDLGNBQUQ7QUFBQSxJQUFjLEtBQUssS0FBSztBQUFBLEtBQVc7QUFBQTtBQTJCN0MsSUFBTSxlQUFlLENBQUMsRUFBRSxLQUFLLEtBQUssWUFBK0I7QUFDL0QsU0FDRSxtREFBQyxNQUFELE1BQ0UsbURBQUMsT0FBRDtBQUFBLElBQUs7QUFBQSxJQUFVO0FBQUEsTUFFZixtREFBQyxzQkFBRCxNQUFTO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
