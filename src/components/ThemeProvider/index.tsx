import React from 'react';

import {
  ThemeProvider as StyledProvider,
  DefaultTheme
} from 'styled-components';

import ResetStyles from 'styles/reset';
import defaultTheme from 'styles/theme';

type ThemeProviderProps = {
  theme?: DefaultTheme;
  resetCss?: boolean;
  children?: React.ReactNode;
};

const ThemeProvider = ({
  theme = defaultTheme,
  resetCss = true,
  children
}: ThemeProviderProps) => {
  return (
    <StyledProvider theme={theme}>
      {resetCss && <ResetStyles />}

      {children}
    </StyledProvider>
  );
};

export default ThemeProvider;
