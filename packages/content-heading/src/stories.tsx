import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import ContentHeading, { ContentHeadingProps } from '.';

export default {
  title: 'Components/Presentation/ContentHeading',
  component: ContentHeading,
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
    line: {
      control: { type: 'boolean' }
    },
    info: {
      control: { type: 'boolean' }
    }
  }
} as Meta;

export const Default: Story<ContentHeadingProps> = args => (
  <ContentHeading {...args} />
);

Default.args = {
  title: 'Content Heading',
  description: 'This is the description'
};
