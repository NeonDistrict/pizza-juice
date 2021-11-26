import React, { HTMLAttributes } from 'react';
import { C as CSS } from '../index-a9773ec4';
import '@stitches/react/types/config';
import '@stitches/react';

declare type TooltipProps = {
    /**
     * The content of the tooltip
     */
    text?: string;
    /**
     * The position of the tooltip
     *
     * @default "right"
     */
    position?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * The trigger of the tooltip
     */
    children?: React.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Tooltip component
 *
 * @description informative message that appears when a user interacts with an element.
 *
 */
declare const Tooltip: ({ text, position, children, ...props }: TooltipProps) => JSX.Element;

export { Tooltip, TooltipProps };
