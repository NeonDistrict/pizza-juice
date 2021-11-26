import React, { HTMLAttributes } from 'react';
import { V as VariantProps, C as CSS } from '../index-a9773ec4';
import { Label as Label$1 } from './styles';
import '@stitches/react/types/config';
import '@stitches/react';
import '@stitches/react/types/styled-component';
import '@stitches/react/types/css-util';

declare type LabelProps = {
    /**
     * Label variant of style
     *
     * @default "success"
     */
    variant?: VariantProps<typeof Label$1>['variant'];
    /**
     * Icon to show
     */
    icon?: React.ReactNode;
    /**
     * Label text
     */
    children?: React.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Label component
 *
 * @description are used to highlight an item's status for quick recognition.
 */
declare const Label: ({ children, icon, variant }: LabelProps) => JSX.Element;

export { Label, LabelProps };
