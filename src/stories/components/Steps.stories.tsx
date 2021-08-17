import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Step } from '../../components/Steps';

export default {
  title: 'Components/Steps',
  component: Step
} as ComponentMeta<typeof Step>;

export const Default = () => (
  <Step.Group>
    <Step title="Initiate" />
    <Step title="Select Upgrade" />
    <Step title="Confirm" active />
    <Step title="Review" />
  </Step.Group>
);
