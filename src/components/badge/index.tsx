import React from 'react';

import { BadgeStyled } from './styles';

export type BadgeProps = {
  /**
   * Should be defined in figma yet.
   *
   * @default ?
   */
  type?: string;
  /**
   * Badge text
   */
  children: React.ReactNode;
};

/**
 * Badge component
 *
 * @description Badges are used to highlight an item's status for quick recognition.
 */
export const Badge = ({ type, children }: BadgeProps) => {
  return <BadgeStyled type={type}>{children}</BadgeStyled>;
};
