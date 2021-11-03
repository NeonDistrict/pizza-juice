import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Logo, LogoProps } from '.';

export default {
  title: 'Components/Presentation/Logo',
  component: Logo,
  argTypes: {
    css: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<LogoProps> = args => <Logo {...args} />;

Default.args = {
  variant: 'full'
};
