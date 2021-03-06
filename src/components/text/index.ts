import { VariantProps, styled } from '../../system';

export type TextProps = {
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
export const Text = styled('span', {
  // variables
  $$lineColor: '$colors$white',
  $$lineSpacing: '$space$4',

  d: 'block',
  m: 0,
  color: 'currentColor',
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
      false: {
        pl: 0,
        borderLeft: 'none',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md',
    weight: 'normal',
  },
});
