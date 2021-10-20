import React from 'react';

import ResetStyles from './reset';

type ThemeProviderProps = {
  resetCss?: boolean;
  children?: React.ReactNode;
};

const ThemeProvider = ({ resetCss = true, children }: ThemeProviderProps) => {
  return (
    <>
      {resetCss && <ResetStyles />}

      {children}
    </>
  );
};

export default ThemeProvider;
