import React from 'react';

declare type BadgeProps = {
    /**
     * Should be defined in figma yet.
     *
     * @default ?
     */
    type?: string;
    /**
     * Badge text
     */
    children: React.ReactNode;
};
/**
 * Badge component
 *
 * @description Badges are used to highlight an item's status for quick recognition.
 */
declare const Badge: ({ type, children }: BadgeProps) => JSX.Element;

export { Badge, BadgeProps };
