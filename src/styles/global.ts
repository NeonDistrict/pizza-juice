import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700;900&display=swap');

  ${({ theme }) => css`
    body {
      font-family: ${theme.fonts.system};
      font-size: 16px;
    }
  `}
`;

export default GlobalStyles;
