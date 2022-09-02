import React, { ComponentProps } from 'react';

import { Flex } from '../flex';

import { forwardRef, cx } from '../../utils';

export type StackProps = {
  children?: React.ReactNode;
} & ComponentProps<typeof Flex>;

/**
 * Stack component
 *
 * @description Stack component is used to display a group of elements in a vertical or horizontal direction.
 */
export const Stack = forwardRef<StackProps, 'div'>((props, ref) => {
  const { gap = 5, className, children, ...rest } = props;

  return (
    <Flex ref={ref} className={cx('stack', className)} gap={gap} {...rest}>
      {children}
    </Flex>
  );
});
