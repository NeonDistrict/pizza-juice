import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';

import * as S from './styles';
import { TooltipProvider as RadixTooltipProvider } from '@radix-ui/react-tooltip';

export type TooltipProps = {
  /**
   * The content of the tooltip
   */
  text: string;
  /**
   * The position of the tooltip
   *
   * @default "right"
   */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The trigger of the tooltip
   */
  children: React.ReactNode;
  /** Radix Tooltip side offset
   * @default 5
   */
  sideOffset?: number;
  /** Radix Tooltip delay duration
   * @default 700
   */
  delayDuration?: number;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

export const TooltipProvider = RadixTooltipProvider;

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
  sideOffset = 5,
  delayDuration = 700,
  ...props
}: TooltipProps) => {
  return (
    <S.Root delayDuration={delayDuration}>
      <S.Trigger asChild>{children}</S.Trigger>

      <S.Content sideOffset={sideOffset} side={position} {...props}>
        {text}

        <S.Arrow width={15} height={10} />
      </S.Content>
    </S.Root>
  );
};
