import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';

import { useBreakpoint } from '../../hooks';

import { Flex } from '../flex';

import { HomeIcon, BackIcon } from './icon';

import * as S from './styles';

export type BreadcrumbProps = {
  /**
   * The breadcrumb items.
   */
  items: BreadcrumbItemProps[];
  /**
   * Replace the `a` tag to another element.
   *
   * @default "a"
   */
  as?: React.ElementType;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

export type BreadcrumbItemProps = {
  /**
   * Link of the breadcrumb item
   */
  href: string;
  /**
   * Label of the breadcrumb item
   */
  label: string;
};

/**
 * Breadcrumb components
 *
 * @description The breadcrumb component is used to display a list of items that
 */
export const Breadcrumb = ({ as, items, ...props }: BreadcrumbProps) => {
  const isDesktop = useBreakpoint('sm');

  return (
    <S.Wrapper aria-label="Breadcrumb" {...props}>
      <S.List>
        {items?.map((item, index) => {
          const isLastLink = index === items.length - 1;

          return (
            <S.Item key={item.href}>
              <S.Link
                as={as || undefined}
                href={item.href}
                aria-current={isLastLink ? 'page' : undefined}
              >
                {/* First child */}
                {index === 0 && (
                  <Flex css={{ mr: '$1' }}>
                    <HomeIcon />
                  </Flex>
                )}

                {/* Show previous page only in Mobile */}
                {isLastLink && !isDesktop && (
                  <>
                    <Flex css={{ mr: '$1' }}>
                      <BackIcon />
                    </Flex>
                    Previous page
                  </>
                )}

                <span>{item.label}</span>
              </S.Link>
            </S.Item>
          );
        })}
      </S.List>
    </S.Wrapper>
  );
};
