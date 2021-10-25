import React from 'react';

import {
  ThemeProvider as StyledProvider,
  DefaultTheme
} from '@district-ui/system';

import theme from '@district-ui/theme';

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
