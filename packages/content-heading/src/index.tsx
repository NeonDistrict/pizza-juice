import React from 'react';
import { Description, Title, Wrapper } from './styles';

export interface ContentHeadingProps {
  title: string;
  description?: string;
}

const ContentHeading = ({ title, description }: ContentHeadingProps) => (
  <Wrapper>
    <Title>{title}</Title>
    {description && <Description>{description}</Description>}
  </Wrapper>
);

export default ContentHeading;
