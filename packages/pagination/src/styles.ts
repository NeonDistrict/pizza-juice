import styled, { DefaultTheme } from '@neon-district/system';

export const PaginationContainer = styled('div')(({ theme }) => ({
  border: `1px dashed ${theme.colors.pink1}`,
  borderRadius: theme.radii.sm,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spaces[2],
  padding: `${theme.spaces[4]} ${theme.spaces[6]}`
}));

interface NumberProp {
  active?: boolean;
}

export const NumberContainer = styled('div')<NumberProp>(
  ({ theme, active }) => ({
    display: 'flex',
    padding: `${theme.spaces[2]} ${theme.spaces[4]}`,
    color: active ? theme.colors.pink1 : theme.colors.white,

    '&:hover': {
      color: theme.colors.pink2,
      cursor: 'pointer'
    }
  })
);

export const Number = styled('div')(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
  fontWeight: theme.fontWeights.medium
}));

export const MobileContainer = styled('div')(({ theme }) => ({
  color: theme.colors.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spaces[6]
}));

const iconVariant = (theme: DefaultTheme, canGo?: boolean) => ({
  color: canGo ? theme.colors.pink1 : theme.colors.grey4,
  cursor: canGo ? 'pointer' : 'default'
});

const iconStyle = (theme: DefaultTheme) => ({
  fontSize: theme.fontSizes.lg,
  color: theme.colors.pink1,
  cursor: 'pointer'
});

type IconProp = {
  canGo?: boolean;
};

const resetButton = {
  background: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
};

export const ArrowLeft = styled('button')<IconProp>(({ theme, canGo }) => ({
  ...resetButton,

  svg: {
    ...iconStyle(theme),
    ...iconVariant(theme, canGo)
  }
}));

export const ArrowRight = styled('button')<IconProp>(({ theme, canGo }) => ({
  ...resetButton,

  svg: {
    ...iconStyle(theme),
    ...iconVariant(theme, canGo)
  }
}));

export const FirstPageArrow = styled('button')<IconProp>(({ theme }) => ({
  ...resetButton,

  svg: {
    ...iconStyle(theme)
  }
}));

export const LastPageArrow = styled('button')<IconProp>(({ theme }) => ({
  ...resetButton,

  svg: {
    ...iconStyle(theme)
  }
}));
