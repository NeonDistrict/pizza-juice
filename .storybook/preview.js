import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: theme.colors.black
      }
    ]
  }
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
