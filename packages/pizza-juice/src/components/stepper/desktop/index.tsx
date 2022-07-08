import React from 'react';

import { StepperProps } from '..';

import { useStepper } from '../useStepper';

import { CaretRightIcon } from './icon';

import * as S from './styles';

/**
 * Steps component
 *
 * @description This component is used to render a list of steps.
 */
export const DesktopStepper = ({ activeItem, items, css }: StepperProps) => {
  const { totalItems } = useStepper(activeItem, items);

  return (
    <S.Wrapper data-steps={totalItems} css={css}>
      {items?.map((item, index) => {
        // activeItem starts with 1, index starts with 0
        const currentItem = index + 1;

        return (
          <S.ItemWrapper key={index} aria-current={currentItem === activeItem}>
            {item}

            <S.IconWrapper aria-hidden={true}>
              <CaretRightIcon />
            </S.IconWrapper>
          </S.ItemWrapper>
        );
      })}
    </S.Wrapper>
  );
};
