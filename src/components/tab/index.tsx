import React, { ReactElement } from 'react';

import * as S from './styles';

export type TabProps = {
  /**
   * Children of the tab
   * @default TabList
   * @default TabContent
   */
  children:
    | ReactElement<typeof TabList>
    | ReactElement<typeof TabContent>
    | ReactElement<typeof TabList>[]
    | ReactElement<typeof TabContent>[];
  /**
   * Default active tab
   * @default "tab1"
   */
  defaultValue?: string;
};

/**
 * Tab component
 *
 * @description Used to display a list of tabs
 * @example
 * ```jsx
 * <Tab>
 *  <TabList>
 *    <TabItem value="tab1">Tab 1</TabItem>
 *    <TabItem value="tab2">Tab 2</TabItem>
 *  </TabList>
 *  <TabContent value="tab1">Tab 1 content</TabContent>
 *  <TabContent value="tab2">Tab 2 content</TabContent>
 * </Tab>
 * ```
 */
export const Tab = ({ children, defaultValue = 'tab1' }: TabProps) => {
  return <S.TabRoot defaultValue={defaultValue}>{children}</S.TabRoot>;
};

export type TabListProps = {
  /**
   * Children of the tab list
   */
  children: ReactElement<typeof TabItem>[] | ReactElement<typeof TabItem>;
};

export const TabList = ({ children, ...props }: TabListProps) => (
  <S.List {...props}>{children}</S.List>
);

export type TabItemProps = {
  /**
   * Value of the tab
   * @default "tab1"
   */
  value: string;
  /**
   * Label of the tab
   */
  children: React.ReactNode;
};
export const TabItem = ({ children, value, ...props }: TabItemProps) => (
  <S.Item value={value} {...props}>
    {children}
  </S.Item>
);

export type TabContentProps = {
  /**
   * Value of the tab
   */
  value: string;
  /**
   * The content of the tab
   */
  children: React.ReactNode;
};
export const TabContent = ({ children, value }: TabContentProps) => (
  <S.Content value={value}>{children}</S.Content>
);
