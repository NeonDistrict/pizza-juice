import React from 'react';
import * as RadioGroupBase from '@radix-ui/react-radio-group';

declare type RadioGroupProps = {
    /**
     *
     */
    direction?: 'row' | 'column';
    /**
     *
     */
    label?: string;
    /**
     *
     */
    children?: React.ReactNode;
} & RadioGroupBase.RadioGroupProps;
declare type RadioItemProps = {
    children?: React.ReactNode;
} & RadioGroupBase.RadioGroupItemProps;
declare const Radio: {
    (): void;
    Group: React.ForwardRefExoticComponent<{
        /**
         *
         */
        direction?: "row" | "column" | undefined;
        /**
         *
         */
        label?: string | undefined;
        /**
         *
         */
        children?: React.ReactNode;
    } & RadioGroupBase.RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
    Item: ({ value, children, ...props }: RadioItemProps) => JSX.Element;
};

export { Radio, RadioGroupProps, RadioItemProps };
