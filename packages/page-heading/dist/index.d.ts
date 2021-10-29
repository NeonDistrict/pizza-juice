import React from 'react';

declare type PageHeadingProps = {
    /**
     *
     */
    title: string;
    /**
     *
     */
    description?: string;
    /**
     *
     */
    children?: React.ReactNode;
};
declare const PageHeading: ({ description, children, title, ...args }: PageHeadingProps) => JSX.Element;

export { PageHeading, PageHeadingProps };
