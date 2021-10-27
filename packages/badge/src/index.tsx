import React from 'react';

import { BadgeStyles } from './styles';

export type BadgeProps = {
  /**
   * @default "md"
   */
  size: 'sm' | 'md' | 'lg';
  /**
   *
   */
  children: React.ReactNode;
};

export const Badge = ({ size = 'md', children }: BadgeProps) => {
  return <BadgeStyles size={size}>{children}</BadgeStyles>;
};
