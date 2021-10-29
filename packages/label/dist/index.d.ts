import React from 'react';

declare type LabelProps = {
    /**
     *
     */
    children: React.ReactNode;
    /**
     *
     */
    variant?: 'success' | 'danger' | 'warning';
    /**
     *
     * @default "success"
     */
    icon?: React.ReactNode;
};
declare const Label: ({ children, icon, variant }: LabelProps) => JSX.Element;

export { Label, LabelProps };
