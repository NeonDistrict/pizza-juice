import React from 'react';

import { ThemeProvider as StyledProvider, DefaultTheme } from '@nd-ui/system';

import theme from '@nd-ui/theme';

import ResetStyles from './reset';

type ThemeProviderProps = {
  theme?: DefaultTheme;
  resetCss?: boolean;
  children?: React.ReactNode;
};

const ThemeProvider = ({ resetCss = true, children }: ThemeProviderProps) => {
  return (
    <StyledProvider theme={theme}>
      {resetCss && <ResetStyles />}

      {children}
    </StyledProvider>
  );
};

export default ThemeProvider;
