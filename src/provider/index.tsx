import React from 'react';

import {
  ThemeProvider as StyledProvider,
  DefaultTheme
} from 'styled-components';

import theme from '../theme';

import ResetStyles from './reset';

type ThemeProviderProps = {
  /**
   *
   */
  theme?: DefaultTheme;
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
    <StyledProvider theme={theme}>
      {resetCss && <ResetStyles />}

      {children}
    </StyledProvider>
  );
};
