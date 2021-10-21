import React from 'react';

import { ThemeProvider as StyledProvider } from '@nd-ui/system';

import defaultTheme, { Theme } from '@nd-ui/theme';

import ResetStyles from './reset';

type ThemeProviderProps = {
  theme?: Theme;
  resetCss?: boolean;
  children?: React.ReactNode;
};

const ThemeProvider = ({ resetCss = true, children }: ThemeProviderProps) => {
  return (
    <StyledProvider theme={defaultTheme}>
      {resetCss && <ResetStyles />}

      {children}
    </StyledProvider>
  );
};

export default ThemeProvider;
