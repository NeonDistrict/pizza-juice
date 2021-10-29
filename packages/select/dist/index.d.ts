import React, { SelectHTMLAttributes } from 'react';

declare type SelectProps = {
    /**
     *
     */
    label?: string;
    /**
     *
     */
    name?: string;
    /**
     *
     */
    hint?: string;
    /**
     *
     */
    variant?: 'solid' | 'outline';
    /**
     *
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /**
     *
     */
    error?: string | string[];
    /**
     *
     */
    placeholder?: string;
    /**
     *
     */
    children?: React.ReactNode;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>;
declare const Select: ({ label, name, hint, size, disabled, variant, defaultValue, error, placeholder, children, ...props }: SelectProps) => JSX.Element;

export { Select, SelectProps };
