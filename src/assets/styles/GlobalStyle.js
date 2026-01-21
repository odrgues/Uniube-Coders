import { createGlobalStyle } from "styled-components";
import Inter from "./fonts/Inter-VariableFont_opsz,wght.ttf";
import SpaceGrotesk from "./fonts/SpaceGrotesk-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${Inter}) format('truetype');
    font-weight: 100 900;
    font-display: swap;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url(${SpaceGrotesk}) format('truetype');
    font-weight: 300 700;
    font-display: swap;
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
    margin: 0;
    font-family: 'Inter', system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
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
