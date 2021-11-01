import React from 'react';

import { Wrapper, TextStyled } from './styles';

export type AlertProps = {
  /**
   * Title of the alert
   */
  title?: string;
  /**
   * Message of the alert
   */
  message?: string;
  /**
   * Variant style of the alert
   * @default "solid"
   */
  variant?: 'solid' | 'outline';
  /**
   * It adds a color to the alert
   * @default "default"
   */
  type?: 'default' | 'success' | 'error' | 'warning';
  /**
   * Action button of the alert
   */
  button?: React.ReactNode;
};

/**
 * Alert component
 *
 * @description used to communicate a state that affects a system, feature or page.
 */
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
