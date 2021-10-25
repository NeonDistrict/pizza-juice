import { HTMLAttributes } from 'react';

import styled, { DefaultTheme } from '@district-ui/system';

export type TextProps = {
  size?: keyof DefaultTheme['fontSizes'];
} & HTMLAttributes<HTMLSpanElement>;

const variants = (theme: DefaultTheme) => ({
  size: {
    xs: {
      fontSize: theme.fontSizes.xs
    },
    sm: {
      fontSize: theme.fontSizes.sm
    },
    md: {
      fontSize: theme.fontSizes.md
    },
    lg: {
      fontSize: theme.fontSizes.lg
    },
    xl: {
      fontSize: theme.fontSizes.xl
    },
    '2xl': {
      fontSize: theme.fontSizes['2xl']
    },
    '3xl': {
      fontSize: theme.fontSizes['3xl']
    },
    '4xl': {
      fontSize: theme.fontSizes['4xl']
    }
  }
});

const Text = styled.span<TextProps>(({ theme, size }) => ({
  lineHeight: '1',
  margin: '0',
  fontWeight: theme.fontWeights.md,
  display: 'block',
  color: theme.colors.white,

  ...(size && variants(theme).size[size])
}));

export default Text;

/**
 * Variants
 */
// variants: {
//   size: {
//     '3xs': {
//       fontSize: '$3xs'
//     },
//     '2xs': {
//       fontSize: '$2xs'
//     },
//     xs: {
//       fontSize: '$xs'
//     },
//     sm: {
//       fontSize: '$sm'
//     },
//     md: {
//       fontSize: '$md'
//     },
//     lg: {
//       fontSize: '$lg'
//     }
//   }
// }
