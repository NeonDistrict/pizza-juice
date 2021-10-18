import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import ContentHeading, { ContentHeadingProps } from '.';

export default {
  title: 'Components/ContentHeading',
  component: ContentHeading
} as Meta;

export const Default: Story<ContentHeadingProps> = args => (
  <ContentHeading {...args} />
);

Default.args = {
  title: 'Content Heading',
  description: 'This is the description'
};
