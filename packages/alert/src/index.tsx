import React from 'react';

import { AiFillLike, AiFillWarning } from 'react-icons/ai';
import { MdError } from 'react-icons/md';

import { Wrapper, Title, Message } from './styles';

export type AlertProps = {
  title?: string;
  message?: string;
  variant?: 'solid' | 'outline';
  type?: 'success' | 'error' | 'warning' | 'default';
  button?: React.ReactNode;
};

const Alert = ({
  title,
  message,
  variant = 'solid',
  type = 'default',
  button,
  ...props
}: AlertProps) => {
  const iconTypes = {
    success: AiFillLike,
    error: MdError,
    warning: AiFillWarning,
    default: ''
  };

  return (
    <Wrapper type={type} variant={variant} {...props}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {type !== 'default' &&
          React.createElement(iconTypes[type], { size: 25 })}

        <div style={{ marginLeft: 10 }}>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </div>
      </div>

      {button}
    </Wrapper>
  );
};

export default Alert;
