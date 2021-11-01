import styled, { DefaultTheme } from 'styled-components';

import { BadgeProps } from '.';

const variants = (theme: DefaultTheme) => ({
  type: {}
});

export const BadgeStyled = styled('label')<BadgeProps>(({ theme, type }) => ({
  display: 'inline-block',
  height: 16,
  padding: `0 ${theme.spaces[1]}`,
  color: theme.colors.white,
  background: theme.colors.pink1,
  fontSize: theme.fontSizes.xs,
  fontWeight: theme.fontWeights.bold,
  textTransform: 'uppercase',
  lineHeight: '150%',
  userSelect: 'none',

  // variant styles
  ...(type && variants(theme).type[type!])
}));
