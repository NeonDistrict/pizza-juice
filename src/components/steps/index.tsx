import React from 'react';

import { CaretRightIcon } from './icon';

import * as S from './styles';

/**
 * Step component
 */
export type StepsProps = {
  /**
   * Array of steps
   */
  children: React.ReactNode;
};

/**
 * Steps component
 *
 * @description This component is used to render a list of steps.
 */
const Steps = ({ children }: StepsProps) => {
  return <S.Main>{children}</S.Main>;
};

/**
 * Item component
 */
export type StepItemProps = {
  /**
   * Title of the step
   */
  title: string;
  /**
   * If the step is active
   */
  active?: boolean;
};

const StepsItem = ({ title, active = false }: StepItemProps) => {
  return (
    <S.StepsItemWrapper active={active}>
      <S.StepsItem active={active}>{title}</S.StepsItem>

      <CaretRightIcon />
    </S.StepsItemWrapper>
  );
};

export { Steps, StepsItem };
