import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../../components/Card';

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src:
    'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
  text: 'aababa'
};
