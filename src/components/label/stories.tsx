import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Label, LabelProps } from '.';

import { BsCheck } from 'react-icons/bs';
import { HiHand } from 'react-icons/hi';
import { BiSad } from 'react-icons/bi';

export default {
  title: 'Components/Data Display/Label',
  component: Label,
  argTypes: {
    variant: {
      options: ['success', 'danger', 'warning'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story<LabelProps> = (args) => <Label {...args} />;
Default.args = {
  children: 'Link Copied',
  variant: 'success',
};

export const LinkCopiedWithIcon: Story<LabelProps> = (args) => (
  <Label {...args} />
);
LinkCopiedWithIcon.args = {
  children: 'Link Copied',
  variant: 'success',
  icon: <BsCheck />,
};

export const InProgressWithIcon: Story<LabelProps> = (args) => (
  <Label {...args} />
);
InProgressWithIcon.args = {
  children: 'In Progress',
  variant: 'danger',
  icon: <HiHand />,
};

export const WarningWithIcon: Story<LabelProps> = (args) => <Label {...args} />;
WarningWithIcon.args = {
  children: 'Warning',
  variant: 'warning',
  icon: <BiSad />,
};
