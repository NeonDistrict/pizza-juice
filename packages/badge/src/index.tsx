import React from 'react';

import { BadgeStyles } from './styles';

export type BadgeProps = {
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

const Badge = ({ children, size = 'md' }: BadgeProps) => {
  return <BadgeStyles size={size}>{children}</BadgeStyles>;
};

export default Badge;
