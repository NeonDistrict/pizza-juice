import React, { ReactNode } from 'react';
import { Main, RightArrow, StepsItem, StepsItemWrapper } from './styles';

interface StepsProps {
  children: ReactNode;
}

interface ItemProps {
  title: string;
  active?: boolean;
}

export const Steps = ({ children }: StepsProps) => {
  return <Main>{children}</Main>;
};

const Item = ({ title, active = false }: ItemProps) => {
  return (
    <StepsItemWrapper>
      <StepsItem active={active}>
        {title}
      </StepsItem>
      <RightArrow active={active} />
    </StepsItemWrapper>
  );
};

Steps.Item = Item;
