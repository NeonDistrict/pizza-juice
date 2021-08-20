import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' }
    },
    buttonType: {
      options: [
        'primary',
        'basic',
        'standard',
        'secondary',
        'negative',
        'positive'
      ],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Negative = Template.bind({});
export const Positive = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Standard = Template.bind({});
export const PositiveBasic = Template.bind({});
export const NegativeBasic = Template.bind({});
Negative.args = {
  label: 'Negative',
  size: 'medium',
  fullWidth: false,
  buttonType: 'negative'
};
NegativeBasic.args = {
  label: 'Negative',
  size: 'medium',
  fullWidth: false,
  buttonType: 'negative-basic'
};
Positive.args = {
  label: 'Positive',
  size: 'medium',
  fullWidth: false,
  buttonType: 'positive'
};
PositiveBasic.args = {
  label: 'Positive',
  size: 'medium',
  fullWidth: false,
  buttonType: 'positive-basic'
};
Primary.args = {
  label: 'Primary',
  size: 'medium',
  fullWidth: false,
  buttonType: 'primary'
};
Standard.args = {
  label: 'Standard',
  size: 'medium',
  fullWidth: false,
  buttonType: 'standard'
};
Secondary.args = {
  label: 'Basic',
  size: 'medium',
  fullWidth: false,
  buttonType: 'basic'
};
