import styled from '@neon-district/system';

export const Wrapper = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: theme.fontWeights.medium
}));

export const HeadingStyled = styled('div')(({ theme }) => ({
  fontSize: theme.fontSizes['2xl'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  marginBottom: theme.spaces[1]
}));

export const Title = styled('h1')<{ haveButton?: boolean }>(
  ({ theme, haveButton }) => ({
    width: theme.sizes.full,
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.medium,
    margin: 0,
    lineHeight: '24px',
    letterSpacing: '0.1em',

    [`@media (max-width: ${theme.breakpoints.md})`]: {
      ...(haveButton && { justifyContent: 'center' })
    }
  })
);

export const FlexEnd = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spaces[1],
  alignItems: 'center'
}));

export const Line = styled('div')<{
  haveButton?: boolean;
  haveDescription?: boolean;
}>(({ theme, haveButton, haveDescription }) => ({
  position: 'absolute',
  bottom: '-8px',
  width: '160px',
  height: 2,
  background: theme.colors.grey4,

  [`@media (max-width: ${theme.breakpoints.md})`]: {
    ...(haveButton && !haveDescription && { display: 'none' })
  }
}));

export const Description = styled('div')(({ theme }) => ({
  color: theme.colors.grey3,
  borderLeft: '2px solid',
  borderColor: theme.colors.grey4,
  paddingLeft: theme.spaces[2],
  marginTop: theme.spaces[2],

  [`@media (max-width: theme.breakpoints.md)`]: {
    border: 'none'
  }
}));

export const FullLine = styled('hr')<{
  haveButton?: boolean;
  haveDescription?: boolean;
}>(({ theme, haveButton, haveDescription }) => ({
  borderWidth: '0px 0px 1px',
  borderColor: theme.colors.grey4,
  borderStyle: 'solid',
  width: '100%',
  margin: 0,

  [`@media (max-width: ${theme.breakpoints.md})`]: {
    ...(haveButton && !haveDescription && { border: 'none' })
  }
}));

export const Bottom = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spaces[4]
}));
