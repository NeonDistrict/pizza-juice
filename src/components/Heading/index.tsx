import React from 'react';

import { Wrapper, FullLine, Line, Description, HeadingStyled } from './styles';

export type HeadingProps = {
  description?: string;
  children?: React.ReactNode;
};

const Heading = ({ description, children, ...args }: HeadingProps) => {
  return (
    <Wrapper>
      <HeadingStyled>
        {children}

        <Line />
      </HeadingStyled>

      <FullLine />

      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};

export default Heading;
