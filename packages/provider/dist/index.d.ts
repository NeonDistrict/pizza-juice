import React from 'react';
import { DefaultTheme } from '@neon-district/system';

declare type ThemeProviderProps = {
    /**
     *
     */
    theme?: DefaultTheme;
    /**
     *
     */
    resetCss?: boolean;
    /**
     * @default `true`
     */
    children?: React.ReactNode;
};
declare const ThemeProvider: ({ resetCss, children }: ThemeProviderProps) => JSX.Element;

export { ThemeProvider };
