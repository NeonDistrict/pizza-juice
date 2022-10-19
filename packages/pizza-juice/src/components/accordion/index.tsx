import React from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { CSS } from '../../system';

import { cx, forwardRef } from '../../utils';

import { ChevronDownIcon } from './icon';

import * as S from './styles';
import { Flex } from '../flex';

export type AccordionProps = {
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * List of accordion items
   */
  children?: React.ReactNode | React.ReactNode[];
} & Omit<AccordionPrimitive.AccordionMultipleProps, 'type'>;

/**
 * Accordion component
 *
 * @description Accordions display a list of high-level options that can expand/collapse to reveal more information.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/accordion
 */
export const Accordion = forwardRef<AccordionProps, 'div'>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <S.Accordion
      ref={ref}
      type="multiple"
      className={cx('accordion', className)}
      {...rest}
    >
      {React.Children.map(children, (child) => child)}
    </S.Accordion>
  );
});

type AccordionItemProps = {
  /**
   * Title of the accordion item
   */
  title?: string;
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Content of the accordion item
   */
  children?: React.ReactNode;
  /**
   * Sub Item for the accordion
   */
  subItem?: React.ReactNode;
} & AccordionPrimitive.AccordionItemProps;

export const AccordionItem = forwardRef<AccordionItemProps, 'div'>(
  (props, ref) => {
    const { title, className, children, subItem, ...rest } = props;

    return (
      <S.AccordionItem
        className={cx('accordion--item', className)}
        ref={ref}
        {...rest}
      >
        <S.AccordionHeader>
          <S.Wrapper>
            {title}

            <Flex gap={4} align="center">
              {subItem}

              <S.Trigger>
                <ChevronDownIcon />
              </S.Trigger>
            </Flex>
          </S.Wrapper>
        </S.AccordionHeader>

        <S.Content>
          <S.ContentPadding>{children}</S.ContentPadding>
        </S.Content>
      </S.AccordionItem>
    );
  },
);
