import React from 'react';

declare type CreateIconProps = {
    /**
     * The icon `svg` viewBox
     * @default "0 0 24 24"
     */
    viewBox?: string;
    /**
     * If the has a single path, simply copy the path's `d` attribute
     */
    d?: string;
    /**
     * The `svg` path or group element
     * @type React.ReactElement | React.ReactElement[]
     */
    path?: React.ReactElement | React.ReactElement[];
    /**
     * Default props automatically passed to the component; overwriteable
     */
    defaultProps?: React.SVGAttributes<SVGElement>;
};
declare const createIcon: ({ viewBox, path, d: pathDefinition, defaultProps }: CreateIconProps) => () => JSX.Element;

export { createIcon };
