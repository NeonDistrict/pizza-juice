import styled, { css } from 'styled-components';

interface TabProp {
  label: string;
  activeTab: string;
}

export const StyledTab = styled.div<TabProp>`
  border-bottom: 1px solid ${p => p.theme.white};
  ${p =>
    p.label === p.activeTab &&
    css`
      border: 1px solid ${p => p.theme.white};
      border-bottom: 1px solid ${p => p.theme.black};
    `}
`;
export const TabClick = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4375rem 2.75rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1<TabProp>`
  color: ${p => p.theme.mediumGray};
  ${p =>
    p.label === p.activeTab &&
    css`
      color: ${p => p.theme.white};
    `}
  font-weight: 700;
  letter-spacing: 0.09375rem;
  text-transform: uppercase;
  margin: 0;
`;

export const StyledPanel = styled.div``;
