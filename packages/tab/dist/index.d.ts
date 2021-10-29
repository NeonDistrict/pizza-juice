import React from 'react';

declare type TabProps = {
    /**
     *
     */
    children: JSX.Element[];
};
declare const Tab: {
    ({ children }: TabProps): JSX.Element;
    Item: ({ children, label }: ItemProps) => JSX.Element;
};
declare type TabTitleProps = {
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
declare type ItemProps = {
    /**
     *
     */
    children: React.ReactNode;
    /**
     *
     */
    label: string;
};

export { ItemProps, Tab, TabProps, TabTitleProps };
