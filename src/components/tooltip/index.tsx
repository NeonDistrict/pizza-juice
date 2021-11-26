import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';

import * as S from './styles';

export type TooltipProps = {
  /**
   * The content of the tooltip
   */
  text?: string;
  /**
   * The position of the tooltip
   *
   * @default "right"
   */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The trigger of the tooltip
   */
  children?: React.ReactNode;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Tooltip component
 *
 * @description informative message that appears when a user interacts with an element.
 *
 */
export const Tooltip = ({
  text,
  position = 'right',
  children,
  ...props
}: TooltipProps) => {
  return (
    <S.Root>
      <S.Trigger asChild>{children}</S.Trigger>

      <S.Content sideOffset={5} side={position} {...props}>
        {text}

        <S.Arrow width={15} height={10} />
      </S.Content>
    </S.Root>
  );
};
