import { FaCaretRight } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { ItemProps } from '../Breadcrumbs';

export const RightArrow = styled(FaCaretRight)<Pick<ItemProps, 'active'>>`
  color: ${p => p.active ? p.theme.white : p.theme.darkGrey};
`

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

export const StepsItemWrapper = styled.div<Pick<ItemProps, 'active'>>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.white};
  
  &:last-of-type {
    ${RightArrow} {
      display: none;
    }
  }
`;

export const StepsItem = styled.div<Pick<ItemProps, 'active'>>`
  ${p => p.active ? css`
    background: ${p => p.theme.white};
    color: ${p => p.theme.darkGrey2};
  ` : css`
    background: ${p => p.theme.darkGrey};
    color: ${p => p.theme.mediumGray};
  `}
  padding: 0.41rem;
  width: 100%;
`;