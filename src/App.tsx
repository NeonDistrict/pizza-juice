import React from 'react';
import { Button } from './components/Button';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
        flexDirection: 'column'
      }}
    >
      <Button buttonType="positive-basic" label="aaa" size="medium" />
      <Button label="primary" size="medium" />
      <Button label="primary" size="large" />
    </div>
  </ThemeProvider>
);
