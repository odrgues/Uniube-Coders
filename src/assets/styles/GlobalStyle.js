import { createGlobalStyle } from "styled-components";
import SpaceGrotesk from "./fonts/SpaceGrotesk-VariableFont_wght.ttf";
import Sora from "./fonts/Sora-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Space Grotesk';
    src: url(${SpaceGrotesk}) format('truetype');
    font-weight: 100 900;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sora';
    src: url(${Sora}) format('truetype');
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
  
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    background: ${({ theme }) => theme.colors.background.main};
    color: ${({ theme }) => theme.colors.text.primary};

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
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
}
`;

export default GlobalStyle;
