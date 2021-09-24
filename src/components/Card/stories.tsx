import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Card, { CardProps } from '.';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    layout: {
      options: ['A', 'B', 'C', 'D'],
      control: { type: 'select' }
    }
  }
} as Meta;

export const LayoutA: Story<CardProps> = args => <Card {...args} />;

LayoutA.args = {
  layout: 'A',
  images: ['https://portal.neondistrict.io/static/media/parts_1.835d8729.png'],
  title: '25 parts',
  subtitle: '500 neon'
};

export const LayoutB: Story<CardProps> = args => <Card {...args} />;

LayoutB.args = {
  layout: 'B',
  images: [
    'https://neon-district-season-one.s3.amazonaws.com/nfts/mainnet/79228162606498620912046021281-headshot.png?958073-958061-958068-958074-958077-1-Male'
  ]
};

export const LayoutC: Story<CardProps> = args => <Card {...args} />;

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

export const LayoutD: Story<CardProps> = args => <Card {...args} />;

LayoutD.args = {
  layout: 'D',
  images: ['https://portal.neondistrict.io/static/media/parts_1.835d8729.png'],
  title: 'parts',
  subtitle: 'need to level up weapons or armour'
};
