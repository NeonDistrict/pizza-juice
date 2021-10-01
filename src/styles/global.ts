import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    body {
      font-family: ${theme.fonts.system};
      font-size: 16px;
    }
  `}
`;

export default GlobalStyles;
