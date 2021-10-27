import React from 'react';

import { Main, RightArrow, StepsItem, StepsItemWrapper } from './styles';

export type StepsProps = {
  children: React.ReactNode;
};

export type ItemProps = {
  title: string;
  active?: boolean;
};

const Steps = ({ children }: StepsProps) => {
  return <Main>{children}</Main>;
};

const Item = ({ title, active = false }: ItemProps) => {
  return (
    <StepsItemWrapper>
      <StepsItem active={active}>{title}</StepsItem>
      <RightArrow active={active} />
    </StepsItemWrapper>
  );
};

Steps.Item = Item;

export default Steps;
