// src/hooks/src/useMediaQuery.ts
import { useState, useEffect } from "react";
var useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
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
import { useMemo } from "react";

// src/hooks/src/useId.ts
import {
  createContext,
  createElement,
  memo,
  useContext,
  useMemo as useMemo2
} from "react";
var defaultIdContext = {
  prefix: Math.round(Math.random() * 1e10),
  current: 0
};
var IdContext = createContext(defaultIdContext);
var IdProvider = memo(({ children }) => {
  const currentContext = useContext(IdContext);
  const isRoot = currentContext === defaultIdContext;
  const context = useMemo2(() => ({
    prefix: isRoot ? 0 : ++currentContext.prefix,
    current: 0
  }), [isRoot, currentContext]);
  return createElement(IdContext.Provider, { value: context }, children);
});
IdProvider.displayName = "IdProvider";

export {
  useMediaQuery
};
//# sourceMappingURL=chunk-PYUDTHSX.mjs.map
