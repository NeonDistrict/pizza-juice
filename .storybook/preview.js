import ThemeProvider from '@nd-ui/provider';

import GlobalStyle from './global';

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#000'
      },
      {
        name: 'white',
        value: '#FFF'
      }
    ]
  },
  options: {
    storySort: {
      order: ['Getting Started', 'Components']
    }
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
