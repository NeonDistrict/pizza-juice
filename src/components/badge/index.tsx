import React, { HTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';

import * as S from './styles';

export type BadgeProps = {
  /**
   * Should be defined in figma yet.
   *
   * @default ?
   */
  type?: VariantProps<typeof S.Badge>['type'];
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Badge text
   */
  children: React.ReactNode;
} & HTMLAttributes<HTMLLabelElement>;

/**
 * Badge component
 *
 * @description Badges are used to highlight an item's status for quick recognition.
 */
export const Badge = ({ children, ...props }: BadgeProps) => {
  return <S.Badge {...props}>{children}</S.Badge>;
};
