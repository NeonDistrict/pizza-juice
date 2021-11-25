import React, { HTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';

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
  icon?: React.ReactNode;
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
export const Label = ({ children, icon, variant = 'success' }: LabelProps) => {
  return (
    <S.Label variant={variant} icon={!!icon}>
      {icon && icon}

      <Text size="sm">{children}</Text>
    </S.Label>
  );
};
