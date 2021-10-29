import React from 'react';

declare type AlertProps = {
    /**
     * Title of the alert
     */
    title?: string;
    /**
     * Message of the alert
     */
    message?: string;
    /**
     * Variant style of the alert
     * @default "solid"
     */
    variant?: 'solid' | 'outline';
    /**
     * It adds a color to the alert
     * @default "default"
     */
    type?: 'default' | 'success' | 'error' | 'warning';
    /**
     * Action button of the alert
     */
    button?: React.ReactNode;
};
/**
 * Alert component
 *
 * @description used to communicate a state that affects a system, feature or page.
 */
declare const Alert: ({ title, message, variant, type, button, ...props }: AlertProps) => JSX.Element;

export { Alert, AlertProps };
