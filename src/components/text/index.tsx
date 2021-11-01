import React, { forwardRef, HTMLAttributes } from 'react';

import type { DefaultTheme } from 'styled-components';

import { TextStyled } from './styles';

export type TextProps = {
  /**
   * fontSize of the text
   *
   * @default "md"
   */
  size?: keyof DefaultTheme['fontSizes'];
  /**
   * fontWeight of the text
   *
   * @default "normal"
   */
  weight?: keyof DefaultTheme['fontWeights'];
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Text component
 *
 * @description used to render text and paragraphs. It renders a <span> tag by default.
 */
export const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ size = 'md', weight = 'normal', children, ...props }, ref) => (
    <TextStyled ref={ref} size={size} weight={weight} {...props}>
      {children}
    </TextStyled>
  )
);
