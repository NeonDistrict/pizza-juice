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
  lineHeight: 1,
  margin: 0,
  color: '$white',

  variants: {
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
  },

  defaultVariants: {
    size: 'md',
    weight: 'normal',
  },
});
