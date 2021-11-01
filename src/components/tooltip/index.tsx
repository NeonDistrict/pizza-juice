import React from 'react';

import { Root, Trigger } from '@radix-ui/react-tooltip';

import { Content, Arrow } from './styles';

export type TooltipProps = {
  /**
   *
   */
  text?: string;
  /**
   *
   * @default "right"
   */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /**
   *
   */
  children?: React.ReactNode;
};

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
