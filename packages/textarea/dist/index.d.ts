import React from 'react';
import { TextareaAutosizeProps } from 'react-textarea-autosize';

declare type TextareaProps = {
    /**
     *
     */
    label?: string;
    /**
     *
     */
    hint?: string | string[];
    /**
     *
     */
    error?: string | string[];
} & TextareaAutosizeProps;
declare const Textarea: React.ForwardRefExoticComponent<{
    /**
     *
     */
    label?: string | undefined;
    /**
     *
     */
    hint?: string | string[] | undefined;
    /**
     *
     */
    error?: string | string[] | undefined;
} & TextareaAutosizeProps & React.RefAttributes<HTMLTextAreaElement>>;

export { Textarea, TextareaProps };
