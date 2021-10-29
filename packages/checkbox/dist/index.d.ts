import React from 'react';
import * as CheckboxBase from '@radix-ui/react-checkbox';

declare type CheckboxProps = {
    /**
     * Checkbox size
     *
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Checkbox text
     */
    children: React.ReactNode;
} & CheckboxBase.CheckboxProps;
/**
 * Checkbox component
 *
 * @description used in forms when a user needs to select multiple values from several options.
 *
 * Made with radix-ui
 *
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox
 */
declare const Checkbox: React.ForwardRefExoticComponent<{
    /**
     * Checkbox size
     *
     * @default "md"
     */
    size?: "sm" | "md" | "lg" | undefined;
    /**
     * Checkbox text
     */
    children: React.ReactNode;
} & CheckboxBase.CheckboxProps & React.RefAttributes<HTMLButtonElement>>;

export { Checkbox, CheckboxProps };
