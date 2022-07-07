import React, { ComponentProps } from 'react';

import { Flex } from '../flex';

import { forwardRef } from '../../utils';

export type CenterProps = {
  children?: React.ReactNode;
} & ComponentProps<typeof Flex>;

/**
 * Center component
 *
 * @description Center is a layout component that centers its child within itself.
 */
export const Center = forwardRef<CenterProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <Flex ref={ref} justify="center" align="center" {...rest}>
      {children}
    </Flex>
  );
});
