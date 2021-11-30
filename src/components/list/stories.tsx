import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { List, ListProps } from '.';

export default {
  title: 'Components/Presentation/List',
  component: List,
} as Meta;

export const Default: Story<ListProps> = (args) => <List {...args} />;

Default.args = {};
