import React from 'react';
import { BadgeStyles } from './styles';

export type BadgeProps = {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
};

const Badge = ({ children, size = 'md' }: BadgeProps) => {
  return <BadgeStyles size={size}>{children}</BadgeStyles>;
};

export default Badge;
