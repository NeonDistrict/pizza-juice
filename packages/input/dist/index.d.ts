import React, { InputHTMLAttributes } from 'react';

declare type InputProps = {
    /**
     * Input label
     */
    label?: string;
    /**
     * Input size
     *
     * @default "md"
     */
    inputSize?: 'sm' | 'md';
    /**
     * Show input message
     */
    hint?: string | string[];
    /**
     * Show input error
     */
    error?: string | string[];
    /**
     *
     * @default "default"
     */
    color?: 'default' | 'line';
} & InputHTMLAttributes<HTMLInputElement>;
/**
 * Input component
 *
 * @description is a component that is used to get user input in a text field.
 */
declare const Input: React.ForwardRefExoticComponent<{
    /**
     * Input label
     */
    label?: string | undefined;
    /**
     * Input size
     *
     * @default "md"
     */
    inputSize?: "sm" | "md" | undefined;
    /**
     * Show input message
     */
    hint?: string | string[] | undefined;
    /**
     * Show input error
     */
    error?: string | string[] | undefined;
    /**
     *
     * @default "default"
     */
    color?: "line" | "default" | undefined;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;

export { Input, InputProps };
