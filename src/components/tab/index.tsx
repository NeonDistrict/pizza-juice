import React, { useCallback, useState } from 'react';

import { Container, ItemContainer, List, ListItem } from './styles';

export type TabProps = {
  /**
   *
   */
  children: JSX.Element[];
};

export const Tab = ({ children }: TabProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ItemContainer>
      <List>
        {children?.map((item, index) => (
          <TabTitle
            key={index}
            label={item.props.label}
            index={index}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </List>

      {children && children[selectedTab]}
    </ItemContainer>
  );
};

export type TabTitleProps = {
  /**
   *
   */
  label: string;
  /**
   *
   */
  index: number;
  /**
   *
   */
  selectedTab: number;
  /**
   *
   */
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabTitle = ({
  label,
  index,
  selectedTab,
  setSelectedTab
}: TabTitleProps) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <ListItem index={index} selectedTab={selectedTab} onClick={onClick}>
      {label}
    </ListItem>
  );
};

export type ItemProps = {
  /**
   *
   */
  children: React.ReactNode;
  /**
   *
   */
  label: string;
};

const Item = ({ children, label }: ItemProps) => (
  <Container label={label}>{children}</Container>
);

Tab.Item = Item;
