import React from 'react';

import { Section, Divider, Main, Text } from './styles';

const HomeIcon = () => (
  <svg
    viewBox="0 0 16 16"
    width="16"
    height="16"
    focusable="false"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M8.36 1.37l6.36 5.8-.71.71L13 6.964v6.526l-.5.5h-3l-.5-.5v-3.5H7v3.5l-.5.5h-3l-.5-.5V6.972L2 7.88l-.71-.71 6.35-5.8h.72zM4 6.063v6.927h2v-3.5l.5-.5h3l.5.5v3.5h2V6.057L8 2.43 4 6.063z"
    />
  </svg>
);

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
const Breadcrumb = ({ children }: BreadcrumbProps) => <Main>{children}</Main>;

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
      <Section active={active}>
        {isHome && <HomeIcon />}

        <Text active={active}>{children}</Text>
      </Section>

      <Divider active={active}>|</Divider>
    </>
  );
};

export { Breadcrumb, BreadcrumbItem };
