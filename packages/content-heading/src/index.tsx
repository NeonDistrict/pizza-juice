import React from 'react';
import { Description, InfoIcon, Title, Wrapper } from './styles';

export interface ContentHeadingProps {
  title: string;
  description?: string;
  info?: boolean;
  line?: boolean;
}

const ContentHeading = ({
  title,
  description,
  info,
  line = true
}: ContentHeadingProps) => (
  <Wrapper>
    <Title>
      {title}
      {info && <InfoIcon />}
    </Title>
    {description && <Description line={line}>{description}</Description>}
  </Wrapper>
);

export default ContentHeading;
