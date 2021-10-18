import React from 'react';

import {
  Wrapper,
  FullLine,
  Line,
  Description,
  HeadingStyled,
  FlexEnd
} from './styles';

export type PageHeadingProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const PageHeading = ({
  description,
  children,
  title,
  ...args
}: PageHeadingProps) => {
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

export default PageHeading;
