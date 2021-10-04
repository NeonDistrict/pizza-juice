import styled, { css } from 'styled-components';

import { BreadcrumbProps, ItemProps } from '.';

type MainProps = Pick<BreadcrumbProps, 'size'>;

export const Main = styled.div<MainProps>`
  ${({ size }) => css`
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: flex;
    user-select: none;
    font-size: ${size === 'medium' ? '1rem' : '1.3rem'};
  `}
`;

type SectionProps = Pick<ItemProps, 'active'>;

export const Section = styled.div<SectionProps>`
  ${({ theme, active }) => css`
    color: ${theme.colors.grey['300']};

    ${active &&
    css`
      color: ${theme.colors.white};
      font-weight: 600;
    `}
  `}
`;

type DividerProps = Pick<ItemProps, 'active'>;

export const Divider = styled.div<DividerProps>`
  ${({ theme, active }) => css`
    color: ${theme.colors.grey['300']};
    margin: 0 0.8rem;

    ${active &&
    css`
      color: ${theme.colors.white};
    `}
  `}
`;
