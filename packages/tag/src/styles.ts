import styled, { css, DefaultTheme } from '@nd-ui/system';

import Avatar from '@nd-ui/avatar';

import { IoClose } from 'react-icons/io5';

import { StyledTagProps } from '.';

const tagVariants = {
  // Need to add the size variant
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.grey1};
    border-color: transparent;
  `,
  removable: css`
    padding-right: 5px;
  `
};

const leftVariants = (theme: DefaultTheme) => ({
  image: css`
    padding-left: 0;
    gap: ${theme.spaces[1]};
  `,
  icon: css`
    padding-left: 10px;
    gap: 6px;
  `
});

export const TagStyles = styled.div<Partial<StyledTagProps>>`
  ${({ theme, active, removable, image, icon }) => css`
    padding: 0px ${theme.spaces[4]};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    gap: ${theme.spaces[1]};
    text-transform: uppercase;
    color: ${theme.colors.grey3};
    border: 1px solid ${theme.colors.grey3};
    border-radius: ${theme.radii.md};
    line-height: 150%;
    font-weight: ${theme.fontWeights.bold};

    svg {
      color: ${active ? theme.colors.grey3 : theme.colors.grey4};
    }

    ${active && tagVariants.active(theme)}
    ${removable && tagVariants.removable}
    ${image && leftVariants(theme)['image']}
    ${icon && leftVariants(theme)['icon']}
  `}
`;

export const RemoveWrapper = styled.div<Partial<StyledTagProps>>`
  ${({ theme, active }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.radii.full};
    cursor: pointer;
    background: ${active ? theme.colors.white : theme.colors.grey1};
  `}
`;

export const RemoveIcon = styled(IoClose).attrs(({ theme }) => ({
  size: 14,
  color: theme.colors.grey3
}))``;

export const RelativeAvatar = styled(Avatar)`
  position: relative;
  left: -1px;
`;
