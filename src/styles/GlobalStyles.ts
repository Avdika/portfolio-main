import { createGlobalStyle } from 'styled-components';
import { Theme } from '../themes';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyle;
