import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { RadioGroup, RadioItem, RadioGroupProps } from '.';

import { Stack } from '../stack';

export default {
  title: 'Components/Forms/Radio',
  component: RadioItem,
} as Meta;

export const Horizontal: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args} defaultValue="1" label="Horizontal radio group">
    <Stack gap="5">
      <RadioItem value="1" disabled>
        Disabled option
      </RadioItem>

      <RadioItem value="2">Normal option</RadioItem>

      <RadioItem value="3" error>
        Error option
      </RadioItem>
    </Stack>
  </RadioGroup>
);

export const Vertical: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args} defaultValue="1" label="Vertical radio group">
    <Stack direction="column" gap="5">
      <RadioItem value="1" disabled>
        Disabled option
      </RadioItem>

      <RadioItem value="2">Normal option</RadioItem>

      <RadioItem value="3" error>
        Error option
      </RadioItem>
    </Stack>
  </RadioGroup>
);
