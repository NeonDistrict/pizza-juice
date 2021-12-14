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
};

export const Text = styled('span', {
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
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md',
    weight: 'normal',
  },
});
