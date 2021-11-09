import { useState, useEffect, useMemo } from 'react';

type useBreakpointProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * React hook that tracks state of a CSS media query
 *
 * @param query the media query to match
 */
export const useBreakpoint = (query: useBreakpointProps = 'md') => {
  const [matches, setMatches] = useState(false);

  const breakpoints = useMemo(() => {
    return {
      xs: '(max-width: 575px)',
      sm: '(min-width: 576px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xl: '(min-width: 1200px)',
      '2xl': '(min-width: 1400px)',
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia(breakpoints[query]);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query, breakpoints]);

  return matches;
};
