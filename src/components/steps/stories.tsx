import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Steps, StepsItem, StepsProps } from '.';

export default {
  title: 'Components/Disclosure/Steps',
  component: Steps
} as Meta;

export const Default: Story<StepsProps> = args => (
  <Steps {...args}>
    <StepsItem title="Iniciate" />
    <StepsItem title="Select Upgrade" />
    <StepsItem active title="Confirm" />
    <StepsItem title="Review" />
  </Steps>
);
