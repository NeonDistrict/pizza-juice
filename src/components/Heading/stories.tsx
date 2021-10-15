import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Heading, { HeadingProps } from '.';

import Button from '../../components/Button';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {}
} as Meta;

export const Default: Story<HeadingProps> = args => <Heading {...args} />;

Default.args = {
  children: 'Title here',
  description: 'description or subtitle here'
};

export const WithButtons: Story<HeadingProps> = args => (
  <Heading {...args}>
    <div>Title here</div>

    <div>
      <Button variant="outline" size="md">
        Label
      </Button>
      <Button variant="outline" size="md">
        Label
      </Button>
      <Button variant="outline" size="md">
        Label
      </Button>
    </div>
  </Heading>
);

WithButtons.args = {
  children: '',
  description: 'description or subtitle here'
};
