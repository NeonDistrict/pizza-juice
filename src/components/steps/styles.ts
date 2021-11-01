import styled, { css } from 'styled-components';

import { StepItemProps } from '.';

export const Main = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  text-transform: uppercase;
  width: 100%;
  font-weight: 600;
  letter-spacing: 0.8px;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

type StepsItemWrapperProps = Pick<StepItemProps, 'active'>;

export const StepsItemWrapper = styled.div<StepsItemWrapperProps>`
  ${({ theme, active }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.white};
    color: ${active ? theme.colors.white : theme.colors.grey4};

    &:last-of-type {
      svg {
        display: none;
      }
    }
  `}
`;

export const StepsItem = styled.div<Pick<StepItemProps, 'active'>>`
  ${({ theme, active }) => css`
    padding: 0.41rem;
    width: 100%;

    ${active
      ? css`
          background: ${theme.colors.white};
          color: ${theme.colors.grey5};
        `
      : css`
          background: ${theme.colors.grey4};
          color: ${theme.colors.grey3};
        `}
  `}
`;
