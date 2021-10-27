import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Grid, { GridProps } from '.';

export default {
  title: 'Components/Layout/Grid',
  component: Grid
} as Meta;

export const Default: Story<GridProps> = args => <Grid {...args} />;

Default.args = {};
