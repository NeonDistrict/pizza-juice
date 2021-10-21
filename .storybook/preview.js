import ThemeProvider from '@nd-ui/provider'

import GlobalStyle from './global';

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#000'
      }
    ]
  }
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
];
