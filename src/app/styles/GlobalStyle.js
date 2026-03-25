import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
    color: ${({ theme }) => theme.colors.text.primary};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

h1, h2, h3, h4 {
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: -0.02em;
}



  p {
    margin: 0;
  }
`;
