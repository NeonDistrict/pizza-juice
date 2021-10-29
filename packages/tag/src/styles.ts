import styled, { DefaultTheme } from '@neon-district/system';

import { Avatar } from '@neon-district/avatar';

import { StyledTagProps } from '.';

const variants = (theme: DefaultTheme) => ({
  active: {
    color: theme.colors.white,
    background: theme.colors.grey1,
    borderColor: 'transparent'
  },
  removable: {
    paddingRight: theme.spaces[1]
  },
  image: {
    paddingLeft: 0,
    gap: theme.spaces[1]
  },
  icon: {
    paddingLeft: theme.spaces[2],
    gap: theme.spaces[1]
  }
});

export const TagStyles = styled('div')<Partial<StyledTagProps>>(
  ({ theme, active, removable, image, icon }) => ({
    padding: `0px ${theme.spaces[4]}`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    gap: theme.spaces[1],
    textTransform: 'uppercase',
    color: theme.colors.grey3,
    border: `1px solid ${theme.colors.grey3}`,
    borderRadius: theme.radii.md,
    lineHeight: '150%',
    fontWeight: theme.fontWeights.bold,

    svg: {
      color: active ? theme.colors.grey3 : theme.colors.grey4
    },

    ...(active && variants(theme).active),
    ...(removable && variants(theme).removable),
    ...(image && variants(theme)['image']),
    ...(icon && variants(theme)['icon'])
  })
);

export const RemoveWrapper = styled('div')<Partial<StyledTagProps>>(
  ({ theme, active }) => ({
    color: theme.colors.black,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radii.full,
    cursor: 'pointer',
    background: active ? theme.colors.white : theme.colors.grey1
  })
);

export const RelativeAvatar = styled(Avatar)({
  position: 'relative',
  left: -1
});
