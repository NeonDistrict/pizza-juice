import React from 'react';

import {
  Wrapper,
  FullLine,
  Line,
  Description,
  HeadingStyled,
  FlexEnd
} from './styles';

export type HeadingProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const Heading = ({ description, children, title, ...args }: HeadingProps) => {
  return (
    <Wrapper {...args}>
      <HeadingStyled>
        {title}
        <Line />
        <FlexEnd>{children}</FlexEnd>
      </HeadingStyled>
      <FullLine />
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};

export default Heading;
