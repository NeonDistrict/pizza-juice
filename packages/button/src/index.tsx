import React, { ComponentProps } from 'react';

import { Wrapper } from './styles';

export type ButtonProps = Omit<ComponentProps<typeof Wrapper>, 'css'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Wrapper ref={ref} {...props}>
        {children}
      </Wrapper>
    );
  }
);

export default Button;
