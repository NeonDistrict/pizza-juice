import React from 'react';

import type { TextProps } from '../text';

import * as S from './styles';

export type HeadingProps = {
  /**
   * The text to display in the heading.
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Heading text
   */
  children?: React.ReactNode;
} & TextProps;

/**
 * Heading component
 *
 * @description Headings are used for rendering headlines. It renders an h2 by default.
 */
export const Heading = ({ level = 2, children, ...props }: HeadingProps) => (
  <S.Heading as={`h${level}`} {...props}>
    {children}
  </S.Heading>
);
