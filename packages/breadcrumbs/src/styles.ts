import styled, { css } from '@district-ui/system';

import { BreadcrumbProps, ItemProps } from '.';

type MainProps = BreadcrumbProps;

export const Main = styled.div<MainProps>`
  display: flex;
  align-items: center;

  user-select: none;
`;

type SectionProps = Pick<ItemProps, 'active'>;

export const Section = styled.div<SectionProps>`
  ${({ theme, active }) => css`
    color: ${active ? theme.colors.pink1 : theme.colors.grey1};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    gap: ${theme.spaces[1]};
    ${active &&
    css`
      color: ${theme.colors.pink1};
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

export const Text = styled.h1<Pick<ItemProps, 'active'>>`
  ${({ theme, active }) => css`
    margin: 0;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.sm};
    line-height: 24px;
    letter-spacing: 0.05em;
    font-weight: 600;
    text-transform: uppercase;

    ${active &&
    css`
      color: ${theme.colors.pink1};
      font-weight: 600;
    `}
  `}
`;
