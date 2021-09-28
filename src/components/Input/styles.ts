import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: white;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 5px;
  `}
`;

export const InputStyles = styled.input`
  ${({ theme }) => css`
    padding: 13px 16px;
    font-size: 16px;
  `}
`;

export const Message = styled.small`
  ${({ theme }) => css`
    display: block;
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkPink};
  `}
`;
