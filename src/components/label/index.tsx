import React from 'react';

import * as S from './styles';

export type LabelProps = {
  /**
   * Label variant of style
   *
   * @default "success"
   */
  variant?: 'success' | 'danger' | 'warning';
  /**
   * Icon to show
   */
  icon?: React.ReactNode;
  /**
   * Label text
   */
  children: React.ReactNode;
};

/**
 * Label component
 *
 * @description are used to highlight an item's status for quick recognition.
 */
export const Label = ({ children, icon, variant = 'success' }: LabelProps) => {
  return (
    <S.LabelStyles variant={variant} icon={!!icon}>
      {icon && icon}

      <S.Text>{children}</S.Text>
    </S.LabelStyles>
  );
};
