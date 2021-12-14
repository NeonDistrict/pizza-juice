import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';

import { forwardRef } from '../../utils/forwardRef';

import * as S from './styles';

export type DrawerProps = {
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Content of the drawer
   */
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Drawer component
 *
 * @description its a sidebar that you can use to display content.
 */
export const Drawer = forwardRef<DrawerProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <S.Wrapper ref={ref} {...rest}>
      {children}
    </S.Wrapper>
  );
});
