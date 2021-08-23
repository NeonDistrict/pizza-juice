import styled, { css } from 'styled-components';
import { BreadcrumbProps, ItemProps } from './index';

export const Main = styled.div<Pick<BreadcrumbProps, 'size'>>`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  user-select: none;
  font-size: ${p => p.size === 'medium' ? '1rem' : '1.3rem'}
`;

export const Section = styled.div<Pick<ItemProps, 'active'>>`
  color: ${p => p.theme.mediumGray};
  ${p =>
    p.active &&
    css`
      color: ${p => p.theme.white};
      font-weight: 600;
    `}
`;

export const Divider = styled.div<Pick<ItemProps, 'active'>>`
  color: ${p => p.theme.mediumGray};
  ${p =>
    p.active &&
    css`
      color: ${p => p.theme.white};
    `}
  margin: 0 0.8rem;
`;
