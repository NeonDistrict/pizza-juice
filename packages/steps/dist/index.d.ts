import React from 'react';

/**
 * Step component
 */
declare type StepsProps = {
    /**
     *
     */
    children: React.ReactNode;
};
declare const Steps: {
    ({ children }: StepsProps): JSX.Element;
    Item: ({ title, active }: StepItemProps) => JSX.Element;
};
/**
 * Item component
 */
declare type StepItemProps = {
    /**
     *
     */
    title: string;
    /**
     *
     */
    active?: boolean;
};

export { StepItemProps, Steps, StepsProps };
