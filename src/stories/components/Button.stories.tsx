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

export const Primary = Template.bind({});
export const Basic = Template.bind({});
export const Standard = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
  label: 'Content',
  size: 'medium',
  fullWidth: false,
  buttonType: 'primary'
};
Basic.args = {
  label: 'Content',
  size: 'medium',
  fullWidth: false,
  buttonType: 'basic'
};
Standard.args = {
  label: 'Content',
  size: 'medium',
  fullWidth: false,
  buttonType: 'standard'
};
Secondary.args = {
  label: 'Content',
  size: 'medium',
  fullWidth: false,
  buttonType: 'secondary'
};
