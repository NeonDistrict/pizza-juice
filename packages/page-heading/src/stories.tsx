import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { PageHeading, PageHeadingProps } from '.';

import { Button } from '@neon-district/button';

export default {
  title: 'Components/Presentation/PageHeading',
  component: PageHeading
} as Meta;

export const Default: Story<PageHeadingProps> = args => (
  <PageHeading {...args} />
);

Default.args = {
  title: 'Title here',
  description: 'description or subtitle here'
};

export const WithButtons: Story<PageHeadingProps> = args => (
  <PageHeading {...args}>
    <Button variant="outline" size="md">
      Label
    </Button>
    <Button variant="outline" size="md">
      Label
    </Button>
    <Button variant="outline" size="md">
      Label
    </Button>
  </PageHeading>
);

WithButtons.args = {
  title: 'Title Here'
};
