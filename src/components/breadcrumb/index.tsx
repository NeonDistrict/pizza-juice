import React from 'react';

import { Flex } from '../flex';

import { HomeIcon } from './icon';

import * as S from './styles';

export type BreadcrumbProps = {
  /**
   * The breadcrumb items.
   */
  items: {
    href: string;
    label: string;
  }[];
};

/**
 * Breadcrumb components
 *
 * @description The breadcrumb component is used to display a list of items that
 */
export const Breadcrumb = ({ items, ...props }: BreadcrumbProps) => {
  return (
    <S.Wrapper aria-label="Breadcrumb" {...props}>
      <S.List>
        {items?.map((item, index) => {
          const isLastLink = index === items.length - 1;

          return (
            <S.Item key={item.href}>
              <S.Link href="" aria-current={isLastLink ? 'page' : undefined}>
                {/* First child */}
                {index === 0 && (
                  <Flex css={{ mr: '$1' }}>
                    <HomeIcon />
                  </Flex>
                )}

                {/* <Flex css={{ mr: '$1' }}>
                  <BackIcon />
                </Flex> */}

                {item.label}
              </S.Link>
            </S.Item>
          );
        })}
      </S.List>
    </S.Wrapper>
  );
};
