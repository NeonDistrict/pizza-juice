import React from 'react';
import {
  Container,
  IconContainer,
  StyledIcon,
  StyledGroup,
  StyledStep,
  StyledTitle
} from './styles';

interface GroupProps {
  children: JSX.Element[];
}

export interface StepProps {
  active?: boolean;
  title: string;
}

const Group = ({ children }: GroupProps) => (
  <StyledGroup>{children}</StyledGroup>
);

export const Step = ({ active = false, title }: StepProps) => {
  return (
    <Container active={active}>
      <StyledStep active={active}>
        <StyledTitle active={active}>{title}</StyledTitle>
      </StyledStep>
      <IconContainer>
        <StyledIcon active={active} name="triangle right" inverted />
      </IconContainer>
    </Container>
  );
};

Step.Group = Group;
