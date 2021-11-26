import { HTMLAttributes } from 'react';
import { C as CSS } from '../index-a9773ec4';
import '@stitches/react/types/config';
import '@stitches/react';

declare type ResourcesProps = {
    /**
     * Neon value
     *
     * @default '0'
     */
    neon: number;
    /**
     * Juice value
     *
     * @default '0'
     */
    juice: number;
    /**
     * Parts value
     *
     * @default '0'
     */
    parts: number;
    /**
     * Show icon
     *
     * @default 'true'
     */
    hasIcon?: boolean;
    /**
     * Show text
     *
     * @default 'true'
     */
    hasText?: boolean;
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
declare const Resources: ({ neon, juice, parts, hasIcon, hasText, ...props }: ResourcesProps) => JSX.Element;

export { Resources, ResourcesProps };
