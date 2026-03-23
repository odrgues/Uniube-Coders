import { createGlobalStyle } from "styled-components";
import SpaceGrotesk from "../../assets/styles/fonts/SpaceGrotesk-VariableFont_wght.ttf";
import Sora from "../../assets/styles/fonts/Sora-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
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

  html, body, #root {
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
    background:
      radial-gradient(circle at top left, rgba(37, 99, 235, 0.08), transparent 24%),
      radial-gradient(circle at top right, rgba(34, 211, 238, 0.08), transparent 22%),
      #f8fbff;
    color: ${({ theme }) => theme.colors.text.primary};
    overflow-x: hidden;
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
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  p {
    margin: 0;
  }
`;
