import React from 'react';

import { Root, Trigger } from '@radix-ui/react-tooltip';

import { Content, Arrow } from './styles';

export type TooltipProps = {
  /**
   * The content of the tooltip
   */
  text?: string;
  /**
   * Position to show tooltip
   *
   * @default "right"
   */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * Component to render tooltip
   */
  children?: React.ReactNode;
};

/**
 * Tooltip component
 *
 * @description A tooltip is a brief, informative message that appears when a user interacts with an element. Tooltips are usually initiated in one of two ways: through a mouse-hover gesture or through a keyboard-hover gesture.
 */
export const Tooltip = ({
  text,
  position = 'right',
  children
}: TooltipProps) => {
  return (
    <Root>
      <Trigger asChild>{children}</Trigger>

      <Content sideOffset={5} side={position}>
        {text}

        <Arrow width={15} height={10} />
      </Content>
    </Root>
  );
};
