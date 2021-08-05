import React from 'react';
import { createContext, useState, useContext } from 'react';
import { Container, StyledPanel, StyledTab, TabClick, Title } from './styles';

export interface ITabsContext {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export interface ITabProps {
  label: string;
  children?: JSX.Element | string;
}

export const TabsContext = createContext<ITabsContext>({
  activeTab: '',
  setActiveTab: () => {}
});

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState('');
  return (
    <Container>
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
      </TabsContext.Provider>
    </Container>
  );
};

export const Tab = ({ label, children }: ITabProps) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <StyledTab label={label} activeTab={activeTab}>
      <TabClick onClick={() => setActiveTab(label)}>
        <Title label={label} activeTab={activeTab}>
          {children}
        </Title>
      </TabClick>
    </StyledTab>
  );
};

export const Panel = ({ label, children }: ITabProps) => {
  const { activeTab } = useContext(TabsContext);
  return <>{activeTab === label && <StyledPanel>{children}</StyledPanel>}</>;
};

Tabs.Tab = Tab;
Tabs.Panel = Panel;
