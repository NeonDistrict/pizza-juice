import React, { AnchorHTMLAttributes, HTMLAttributes } from 'react';

import { CSS } from '../../system';

import * as S from './styles';

export type BreadcrumbProps = {
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Items to display in the breadcrumb
   */
  children: React.ReactNode[];
} & HTMLAttributes<HTMLDivElement>;

/**
 * Breadcrumb components
 *
 * @description The breadcrumb component is used to display a list of items that
 */
const Breadcrumb = (props: BreadcrumbProps) => {
  const { children } = props;

  return (
    <S.Wrapper aria-label="Breadcrumb" {...props}>
      {children?.map((child) => child)}
    </S.Wrapper>
  );
};

export type BreadcrumbItemProps = {
  /**
   * Replace the `a` tag to another element.
   *
   * @default "a"
   */
  as?: React.ElementType;
  /**
   * The href attribute of the link.
   */
  isCurrentPage?: boolean;
  /**
   * The href attribute of the link.
   */
  icon?: JSX.Element;
  /**
   * The href of the link.
   */
  href?: string;
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Label of the breadcrumb item
   */
  children?: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const { as, href, isCurrentPage, icon, css, children, ...rest } = props;

  return (
    <S.Item css={css}>
      <S.Link
        as={as || 'a'}
        href={href}
        aria-current={isCurrentPage ? 'page' : undefined}
        {...rest}
      >
        {icon}

        {children}
      </S.Link>
    </S.Item>
  );
};

export { Breadcrumb, BreadcrumbItem };
