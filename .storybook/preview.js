import { ThemeProvider } from '@neon-district/provider';

import GlobalStyle from './global';

// function clickDocsButtonOnFirstLoad() {
//   window.removeEventListener('load', clickDocsButtonOnFirstLoad);

//   try {
//     const docsButtonSelector = window.parent.document.evaluate(
//       "//button[contains(., 'Docs')]",
//       window.parent.document,
//       null,
//       XPathResult.ANY_TYPE,
//       null
//     );

//     const button = docsButtonSelector.iterateNext();

//     button.click();
//   } catch (error) {
//     // Do nothing if it wasn't able to click on Docs button.
//   }
// }

// window.addEventListener('load', clickDocsButtonOnFirstLoad);

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
      order: ['Getting Started', ['Hello, Installation'], 'Components']
    }
  }
  // viewMode: 'docs',
  // previewTabs: { 'storybook/docs/panel': null, canvas: { hidden: true } }
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
];
