import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
}

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
  }

  :root {
  --color-text-in-primary: #3c3c3c;
  font-size: 80%;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
