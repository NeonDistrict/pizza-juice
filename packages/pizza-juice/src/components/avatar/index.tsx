import React from 'react';

import { VariantProps } from '../../system';
import { cx, forwardRef } from '../../utils';

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
export const Avatar = forwardRef<AvatarProps, 'img'>((props, ref) => {
  const { className, ...rest } = props;

  return <S.Avatar ref={ref} className={cx('avatar', className)} {...rest} />;
});
