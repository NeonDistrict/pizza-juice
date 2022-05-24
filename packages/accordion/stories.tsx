import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Accordion, AccordionItem, AccordionProps } from '.';

export default {
  title: 'Components/Disclosure/Accordion',
  component: Accordion,
  argTypes: {
    css: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    asChild: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<AccordionProps> = (args) => (
  <Accordion {...args}>
    <AccordionItem title="Username" value="1">
      Content
    </AccordionItem>

    <AccordionItem title="Email address" value="2">
      Content
    </AccordionItem>

    <AccordionItem title="Your balance" value="3">
      Content
    </AccordionItem>
  </Accordion>
);

Default.args = {
  defaultValue: ['1'],
};
