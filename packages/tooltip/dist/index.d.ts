import React from 'react';

declare type TooltipProps = {
    /**
     *
     */
    text?: string;
    /**
     *
     * @default "right"
     */
    position?: 'top' | 'right' | 'bottom' | 'left';
    /**
     *
     */
    children?: React.ReactNode;
};
declare const Tooltip: ({ text, position, children }: TooltipProps) => JSX.Element;

export { Tooltip, TooltipProps };
