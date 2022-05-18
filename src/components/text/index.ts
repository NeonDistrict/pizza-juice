import { getVariant } from '../../..';
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
   * Modify the hue/color of the text
   *
   * @default "currentColor"
   */
  hue?: VariantProps<typeof Text>['hue'];
  /**
   * Show left line through text
   *
   * @default "false"
   */
  leftLine?: VariantProps<typeof Text>['leftLine'];
  /**
   * Modify the left line hue/color of the text
   *
   * @default "currentColor"
   */
  lineHue?: VariantProps<typeof Text>['lineHue'];
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
  lineHeight: 1,

  variants: {
    hue: {
      inherit: {
        color: 'currentColor',
      },
      ...getVariant('colors', (tokenValue) => ({
        color: `$${tokenValue}`,
      })),
    },
    lineHue: {
      ...getVariant('colors', (tokenValue) => ({
        $$lineColor: `$colors$${tokenValue}`,
      })),
    },
    /**
     * Size variant
     */
    size: {
      ...getVariant('fontSizes', (tokenValue) => ({
        fontSize: `$${tokenValue}`,
      })),
    },
    /**
     * Weight variant
     */
    weight: {
      ...getVariant('fontWeights', (tokenValue) => ({
        fontWeight: `$${tokenValue}`,
      })),
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
    lineHue: 'white',
  },
});
