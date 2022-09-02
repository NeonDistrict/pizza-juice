import React from 'react';

import { forwardRef } from '../../../utils';

import { Flex } from '../../flex';
import { Box } from '../../box';
import { Text } from '../../text';
import { VisuallyHidden } from '../../visually-hidden';

import { StepperProps } from '..';

import { useStepper } from '../use-stepper';

import * as S from './styles';

/**
 * Steps component
 *
 * @description This component is used to render a list of steps.
 */
export const MobileStepper = forwardRef<StepperProps, 'div'>((props, ref) => {
  const { activeItem, items, ...rest } = props;

  const { totalItems, activeItemLabel } = useStepper(activeItem, items);

  return (
    <>
      <VisuallyHidden>{`Step ${activeItem} of ${totalItems}`}</VisuallyHidden>

      <Box ref={ref} {...rest}>
        <Flex css={{ justify: 'space-between', align: 'flex-end' }}>
          <Box css={{ textTransform: 'uppercase' }} aria-hidden={true}>
            <Text size="xs" weight="medium" css={{ color: '$grey-600' }}>
              Step {activeItem}
            </Text>

            <Text weight="medium" css={{ mt: '$1' }}>
              {activeItemLabel}
            </Text>
          </Box>

          <S.Wrapper
            data-steps={totalItems}
            aria-hidden={true}
            css={{ w: '50%' }}
          >
            {items?.map((_, index) => {
              // activeItem starts with 1, index starts with 0
              const currentItem = index + 1;

              return (
                <S.StepperItem
                  key={index}
                  completed={activeItem > currentItem}
                  aria-current={activeItem === currentItem}
                >
                  <S.StepperItemIcon aria-hidden={true} />
                </S.StepperItem>
              );
            })}
          </S.Wrapper>
        </Flex>
      </Box>
    </>
  );
});
