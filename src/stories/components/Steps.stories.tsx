import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Steps } from '../../components/Steps';

export default {
  title: 'Components/Steps',
  component: Steps
} as ComponentMeta<typeof Steps>;

export const Default = () => (
  <Steps>
    <Steps.Item title="Iniciate" />
    <Steps.Item title="Select Upgrade" />
    <Steps.Item active title="Confirm" />
    <Steps.Item title="Review" />
  </Steps>
);
