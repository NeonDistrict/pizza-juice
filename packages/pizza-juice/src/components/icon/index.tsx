import React from 'react';

import { CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

export type IconProps = {
  css?: CSS;
} & React.SVGAttributes<SVGElement>;

export const Icon = forwardRef<IconProps, 'svg'>((props, ref) => {
  const { focusable = false, className, children, ...rest } = props;

  return (
    <svg
      as="svg"
      ref={ref}
      focusable={focusable}
      className={cx('icon', className)}
      {...rest}
    >
      {children}
    </svg>
  );
});
