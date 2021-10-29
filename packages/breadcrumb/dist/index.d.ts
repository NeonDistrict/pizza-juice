import React from 'react';

declare type BreadcrumbProps = {
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
declare const Breadcrumb: ({ children }: BreadcrumbProps) => JSX.Element;
declare type BreadcrumbItemProps = {
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
declare const BreadcrumbItem: ({ active, isHome, children }: BreadcrumbItemProps) => JSX.Element;

export { Breadcrumb, BreadcrumbItem, BreadcrumbItemProps, BreadcrumbProps };
