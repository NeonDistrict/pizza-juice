import styled, { css } from 'styled-components';

import { BreadcrumbProps, ItemProps } from '.';

type MainProps = BreadcrumbProps;

export const Main = styled.div<MainProps>`
  ${({ theme }) => css`
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    user-select: none;
    font-size: ${theme.fontSizes.sm};
    line-height: 24px;
    letter-spacing: 0.05em;
  `}
`;

type SectionProps = Pick<ItemProps, 'active'>;

export const Section = styled.div<SectionProps>`
  ${({ theme, active }) => css`
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spaces[1]};

    ${active &&
    css`
      color: ${theme.colors.pink['100']};
      font-weight: 600;
    `}
  `}
`;

type DividerProps = Pick<ItemProps, 'active'>;

export const Divider = styled.div<DividerProps>`
  ${({ theme }) => css`
    padding: 0 0.5rem;
    height: 100%;
    color: ${theme.colors.white};
  `}
`;
