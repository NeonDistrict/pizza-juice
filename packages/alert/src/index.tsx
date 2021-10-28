import React from 'react';

import { Wrapper, Title, Message } from './styles';

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
   */
  variant?: 'solid' | 'outline';
  /**
   *
   */
  type?: 'success' | 'error' | 'warning' | 'default';
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
        <div style={{ marginLeft: 10 }}>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </div>
      </div>

      {button}
    </Wrapper>
  );
};
