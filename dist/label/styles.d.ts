import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import * as _stitches_react_types_config from '@stitches/react/types/config';

declare const Label: _stitches_react_types_styled_component.StyledComponent<"div", {
    variant?: "success" | "warning" | "danger" | undefined;
    icon?: boolean | "true" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
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
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
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
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        }; /**
         * Icon variant
         */
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

export { Label };
