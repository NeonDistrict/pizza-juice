import React from 'react';

import { VariantProps, CSS } from '../../system';

import { ImageProps } from '../image';

import * as S from './styles';

export type AvatarProps = {
  /**
   * Avatar size
   * @default "md"
   */
  size?: VariantProps<typeof S.Avatar>['size'];
} & ImageProps;

/**
 * Avatar component
 *
 * @description is used to represent a character and displays the picture.
 */
export const Avatar = ({ ...props }: AvatarProps) => {
  return <S.Avatar {...props} />;
};
