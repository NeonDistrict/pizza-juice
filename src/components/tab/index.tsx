import React, { ReactElement } from 'react';

import type * as Tabs from '@radix-ui/react-tabs';

import { CSS } from '../../system';

import * as S from './styles';

export type TabProps = {
  /**
   * Default active tab
   *
   * @default "tab1"
   */
  defaultValue?: string;
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Children of the tab
   */
  children:
    | ReactElement<typeof TabList>
    | ReactElement<typeof TabContent>
    | ReactElement<typeof TabList>[]
    | ReactElement<typeof TabContent>[];
} & Tabs.TabsProps;

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
export const Tab = ({
  defaultValue = 'tab1',
  children,
  ...props
}: TabProps) => {
  return (
    <S.TabRoot defaultValue={defaultValue} activationMode="manual" {...props}>
      {children}
    </S.TabRoot>
  );
};

export type TabListProps = {
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Children of the tab list
   */
  children: ReactElement<typeof TabItem>[] | ReactElement<typeof TabItem>;
} & Tabs.TabsListProps;

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
   * CSS properties
   */
  css?: CSS;
  /**
   * Label of the tab
   */
  children: React.ReactNode;
} & Tabs.TabsTriggerProps;

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
   * CSS properties
   */
  css?: CSS;
  /**
   * The content of the tab
   */
  children: React.ReactNode;
} & Tabs.TabsContentProps;

export const TabContent = ({ children, value }: TabContentProps) => (
  <S.Content value={value}>{children}</S.Content>
);
