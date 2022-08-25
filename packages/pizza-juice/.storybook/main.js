module.exports = {
  stories: [
    '../src/**/**/stories.tsx',
    '../src/**/**/stories.mdx',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  core: {
    builder: 'webpack5'
  },
};
