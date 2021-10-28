import React from 'react';

import { Wrapper, TextStyled } from './styles';

export type AlertProps = {
  /**
   *
   */
  title?: string;
  /**
   *
   */
  message?: string;
  /**
   *
   * @default "solid"
   */
  variant?: 'solid' | 'outline';
  /**
   *
   * @default "default"
   */
  type?: 'success' | 'error' | 'warning' | 'default';
  /**
   *
   */
  button?: React.ReactNode;
};

export const Alert = ({
  title,
  message,
  variant = 'solid',
  type = 'default',
  button,
  ...props
}: AlertProps) => {
  return (
    <Wrapper type={type} variant={variant} {...props}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div>
          <TextStyled>{title}</TextStyled>

          <TextStyled>{message}</TextStyled>
        </div>
      </div>

      {button}
    </Wrapper>
  );
};
