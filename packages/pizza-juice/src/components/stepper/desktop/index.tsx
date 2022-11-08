import React from 'react';

import { StepperProps } from '..';

import { useStepper } from '../use-stepper';

import { forwardRef } from '../../../utils';

import { CaretRight } from '../../../icons';

import * as S from './styles';

/**
 * Steps component
 *
 * @description This component is used to render a list of steps.
 */
export const DesktopStepper = forwardRef<StepperProps, 'div'>((props, ref) => {
  const { activeItem, items, ...rest } = props;

  const { totalItems } = useStepper(activeItem, items);

  return (
    <S.Wrapper ref={ref} data-steps={totalItems} {...rest}>
      {items?.map((item, index) => {
        // activeItem starts with 1, index starts with 0
        const currentItem = index + 1;

        return (
          <S.ItemWrapper key={index} aria-current={currentItem === activeItem}>
            {item}

            <S.IconWrapper aria-hidden={true}>
              <CaretRight />
            </S.IconWrapper>
          </S.ItemWrapper>
        );
      })}
    </S.Wrapper>
  );
});
