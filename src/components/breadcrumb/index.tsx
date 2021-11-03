import React from 'react';

import { HomeIcon } from './icon';

import * as S from './styles';

export type BreadcrumbProps = {
  /**
   * The breadcrumb items.
   */
  children: React.ReactNode;
};

/**
 * Breadcrumb components
 *
 * @description The breadcrumb component is used to display a list of items that
 */
const Breadcrumb = ({ children }: BreadcrumbProps) => (
  <S.Main>{children}</S.Main>
);

export type BreadcrumbItemProps = {
  /**
   * If active is true, the item will be rendered with a different style.
   */
  active?: boolean;
  /**
   * if is `true`, it shows home icon.
   */
  isHome?: boolean;
  /**
   * The text to display
   */
  children: React.ReactNode;
};

const BreadcrumbItem = ({ active, isHome, children }: BreadcrumbItemProps) => {
  return (
    <>
      <S.Section>
        {isHome && <HomeIcon />}

        <S.Text active={!!active}>{children}</S.Text>
      </S.Section>

      <S.Divider>|</S.Divider>
    </>
  );
};

export { Breadcrumb, BreadcrumbItem };
