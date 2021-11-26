import React, { HTMLAttributes } from 'react';
import { C as CSS } from '../index-a9773ec4';
import '@stitches/react/types/config';
import '@stitches/react';

declare type PageHeadingProps = {
    /**
     * The title of the page.
     */
    title: string;
    /**
     * Description of the heading
     */
    description?: string;
    /**
     * Button childrens
     */
    children?: React.ReactNode;
    /**
     *
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * PageHeading component
 *
 * @description Headings are used for rendering headlines.
 */
declare const PageHeading: ({ description, children, title, ...props }: PageHeadingProps) => JSX.Element;

export { PageHeading, PageHeadingProps };
