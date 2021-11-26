import { HTMLAttributes } from 'react';
import { C as CSS } from '../index-a9773ec4';
import '@stitches/react/types/config';
import '@stitches/react';

declare type ContentHeadingProps = {
    /**
     * Title of the heading
     */
    title?: string;
    /**
     * Description of the heading
     */
    description?: string;
    /**
     * Show info icon
     *
     * @default `false`
     */
    info?: boolean;
    /**
     * Show divider line
     *
     * @default `true`
     */
    line?: boolean;
    /**
     *
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * ContentHeading component
 *
 * @description A component to display a title and description
 */
declare const ContentHeading: ({ title, description, line, info, ...props }: ContentHeadingProps) => JSX.Element;

export { ContentHeading, ContentHeadingProps };
