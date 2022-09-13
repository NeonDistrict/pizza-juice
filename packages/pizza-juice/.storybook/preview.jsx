import global from './global';

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
      order: [
        'Getting Started',
        ['Hello', 'Installation', 'CHANGELOG'],
        'Components'
      ]
    }
  }
};

export const decorators = [
  Story => {
    global();

    return <Story />;
  }
];
