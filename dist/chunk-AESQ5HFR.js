"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/hooks/src/useMediaQuery.ts
var _react = require('react');
var useMediaQuery = (query) => {
  const [matches, setMatches] = _react.useState.call(void 0, false);
  _react.useEffect.call(void 0, () => {
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

// src/hooks/src/useBreakpoint.ts


// src/hooks/src/useId.ts







var defaultIdContext = {
  prefix: Math.round(Math.random() * 1e10),
  current: 0
};
var IdContext = _react.createContext.call(void 0, defaultIdContext);
var IdProvider = _react.memo.call(void 0, ({ children }) => {
  const currentContext = _react.useContext.call(void 0, IdContext);
  const isRoot = currentContext === defaultIdContext;
  const context = _react.useMemo.call(void 0, () => ({
    prefix: isRoot ? 0 : ++currentContext.prefix,
    current: 0
  }), [isRoot, currentContext]);
  return _react.createElement.call(void 0, IdContext.Provider, { value: context }, children);
});
IdProvider.displayName = "IdProvider";



exports.useMediaQuery = useMediaQuery;
//# sourceMappingURL=chunk-AESQ5HFR.js.map
