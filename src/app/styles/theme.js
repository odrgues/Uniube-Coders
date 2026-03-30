const palette = {
  white: "#FFFFFF",
  black: "#0A1020",

  gray: {
    50: "#F8FAFC",
    100: "#EEF2FF",
    200: "#D9E4FF",
    300: "#B8C7E6",
    400: "#8A98B8",
    500: "#5F6C87",
    700: "#28344A",
    900: "#111827",
  },

  blue: {
    deep: "#072B7A",
    primary: "#093FB4",
    secondary: "#2563EB",
    electric: "#3B82F6",
    soft: "#EAF1FF",
    surface: "#F5F8FF",
    light: "#9ED8F3",
    glow: "rgba(37, 99, 235, 0.18)",
  },

  cyan: {
    primary: "#22D3EE",
    soft: "rgba(34, 211, 238, 0.12)",
    glow: "rgba(34, 211, 238, 0.22)",
  },

  yellow: {
    primary: "#FACC15",
    soft: "#FFE68A",
    glow: "rgba(250, 204, 21, 0.20)",
  },

  purple: {
    deep: "#27005D",
  },
};

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1180px",
  xxl: "1440px",
};

const media = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  xxl: `(min-width: ${breakpoints.xxl})`,
};

const theme = {
  palette,

  colors: {
    background: {
      main: "#F4F7FF",
      surface: "#FFFFFF",
      muted: "#EEF4FF",
      soft: "#E6EEFF",
      dark: "#0B1220",
      overlay: "rgba(11, 18, 32, 0.12)",
    },

    text: {
      titleBanner: "#F8FAFC",
      titleCTA: "#ff758f",
      subtitle: "#E9ECEF",
      eyebrow: "#521C0D",
      titleSection: "#3c096c",
      cardTitle: "#162033",
      primary: "#162033",
      secondary: "#42506A",
      muted: "#A9D6E5",
      inverse: "#FFFFFF",
    },

    brand: {
      banner: "#2196f3",
      eyebrow: "#FFE68A",
      primary: "#093FB4",
      secondary: "#245DFF",
      tertiary: "#7AAEDC",
      highlight: "#00CFE8",
      accent: "#FACC15",
    },

    navbar: {
      transparent: "rgba(255, 255, 255, 0.08)",
      scrolled: "rgba(255, 255, 255, 0.88)",
      mobile: "rgba(255, 255, 255, 0.96)",
      border: "rgba(9, 63, 180, 0.08)",
    },

    card: {
      background: "#FFFFFF",
      border: "rgba(22, 32, 51, 0.08)",
      highlight: "rgba(9, 63, 180, 0.08)",
    },

    button: {
      primaryText: "#FFFFFF",
      secondaryText: "#162033",
    },

    state: {
      info: "#093FB4",
      success: "#0F9D58",
      warning: "#FACC15",
      danger: "#DC2626",
    },
  },

  fonts: {
    heading:
      "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  fontSizes: {
    xs: "clamp(0.75rem, 0.72rem + 0.2vw, 0.875rem)",
    sm: "clamp(0.875rem, 0.82rem + 0.22vw, 1rem)",
    md: "clamp(1rem, 0.95rem + 0.28vw, 1.125rem)",
    lg: "clamp(1.125rem, 1rem + 0.45vw, 1.5rem)",
    xl: "clamp(1.5rem, 1.15rem + 1.1vw, 2.25rem)",
    xxl: "clamp(2rem, 1.45rem + 1.8vw, 3.5rem)",
    hero: "clamp(2.3rem, 1.4rem + 2.9vw, 4.5rem)",
    nav: "clamp(0.82rem, 0.75rem + 0.2vw, 0.95rem)",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeights: {
    tight: 1.05,
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
    section: "clamp(56px, 8vh, 104px)",
    container: "clamp(16px, 3vw, 40px)",
  },

  radius: {
    sm: "8px",
    md: "18px",
    lg: "28px",
    full: "9999px",
  },

  shadows: {
    sm: "0 10px 24px rgba(15, 23, 42, 0.06)",
    md: "0 18px 40px rgba(15, 23, 42, 0.10)",
    lg: "0 28px 64px rgba(15, 23, 42, 0.12)",
    glow: "0 0 28px rgba(9, 63, 180, 0.10)",
    softGlow: "0 0 24px rgba(122, 174, 220, 0.10)",
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
      width: "min(100% - 48px, 1120px)",
    },
  },
};

export default theme;
