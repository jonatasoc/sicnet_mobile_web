import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
}

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  :root {
    --text: #3c3c3c;
    --blue: #004d6b;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media(min-width: 700px) {
    #root {
      overflow: hidden;
    }
  }

`;

export default GlobalStyle;
