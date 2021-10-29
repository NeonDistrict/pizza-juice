import styled from '@neon-district/system';

import { CharacterProps } from '.';

const wrapperVariants = {
  size: {
    md: {
      width: 80,
      height: 80
    },
    xl: {
      width: 160,
      height: 160
    }
  }
};

type WrapperProps = {
  size: 'md' | 'xl';
} & Pick<CharacterProps, 'active'>;

export const Wrapper = styled('div')<WrapperProps>(
  ({ theme, active, size }) => ({
    position: 'relative',

    // variant styles
    ...wrapperVariants.size[size],

    // conditional styles
    ...(active && { border: `1px solid ${theme.colors.pink1}` })
  })
);

export const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

export const Top = styled('div')<{ size: 'md' | 'xl' }>(({ size }) => ({
  padding: size === 'xl' ? '12px' : '4px',
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column'
}));

export const Bottom = styled('div')<{ size: 'md' | 'xl' }>(({ size }) => ({
  padding: size === 'xl' ? '12px' : '4px',
  paddingTop: 0,
  display: 'flex',
  justifyContent: 'flex-end'
}));

export const Typename = styled('div')<{ empty: boolean; size: 'md' | 'xl' }>(
  ({ theme, size, empty }) => ({
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.medium,
    color: empty ? theme.colors.white : theme.colors.pink1,
    lineHeight: '24px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',

    ...(size === 'md' && {
      fontSize: theme.fontSizes.sm,
      lineHeight: '20px'
    })
  })
);

export const Info = styled('span')(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.white,
  lineHeight: '24px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase'
}));

export const Index = styled('div')<{ size: 'md' | 'xl' }>(
  ({ theme, size }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    background: theme.colors.pink1,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.md,
    lineHeight: 24,

    ...(size === 'md' && {
      fontSize: theme.fontSizes.sm,
      lineHeight: 20,
      width: 20,
      height: 20
    })
  })
);
