import { HTMLAttributes } from 'react';
import { C as CSS } from '../index-a9773ec4';
import '@stitches/react/types/config';
import '@stitches/react';

declare type LogoProps = {
    /**
     * Logo variant
     */
    variant?: 'minimal' | 'full';
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLOrSVGElement>;
/**
 * Logo component
 *
 * @description Show the logo of Neon District
 */
declare const Logo: ({ variant, ...props }: LogoProps) => JSX.Element;

export { Logo, LogoProps };
