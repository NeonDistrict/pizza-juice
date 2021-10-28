import React from 'react';

import type { TextProps } from '@neon-district/text';

import { HeadingStyled } from './styles';

export type HeadingProps = {
  /**
   * The text to display in the heading.
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & TextProps;

/**
 * Heading component
 *
 * @description Headings are used for rendering headlines. It renders an h2 by default.
 */
export const Heading = ({ level = 2, children, ...props }: HeadingProps) => (
  <HeadingStyled as={`h${level}`} {...props}>
    {children}
  </HeadingStyled>
);
