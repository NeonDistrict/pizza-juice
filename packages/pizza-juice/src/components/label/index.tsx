import React, { HTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

import { Text } from '../text';

import * as S from './styles';

export type LabelProps = {
  /**
   * Label variant of style
   *
   * @default "success"
   */
  variant?: VariantProps<typeof S.Label>['variant'];
  /**
   * Icon to show
   */
  icon?: JSX.Element;
  /**
   * Label text
   */
  children?: React.ReactNode;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Label component
 *
 * @description are used to highlight an item's status for quick recognition.
 */
export const Label = forwardRef<LabelProps, 'div'>((props, ref) => {
  const { variant = 'success', icon, className, children, ...rest } = props;

  return (
    <S.Label
      ref={ref}
      className={cx('label', className)}
      variant={variant}
      icon={!!icon}
      {...rest}
    >
      {icon && icon}

      <Text size="sm">{children}</Text>
    </S.Label>
  );
});
