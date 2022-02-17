import React, { ReactElement } from 'react';

import type * as Tabs from '@radix-ui/react-tabs';

import { forwardRef } from '../../utils/forwardRef';

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
 *  <TabList defaultValue="tab1">
 *    <TabItem value="tab1">Tab 1</TabItem>
 *    <TabItem value="tab2">Tab 2</TabItem>
 *  </TabList>
 *  <TabContent value="tab1">Tab 1 content</TabContent>
 *  <TabContent value="tab2">Tab 2 content</TabContent>
 * </Tab>
 * ```
 */
export const Tab = forwardRef<TabProps, 'div'>((props, ref) => {
  const { defaultValue = 'tab1', children, ...rest } = props;
  return (
    <S.TabRoot
      ref={ref}
      defaultValue={defaultValue}
      activationMode="manual"
      {...rest}
    >
      {children}
    </S.TabRoot>
  );
});

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

export const TabList = forwardRef<TabListProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <S.List ref={ref} {...rest}>
      {children}
    </S.List>
  );
});

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

export const TabItem = forwardRef<TabItemProps, 'div'>((props, ref) => {
  const { children, value, ...rest } = props;
  return (
    <S.Item ref={ref} value={value} {...rest}>
      {children}
    </S.Item>
  );
});

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

export const TabContent = forwardRef<TabContentProps, 'div'>((props, ref) => {
  const { children, value } = props;
  return (
    <S.Content ref={ref} value={value}>
      {children}
    </S.Content>
  );
});
