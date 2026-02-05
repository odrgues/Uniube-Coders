const palette = {
  white: "#ffffff",
  black: "#030712",

  gray: {
    100: "#f8fafc",
    200: "#e5e7eb",
    400: "#94a3b8",
    700: "#475569",
    900: "#0f172a",
  },

  blue: {
    dark: "#050E3C",
    primary: "#2563eb",
    light: "rgba(161, 188, 247, 0.1)",
  },

  red: "#FF3838",
  pink: "#ec4899",
  yellow: "#facc15",
};

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

const media = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.xl})`,
  xl: `(min-width: ${breakpoints.xl})`,
};

const theme = {
  colors: {
    background: {
      main: "#f5f7f8",
      surface: palette.white,
      muted: palette.blue.dark,
      overlay: "rgba(0, 0, 0, 0.6)",
    },

    text: {
      primary: palette.black,
      secondary: palette.gray[700],
      muted: palette.gray[400],
      inverse: palette.white,
    },

    brand: {
      primary: palette.blue.primary,
      accent: palette.pink,
      action: palette.red,
      highlight: palette.yellow,
    },

    border: palette.gray[200],
  },

  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Sora', sans-serif",
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem", // 16px

    // NAVEGAÇÃO: Cresce de 16px para 18px
    nav: "clamp(1rem, 0.5vw + 0.9rem, 1.125rem)",
    mobileNav: "clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem)",
    // TÍTULOS: Crescem muito mais
    lg: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
    xl: "clamp(1.5rem, 1.5vw + 1rem, 2rem)", // h3
    xxl: "clamp(2rem, 2vw + 1.5rem, 3rem)", // h2
    hero: "clamp(2.5rem, 5vw + 1rem, 4.5rem)", // h1 Gigante
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  spacing: {
    // Escala de 4px
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",

    // Espaçamentos Estruturais Fluidos
    section: "clamp(60px, 10vh, 120px)", // Padding entre seções
    container: "clamp(16px, 5vw, 80px)", // Padding lateral do site
  },

  radius: {
    sm: "6px",
    md: "12px",
    lg: "50px",
    full: "9999px",
  },

  shadows: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.04)",
    md: "0 8px 24px rgba(0, 0, 0, 0.08)",
    lg: "0 16px 48px rgba(37, 99, 235, 0.15)", // Sombra azulada (glow effect)
  },

  zIndex: {
    base: 1,
    navbar: 100,
    overlay: 900, // Abaixo do menu mobile
    mobileMenu: 999,
    modal: 1000,
    toast: 2000,
  },

  transitions: {
    fast: "0.15s ease",
    normal: "0.3s cubic-bezier(0.4, 0, 0.2, 1)", // Curva mais "viva"
    slow: "0.5s ease",
  },

  breakpoints,
  media,

  layout: {
    navbar: {
      height: "88px",
    },
    container: {
      width: "min(100% - 32px, 1280px)",
    },
  },
};

export default theme;
