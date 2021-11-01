import React from 'react';

import ResetStyles from './reset';

type ThemeProviderProps = {
  /**
   *
   */
  resetCss?: boolean;
  /**
   * @default `true`
   */
  children?: React.ReactNode;
};

export const ThemeProvider = ({
  resetCss = true,
  children
}: ThemeProviderProps) => {
  return (
    <>
      {resetCss && <ResetStyles />}

      {children}
    </>
  );
};
