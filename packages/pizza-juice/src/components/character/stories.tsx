import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Character, CharacterProps } from '.';

export default {
  title: 'Components/Presentation/Character',
  component: Character,
} as Meta;

export const Default: Story<CharacterProps> = (args) => <Character {...args} />;

Default.args = {
  active: false,
  index: 1,
  src: 'https://images.placeholders.dev/?width=300&height=300&bgColor=%232e2e2e',
};
