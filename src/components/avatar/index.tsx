import React from 'react';

import { AvatarStyled } from './styles';

export type AvatarProps = {
  /**
   * Avatar size in pixels.
   * @default 80
   */
  size: 240 | 192 | 160 | 88 | 80 | 64 | 40 | 32 | 24;
  /**
   * Avatar url.
   */
  src?: string;
  /**
   * Avatar description
   */
  alt?: string;
};

/**
 * Avatar component
 *
 * @description is used to represent a character and displays the picture.
 */
export const Avatar = ({ size = 80, ...props }: AvatarProps) => {
  return <AvatarStyled size={size} {...props} />;
};
