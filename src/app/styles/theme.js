const palette = {
  white: "#FFFFFF",
  black: "#0F172A",

  gray: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    700: "#334155",
    900: "#0F172A",
  },

  blue: {
    deep: "#1e3a8a",
    primary: "#334155",
    soft: "#E2E8F0",
    glow: "rgba(51, 65, 85, 0.12)",
  },

  cyan: {
    primary: "#06B6D4",
    soft: "rgba(6, 182, 212, 0.10)",
    glow: "rgba(6, 182, 212, 0.16)",
  },
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
      main: "#F8FAFC",
      surface: "#FFFFFF",
      muted: "#F1F5F9",
      soft: "#E2E8F0",
      dark: "#0F172A",
      overlay: "rgba(15, 23, 42, 0.12)",
    },

    text: {
      primary: "#2C2C2C",
      secondary: "#334155",
      muted: "#64748B",
      inverse: "#FFFFFF",
    },

    brand: {
      primary: "#334155",
      secondary: "#2845D6",
      tertiary: "#94A3B8",
      highlight: "#06B6D4",
      accent: "#334155",
    },

    navbar: {
      transparent: "rgba(248, 250, 252, 0.72)",
      scrolled: "rgba(255, 255, 255, 0.90)",
      mobile: "rgba(255, 255, 255, 0.96)",
      border: "rgba(51, 65, 85, 0.08)",
    },

    card: {
      background: "#F7F0F0",
      border: "rgba(148, 163, 184, 0.16)",
    },

    button: {
      primaryText: "#FFFFFF",
      secondaryText: "#0F172A",
    },
  },

  fonts: {
    heading:
      "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  fontSizes: {
    xs: "clamp(0.75rem, 0.72rem + 0.2vw, 0.875rem)",
    sm: "clamp(0.875rem, 0.82rem + 0.3vw, 1rem)",
    md: "clamp(1rem, 0.95rem + 0.45vw, 1.125rem)",
    lg: "clamp(1.125rem, 1rem + 0.7vw, 1.5rem)",
    xl: "clamp(1.5rem, 1.15rem + 1.6vw, 2.25rem)",
    xxl: "clamp(2rem, 1.45rem + 2.4vw, 3.5rem)",
    hero: "clamp(2.5rem, 1.7rem + 4vw, 5rem)",
    nav: "clamp(0.82rem, 0.75rem + 0.25vw, 0.95rem)",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeights: {
    tight: 1.08,
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
    container: "clamp(14px, 5vw, 50px)",
  },

  radius: {
    sm: "8px",
    md: "18px",
    lg: "28px",
    full: "9999px",
  },

  shadows: {
    sm: "0 8px 24px rgba(15, 23, 42, 0.05)",
    md: "0 18px 40px rgba(15, 23, 42, 0.08)",
    lg: "0 24px 60px rgba(15, 23, 42, 0.10)",
    glow: "0 0 28px rgba(6, 182, 212, 0.10)",
    softGlow: "0 0 24px rgba(51, 65, 85, 0.08)",
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
