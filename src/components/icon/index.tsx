import React from 'react';

import { CSS } from '../../system';

import { forwardRef } from '../../utils';

import { Box } from '../box';

export type IconProps = {
  css?: CSS;
} & React.SVGAttributes<SVGElement>;

export const Icon = forwardRef<IconProps, 'svg'>((props, ref) => {
  const { focusable = false, children, ...rest } = props;

  const _className = 'pizza-icon';

  return (
    <Box
      as="svg"
      ref={ref}
      focusable={focusable}
      className={_className}
      verticalAlign="middle"
      {...rest}
    >
      {children}
    </Box>
  );
});
