import React from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { CSS } from '../../system';

import { forwardRef } from '../../utils/forwardRef';

import { ChevronDownIcon } from './icon';

import * as S from './styles';

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
  const { children, ...rest } = props;

  return (
    <S.Accordion ref={ref} type="multiple" {...rest}>
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
} & AccordionPrimitive.AccordionItemProps;

export const AccordionItem = forwardRef<AccordionItemProps, 'div'>(
  (props, ref) => {
    const { title, children, ...rest } = props;

    return (
      <S.AccordionItem ref={ref} {...rest}>
        <S.AccordionHeader>
          <S.Trigger>
            {title}

            <ChevronDownIcon />
          </S.Trigger>
        </S.AccordionHeader>

        <S.Content>
          <S.ContentPadding>{children}</S.ContentPadding>
        </S.Content>
      </S.AccordionItem>
    );
  },
);
