import React from 'react';

declare type ButtonProps = {
    /**
     * Variant style of the button
     * @default "primary"
     */
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'naked';
    /**
     * Size of the button
     * @default "md"
     */
    size?: 'sm' | 'md';
    /**
     * if `true` add "width:100%" to button
     * @default "false"
     */
    fluid?: boolean;
    /**
     * Shape of the button
     * @default "squared"
     */
    shape?: 'squared' | 'rounded';
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
    variant?: "primary" | "secondary" | "destructive" | "outline" | "naked" | undefined;
    /**
     * Size of the button
     * @default "md"
     */
    size?: "sm" | "md" | undefined;
    /**
     * if `true` add "width:100%" to button
     * @default "false"
     */
    fluid?: boolean | undefined;
    /**
     * Shape of the button
     * @default "squared"
     */
    shape?: "squared" | "rounded" | undefined;
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
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;

export { Button, ButtonProps };
