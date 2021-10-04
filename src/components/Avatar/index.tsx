import React, { useEffect } from 'react';
import { AvatarStyles } from './styles';
import placeholderImage from '../../assets/placeholder/EmptyCharacter.png';

export type AvatarProps = {
  size: 'xss' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  image?: string;
};

const Avatar = ({ image, ...args }: AvatarProps) => {
  useEffect(() => {
    console.log(image);
  }, [image]);
  return <AvatarStyles src={image || placeholderImage} {...args} />;
};

export default Avatar;
