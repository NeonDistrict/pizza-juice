import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Steps, { StepsProps } from '.';

export default {
  title: 'Components/Done/Steps',
  component: Steps
} as Meta;

export const Default: Story<StepsProps> = args => (
  <Steps {...args}>
    <Steps.Item title="Iniciate" />
    <Steps.Item title="Select Upgrade" />
    <Steps.Item active title="Confirm" />
    <Steps.Item title="Review" />
  </Steps>
);
