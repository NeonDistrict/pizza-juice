import React, { HTMLAttributes } from 'react';

import type * as RTooltip from '@radix-ui/react-tooltip';

import { CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

import * as S from './styles';

type RTooltipProps = Pick<
  RTooltip.TooltipProps,
  'open' | 'defaultOpen' | 'onOpenChange' | 'delayDuration'
>;

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
  position?: RTooltip.PopperContentProps['side'];
  /**
   * Radix Tooltip side offset
   *
   * @default 5
   */
  sideOffset?: number;
  /**
   * Radix Tooltip delay duration
   *
   * @default 700
   */
  delayDuration?: number;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement> &
  RTooltipProps;

/**
 * Tooltip component
 *
 * @description informative message that appears when a user interacts with an element.
 *
 */
export const Tooltip = forwardRef<TooltipProps, 'div'>((props, ref) => {
  const {
    text,
    position = 'right',
    open,
    defaultOpen,
    sideOffset = 5,
    delayDuration = 700,
    children,
    className,
    onOpenChange,
    ...rest
  } = props;

  return (
    <S.Provider>
      <S.Root
        open={open}
        defaultOpen={defaultOpen}
        delayDuration={delayDuration}
        onOpenChange={onOpenChange}
      >
        <S.Trigger asChild>{children}</S.Trigger>

        <S.Content
          ref={ref}
          className={cx('tooltip--content', className)}
          sideOffset={sideOffset}
          side={position}
          {...rest}
        >
          {text}

          <S.Arrow className="tooltip--arrow" width={15} height={10} />
        </S.Content>
      </S.Root>
    </S.Provider>
  );
});
