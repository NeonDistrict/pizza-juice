import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Character, { CharacterProps } from '.';

export default {
  title: 'Components/Character',
  component: Character,
  argTypes: {
    size: {
      options: ['sm', 'lg'],
      control: { type: 'select' }
    }
  }
} as Meta;

export const Default: Story<CharacterProps> = args => <Character {...args} />;

Default.args = {
  size: 'lg',
  active: false,
  index: 1
};
