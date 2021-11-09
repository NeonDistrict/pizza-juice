import React from 'react';

import { VariantProps } from '../../system';

import { ImageProps } from '../image';

import * as S from './styles';

export type AvatarProps = {
  /**
   * Avatar size
   * @default 80
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
