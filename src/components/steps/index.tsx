import React from 'react';

import { Main, StepsItem, StepsItemWrapper } from './styles';

/**
 * Icon
 */
const CaretRightIcon = () => (
  <svg
    viewBox="0 0 192 512"
    width="1rem"
    height="1rem"
    focusable="false"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    />
  </svg>
);

/**
 * Step component
 */
export type StepsProps = {
  /**
   *
   */
  children: React.ReactNode;
};

export const Steps = ({ children }: StepsProps) => {
  return <Main>{children}</Main>;
};

/**
 * Item component
 */
export type StepItemProps = {
  /**
   *
   */
  title: string;
  /**
   *
   */
  active?: boolean;
};

const Item = ({ title, active = false }: StepItemProps) => {
  return (
    <StepsItemWrapper active={active}>
      <StepsItem active={active}>{title}</StepsItem>

      <CaretRightIcon />
    </StepsItemWrapper>
  );
};

Steps.Item = Item;
