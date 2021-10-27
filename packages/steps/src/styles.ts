import styled, { css } from '@neon-district/system';

import { FaCaretRight } from 'react-icons/fa';

import { ItemProps } from '.';

type RightArrow = Pick<ItemProps, 'active'>;

export const RightArrow = styled(FaCaretRight)<RightArrow>`
  ${({ theme, active }) => css`
    color: ${active ? theme.colors.white : theme.colors.grey4};
  `}
`;

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

type StepsItemWrapperProps = Pick<ItemProps, 'active'>;

export const StepsItemWrapper = styled.div<StepsItemWrapperProps>`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.white};

    &:last-of-type {
      ${RightArrow} {
        display: none;
      }
    }
  `}
`;

type StepsItemProps = Pick<ItemProps, 'active'>;

export const StepsItem = styled.div<StepsItemProps>`
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
