import styled, { DefaultTheme } from '@neon-district/system';

import { LabelProps } from '.';

const variants = (theme: DefaultTheme) => ({
  variant: {
    success: {
      color: theme.colors.white,
      background: theme.colors.green1
    },
    warning: {
      color: theme.colors.grey5,
      background: theme.colors.yellow1
    },
    danger: {
      color: theme.colors.white,
      background: theme.colors.red1
    }
  }
});

export const LabelStyles = styled('div')<Pick<LabelProps, 'variant' | 'icon'>>(
  ({ theme, icon, variant }) => ({
    padding: `${theme.spaces[1]} ${theme.spaces[2]}`,
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spaces[2],

    // conditional styles
    ...(icon && { paddingLeft: '10px' }),

    // variant styles
    ...(variant && variants(theme).variant[variant])
  })
);

export const Text = styled('label')(({ theme }) => ({
  userSelect: 'none',
  textTransform: 'uppercase',
  lineHeight: '150%',
  fontSize: theme.fontSizes.sm
}));
