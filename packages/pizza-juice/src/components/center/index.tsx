import React, { ComponentProps } from 'react';

import { Flex } from '../flex';

import { forwardRef, cx } from '../../utils';

export type CenterProps = ComponentProps<typeof Flex>;

/**
 * Center component
 *
 * @description Center is a layout component that centers its child within itself.
 */
export const Center = forwardRef<CenterProps, 'div'>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <Flex
      ref={ref}
      className={cx('center', className)}
      justify="center"
      align="center"
      {...rest}
    >
      {children}
    </Flex>
  );
});
