import { VariantProps, styled } from '../../system';

export type TextProps = {
  /**
   * fontSize of the text
   */
  size?: VariantProps<typeof Text>['size'];
  /**
   * fontWeight of the text
   */
  weight?: VariantProps<typeof Text>['weight'];
  /**
   * Show left line through text
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
export const Text = styled('p', {
  // variables
  $$lineColor: '$colors$white',
  $$lineSpacing: '$space$4',

  lineHeight: 1,

  variants: {
    /**
     * Size variant
     */
    size: {
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
      },
      '4xl': {
        fontSize: '$4xl',
      },
    },
    /**
     * Weight variant
     */
    weight: {
      thin: {
        fontWeight: '$thin',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
      extrabold: {
        fontWeight: '$extrabold',
      },
    },
    /**
     * Text align variant
     */
    textAlign: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
    /**
     * Text transform variant
     */
    transform: {
      normal: {
        textTransform: 'none',
      },
      uppercase: {
        textTransform: 'uppercase',
      },
      lowercase: {
        textTransform: 'lowercase',
      },
    },
    leftLine: {
      true: {
        pl: '$$lineSpacing',
        borderLeft: '2px solid $$lineColor',
      },
    },
  },
});
