import React, { useCallback, useState } from 'react';

import * as S from './styles';

export type TabProps = {
  /**
   * Children of the tab
   */
  children: JSX.Element[];
};

/**
 * Tab component
 *
 * @description Used to display a list of tabs
 */
const Tab = ({ children }: TabProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <S.ItemContainer>
      <S.List>
        {children?.map((item, index) => (
          <TabTitle
            key={index}
            label={item.props.label}
            index={index}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </S.List>

      {children && children[selectedTab]}
    </S.ItemContainer>
  );
};

export type TabTitleProps = {
  /**
   * Label of the tab
   */
  label: string;
  /**
   * The index of the tab
   */
  index: number;
  /**
   * Check if the tab is selected
   */
  selectedTab: number;
  /**
   * Callback to set the selected tab
   */
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabTitle = ({
  label,
  index,
  selectedTab,
  setSelectedTab,
}: TabTitleProps) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <S.ListItem selectedTab={selectedTab === index} onClick={onClick}>
      {label}
    </S.ListItem>
  );
};

export type ItemProps = {
  /**
   * Tab title
   */
  label?: string;
  /**
   * The content of the tab.
   */
  children: React.ReactNode;
};

const TabItem = ({ children }: ItemProps) => (
  <S.Container>{children}</S.Container>
);

export { Tab, TabItem };
