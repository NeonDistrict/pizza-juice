import React from 'react';
import { AvatarStyles } from './styles';

const PLACEHOLDER_IMAGE =
  'https://avatarfiles.alphacoders.com/188/thumb-1920-188870.jpg';

export type AvatarProps = {
  size: 24 | 32 | 48 | 64 | 80 | 88 | 160 | 192 | 240;
  image?: string;
};

const Avatar = ({ image, ...args }: AvatarProps) => {
  return <AvatarStyles src={image || PLACEHOLDER_IMAGE} {...args} />;
};

export default Avatar;
