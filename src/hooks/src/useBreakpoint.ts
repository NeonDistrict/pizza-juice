import { useMemo } from 'react';

import { useMediaQuery } from '..';

type useBreakpointProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * React hook that tracks state of a CSS media query
 *
 * @param query 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 */
export const useBreakpoint = (query: useBreakpointProps = 'md') => {
  const breakpoints = useMemo(
    () => ({
      xs: '(max-width: 575px)',
      sm: '(min-width: 576px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xl: '(min-width: 1200px)',
      '2xl': '(min-width: 1400px)',
    }),
    [],
  );

  return useMediaQuery(breakpoints[query]);
};
