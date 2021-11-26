import React from 'react';
import { V as VariantProps, C as CSS } from '../index-a9773ec4';
import { Button as Button$1 } from './styles';
import '@stitches/react/types/config';
import '@stitches/react';
import '../index-392d03c9';
import '@stitches/react/types/styled-component';
import '@stitches/react/types/css-util';

declare type ButtonProps = {
    /**
     * Variant style of the button
     * @default "primary"
     */
    variant?: VariantProps<typeof Button$1>['variant'];
    /**
     * Size of the button
     * @default "md"
     */
    size?: VariantProps<typeof Button$1>['size'];
    /**
     * Shape of the button
     * @default "squared"
     */
    shape?: VariantProps<typeof Button$1>['shape'];
    /**
     * If `true` button should be full width
     * @default "false"
     */
    fluid?: VariantProps<typeof Button$1>['fluid'];
    /**
     * If `true`, the button will show a spinner.
     * @default "false"
     */
    loading?: boolean;
    /**
     * Add an icon beside text
     */
    icon?: React.ReactNode;
    /**
     * Position of the icon
     * @default "left"
     */
    iconPosition?: 'left' | 'right';
    /**
     * Button text
     */
    children?: React.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * Button component
 *
 * @description used to trigger an action or event.
 */
declare const Button: React.ForwardRefExoticComponent<{
    /**
     * Variant style of the button
     * @default "primary"
     */
    variant?: VariantProps<typeof Button$1>['variant'];
    /**
     * Size of the button
     * @default "md"
     */
    size?: VariantProps<typeof Button$1>['size'];
    /**
     * Shape of the button
     * @default "squared"
     */
    shape?: VariantProps<typeof Button$1>['shape'];
    /**
     * If `true` button should be full width
     * @default "false"
     */
    fluid?: VariantProps<typeof Button$1>['fluid'];
    /**
     * If `true`, the button will show a spinner.
     * @default "false"
     */
    loading?: boolean | undefined;
    /**
     * Add an icon beside text
     */
    icon?: React.ReactNode;
    /**
     * Position of the icon
     * @default "left"
     */
    iconPosition?: "left" | "right" | undefined;
    /**
     * Button text
     */
    children?: React.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;

export { Button, ButtonProps };
