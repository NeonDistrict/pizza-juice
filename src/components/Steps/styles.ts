import styled, { css } from 'styled-components';
import { Icon, Step, StepProps } from 'semantic-ui-react';

type ActiveTab = typeof Step & Partial<StepProps>;
type ActiveGroup = typeof Step.Group & Partial<StepProps>;
type ActiveTitle = typeof Step.Title & Partial<StepProps>;
type ActiveIcon = typeof Icon & Partial<StepProps>;

export const Container = styled.div<Partial<StepProps>>`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  margin-right: 0.25rem !important;
`;

export const IconContainer = styled.div<Partial<StepProps>>`
  display: flex;
  align-items: center;
`;

export const StyledGroup = styled<ActiveGroup>(Step.Group)`
  border-radius: 0 !important;
  border: 0 !important;
  border-bottom: 1px solid ${p => p.theme.white} !important;
  width: 100%;
`;

export const StyledStep = styled<ActiveTab>(Step)`
  margin-right: 0.25rem !important;
  height: 100% !important;
  border-radius: 0 !important;

  background-color: ${p => p.theme.darkGrey} !important;
  color: ${p => p.theme.mediumGray} !important;

  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;

  ${p =>
    p.active &&
    css`
      background-color: ${p => p.theme.white} !important;
    `}

  ::after {
    display: none !important;
  }
`;

export const StyledTitle = styled<ActiveTitle>(Step.Title)`
  margin: 0px !important;
  text-transform: uppercase;
  padding: 0 0.5625rem !important; // 9px
  font-size: 1rem !important;

  ${p =>
    p.active &&
    css`
      color: ${p => p.theme.darkGrey} !important;
    `}
`;

export const StyledIcon = styled<ActiveIcon>(Icon)`
  color: ${p => p.theme.lightGrey} !important;
  ${p =>
    p.active &&
    css`
      color: ${p => p.theme.white} !important;
    `};
`;
