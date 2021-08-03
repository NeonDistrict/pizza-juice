import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

const themes = [theme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#00aced'
      },
      {
        name: 'facebook',
        value: '#3b5998'
      }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
