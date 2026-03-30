import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    scroll-padding-top: ${({ theme }) => theme.layout.navbar.height};
    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body,
  #root {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.bg.page};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    text-rendering: optimizeLegibility;
    overflow-x: clip;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    isolation: isolate;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.brand.secondary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  img {
    height: auto;
  }

  iframe {
    border: 0;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button,
  [role="button"] {
    cursor: pointer;
  }

  button:disabled,
  input:disabled,
  textarea:disabled,
  select:disabled {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  dl,
  blockquote,
  figure {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  p,
  li {
    overflow-wrap: break-word;
  }

  section[id],
  article[id],
  [data-scroll-target="true"] {
    scroll-margin-top: calc(${({ theme }) => theme.layout.navbar.height} + 16px);
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 3px;
    border-radius: 6px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    html {
      scroll-padding-top: ${({ theme }) => theme.layout.navbar.heightMobile};
    }

    section[id],
    article[id],
    [data-scroll-target="true"] {
      scroll-margin-top: calc(${({ theme }) => theme.layout.navbar.heightMobile} + 12px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
