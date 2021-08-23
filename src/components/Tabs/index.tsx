import React, { ReactNode, useCallback, useState } from 'react';
import { Container, ItemContainer, List, ListItem, TabButton } from './styles';

interface TabProp {
  children: JSX.Element[] | null;
}

export interface ItemProp {
  children: ReactNode;
  label: string;
}

interface TabTitleProps {
  label: string;
  index: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const Item = ({ children, label }: ItemProp) => (
  <Container label={label}>{children}</Container>
);

export const Tab = ({ children }: TabProp) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const TabTitle = ({ label, index, setSelectedTab }: TabTitleProps) => {
    const onClick = useCallback(() => {
      setSelectedTab(index);
    }, [setSelectedTab, index]);
    return (
      <ListItem>
        <TabButton onClick={onClick}>{label}</TabButton>
      </ListItem>
    );
  };

  return (
    <ItemContainer>
      <List>
        {children &&
          children.map((item, index) => (
            <TabTitle
              key={index}
              label={item.props.label}
              index={index}
              setSelectedTab={setSelectedTab}
            />
          ))}
      </List>
      {children && children[selectedTab]}
    </ItemContainer>
  );
};

Tab.Item = Item;
