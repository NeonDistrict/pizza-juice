import React from 'react';

import { Box } from '../box';

import { CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

export type IconProps = {
  /**
   * CSS properties
   */
  css?: CSS;
} & React.SVGAttributes<SVGElement>;

export const Icon = forwardRef<IconProps, 'svg'>((props, ref) => {
  const { focusable = false, className, children, ...rest } = props;

  return (
    <Box
      as="svg"
      ref={ref}
      focusable={focusable}
      className={cx('icon', className)}
      {...rest}
    >
      {children}
    </Box>
  );
});
