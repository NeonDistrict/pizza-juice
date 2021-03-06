import * as React$1 from 'react';
import React__default, { HTMLAttributes, ImgHTMLAttributes, InputHTMLAttributes, ReactElement, ComponentProps as ComponentProps$1, SelectHTMLAttributes } from 'react';
import * as _stitches_react_types_css from '@stitches/react/types/css';
import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_stitches from '@stitches/react/types/stitches';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import * as _stitches_react_types_util from '@stitches/react/types/util';
import * as Stitches from '@stitches/react';
import { PropertyValue, ScaleValue } from '@stitches/react';
import * as CheckboxBase from '@radix-ui/react-checkbox';
import * as RadioProps from '@radix-ui/react-radio-group';
import * as Tabs from '@radix-ui/react-tabs';
import * as _radix_ui_react_switch from '@radix-ui/react-switch';
import { SwitchProps } from '@radix-ui/react-switch';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { VisuallyHiddenProps } from '@radix-ui/react-visually-hidden';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as toastify from 'react-toastify';

declare type VariantProps<T> = Stitches.VariantProps<T>;
declare type CSS = Stitches.CSS<typeof config>;
declare type ComponentProps<T> = Stitches.ComponentProps<T>;
declare const config: {
    prefix: "";
    media: {
        sm: "(min-width: 576px)";
        md: "(min-width: 768px)";
        lg: "(min-width: 992px)";
        xl: "(min-width: 1200px)";
        '2xl': "(min-width: 1400px)";
        motion: "(prefers-reduced-motion: reduce)";
        hover: "(any-hover: hover)";
        dark: "(prefers-color-scheme: dark)";
        light: "(prefers-color-scheme: light)";
    };
    theme: {
        colors: {
            white: string;
            black: string;
            'pink-500': string;
            'pink-600': string;
            'pink-700': string;
            'grey-400': string;
            'grey-600': string;
            'grey-700': string;
            'grey-800': string;
            'grey-850': string;
            'grey-900': string;
            'red-500': string;
            'red-550': string;
            'red-600': string;
            'red-650': string;
            'red-900': string;
            'teal-500': string;
            'yellow-500': string;
            'yellow-550': string;
            'yellow-600': string;
            'yellow-700': string;
            'yellow-900': string;
            'green-500': string;
            'green-550': string;
            'green-600': string;
            'green-700': string;
            'green-900': string;
            common: string;
            uncommon: string;
            rare: string;
            'ultra-rare': string;
            legendary: string;
        };
        transitions: {
            fast: string;
        };
        fonts: {
            system: string;
        };
        fontSizes: {
            '3xs': string;
            '2xs': string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
        };
        fontWeights: {
            thin: number;
            normal: number;
            medium: number;
            bold: number;
            extrabold: number;
        };
        radii: {
            full: string;
            half: string;
            sm: string;
            md: string;
        };
        sizes: {
            full: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
        space: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
        };
        zIndices: {
            hide: number;
            auto: string;
            base: number;
            docked: number;
            dropdown: number;
            sticky: number;
            banner: number;
            overlay: number;
            modal: number;
            popover: number;
            skipLink: number;
            toast: number;
            tooltip: number;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
        shadows: unknown;
        blurs: {
            sm: string;
            md: string;
            lg: string;
        };
    };
    themeMap: {
        gap: "space";
        gridGap: "space";
        columnGap: "space";
        gridColumnGap: "space";
        rowGap: "space";
        gridRowGap: "space";
        inset: "space";
        insetBlock: "space";
        insetBlockEnd: "space";
        insetBlockStart: "space";
        insetInline: "space";
        insetInlineEnd: "space";
        insetInlineStart: "space";
        margin: "space";
        marginTop: "space";
        marginRight: "space";
        marginBottom: "space";
        marginLeft: "space";
        marginBlock: "space";
        marginBlockEnd: "space";
        marginBlockStart: "space";
        marginInline: "space";
        marginInlineEnd: "space";
        marginInlineStart: "space";
        padding: "space";
        paddingTop: "space";
        paddingRight: "space";
        paddingBottom: "space";
        paddingLeft: "space";
        paddingBlock: "space";
        paddingBlockEnd: "space";
        paddingBlockStart: "space";
        paddingInline: "space";
        paddingInlineEnd: "space";
        paddingInlineStart: "space";
        scrollMargin: "space";
        scrollMarginTop: "space";
        scrollMarginRight: "space";
        scrollMarginBottom: "space";
        scrollMarginLeft: "space";
        scrollMarginBlock: "space";
        scrollMarginBlockEnd: "space";
        scrollMarginBlockStart: "space";
        scrollMarginInline: "space";
        scrollMarginInlineEnd: "space";
        scrollMarginInlineStart: "space";
        scrollPadding: "space";
        scrollPaddingTop: "space";
        scrollPaddingRight: "space";
        scrollPaddingBottom: "space";
        scrollPaddingLeft: "space";
        scrollPaddingBlock: "space";
        scrollPaddingBlockEnd: "space";
        scrollPaddingBlockStart: "space";
        scrollPaddingInline: "space";
        scrollPaddingInlineEnd: "space";
        scrollPaddingInlineStart: "space";
        top: "space";
        right: "space";
        bottom: "space";
        left: "space";
        fontSize: "fontSizes";
        background: "colors";
        backgroundColor: "colors";
        backgroundImage: "colors";
        borderImage: "colors";
        border: "colors";
        borderBlock: "colors";
        borderBlockEnd: "colors";
        borderBlockStart: "colors";
        borderBottom: "colors";
        borderBottomColor: "colors";
        borderColor: "colors";
        borderInline: "colors";
        borderInlineEnd: "colors";
        borderInlineStart: "colors";
        borderLeft: "colors";
        borderLeftColor: "colors";
        borderRight: "colors";
        borderRightColor: "colors";
        borderTop: "colors";
        borderTopColor: "colors";
        caretColor: "colors";
        color: "colors";
        columnRuleColor: "colors";
        outline: "colors";
        outlineColor: "colors";
        fill: "colors";
        stroke: "colors";
        textDecorationColor: "colors";
        fontFamily: "fonts";
        fontWeight: "fontWeights";
        lineHeight: "lineHeights";
        letterSpacing: "letterSpacings";
        blockSize: "sizes";
        minBlockSize: "sizes";
        maxBlockSize: "sizes";
        inlineSize: "sizes";
        minInlineSize: "sizes";
        maxInlineSize: "sizes";
        width: "sizes";
        minWidth: "sizes";
        maxWidth: "sizes";
        height: "sizes";
        minHeight: "sizes";
        maxHeight: "sizes";
        flexBasis: "sizes";
        gridTemplateColumns: "sizes";
        gridTemplateRows: "sizes";
        borderWidth: "borderWidths";
        borderTopWidth: "borderWidths";
        borderLeftWidth: "borderWidths";
        borderRightWidth: "borderWidths";
        borderBottomWidth: "borderWidths";
        borderStyle: "borderStyles";
        borderTopStyle: "borderStyles";
        borderLeftStyle: "borderStyles";
        borderRightStyle: "borderStyles";
        borderBottomStyle: "borderStyles";
        borderRadius: "radii";
        borderTopLeftRadius: "radii";
        borderTopRightRadius: "radii";
        borderBottomRightRadius: "radii";
        borderBottomLeftRadius: "radii";
        boxShadow: "shadows";
        textShadow: "shadows";
        transition: "transitions";
        zIndex: "zIndices";
    };
    utils: {
        m: (v: PropertyValue<'margin'>) => {
            margin: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mt: (v: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mr: (v: PropertyValue<'margin'>) => {
            marginRight: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mb: (v: PropertyValue<'margin'>) => {
            marginBottom: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        ml: (v: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mx: (v: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
            marginRight: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        my: (v: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
            marginBottom: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        p: (v: PropertyValue<'padding'>) => {
            padding: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pt: (v: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pr: (v: PropertyValue<'padding'>) => {
            paddingRight: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pb: (v: PropertyValue<'padding'>) => {
            paddingBottom: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pl: (v: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        px: (v: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
            paddingRight: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        py: (v: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
            paddingBottom: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        bg: (v: PropertyValue<'background'>) => {
            background: {
                readonly [Stitches.$$PropertyValue]: "background";
            };
        };
        size: (v: PropertyValue<'width'>) => {
            width: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
            height: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        maxSize: (v: PropertyValue<'width'>) => {
            maxWidth: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
            maxHeight: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        minSize: (v: PropertyValue<'width'>) => {
            minWidth: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
            minHeight: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        br: (v: PropertyValue<'borderRadius'>) => {
            borderRadius: {
                readonly [Stitches.$$PropertyValue]: "borderRadius";
            };
        };
        bs: (v: PropertyValue<'boxShadow'>) => {
            boxShadow: {
                readonly [Stitches.$$PropertyValue]: "boxShadow";
            };
        };
        justify: (v: PropertyValue<'justifyContent'>) => {
            justifyContent: {
                readonly [Stitches.$$PropertyValue]: "justifyContent";
            };
        };
        align: (v: PropertyValue<'alignItems'>) => {
            alignItems: {
                readonly [Stitches.$$PropertyValue]: "alignItems";
            };
        };
        h: (v: PropertyValue<'height'>) => {
            height: {
                readonly [Stitches.$$PropertyValue]: "height";
            };
        };
        maxH: (v: PropertyValue<'maxHeight'>) => {
            maxHeight: {
                readonly [Stitches.$$PropertyValue]: "maxHeight";
            };
        };
        minH: (v: PropertyValue<'minHeight'>) => {
            minHeight: {
                readonly [Stitches.$$PropertyValue]: "minHeight";
            };
        };
        w: (v: PropertyValue<'width'>) => {
            width: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        maxW: (v: PropertyValue<'maxWidth'>) => {
            maxWidth: {
                readonly [Stitches.$$PropertyValue]: "maxWidth";
            };
        };
        minW: (v: PropertyValue<'minWidth'>) => {
            minWidth: {
                readonly [Stitches.$$PropertyValue]: "minWidth";
            };
        };
        d: (v: PropertyValue<'display'>) => {
            display: {
                readonly [Stitches.$$PropertyValue]: "display";
            };
        };
        columns: (v: PropertyValue<'gridTemplateColumns'>) => {
            gridTemplateColumns: {
                readonly [Stitches.$$PropertyValue]: "gridTemplateColumns";
            };
        };
        rows: (v: PropertyValue<'gridTemplateRows'>) => {
            gridTemplateRows: {
                readonly [Stitches.$$PropertyValue]: "gridTemplateRows";
            };
        };
        blur: (v: ScaleValue<'blurs'>) => {
            filter: string;
        };
        textGradient: (v: PropertyValue<'backgroundImage'>) => {
            backgroundImage: string;
            WebkitBackgroundClip: string;
            WebkitTextFillColor: string;
            '&::selection': {
                WebkitTextFillColor: string;
            };
        };
    };
};
declare const css: <Composers extends (string | _stitches_react_types_util.Function | React$1.JSXElementConstructor<any> | React$1.ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS_1 = _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: PropertyValue<'margin'>) => {
        margin: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mt: (v: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mr: (v: PropertyValue<'margin'>) => {
        marginRight: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mb: (v: PropertyValue<'margin'>) => {
        marginBottom: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    ml: (v: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mx: (v: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    my: (v: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    p: (v: PropertyValue<'padding'>) => {
        padding: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pt: (v: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pr: (v: PropertyValue<'padding'>) => {
        paddingRight: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pb: (v: PropertyValue<'padding'>) => {
        paddingBottom: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pl: (v: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    px: (v: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    py: (v: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    bg: (v: PropertyValue<'background'>) => {
        background: {
            readonly [Stitches.$$PropertyValue]: "background";
        };
    };
    size: (v: PropertyValue<'width'>) => {
        width: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        height: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    maxSize: (v: PropertyValue<'width'>) => {
        maxWidth: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    minSize: (v: PropertyValue<'width'>) => {
        minWidth: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    br: (v: PropertyValue<'borderRadius'>) => {
        borderRadius: {
            readonly [Stitches.$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: PropertyValue<'boxShadow'>) => {
        boxShadow: {
            readonly [Stitches.$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: PropertyValue<'justifyContent'>) => {
        justifyContent: {
            readonly [Stitches.$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: PropertyValue<'alignItems'>) => {
        alignItems: {
            readonly [Stitches.$$PropertyValue]: "alignItems";
        };
    };
    h: (v: PropertyValue<'height'>) => {
        height: {
            readonly [Stitches.$$PropertyValue]: "height";
        };
    };
    maxH: (v: PropertyValue<'maxHeight'>) => {
        maxHeight: {
            readonly [Stitches.$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: PropertyValue<'minHeight'>) => {
        minHeight: {
            readonly [Stitches.$$PropertyValue]: "minHeight";
        };
    };
    w: (v: PropertyValue<'width'>) => {
        width: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    maxW: (v: PropertyValue<'maxWidth'>) => {
        maxWidth: {
            readonly [Stitches.$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: PropertyValue<'minWidth'>) => {
        minWidth: {
            readonly [Stitches.$$PropertyValue]: "minWidth";
        };
    };
    d: (v: PropertyValue<'display'>) => {
        display: {
            readonly [Stitches.$$PropertyValue]: "display";
        };
    };
    columns: (v: PropertyValue<'gridTemplateColumns'>) => {
        gridTemplateColumns: {
            readonly [Stitches.$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: PropertyValue<'gridTemplateRows'>) => {
        gridTemplateRows: {
            readonly [Stitches.$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: ScaleValue<'blurs'>) => {
        filter: string;
    };
    textGradient: (v: PropertyValue<'backgroundImage'>) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | React$1.JSXElementConstructor<any> | React$1.ExoticComponent<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : _stitches_react_types_util.WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : _stitches_react_types_util.WideObject) | undefined;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => _stitches_react_types_styled_component.CssComponent<_stitches_react_types_styled_component.StyledComponentType<Composers>, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, CSS_1>;
declare const globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? _stitches_react_types_css.AtRule.FontFace | _stitches_react_types_css.AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: _stitches_react_types_css_util.CSS<{
        sm: "(min-width: 576px)";
        md: "(min-width: 768px)";
        lg: "(min-width: 992px)";
        xl: "(min-width: 1200px)";
        '2xl': "(min-width: 1400px)";
        motion: "(prefers-reduced-motion: reduce)";
        hover: "(any-hover: hover)";
        dark: "(prefers-color-scheme: dark)";
        light: "(prefers-color-scheme: light)";
    }, {
        colors: {
            white: string;
            black: string;
            'pink-500': string;
            'pink-600': string;
            'pink-700': string;
            'grey-400': string;
            'grey-600': string;
            'grey-700': string;
            'grey-800': string;
            'grey-850': string;
            'grey-900': string;
            'red-500': string;
            'red-550': string;
            'red-600': string;
            'red-650': string;
            'red-900': string;
            'teal-500': string;
            'yellow-500': string;
            'yellow-550': string;
            'yellow-600': string;
            'yellow-700': string;
            'yellow-900': string;
            'green-500': string;
            'green-550': string;
            'green-600': string;
            'green-700': string;
            'green-900': string;
            common: string;
            uncommon: string;
            rare: string;
            'ultra-rare': string;
            legendary: string;
        };
        transitions: {
            fast: string;
        };
        fonts: {
            system: string;
        };
        fontSizes: {
            '3xs': string;
            '2xs': string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
        };
        fontWeights: {
            thin: number;
            normal: number;
            medium: number;
            bold: number;
            extrabold: number;
        };
        radii: {
            full: string;
            half: string;
            sm: string;
            md: string;
        };
        sizes: {
            full: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
        space: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
        };
        zIndices: {
            hide: number;
            auto: string;
            base: number;
            docked: number;
            dropdown: number;
            sticky: number;
            banner: number;
            overlay: number;
            modal: number;
            popover: number;
            skipLink: number;
            toast: number;
            tooltip: number;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
        shadows: unknown;
        blurs: {
            sm: string;
            md: string;
            lg: string;
        };
    }, {
        gap: "space";
        gridGap: "space";
        columnGap: "space";
        gridColumnGap: "space";
        rowGap: "space";
        gridRowGap: "space";
        inset: "space";
        insetBlock: "space";
        insetBlockEnd: "space";
        insetBlockStart: "space";
        insetInline: "space";
        insetInlineEnd: "space";
        insetInlineStart: "space";
        margin: "space";
        marginTop: "space";
        marginRight: "space";
        marginBottom: "space";
        marginLeft: "space";
        marginBlock: "space";
        marginBlockEnd: "space";
        marginBlockStart: "space";
        marginInline: "space";
        marginInlineEnd: "space";
        marginInlineStart: "space";
        padding: "space";
        paddingTop: "space";
        paddingRight: "space";
        paddingBottom: "space";
        paddingLeft: "space";
        paddingBlock: "space";
        paddingBlockEnd: "space";
        paddingBlockStart: "space";
        paddingInline: "space";
        paddingInlineEnd: "space";
        paddingInlineStart: "space";
        scrollMargin: "space";
        scrollMarginTop: "space";
        scrollMarginRight: "space";
        scrollMarginBottom: "space";
        scrollMarginLeft: "space";
        scrollMarginBlock: "space";
        scrollMarginBlockEnd: "space";
        scrollMarginBlockStart: "space";
        scrollMarginInline: "space";
        scrollMarginInlineEnd: "space";
        scrollMarginInlineStart: "space";
        scrollPadding: "space";
        scrollPaddingTop: "space";
        scrollPaddingRight: "space";
        scrollPaddingBottom: "space";
        scrollPaddingLeft: "space";
        scrollPaddingBlock: "space";
        scrollPaddingBlockEnd: "space";
        scrollPaddingBlockStart: "space";
        scrollPaddingInline: "space";
        scrollPaddingInlineEnd: "space";
        scrollPaddingInlineStart: "space";
        top: "space";
        right: "space";
        bottom: "space";
        left: "space";
        fontSize: "fontSizes";
        background: "colors";
        backgroundColor: "colors";
        backgroundImage: "colors";
        borderImage: "colors";
        border: "colors";
        borderBlock: "colors";
        borderBlockEnd: "colors";
        borderBlockStart: "colors";
        borderBottom: "colors";
        borderBottomColor: "colors";
        borderColor: "colors";
        borderInline: "colors";
        borderInlineEnd: "colors";
        borderInlineStart: "colors";
        borderLeft: "colors";
        borderLeftColor: "colors";
        borderRight: "colors";
        borderRightColor: "colors";
        borderTop: "colors";
        borderTopColor: "colors";
        caretColor: "colors";
        color: "colors";
        columnRuleColor: "colors";
        outline: "colors";
        outlineColor: "colors";
        fill: "colors";
        stroke: "colors";
        textDecorationColor: "colors";
        fontFamily: "fonts";
        fontWeight: "fontWeights";
        lineHeight: "lineHeights";
        letterSpacing: "letterSpacings";
        blockSize: "sizes";
        minBlockSize: "sizes";
        maxBlockSize: "sizes";
        inlineSize: "sizes";
        minInlineSize: "sizes";
        maxInlineSize: "sizes";
        width: "sizes";
        minWidth: "sizes";
        maxWidth: "sizes";
        height: "sizes";
        minHeight: "sizes";
        maxHeight: "sizes";
        flexBasis: "sizes";
        gridTemplateColumns: "sizes";
        gridTemplateRows: "sizes";
        borderWidth: "borderWidths";
        borderTopWidth: "borderWidths";
        borderLeftWidth: "borderWidths";
        borderRightWidth: "borderWidths";
        borderBottomWidth: "borderWidths";
        borderStyle: "borderStyles";
        borderTopStyle: "borderStyles";
        borderLeftStyle: "borderStyles";
        borderRightStyle: "borderStyles";
        borderBottomStyle: "borderStyles";
        borderRadius: "radii";
        borderTopLeftRadius: "radii";
        borderTopRightRadius: "radii";
        borderBottomRightRadius: "radii";
        borderBottomLeftRadius: "radii";
        boxShadow: "shadows";
        textShadow: "shadows";
        transition: "transitions";
        zIndex: "zIndices";
    }, {
        m: (v: PropertyValue<'margin'>) => {
            margin: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mt: (v: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mr: (v: PropertyValue<'margin'>) => {
            marginRight: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mb: (v: PropertyValue<'margin'>) => {
            marginBottom: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        ml: (v: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mx: (v: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
            marginRight: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        my: (v: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
            marginBottom: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        p: (v: PropertyValue<'padding'>) => {
            padding: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pt: (v: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pr: (v: PropertyValue<'padding'>) => {
            paddingRight: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pb: (v: PropertyValue<'padding'>) => {
            paddingBottom: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pl: (v: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        px: (v: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
            paddingRight: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        py: (v: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
            paddingBottom: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        bg: (v: PropertyValue<'background'>) => {
            background: {
                readonly [Stitches.$$PropertyValue]: "background";
            };
        };
        size: (v: PropertyValue<'width'>) => {
            width: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
            height: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        maxSize: (v: PropertyValue<'width'>) => {
            maxWidth: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
            maxHeight: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        minSize: (v: PropertyValue<'width'>) => {
            minWidth: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
            minHeight: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        br: (v: PropertyValue<'borderRadius'>) => {
            borderRadius: {
                readonly [Stitches.$$PropertyValue]: "borderRadius";
            };
        };
        bs: (v: PropertyValue<'boxShadow'>) => {
            boxShadow: {
                readonly [Stitches.$$PropertyValue]: "boxShadow";
            };
        };
        justify: (v: PropertyValue<'justifyContent'>) => {
            justifyContent: {
                readonly [Stitches.$$PropertyValue]: "justifyContent";
            };
        };
        align: (v: PropertyValue<'alignItems'>) => {
            alignItems: {
                readonly [Stitches.$$PropertyValue]: "alignItems";
            };
        };
        h: (v: PropertyValue<'height'>) => {
            height: {
                readonly [Stitches.$$PropertyValue]: "height";
            };
        };
        maxH: (v: PropertyValue<'maxHeight'>) => {
            maxHeight: {
                readonly [Stitches.$$PropertyValue]: "maxHeight";
            };
        };
        minH: (v: PropertyValue<'minHeight'>) => {
            minHeight: {
                readonly [Stitches.$$PropertyValue]: "minHeight";
            };
        };
        w: (v: PropertyValue<'width'>) => {
            width: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        maxW: (v: PropertyValue<'maxWidth'>) => {
            maxWidth: {
                readonly [Stitches.$$PropertyValue]: "maxWidth";
            };
        };
        minW: (v: PropertyValue<'minWidth'>) => {
            minWidth: {
                readonly [Stitches.$$PropertyValue]: "minWidth";
            };
        };
        d: (v: PropertyValue<'display'>) => {
            display: {
                readonly [Stitches.$$PropertyValue]: "display";
            };
        };
        columns: (v: PropertyValue<'gridTemplateColumns'>) => {
            gridTemplateColumns: {
                readonly [Stitches.$$PropertyValue]: "gridTemplateColumns";
            };
        };
        rows: (v: PropertyValue<'gridTemplateRows'>) => {
            gridTemplateRows: {
                readonly [Stitches.$$PropertyValue]: "gridTemplateRows";
            };
        };
        blur: (v: ScaleValue<'blurs'>) => {
            filter: string;
        };
        textGradient: (v: PropertyValue<'backgroundImage'>) => {
            backgroundImage: string;
            WebkitBackgroundClip: string;
            WebkitTextFillColor: string;
            '&::selection': {
                WebkitTextFillColor: string;
            };
        };
    }>;
} : K extends `@property ${string}` ? _stitches_react_types_css.AtRule.Property : _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: PropertyValue<'margin'>) => {
        margin: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mt: (v: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mr: (v: PropertyValue<'margin'>) => {
        marginRight: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mb: (v: PropertyValue<'margin'>) => {
        marginBottom: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    ml: (v: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mx: (v: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    my: (v: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    p: (v: PropertyValue<'padding'>) => {
        padding: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pt: (v: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pr: (v: PropertyValue<'padding'>) => {
        paddingRight: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pb: (v: PropertyValue<'padding'>) => {
        paddingBottom: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pl: (v: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    px: (v: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    py: (v: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    bg: (v: PropertyValue<'background'>) => {
        background: {
            readonly [Stitches.$$PropertyValue]: "background";
        };
    };
    size: (v: PropertyValue<'width'>) => {
        width: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        height: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    maxSize: (v: PropertyValue<'width'>) => {
        maxWidth: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    minSize: (v: PropertyValue<'width'>) => {
        minWidth: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    br: (v: PropertyValue<'borderRadius'>) => {
        borderRadius: {
            readonly [Stitches.$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: PropertyValue<'boxShadow'>) => {
        boxShadow: {
            readonly [Stitches.$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: PropertyValue<'justifyContent'>) => {
        justifyContent: {
            readonly [Stitches.$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: PropertyValue<'alignItems'>) => {
        alignItems: {
            readonly [Stitches.$$PropertyValue]: "alignItems";
        };
    };
    h: (v: PropertyValue<'height'>) => {
        height: {
            readonly [Stitches.$$PropertyValue]: "height";
        };
    };
    maxH: (v: PropertyValue<'maxHeight'>) => {
        maxHeight: {
            readonly [Stitches.$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: PropertyValue<'minHeight'>) => {
        minHeight: {
            readonly [Stitches.$$PropertyValue]: "minHeight";
        };
    };
    w: (v: PropertyValue<'width'>) => {
        width: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    maxW: (v: PropertyValue<'maxWidth'>) => {
        maxWidth: {
            readonly [Stitches.$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: PropertyValue<'minWidth'>) => {
        minWidth: {
            readonly [Stitches.$$PropertyValue]: "minWidth";
        };
    };
    d: (v: PropertyValue<'display'>) => {
        display: {
            readonly [Stitches.$$PropertyValue]: "display";
        };
    };
    columns: (v: PropertyValue<'gridTemplateColumns'>) => {
        gridTemplateColumns: {
            readonly [Stitches.$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: PropertyValue<'gridTemplateRows'>) => {
        gridTemplateRows: {
            readonly [Stitches.$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: ScaleValue<'blurs'>) => {
        filter: string;
    };
    textGradient: (v: PropertyValue<'backgroundImage'>) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>; })[]) => () => string;
declare const styled: <Type extends _stitches_react_types_util.Function | keyof JSX.IntrinsicElements | React$1.ComponentType<any>, Composers extends (string | _stitches_react_types_util.Function | React$1.ComponentType<any> | {
    [name: string]: unknown;
})[], CSS_1 = _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: PropertyValue<'margin'>) => {
        margin: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mt: (v: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mr: (v: PropertyValue<'margin'>) => {
        marginRight: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mb: (v: PropertyValue<'margin'>) => {
        marginBottom: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    ml: (v: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mx: (v: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    my: (v: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    p: (v: PropertyValue<'padding'>) => {
        padding: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pt: (v: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pr: (v: PropertyValue<'padding'>) => {
        paddingRight: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pb: (v: PropertyValue<'padding'>) => {
        paddingBottom: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pl: (v: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    px: (v: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    py: (v: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    bg: (v: PropertyValue<'background'>) => {
        background: {
            readonly [Stitches.$$PropertyValue]: "background";
        };
    };
    size: (v: PropertyValue<'width'>) => {
        width: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        height: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    maxSize: (v: PropertyValue<'width'>) => {
        maxWidth: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    minSize: (v: PropertyValue<'width'>) => {
        minWidth: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    br: (v: PropertyValue<'borderRadius'>) => {
        borderRadius: {
            readonly [Stitches.$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: PropertyValue<'boxShadow'>) => {
        boxShadow: {
            readonly [Stitches.$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: PropertyValue<'justifyContent'>) => {
        justifyContent: {
            readonly [Stitches.$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: PropertyValue<'alignItems'>) => {
        alignItems: {
            readonly [Stitches.$$PropertyValue]: "alignItems";
        };
    };
    h: (v: PropertyValue<'height'>) => {
        height: {
            readonly [Stitches.$$PropertyValue]: "height";
        };
    };
    maxH: (v: PropertyValue<'maxHeight'>) => {
        maxHeight: {
            readonly [Stitches.$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: PropertyValue<'minHeight'>) => {
        minHeight: {
            readonly [Stitches.$$PropertyValue]: "minHeight";
        };
    };
    w: (v: PropertyValue<'width'>) => {
        width: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    maxW: (v: PropertyValue<'maxWidth'>) => {
        maxWidth: {
            readonly [Stitches.$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: PropertyValue<'minWidth'>) => {
        minWidth: {
            readonly [Stitches.$$PropertyValue]: "minWidth";
        };
    };
    d: (v: PropertyValue<'display'>) => {
        display: {
            readonly [Stitches.$$PropertyValue]: "display";
        };
    };
    columns: (v: PropertyValue<'gridTemplateColumns'>) => {
        gridTemplateColumns: {
            readonly [Stitches.$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: PropertyValue<'gridTemplateRows'>) => {
        gridTemplateRows: {
            readonly [Stitches.$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: ScaleValue<'blurs'>) => {
        filter: string;
    };
    textGradient: (v: PropertyValue<'backgroundImage'>) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | React$1.ComponentType<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : _stitches_react_types_util.WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : _stitches_react_types_util.WideObject) | undefined;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => _stitches_react_types_styled_component.StyledComponent<Type, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: PropertyValue<'margin'>) => {
        margin: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mt: (v: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mr: (v: PropertyValue<'margin'>) => {
        marginRight: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mb: (v: PropertyValue<'margin'>) => {
        marginBottom: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    ml: (v: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    mx: (v: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    my: (v: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [Stitches.$$PropertyValue]: "margin";
        };
    };
    p: (v: PropertyValue<'padding'>) => {
        padding: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pt: (v: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pr: (v: PropertyValue<'padding'>) => {
        paddingRight: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pb: (v: PropertyValue<'padding'>) => {
        paddingBottom: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    pl: (v: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    px: (v: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    py: (v: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [Stitches.$$PropertyValue]: "padding";
        };
    };
    bg: (v: PropertyValue<'background'>) => {
        background: {
            readonly [Stitches.$$PropertyValue]: "background";
        };
    };
    size: (v: PropertyValue<'width'>) => {
        width: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        height: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    maxSize: (v: PropertyValue<'width'>) => {
        maxWidth: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    minSize: (v: PropertyValue<'width'>) => {
        minWidth: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    br: (v: PropertyValue<'borderRadius'>) => {
        borderRadius: {
            readonly [Stitches.$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: PropertyValue<'boxShadow'>) => {
        boxShadow: {
            readonly [Stitches.$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: PropertyValue<'justifyContent'>) => {
        justifyContent: {
            readonly [Stitches.$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: PropertyValue<'alignItems'>) => {
        alignItems: {
            readonly [Stitches.$$PropertyValue]: "alignItems";
        };
    };
    h: (v: PropertyValue<'height'>) => {
        height: {
            readonly [Stitches.$$PropertyValue]: "height";
        };
    };
    maxH: (v: PropertyValue<'maxHeight'>) => {
        maxHeight: {
            readonly [Stitches.$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: PropertyValue<'minHeight'>) => {
        minHeight: {
            readonly [Stitches.$$PropertyValue]: "minHeight";
        };
    };
    w: (v: PropertyValue<'width'>) => {
        width: {
            readonly [Stitches.$$PropertyValue]: "width";
        };
    };
    maxW: (v: PropertyValue<'maxWidth'>) => {
        maxWidth: {
            readonly [Stitches.$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: PropertyValue<'minWidth'>) => {
        minWidth: {
            readonly [Stitches.$$PropertyValue]: "minWidth";
        };
    };
    d: (v: PropertyValue<'display'>) => {
        display: {
            readonly [Stitches.$$PropertyValue]: "display";
        };
    };
    columns: (v: PropertyValue<'gridTemplateColumns'>) => {
        gridTemplateColumns: {
            readonly [Stitches.$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: PropertyValue<'gridTemplateRows'>) => {
        gridTemplateRows: {
            readonly [Stitches.$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: ScaleValue<'blurs'>) => {
        filter: string;
    };
    textGradient: (v: PropertyValue<'backgroundImage'>) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;
declare const getCssText: () => string;
declare const keyframes: (style: {
    [offset: string]: _stitches_react_types_css_util.CSS<{
        sm: "(min-width: 576px)";
        md: "(min-width: 768px)";
        lg: "(min-width: 992px)";
        xl: "(min-width: 1200px)";
        '2xl': "(min-width: 1400px)";
        motion: "(prefers-reduced-motion: reduce)";
        hover: "(any-hover: hover)";
        dark: "(prefers-color-scheme: dark)";
        light: "(prefers-color-scheme: light)";
    }, {
        colors: {
            white: string;
            black: string;
            'pink-500': string;
            'pink-600': string;
            'pink-700': string;
            'grey-400': string;
            'grey-600': string;
            'grey-700': string;
            'grey-800': string;
            'grey-850': string;
            'grey-900': string;
            'red-500': string;
            'red-550': string;
            'red-600': string;
            'red-650': string;
            'red-900': string;
            'teal-500': string;
            'yellow-500': string;
            'yellow-550': string;
            'yellow-600': string;
            'yellow-700': string;
            'yellow-900': string;
            'green-500': string;
            'green-550': string;
            'green-600': string;
            'green-700': string;
            'green-900': string;
            common: string;
            uncommon: string;
            rare: string;
            'ultra-rare': string;
            legendary: string;
        };
        transitions: {
            fast: string;
        };
        fonts: {
            system: string;
        };
        fontSizes: {
            '3xs': string;
            '2xs': string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
        };
        fontWeights: {
            thin: number;
            normal: number;
            medium: number;
            bold: number;
            extrabold: number;
        };
        radii: {
            full: string;
            half: string;
            sm: string;
            md: string;
        };
        sizes: {
            full: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
        space: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
        };
        zIndices: {
            hide: number;
            auto: string;
            base: number;
            docked: number;
            dropdown: number;
            sticky: number;
            banner: number;
            overlay: number;
            modal: number;
            popover: number;
            skipLink: number;
            toast: number;
            tooltip: number;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
        shadows: unknown;
        blurs: {
            sm: string;
            md: string;
            lg: string;
        };
    }, {
        gap: "space";
        gridGap: "space";
        columnGap: "space";
        gridColumnGap: "space";
        rowGap: "space";
        gridRowGap: "space";
        inset: "space";
        insetBlock: "space";
        insetBlockEnd: "space";
        insetBlockStart: "space";
        insetInline: "space";
        insetInlineEnd: "space";
        insetInlineStart: "space";
        margin: "space";
        marginTop: "space";
        marginRight: "space";
        marginBottom: "space";
        marginLeft: "space";
        marginBlock: "space";
        marginBlockEnd: "space";
        marginBlockStart: "space";
        marginInline: "space";
        marginInlineEnd: "space";
        marginInlineStart: "space";
        padding: "space";
        paddingTop: "space";
        paddingRight: "space";
        paddingBottom: "space";
        paddingLeft: "space";
        paddingBlock: "space";
        paddingBlockEnd: "space";
        paddingBlockStart: "space";
        paddingInline: "space";
        paddingInlineEnd: "space";
        paddingInlineStart: "space";
        scrollMargin: "space";
        scrollMarginTop: "space";
        scrollMarginRight: "space";
        scrollMarginBottom: "space";
        scrollMarginLeft: "space";
        scrollMarginBlock: "space";
        scrollMarginBlockEnd: "space";
        scrollMarginBlockStart: "space";
        scrollMarginInline: "space";
        scrollMarginInlineEnd: "space";
        scrollMarginInlineStart: "space";
        scrollPadding: "space";
        scrollPaddingTop: "space";
        scrollPaddingRight: "space";
        scrollPaddingBottom: "space";
        scrollPaddingLeft: "space";
        scrollPaddingBlock: "space";
        scrollPaddingBlockEnd: "space";
        scrollPaddingBlockStart: "space";
        scrollPaddingInline: "space";
        scrollPaddingInlineEnd: "space";
        scrollPaddingInlineStart: "space";
        top: "space";
        right: "space";
        bottom: "space";
        left: "space";
        fontSize: "fontSizes";
        background: "colors";
        backgroundColor: "colors";
        backgroundImage: "colors";
        borderImage: "colors";
        border: "colors";
        borderBlock: "colors";
        borderBlockEnd: "colors";
        borderBlockStart: "colors";
        borderBottom: "colors";
        borderBottomColor: "colors";
        borderColor: "colors";
        borderInline: "colors";
        borderInlineEnd: "colors";
        borderInlineStart: "colors";
        borderLeft: "colors";
        borderLeftColor: "colors";
        borderRight: "colors";
        borderRightColor: "colors";
        borderTop: "colors";
        borderTopColor: "colors";
        caretColor: "colors";
        color: "colors";
        columnRuleColor: "colors";
        outline: "colors";
        outlineColor: "colors";
        fill: "colors";
        stroke: "colors";
        textDecorationColor: "colors";
        fontFamily: "fonts";
        fontWeight: "fontWeights";
        lineHeight: "lineHeights";
        letterSpacing: "letterSpacings";
        blockSize: "sizes";
        minBlockSize: "sizes";
        maxBlockSize: "sizes";
        inlineSize: "sizes";
        minInlineSize: "sizes";
        maxInlineSize: "sizes";
        width: "sizes";
        minWidth: "sizes";
        maxWidth: "sizes";
        height: "sizes";
        minHeight: "sizes";
        maxHeight: "sizes";
        flexBasis: "sizes";
        gridTemplateColumns: "sizes";
        gridTemplateRows: "sizes";
        borderWidth: "borderWidths";
        borderTopWidth: "borderWidths";
        borderLeftWidth: "borderWidths";
        borderRightWidth: "borderWidths";
        borderBottomWidth: "borderWidths";
        borderStyle: "borderStyles";
        borderTopStyle: "borderStyles";
        borderLeftStyle: "borderStyles";
        borderRightStyle: "borderStyles";
        borderBottomStyle: "borderStyles";
        borderRadius: "radii";
        borderTopLeftRadius: "radii";
        borderTopRightRadius: "radii";
        borderBottomRightRadius: "radii";
        borderBottomLeftRadius: "radii";
        boxShadow: "shadows";
        textShadow: "shadows";
        transition: "transitions";
        zIndex: "zIndices";
    }, {
        m: (v: PropertyValue<'margin'>) => {
            margin: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mt: (v: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mr: (v: PropertyValue<'margin'>) => {
            marginRight: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mb: (v: PropertyValue<'margin'>) => {
            marginBottom: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        ml: (v: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        mx: (v: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
            marginRight: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        my: (v: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
            marginBottom: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        p: (v: PropertyValue<'padding'>) => {
            padding: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pt: (v: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pr: (v: PropertyValue<'padding'>) => {
            paddingRight: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pb: (v: PropertyValue<'padding'>) => {
            paddingBottom: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pl: (v: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        px: (v: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
            paddingRight: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        py: (v: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
            paddingBottom: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        bg: (v: PropertyValue<'background'>) => {
            background: {
                readonly [Stitches.$$PropertyValue]: "background";
            };
        };
        size: (v: PropertyValue<'width'>) => {
            width: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
            height: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        maxSize: (v: PropertyValue<'width'>) => {
            maxWidth: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
            maxHeight: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        minSize: (v: PropertyValue<'width'>) => {
            minWidth: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
            minHeight: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        br: (v: PropertyValue<'borderRadius'>) => {
            borderRadius: {
                readonly [Stitches.$$PropertyValue]: "borderRadius";
            };
        };
        bs: (v: PropertyValue<'boxShadow'>) => {
            boxShadow: {
                readonly [Stitches.$$PropertyValue]: "boxShadow";
            };
        };
        justify: (v: PropertyValue<'justifyContent'>) => {
            justifyContent: {
                readonly [Stitches.$$PropertyValue]: "justifyContent";
            };
        };
        align: (v: PropertyValue<'alignItems'>) => {
            alignItems: {
                readonly [Stitches.$$PropertyValue]: "alignItems";
            };
        };
        h: (v: PropertyValue<'height'>) => {
            height: {
                readonly [Stitches.$$PropertyValue]: "height";
            };
        };
        maxH: (v: PropertyValue<'maxHeight'>) => {
            maxHeight: {
                readonly [Stitches.$$PropertyValue]: "maxHeight";
            };
        };
        minH: (v: PropertyValue<'minHeight'>) => {
            minHeight: {
                readonly [Stitches.$$PropertyValue]: "minHeight";
            };
        };
        w: (v: PropertyValue<'width'>) => {
            width: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        maxW: (v: PropertyValue<'maxWidth'>) => {
            maxWidth: {
                readonly [Stitches.$$PropertyValue]: "maxWidth";
            };
        };
        minW: (v: PropertyValue<'minWidth'>) => {
            minWidth: {
                readonly [Stitches.$$PropertyValue]: "minWidth";
            };
        };
        d: (v: PropertyValue<'display'>) => {
            display: {
                readonly [Stitches.$$PropertyValue]: "display";
            };
        };
        columns: (v: PropertyValue<'gridTemplateColumns'>) => {
            gridTemplateColumns: {
                readonly [Stitches.$$PropertyValue]: "gridTemplateColumns";
            };
        };
        rows: (v: PropertyValue<'gridTemplateRows'>) => {
            gridTemplateRows: {
                readonly [Stitches.$$PropertyValue]: "gridTemplateRows";
            };
        };
        blur: (v: ScaleValue<'blurs'>) => {
            filter: string;
        };
        textGradient: (v: PropertyValue<'backgroundImage'>) => {
            backgroundImage: string;
            WebkitBackgroundClip: string;
            WebkitTextFillColor: string;
            '&::selection': {
                WebkitTextFillColor: string;
            };
        };
    }>;
}) => {
    (): string;
    name: string;
};

/**
 * Copy from Chakra UI forwardRef
 *
 * @see https://github.com/chakra-ui/chakra-ui/blob/703293367a/packages/system/src/system.types.tsx
 */
declare function forwardRef<Props extends object, Component extends As>(component: React$1.ForwardRefRenderFunction<any, RightJoinProps<PropsOf<Component>, Props>>): ComponentWithAs<Component, Props>;
declare type As<Props = any> = React$1.ElementType<Props>;
/**
 * Extract the props of a React element or component
 */
declare type PropsOf<T extends As> = React$1.ComponentPropsWithoutRef<T> & {
    as?: As;
    css?: CSS;
};
declare type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<Target, OmitAdditionalProps>;
declare type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;
declare type MergeWithAs<ComponentProps extends object, AsProps extends object, AdditionalProps extends object = {}, AsComponent extends As = As> = RightJoinProps<ComponentProps, AdditionalProps> & RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
};
declare type ComponentWithAs<Component extends As, Props extends object = {}> = {
    <AsComponent extends As>(props: MergeWithAs<React$1.ComponentProps<Component>, React$1.ComponentProps<AsComponent>, Props, AsComponent>): JSX.Element;
};

/**
 * Convert px to rem
 *
 * @example
 * ```js
 * pxToRem(16) // 1rem
 * ```
 */
declare const pxToRem: (px: number, base?: number) => string;

/**
 * Convert a value to percentage based on lower and upper bound values
 *
 * @param value the value in number
 * @param min the minimum value
 * @param max the maximum value
 */
declare function valueToPercent(value: number, min: number, max: number): number;

declare const isUndefined: (value: any) => value is undefined;

declare type SpinnerProps = {
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Spinner component
 *
 * @description provide a visual cue that an action is either processing, awaiting a course of change or a result.
 *
 * @example
 * ```jsx
 * <Spinner css={{
 *    $$color: '$colors$white',
 *    $$size: '16px',
 *    $$thickness: 2,
 *    $$speed: '0.4s'
 * }}
 * ```
 */
declare const Spinner: ({ ...props }: SpinnerProps) => JSX.Element;

declare const Button$1: _stitches_react_types_styled_component.StyledComponent<"button", {
    color?: "primary" | "secondary" | "destructive" | "warning" | "success" | undefined;
    shape?: "rounded" | "squared" | undefined;
    variant?: "solid" | "naked" | "outlined" | "unstyled" | undefined;
    loading?: boolean | "true" | undefined;
    fluid?: boolean | "true" | "false" | undefined;
    onlyIcon?: boolean | "true" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        }; /**
         * Variants
         */
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type ButtonProps = {
    /**
     * Variant color of the button
     * @default "primary"
     */
    color?: VariantProps<typeof Button$1>['color'];
    /**
     * Shape of the button
     * @default "squared"
     */
    shape?: VariantProps<typeof Button$1>['shape'];
    /**
     * If `true` button should be full width
     * @default "false"
     */
    fluid?: VariantProps<typeof Button$1>['fluid'];
    /**
     * If `true`, the button will show a spinner.
     * @default "false"
     */
    loading?: boolean;
    /**
     * The style of button
     * Can be `solid`, `outlined`, `naked` or `unstyled`
     * @default "solid"
     */
    variant?: VariantProps<typeof Button$1>['variant'];
    /**
     * Add an icon beside text
     */
    icon?: React__default.ReactNode;
    /**
     * Position of the icon
     * @default "left"
     */
    iconPosition?: 'left' | 'right';
    /**
     * CSS properties
     */
    css?: CSS;
} & React__default.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * Button component
 *
 * @description used to trigger an action or event.
 */
declare const Button: ComponentWithAs<"button", ButtonProps>;

declare type AlertProps = {
    /**
     * Title of the alert
     */
    title: string;
    /**
     * Subtitle of the alert
     */
    subtitle?: string;
    /**
     * Description of the alert
     */
    description?: string;
    /**
     * Variant style of the alert
     * @default "primary"
     */
    variant?: 'primary' | 'destructive' | 'warning' | 'success';
    /**
     * Icon to display in the alert
     * @default "true"
     */
    dismissible?: boolean;
    /**
     * Banner style of the alert
     * @default "false"
     */
    banner?: boolean;
    /**
     * Align of the action buttons
     * @default "end"
     */
    align?: 'end' | 'center' | 'start';
    /**
     * Action buttons of the alert
     */
    children?: React__default.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Alert component
 *
 * @description used to communicate a state that affects a system, feature or page.
 */
declare const Alert: ({ title, subtitle, description, children, dismissible, variant, banner, align, ...props }: AlertProps) => JSX.Element;

declare const Image$1: _stitches_react_types_styled_component.StyledComponent<"img", {
    objectFit?: boolean | "true" | "false" | undefined;
    cover?: boolean | "true" | "false" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type ImageProps = {
    /**
     * if `true`, add objectFit "cover" to image
     *
     * @default "true"
     */
    objectFit?: VariantProps<typeof Image$1>['objectFit'];
    /**
     * if `true`, add backgroundSize "cover" to image
     *
     * @default "true"
     */
    cover?: VariantProps<typeof Image$1>['cover'];
    /**
     * Fallback image `src` to show if image is loading or image fails.
     *
     * Note ????: We recommend you use a local image
     *
     */
    fallbackSrc?: string;
    /**
     * CSS properties
     */
    css?: CSS;
} & ImgHTMLAttributes<HTMLImageElement>;
/**
 * Image component
 *
 * @description used to display images.
 */
declare const Image: ComponentWithAs<"img", ImageProps>;

declare const Avatar$1: _stitches_react_types_styled_component.StyledComponent<ComponentWithAs<"img", ImageProps>, {
    size?: number | "24" | "32" | "40" | "64" | "80" | "88" | "160" | "192" | "240" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type AvatarProps = {
    /**
     * Avatar size
     * @default 80
     */
    size?: VariantProps<typeof Avatar$1>['size'];
} & ImageProps;
/**
 * Avatar component
 *
 * @description is used to represent a character and displays the picture.
 */
declare const Avatar: ({ ...props }: AvatarProps) => JSX.Element;

declare const Wrapper$3: _stitches_react_types_styled_component.StyledComponent<"div", {
    rarity?: "common" | "uncommon" | "rare" | "legendary" | "ultraRare" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type BadgeProps = {
    /**
     * Rarity of the item badge.
     * @default "common"
     */
    rarity?: VariantProps<typeof Wrapper$3>['rarity'];
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Badge component
 *
 * @description Badges are used to highlight an item's status for quick recognition.
 */
declare const Badge: ({ rarity, ...props }: BadgeProps) => JSX.Element;

declare type BoxProps = {
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Box component
 *
 * @description abstract component. By default, it renders a div element.
 */
declare const Box: _stitches_react_types_styled_component.StyledComponent<"div", {}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type CharacterProps = {
    /**
     *  If the character is selected or not.
     */
    active?: boolean;
    /**
     * The character index in the team list
     */
    index?: number;
    /**
     *  Show Index of the character
     */
    showIndex?: boolean;
    /**
     * The character class type
     */
    type?: string;
    /**
     * The source of the image (url)
     */
    src: string;
    /**
     *  Alt text for image
     */
    alt: string;
};
/**
 * Character component
 *
 * @description can be used to represent people or objects.
 */
declare const Character: ({ active, index, type, src, alt, showIndex, }: CharacterProps) => JSX.Element;

declare type CheckboxProps = {
    /**
     * Checkbox size
     *
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * CSS properties
     */
    css?: CSS;
} & CheckboxBase.CheckboxProps;
/**
 * Checkbox component
 *
 * @description used in forms when a user needs to select multiple values from several options.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox
 */
declare const Checkbox: ComponentWithAs<"input", CheckboxProps>;

declare type ContainerProps = ComponentProps<typeof Container>;
/**
 * Container component
 *
 * @description A container component that can be used to wrap other components.
 */
declare const Container: _stitches_react_types_styled_component.StyledComponent<"div", {}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type ContentHeadingProps = {
    /**
     * Title of the heading
     */
    title?: string;
    /**
     * Description of the heading
     */
    children?: React__default.ReactNode;
    /**
     * Show info icon
     *
     * @default `false`
     */
    info?: boolean;
    /**
     * Show divider line
     *
     * @default `true`
     */
    line?: boolean;
    /**
     *
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * ContentHeading component
 *
 * @description A component to display a title and description
 */
declare const ContentHeading: ({ title, children, line, info, ...props }: ContentHeadingProps) => JSX.Element;

/**
 * Flex component
 *
 * @description Flex is Box with display. It renders a div element.
 */
declare const Flex: _stitches_react_types_styled_component.StyledComponent<"div", {
    direction?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
    align?: "stretch" | "center" | "end" | "start" | "baseline" | undefined;
    justify?: "center" | "end" | "start" | "between" | "around" | undefined;
    wrap?: "wrap" | "noWrap" | "wrapReverse" | undefined;
    gap?: 0 | 16 | 8 | 10 | 12 | 14 | 20 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | 13 | 15 | 17 | 18 | 19 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        /**
         * Justify-content variants
         */
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        }; /**
         * Flex-wrap variants
         */
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T ? ((t: T, ...a: A) => void) extends (...x: infer X) => void ? X : never : never;
declare type EnumerateInternal<A extends Array<unknown>, N extends number> = {
    0: A;
    1: EnumerateInternal<PrependNextNum<A>, N>;
}[N extends A['length'] ? 0 : 1];
declare type Enumerate<N extends number> = EnumerateInternal<[
], N> extends (infer E)[] ? E : never;
declare type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;

declare type GridProps = {
    children?: React.ReactNode;
    flow?: 'row' | 'column' | 'dense' | 'rowDense' | 'columnDense';
    columns?: Range<1, 13>;
    gapX?: Range<1, 21>;
    gapY?: Range<1, 21>;
    css?: CSS;
};
/**
 * Grid component
 *
 * @description is a Box with d: grid and it comes with helpful style shorthand. It renders a div element.
 */
declare const Grid: _stitches_react_types_styled_component.StyledComponent<_stitches_react_types_styled_component.StyledComponent<"div", {
    direction?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
    align?: "stretch" | "center" | "end" | "start" | "baseline" | undefined;
    justify?: "center" | "end" | "start" | "between" | "around" | undefined;
    wrap?: "wrap" | "noWrap" | "wrapReverse" | undefined;
    gap?: 0 | 16 | 8 | 10 | 12 | 14 | 20 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | 13 | 15 | 17 | 18 | 19 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>, {
    flow?: "column" | "row" | "dense" | "rowDense" | "columnDense" | undefined;
    columns?: 8 | 10 | 12 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | undefined;
    gapX?: 16 | 8 | 10 | 12 | 14 | 20 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | 13 | 15 | 17 | 18 | 19 | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | undefined;
    gapY?: 16 | 8 | 10 | 12 | 14 | 20 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | 13 | 15 | 17 | 18 | 19 | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type InputProps = {
    /**
     * Input label
     */
    label?: string;
    /**
     * Show input message
     */
    hint?: string | string[];
    /**
     * Show input error
     */
    error?: string | string[];
    /**
     *
     * @default "default"
     */
    variant?: 'default' | 'line';
    /**
     * Left icon
     */
    leftIcon?: React__default.ReactNode;
    /**
     * Right icon
     */
    rightIcon?: React__default.ReactNode;
    /**
     * Enables the input to be cleared
     **/
    cleanable?: boolean;
    /**
     * CSS properties
     */
    css?: CSS;
} & InputHTMLAttributes<HTMLInputElement>;
/**
 * Input component
 *
 * @description is a component that is used to get user input in a text field.
 */
declare const Input: ComponentWithAs<"input", InputProps>;

declare const Label$1: _stitches_react_types_styled_component.StyledComponent<"div", {
    variant?: "warning" | "success" | "danger" | undefined;
    icon?: boolean | "true" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

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
    icon?: JSX.Element;
    /**
     * Label text
     */
    children?: React__default.ReactNode;
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
declare const Label: ComponentWithAs<"div", LabelProps>;

declare type LogoProps = {
    /**
     * Logo variant
     *
     * @default 'full'
     */
    variant?: 'minimal' | 'full';
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLOrSVGElement>;
/**
 * Logo component
 *
 * @description Show the logo of Neon District
 */
declare const Logo: ComponentWithAs<"svg", LogoProps>;

declare type RadioGroupProps = {
    /**
     * Description of the radio group
     */
    label: string;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Item of radio group
     */
    children?: React__default.ReactNode;
} & RadioProps.RadioGroupProps;
/**
 * Radio group component
 *
 * @description are used when only one choice may be selected in a series of options.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/radio-group
 */
declare const RadioGroup: ComponentWithAs<"div", RadioGroupProps>;
declare type RadioItemProps = {
    /**
     * Contains a error
     */
    error?: boolean;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Radio item
     */
    children?: React__default.ReactNode;
} & RadioProps.RadioGroupItemProps;
/**
 * Radio item component
 *
 * @description used in radio group to display a single option.
 */
declare const RadioItem: ComponentWithAs<"input", RadioItemProps>;

/**
 * Step component
 */
declare type StepperProps = {
    /**
     * The active item
     */
    activeItem: number;
    /**
     * Array of steps
     */
    items: string[];
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Steps component
 *
 * @description This component is used to render a list of steps.
 */
declare const Stepper: ({ ...props }: StepperProps) => JSX.Element;

declare type TabProps = {
    /**
     * Default active tab
     *
     * @default "tab1"
     */
    defaultValue?: string;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Children of the tab
     */
    children: ReactElement<typeof TabList> | ReactElement<typeof TabContent> | ReactElement<typeof TabList>[] | ReactElement<typeof TabContent>[];
} & Tabs.TabsProps;
/**
 * Tab component
 *
 * @description Used to display a list of tabs
 * @example
 * ```jsx
 * <Tab>
 *  <TabList defaultValue="tab1">
 *    <TabItem value="tab1">Tab 1</TabItem>
 *    <TabItem value="tab2">Tab 2</TabItem>
 *  </TabList>
 *  <TabContent value="tab1">Tab 1 content</TabContent>
 *  <TabContent value="tab2">Tab 2 content</TabContent>
 * </Tab>
 * ```
 */
declare const Tab: ComponentWithAs<"div", TabProps>;
declare type TabListProps = {
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Children of the tab list
     */
    children: ReactElement<typeof TabItem>[] | ReactElement<typeof TabItem>;
} & Tabs.TabsListProps;
declare const TabList: ComponentWithAs<"div", TabListProps>;
declare type TabItemProps = {
    /**
     * Value of the tab
     * @default "tab1"
     */
    value: string;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Label of the tab
     */
    children: React__default.ReactNode;
} & Tabs.TabsTriggerProps;
declare const TabItem: ComponentWithAs<"div", TabItemProps>;
declare type TabContentProps = {
    /**
     * Value of the tab
     */
    value: string;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * The content of the tab
     */
    children: React__default.ReactNode;
} & Tabs.TabsContentProps;
declare const TabContent: ComponentWithAs<"div", TabContentProps>;

declare const Switch: _stitches_react_types_styled_component.StyledComponent<React$1.ForwardRefExoticComponent<_radix_ui_react_switch.SwitchProps & React$1.RefAttributes<HTMLButtonElement>>, {
    size?: "sm" | "md" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        /**
         * Variants
         */
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type ToggleProps = {
    /**
     * Size of the toggle.
     *
     * @default "md"
     */
    size?: VariantProps<typeof Switch>['size'];
    /**
     * CSS properties
     */
    css?: CSS;
} & SwitchProps & HTMLAttributes<HTMLDivElement>;
/**
 * Toggle component
 *
 * @description can switch between enabled or disabled states.
 */
declare const Toggle: ({ css, ...props }: ToggleProps) => JSX.Element;

declare const Wrapper$2: _stitches_react_types_styled_component.StyledComponent<"span", {
    variant?: "solid" | "outlined" | undefined;
    removable?: boolean | "true" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type TagProps = {
    /**
     * Style variant
     * @default 'outlined'
     */
    variant?: VariantProps<typeof Wrapper$2>['variant'];
    /**
     * Show remove button
     * @default `false`
     */
    removable?: boolean;
    /**
     * @a11y
     * Label to display on close button
     */
    removableLabel?: string;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Tag content
     */
    children?: React__default.ReactNode;
    /**
     * Fires when click on `X`
     */
    onClose?: () => void;
} & HTMLAttributes<HTMLSpanElement>;
/**
 * Tag component
 *
 * @description used for items that need to be labeled, categorized, or organized using keywords that describe them.
 */
declare const Tag: ComponentWithAs<"span", TagProps>;

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
/**
 * Textarea component
 *
 * @description The Textarea component allows you to easily create multi-line text inputs.
 */
declare const Textarea: ComponentWithAs<"textarea", TextareaProps>;

declare type PageHeadingProps = {
    /**
     * The title of the page.
     */
    title: string;
    /**
     * Description of the heading
     */
    description?: string;
    /**
     * Button childrens
     */
    children?: React__default.ReactNode;
    /**
     *
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * PageHeading component
 *
 * @description Headings are used for rendering headlines.
 */
declare const PageHeading: ({ description, children, title, ...props }: PageHeadingProps) => JSX.Element;

declare type PaginationProps = {
    /**
     * The total amount of items.
     */
    total: number;
    /**
     * The size of the pagination.
     */
    pageSize: number;
    /**
     * The current page.
     */
    page: number;
    /**
     * The React state hook to update the current page.
     */
    setPage: (page: number) => void;
    /**
     *  Number of pages that will show in the component.
     *  @default 5
     */
    neighbors?: number;
    /**
     * A boolean to indicate if the component should have the go to first/go to last buttons.
     */
    quickJump?: boolean;
    /**
     * A boolean to indicate if the component should have the jump page box
     */
    jumpControl?: boolean;
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
declare const PageInfo: ({ total, page, pageSize, }: Pick<PaginationProps, 'total' | 'page' | 'pageSize'>) => JSX.Element;
/**
 * Pagination component
 *
 * @description enables the user to select a specific page from a range of pages.
 */
declare const Pagination: ({ quickJump, neighbors, total, pageSize, page, setPage, ...props }: PaginationProps) => JSX.Element;

declare type TextProps = {
    /**
     * fontSize of the text
     *
     * @default "md"
     */
    size?: VariantProps<typeof Text>['size'];
    /**
     * fontWeight of the text
     *
     * @default "normal"
     */
    weight?: VariantProps<typeof Text>['weight'];
    /**
     * Show left line through text
     *
     * @default "false"
     */
    leftLine?: VariantProps<typeof Text>['leftLine'];
};
/**
 * Text component
 *
 * @description used to render text and paragraphs within an interface. It renders a <span> tag by default.
 *
 * @example
 * ```jsx
 * <Text css={{
 *    $$lineColor: 'currentColor',
 *    $$lineSpacing: '$space$4',
 * }}
 * ```
 */
declare const Text: _stitches_react_types_styled_component.StyledComponent<"span", {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | undefined;
    weight?: "normal" | "medium" | "thin" | "bold" | "extrabold" | undefined;
    textAlign?: "left" | "right" | "center" | undefined;
    transform?: "normal" | "lowercase" | "uppercase" | undefined;
    leftLine?: boolean | "true" | "false" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        }; /**
         * Text align variant
         */
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type StackProps = {
    children?: React__default.ReactNode;
} & ComponentProps$1<typeof Flex>;
/**
 * Stack component
 *
 * @description Stack component is used to display a group of elements in a vertical or horizontal direction.
 */
declare const Stack: ComponentWithAs<"div", StackProps>;

declare const VisuallyHidden: ({ children }: VisuallyHiddenProps) => JSX.Element;

declare const Wrapper$1: _stitches_react_types_styled_component.StyledComponent<"div", {
    size?: "sm" | "md" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type CountdownProps = {
    /**
     * Countdown size
     *
     * @default 'md'
     */
    size?: VariantProps<typeof Wrapper$1>['size'];
    /**
     * time in unix timestamp
     *
     * @example 1637680036
     */
    endDate: number;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * The time in milliseconds to count down from.
     *
     * @example HH:mm:ss
     */
    onFinish?: () => void;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Countdown component
 *
 * @description Used to display the remaining time
 */
declare const Countdown: ComponentWithAs<"div", CountdownProps>;

declare type DividerProps = {
    /**
     * Orientation of the divider.
     *
     * @default 'horizontal'
     */
    orientation?: VariantProps<typeof Divider>['orientation'];
};
/**
 * Divider component
 *
 * @description used to visually separate content in a list or group.
 *
 * @example
 * ```jsx
 * <Divider css={{
 *    $$color: '$colors$white',
 *    $$thickness: '3px',
 * }}
 * ```
 */
declare const Divider: _stitches_react_types_styled_component.StyledComponent<"hr", {
    orientation?: "horizontal" | "vertical" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type TooltipProps = {
    /**
     * The content of the tooltip
     */
    text?: string;
    /**
     * The position of the tooltip
     *
     * @default "right"
     */
    position?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * The trigger of the tooltip
     */
    children?: React__default.ReactNode;
    /** Radix Tooltip side offset
     * @default 5
     */
    sideOffset?: number;
    /** Radix Tooltip delay duration
     * @default 700
     */
    delayDuration?: number;
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Tooltip component
 *
 * @description informative message that appears when a user interacts with an element.
 *
 */
declare const Tooltip: ({ text, position, children, sideOffset, delayDuration, ...props }: TooltipProps) => JSX.Element;

declare type ModalProps = {
    /**
     * Control the visibility of the modal
     */
    open: boolean;
    /**
     * If `true`, the modal will close when the overlay is clicked
     *
     * @default false
     */
    closeOnOverlayClick?: boolean;
    /**
     * If `true`, the modal will close when ESC key is pressed
     *
     * @default true
     */
    closeOnEsc?: boolean;
    /**
     * Callback fired when the overlay is clicked
     *
     */
    onClickOverlay?: () => void;
    /**
     * Callback fired when the modal is closed
     *
     */
    onClose: () => void;
    /**
     * Callback fired when ESC key is pressed
     */
    onEscapeKeyDown?: () => void;
    /**
     * The content of the modal.
     */
    children: React__default.ReactNode;
};
/**
 * Modal component
 *
 * @description A modal is a window overlaid on either the primary window.
 *
 * Made with Radix, @see https://www.radix-ui.com/docs/primitives/components/dialog
 */
declare const Modal: ComponentWithAs<"div", ModalProps>;
declare type ModalTitleProps = {
    children: React__default.ReactNode;
    css?: CSS;
} & HTMLAttributes<HTMLHeadingElement>;
/**
 * An accessible name to be announced when the dialog is opened.
 */
declare const ModalTitle: ComponentWithAs<"h2", ModalTitleProps>;
declare type ModalDescriptionProps = {
    children: React__default.ReactNode;
    css?: CSS;
} & HTMLAttributes<HTMLParagraphElement>;
/**
 * An accessible description to be announced when the dialog is opened.
 */
declare const ModalDescription: ComponentWithAs<"p", ModalDescriptionProps>;

declare type DrawerProps = {
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Content of the drawer
     */
    children: React__default.ReactNode;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Drawer component
 *
 * @description its a sidebar that you can use to display content.
 *
 * @example
 * ```jsx
 * <Drawer css={{
 *    $$width: '360px',
 *    $$height: '100%',
 * }}
 * ```
 */
declare const Drawer: ComponentWithAs<"div", DrawerProps>;

declare type AccordionProps = {
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * List of accordion items
     */
    children?: React__default.ReactNode | React__default.ReactNode[];
} & Omit<AccordionPrimitive.AccordionMultipleProps, 'type'>;
/**
 * Accordion component
 *
 * @description Accordions display a list of high-level options that can expand/collapse to reveal more information.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/accordion
 */
declare const Accordion: ComponentWithAs<"div", AccordionProps>;
declare type AccordionItemProps = {
    /**
     * Title of the accordion item
     */
    title?: string;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Content of the accordion item
     */
    children?: React__default.ReactNode;
} & AccordionPrimitive.AccordionItemProps;
declare const AccordionItem: ComponentWithAs<"div", AccordionItemProps>;

declare type RateProps = {
    /**
     * Total number of selected stars
     */
    value: number;
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Rate component
 *
 * @description Ratings provide insight regarding others' opinions and experiences.
 */
declare const Rate: ComponentWithAs<"div", RateProps>;

/**
 * Row component
 *
 * @description utility for create flexbox grid.
 */
declare const Row: _stitches_react_types_styled_component.StyledComponent<_stitches_react_types_styled_component.StyledComponent<"div", {
    direction?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
    align?: "stretch" | "center" | "end" | "start" | "baseline" | undefined;
    justify?: "center" | "end" | "start" | "between" | "around" | undefined;
    wrap?: "wrap" | "noWrap" | "wrapReverse" | undefined;
    gap?: 0 | 16 | 8 | 10 | 12 | 14 | 20 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | 13 | 15 | 17 | 18 | 19 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>, {
    gutterX?: 0 | 16 | 8 | 10 | 12 | 14 | 20 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | 13 | 15 | 17 | 18 | 19 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | undefined;
    gutterY?: 0 | 16 | 8 | 10 | 12 | 14 | 20 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | 13 | 15 | 17 | 18 | 19 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

/**
 * Col component
 *
 * @description utility for create flexbox grid.
 */
declare const Col: _stitches_react_types_styled_component.StyledComponent<_stitches_react_types_styled_component.StyledComponent<"div", {
    direction?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
    align?: "stretch" | "center" | "end" | "start" | "baseline" | undefined;
    justify?: "center" | "end" | "start" | "between" | "around" | undefined;
    wrap?: "wrap" | "noWrap" | "wrapReverse" | undefined;
    gap?: 0 | 16 | 8 | 10 | 12 | 14 | 20 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | 13 | 15 | 17 | 18 | 19 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        }; /**
         * Order variants
         */
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>, {
    col?: 8 | 10 | 12 | 5 | 4 | 1 | "auto" | 2 | 3 | 6 | 7 | 9 | 11 | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | undefined;
    offset?: 8 | 10 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | undefined;
    order?: 8 | 10 | 12 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        }; /**
         * Order variants
         */
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare const Spacer: _stitches_react_types_styled_component.StyledComponent<_stitches_react_types_styled_component.StyledComponent<"div", {
    direction?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
    align?: "stretch" | "center" | "end" | "start" | "baseline" | undefined;
    justify?: "center" | "end" | "start" | "between" | "around" | undefined;
    wrap?: "wrap" | "noWrap" | "wrapReverse" | undefined;
    gap?: 0 | 16 | 8 | 10 | 12 | 14 | 20 | 5 | 4 | 1 | 2 | 3 | 6 | 7 | 9 | 11 | 13 | 15 | 17 | 18 | 19 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>, {}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type IconButtonProps = {
    /**
     * The icon to be used in the button.
     * @type React.ReactElement
     */
    icon?: React__default.ReactElement;
    /**
     * A11y: A label that describes the button
     */
    'aria-label': string;
} & Pick<ButtonProps, 'shape' | 'color' | 'variant' | 'css'>;
/**
 * IconButton component
 *
 * @description composes the `Button` component except that it renders only an icon.
 */
declare const IconButton: ComponentWithAs<"button", IconButtonProps>;

declare const Select$1: _stitches_react_types_styled_component.StyledComponent<"select", {
    size?: "default" | "small" | "tiny" | undefined;
    variant?: "outline" | "solid" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type SelectProps = {
    /**
     * Options to display on the select
     */
    options: {
        value: string;
        label: string;
    }[];
    /**
     * Style of the select
     *
     * @default 'outline'
     */
    variant?: VariantProps<typeof Select$1>['variant'];
    /**
     * Size of the select
     *
     * @default 'default'
     */
    size?: VariantProps<typeof Select$1>['size'];
    /**
     * Show label text
     */
    label?: string;
    /**
     * Show hint text
     */
    placeholder?: string;
    /**
     * Show hint text
     */
    hint?: string;
    /**
     * If `true` apply error style
     */
    error?: string | string[];
    /**
     * If `true` disable select
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * CSS properties
     */
    css?: CSS;
} & SelectHTMLAttributes<HTMLSelectElement>;
/**
 *  Select component
 *
 * @description used in mobile version
 */
declare const Select: ComponentWithAs<"select", SelectProps>;

declare const Wrapper: _stitches_react_types_styled_component.StyledComponent<"span", {
    variant?: "white" | "teal" | "green" | "pink" | "yellow" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type StatusProps = {
    /**
     * Status color
     * @default 'white'
     */
    variant?: VariantProps<typeof Wrapper>['variant'];
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLSpanElement>;
/**
 * Tag component
 *
 * @description used for items that need to be labeled, categorized, or organized using keywords that describe them.
 */
declare const Status: ComponentWithAs<"span", StatusProps>;

declare type ToastContainerProps = toastify.ToastContainerProps;
/**
 * ToastContainer
 *
 * @description Used to render the Toasts in your application.
 */
declare const ToastContainer: ComponentWithAs<"div", toastify.ToastContainerProps>;
declare type SharedProps = {
    title: string;
    message: string;
    closable?: boolean;
    variant?: 'minimal' | 'actions';
    buttons?: React__default.ReactNode | React__default.ReactNode[];
};
declare type ToastMethodProps = SharedProps & Omit<toastify.ToastOptions, 'icon' | 'theme' | 'closeButton' | 'hideProgressBar'>;
/**
 * Method to call the Toast Card
 */
declare const toast: (props: ToastMethodProps) => toastify.Id;

declare const Linear: _stitches_react_types_styled_component.StyledComponent<"div", {
    size?: "sm" | "md" | "lg" | undefined;
    color?: "green" | "pink" | "red" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;
declare const Shape: _stitches_react_types_styled_component.StyledComponent<"svg", {
    size?: "sm" | "md" | "lg" | undefined;
    color?: "green" | "pink" | "red" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;
declare const Circle: _stitches_react_types_styled_component.StyledComponent<"circle", {
    thickness?: "sm" | "md" | "lg" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
    motion: "(prefers-reduced-motion: reduce)";
    hover: "(any-hover: hover)";
    dark: "(prefers-color-scheme: dark)";
    light: "(prefers-color-scheme: light)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: unknown;
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (v: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (v: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (v: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "width";
        };
        maxHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    minSize: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "width";
        };
        minHeight: {
            readonly [$$PropertyValue]: "width";
        };
    };
    br: (v: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (v: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (v: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (v: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (v: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (v: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (v: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (v: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (v: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (v: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (v: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (v: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (v: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
    blur: (v: {
        readonly [$$ScaleValue]: "blurs";
    }) => {
        filter: string;
    };
    textGradient: (v: {
        readonly [$$PropertyValue]: "backgroundImage";
    }) => {
        backgroundImage: string;
        WebkitBackgroundClip: string;
        WebkitTextFillColor: string;
        '&::selection': {
            WebkitTextFillColor: string;
        };
    };
}>>;

declare type ProgressProps$1 = {
    /**
     * The value of the progress
     */
    value?: number;
    /**
     *  The maximum value
     *
     * @default `100`
     */
    max?: number;
    /**
     *  The minimun value
     *
     * @default `0`
     */
    min?: number;
    /**
     * The size variant
     *
     * @default `md`
     */
    size?: VariantProps<typeof Linear>['size'];
    /**
     * The color variant
     *
     * @default `pink`
     */
    color?: VariantProps<typeof Linear>['color'];
};
/**
 * Progress component
 *
 * @description is used to display the progress status for a task that takes a long time or consists of several steps.
 */
declare const Progress: ComponentWithAs<"div", ProgressProps$1>;

declare type ProgressProps = {
    /**
     * The value of the progress
     */
    value?: number;
    /**
     *  The maximum value
     *
     * @default `100`
     */
    max?: number;
    /**
     *  The minimun value
     *
     * @default `0`
     */
    min?: number;
    /**
     * The size variant
     *
     * @default `md`
     */
    size?: VariantProps<typeof Shape>['size'];
    /**
     * The size variant
     *
     * @default `md`
     */
    color?: VariantProps<typeof Shape>['color'];
    /**
     * The thickness variant
     *
     * @default `md`
     */
    thickness?: VariantProps<typeof Circle>['thickness'];
};
/**
 * Progress component
 *
 * @description is used to display the progress status for a task that takes a long time or consists of several steps.
 */
declare const CircularProgress: ComponentWithAs<"div", ProgressProps>;

declare type CenterProps = {
    children?: React__default.ReactNode;
} & ComponentProps$1<typeof Flex>;
/**
 * Center component
 *
 * @description Center is a layout component that centers its child within itself.
 */
declare const Center: ComponentWithAs<"div", CenterProps>;

declare type IconProps = {
    css?: CSS;
} & React__default.SVGAttributes<SVGElement>;

declare const InfoOutline: ComponentWithAs<"svg", IconProps>;

declare const InfoSolid: ComponentWithAs<"svg", IconProps>;

declare const CheckSolid: ComponentWithAs<"svg", IconProps>;

declare const CloseSolid: ComponentWithAs<"svg", IconProps>;

declare const FlagSolid: ComponentWithAs<"svg", IconProps>;

declare const Close: ComponentWithAs<"svg", IconProps>;

/**
 * React hook that tracks state of a CSS media query
 *
 * @param query the media query to match
 */
declare const useMediaQuery: (query: string) => boolean;

declare type useBreakpointProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
/**
 * React hook that tracks state of a CSS media query
 *
 * @param query 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 */
declare const useBreakpoint: (query?: useBreakpointProps) => boolean;

/**
 * Generate unique IDs for use as pseudo-private/protected names.
 *
 * @example
 * ```js
 *  const randomId = useId('prefix');
 * ```
 */
declare const useId: (prefix: string) => string;

declare const _SECOND = 1000;
declare const _MINUTE: number;
declare const _HOUR: number;
declare const _DAY: number;
/**
 * Countdown custom hook
 *
 * @description This hook is used to manage the countdown
 */
declare const useCountdown: (endDate: number) => {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    daysAsNumber: number | undefined;
    hoursAsNumber: number | undefined;
    minutesAsNumber: number | undefined;
    secondsAsNumber: number | undefined;
    secondsRemaining: number;
    isTimerDone: boolean;
};

declare type UseDisclosureProps = {
    defaultIsOpen?: boolean;
};
/**
 * Custom hook used to help handle common open, close, or toggle scenarios.
 *
 * @example
 * ```js
 * const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
 * ```
 */
declare const useDisclosure: (props?: UseDisclosureProps) => {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
};

declare type ReactRef<T> = React$1.Ref<T> | React$1.MutableRefObject<T>;
declare function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T): void;
/**
 * React hook that merges react refs into a single memoized function
 *
 * @example
 * import React from "react";
 * import { useMergeRefs } from `@pizza-juice/hooks`;
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useMergeRefs(internalRef, ref)} />;
 * });
 */
declare function useMergeRefs<T>(...refs: (ReactRef<T> | undefined)[]): ((node: T) => void) | null;

declare type Theme = typeof theme;
declare const theme: {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-850': string;
        'grey-900': string;
        'red-500': string;
        'red-550': string;
        'red-600': string;
        'red-650': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-550': string;
        'yellow-600': string;
        'yellow-700': string;
        'yellow-900': string;
        'green-500': string;
        'green-550': string;
        'green-600': string;
        'green-700': string;
        'green-900': string;
        common: string;
        uncommon: string;
        rare: string;
        'ultra-rare': string;
        legendary: string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: {};
    blurs: {
        sm: string;
        md: string;
        lg: string;
    };
};

export { Accordion, AccordionItem, AccordionProps, Alert, AlertProps, As, Avatar, AvatarProps, Badge, BadgeProps, Box, BoxProps, Button, ButtonProps, CSS, Center, CenterProps, Character, CharacterProps, CheckSolid, Checkbox, CheckboxProps, CircularProgress, Close, CloseSolid, Col, ComponentProps, ComponentWithAs, Container, ContainerProps, ContentHeading, ContentHeadingProps, Countdown, CountdownProps, Divider, DividerProps, Drawer, DrawerProps, FlagSolid, Flex, Grid, GridProps, IconButton, IconButtonProps, Image, ImageProps, InfoOutline, InfoSolid, Input, InputProps, Label, LabelProps, Logo, LogoProps, MergeWithAs, Modal, ModalDescription, ModalProps, ModalTitle, OmitCommonProps, PageHeading, PageHeadingProps, PageInfo, Pagination, PaginationProps, Progress, PropsOf, RadioGroup, RadioGroupProps, RadioItem, RadioItemProps, Rate, RateProps, RightJoinProps, Row, Select, SelectProps, Spacer, Spinner, SpinnerProps, Stack, StackProps, Status, StatusProps, Stepper, StepperProps, Tab, TabContent, TabContentProps, TabItem, TabItemProps, TabList, TabListProps, TabProps, Tag, TagProps, Text, TextProps, Textarea, TextareaProps, Theme, ToastContainer, ToastContainerProps, ToastMethodProps, Toggle, ToggleProps, Tooltip, TooltipProps, UseDisclosureProps, VariantProps, VisuallyHidden, _DAY, _HOUR, _MINUTE, _SECOND, assignRef, config, css, forwardRef, getCssText, globalCss, isUndefined, keyframes, pxToRem, styled, theme, toast, useBreakpoint, useCountdown, useDisclosure, useId, useMediaQuery, useMergeRefs, valueToPercent };
