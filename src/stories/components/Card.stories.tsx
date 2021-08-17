import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    layout: {
      options: ['A', 'B', 'C', 'D'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const LayoutA = Template.bind({});
export const LayoutB = Template.bind({});
export const LayoutC = Template.bind({});
export const LayoutD = Template.bind({});

LayoutA.args = {
  layout: 'A',
  image: 'https://portal.neondistrict.io/static/media/parts_1.835d8729.png',
  title: '25 parts',
  subtitle: '500 neon',
  images: []
};

LayoutB.args = {
  layout: 'B',
  images: [],
  image:
    'https://neon-district-season-one.s3.amazonaws.com/nfts/mainnet/79228162606498620912046021281-headshot.png?958073-958061-958068-958074-958077-1-Male'
};

LayoutC.args = {
  layout: 'C',
  images: [
    'https://neon-district-season-one.s3.amazonaws.com/nfts/mainnet/79228162606498620912046021281-headshot.png?958073-958061-958068-958074-958077-1-Male',
    'https://neon-district-season-one.s3.amazonaws.com/nfts/mainnet/79228162606498620912046021281-headshot.png?958073-958061-958068-958074-958077-1-Male',
    'https://neon-district-season-one.s3.amazonaws.com/nfts/mainnet/79228162606498620912046021281-headshot.png?958073-958061-958068-958074-958077-1-Male',
    'https://neon-district-season-one.s3.amazonaws.com/nfts/mainnet/79228162606498620912046021281-headshot.png?958073-958061-958068-958074-958077-1-Male'
  ],
  title: 'team name',
  subtitle: 'all your team members'
};

LayoutD.args = {
  layout: "D",
  image: "https://portal.neondistrict.io/static/media/parts_1.835d8729.png",
  title: "parts",
  subtitle: "need to level up weapons or armour",
  images: []
};

