import React from 'react';

import type * as RAccordion from '@radix-ui/react-accordion';

import { CSS } from '../../system';
import { cx, forwardRef } from '../../utils';
import { ChevronDown } from '../../icons';

import * as S from './styles';

export type AccordionProps = {
  /**
   * List of accordion items
   */
  children?: React.ReactNode | React.ReactNode[];
  /**
   * CSS properties
   */
  css?: CSS;
} & Omit<RAccordion.AccordionMultipleProps, 'type'>;

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
   * Content of the accordion item
   */
  children?: React.ReactNode;
  /**
   * CSS properties
   */
  css?: CSS;
} & RAccordion.AccordionItemProps;

export const AccordionItem = forwardRef<AccordionItemProps, 'div'>(
  (props, ref) => {
    const { title, className, children, ...rest } = props;

    return (
      <S.AccordionItem
        ref={ref}
        className={cx('accordion-item', className)}
        {...rest}
      >
        <S.AccordionHeader>
          <S.Trigger>
            {title}

            <ChevronDown />
          </S.Trigger>
        </S.AccordionHeader>

        <S.Content>
          <S.ContentPadding>{children}</S.ContentPadding>
        </S.Content>
      </S.AccordionItem>
    );
  },
);
