import styled from 'styled-components';

import { ContentHeadingProps } from '.';

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spaces[2]
}));

export const Title = styled('h3')(({ theme }) => ({
  display: 'inline-flex',
  gap: theme.spaces[2],
  alignItems: 'center',
  fontFamily: 'Titillium Web',
  fontWeight: theme.fontWeights.medium,
  fontSize: theme.fontSizes.lg,
  lineHeight: '24px',
  margin: 0,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: theme.colors.white,

  [`@media (max-width: ${theme.breakpoints.md})`]: {
    fontSize: theme.fontSizes.md,
    lineHeight: '20px',
    letterSpacing: '0.1em'
  },
  svg: {
    color: theme.colors.white,
    fontSize: '19px',

    [`@media (max-width: ${theme.breakpoints.md})`]: {
      fontSize: '13px'
    }
  }
}));

export const Description = styled('p')<ContentHeadingProps>(
  ({ theme, line }) => ({
    fontFamily: 'Titillium Web',
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.medium,
    lineHeight: '24px',
    color: theme.colors.grey3,
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    margin: 0,

    ...(line && {
      borderLeft: `2px solid ${theme.colors.white}`,
      paddingLeft: '1rem'
    }),

    [`@media (max-width: ${theme.breakpoints.md})`]: {
      fontSize: theme.fontSizes.sm,
      lineHeight: '20px',
      fontWeight: theme.fontWeights.normal,
      letterSpacing: 0
    }
  })
);
