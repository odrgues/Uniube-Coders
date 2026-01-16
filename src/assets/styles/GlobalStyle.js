import { createGlobalStyle } from "styled-components";
import KronaOne from "./fonts/KronaOne-Regular.ttf";
import Montserrat from "./fonts/Montserrat-Regular.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'KronaOne';
  src: local('KronaOne'), local('KronaOne'), url(${KronaOne});
}
@font-face {
  font-family: 'Montserrat';
  src: local('Montserrat'), local('Montserrat'), url(${Montserrat});
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
   
  }

  html, body {
    width: 100%;
    min-height: 100%;
     margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    body {
  overflow-y: scroll;
}

  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
  }
`;

export default GlobalStyle;
