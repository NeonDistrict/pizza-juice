import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Label, { LabelProps } from '.';

export default {
  title: 'Components/Done/Label',
  component: Label,
  argTypes: {
    variant: {
      options: ['success', 'danger', 'warning'],
      control: { type: 'select' }
    }
  }
} as Meta;

export const LinkCopied: Story<LabelProps> = args => <Label {...args} />;
LinkCopied.args = {
  children: 'Link Copied',
  variant: 'success'
};

export const InProgress: Story<LabelProps> = args => <Label {...args} />;
InProgress.args = {
  children: 'In Progress',
  variant: 'danger'
};

export const Warning: Story<LabelProps> = args => <Label {...args} />;
Warning.args = {
  children: 'Warning',
  variant: 'warning'
};
