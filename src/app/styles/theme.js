const palette = {
  white: "#ffffff",
  black: "#030712",

  gray: {
    100: "#f8fafc",
    200: "#e5e7eb",
    400: "#94a3b8",
    700: "#334155",
    900: "#0f172a",
  },

  blue: {
    dark: "#081120",
    deep: "#0B1B34",
    primary: "#2563eb",
    bright: "#38bdf8",
    soft: "rgba(56, 189, 248, 0.12)",
  },

  cyan: "#22d3ee",
  purple: "#7c3aed",
  yellow: "#f59e0b",
};

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const media = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
};

const theme = {
  palette,

  colors: {
    background: {
      main: "#f8fbff",
      surface: "#ffffff",
      muted: palette.blue.dark,
      heroOverlay:
        "linear-gradient(135deg, rgba(8, 17, 32, 0.78), rgba(11, 27, 52, 0.64))",
      overlay: "rgba(0, 0, 0, 0.45)",
    },

    text: {
      primary: palette.blue.dark,
      secondary: "#334155",
      muted: palette.gray[400],
      inverse: palette.white,
    },

    brand: {
      primary: palette.blue.primary,
      secondary: palette.cyan,
      tertiary: palette.purple,
      highlight: palette.yellow,
      accent: "#0ea5e9",
    },

    navbar: {
      transparent: "transparent",
      scrolled: "rgba(8, 17, 32, 0.82)",
      mobile: "rgba(8, 17, 32, 0.96)",
      border: "rgba(255, 255, 255, 0.08)",
    },

    card: {
      background: "rgba(255, 255, 255, 0.84)",
      border: "rgba(37, 99, 235, 0.10)",
    },
  },

  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Sora', sans-serif",
  },

  fontSizes: {
    xs: "clamp(0.75rem, 0.72rem + 0.2vw, 0.875rem)",
    sm: "clamp(0.875rem, 0.82rem + 0.3vw, 1rem)",
    md: "clamp(1rem, 0.95rem + 0.45vw, 1.125rem)",
    lg: "clamp(1.125rem, 1rem + 0.7vw, 1.5rem)",
    xl: "clamp(1.5rem, 1.15rem + 1.6vw, 2.25rem)",
    xxl: "clamp(2rem, 1.45rem + 2.4vw, 3.5rem)",
    hero: "clamp(2.4rem, 1.6rem + 4vw, 5rem)",
    nav: "clamp(0.82rem, 0.75rem + 0.25vw, 0.95rem)",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.1,
    normal: 1.5,
    relaxed: 1.7,
  },

  spacing: {
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    section: "clamp(64px, 10vh, 120px)",
    container: "clamp(16px, 5vw, 80px)",
  },

  radius: {
    sm: "8px",
    md: "18px",
    lg: "28px",
    full: "9999px",
  },

  shadows: {
    sm: "0 6px 16px rgba(15, 23, 42, 0.08)",
    md: "0 16px 40px rgba(15, 23, 42, 0.12)",
    lg: "0 24px 60px rgba(37, 99, 235, 0.16)",
    glow: "0 0 40px rgba(34, 211, 238, 0.18)",
  },

  zIndex: {
    base: 1,
    navbar: 100,
    overlay: 900,
    mobileMenu: 999,
    modal: 1000,
  },

  transitions: {
    fast: "0.2s ease",
    normal: "0.3s ease",
    slow: "0.5s ease",
  },

  breakpoints,
  media,

  layout: {
    navbar: {
      height: "80px",
    },
    container: {
      width: "min(100% - 32px, 1200px)",
    },
  },
};

export default theme;
