import React from 'react';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { C as CSS } from '../index-a9773ec4';
import '@stitches/react/types/config';
import '@stitches/react';

declare type TextareaProps = {
    /**
     * Label for the textarea
     */
    label?: string;
    /**
     * Hint of the textarea
     */
    hint?: string | string[];
    /**
     * Error message
     */
    error?: string | string[];
    /**
     * CSS properties
     */
    css?: CSS;
} & TextareaAutosizeProps;
declare const Textarea: React.ForwardRefExoticComponent<{
    /**
     * Label for the textarea
     */
    label?: string | undefined;
    /**
     * Hint of the textarea
     */
    hint?: string | string[] | undefined;
    /**
     * Error message
     */
    error?: string | string[] | undefined;
    /**
     * CSS properties
     */
    css?: CSS | undefined;
} & TextareaAutosizeProps & React.RefAttributes<HTMLTextAreaElement>>;

export { Textarea, TextareaProps };
