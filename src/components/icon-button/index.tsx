import React from 'react';

import { forwardRef } from '../../utils';

import { ButtonProps } from '../button';

import * as S from './styles';

export type IconButtonProps = {
  /**
   * The icon to be used in the button.
   * @type React.ReactElement
   */
  icon?: React.ReactElement;
  /**
   * A11y: A label that describes the button
   */
  'aria-label': string;
} & Pick<ButtonProps, 'shape' | 'color' | 'variant' | 'css'>;

/**
 * IconButton component
 *
 * @description composes the `Button` component except that it renders only an icon.
 */
export const IconButton = forwardRef<IconButtonProps, 'button'>(
  (props, ref) => {
    const { 'aria-label': ariaLabel, icon, children, ...rest } = props;

    const element = icon || children;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _children = React.cloneElement(element as any, {
      'aria-hidden': true,
      focusable: false,
    });

    return (
      <S.Button ref={ref} aria-label={ariaLabel} {...rest}>
        {_children}
      </S.Button>
    );
  },
);
