import React from 'react';

import { CSS } from '../../system';

import { forwardRef } from '../../utils';

export type IconProps = {
  css?: CSS;
} & React.SVGAttributes<SVGElement>;

export const Icon = forwardRef<IconProps, 'svg'>((props, ref) => {
  const { focusable = false, children, ...rest } = props;

  const _className = 'pizza-icon';

  return (
    <svg
      as="svg"
      ref={ref}
      focusable={focusable}
      className={_className}
      {...rest}
    >
      {children}
    </svg>
  );
});
