import React, { HTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';

import * as S from './styles';

export type AvatarProps = {
  /**
   * Avatar size
   * @default "md"
   */
  size?: VariantProps<typeof S.Avatar>['size'];
  /**
   * Avatar url
   */
  src: string;
  /**
   * Avatar description
   */
  alt: string;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLImageElement>;

/**
 * Avatar component
 *
 * @description is used to represent a character and displays the picture.
 */
export const Avatar = ({ ...props }: AvatarProps) => {
  return <S.Avatar {...props} />;
};
