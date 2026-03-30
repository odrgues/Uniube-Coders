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
    50: "#F5F8FF",
    100: "#EAF1FF",
    400: "#3B82F6",
    500: "#2563EB",
    700: "#093FB4",
    900: "#072B7A",
    glow: "rgba(37, 99, 235, 0.18)",
  },

  cyan: {
    400: "#22D3EE",
    soft: "rgba(34, 211, 238, 0.12)",
    glow: "rgba(34, 211, 238, 0.22)",
  },

  yellow: {
    400: "#FACC15",
    300: "#FFE68A",
    glow: "rgba(250, 204, 21, 0.20)",
  },

  purple: {
    900: "#27005D",
  },

  success: "#0F9D58",
  danger: "#DC2626",
};

const breakpoints = {
  xs: 360,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

const mq = {
  up: {
    xs: `(min-width: ${breakpoints.xs}px)`,
    sm: `(min-width: ${breakpoints.sm}px)`,
    md: `(min-width: ${breakpoints.md}px)`,
    lg: `(min-width: ${breakpoints.lg}px)`,
    xl: `(min-width: ${breakpoints.xl}px)`,
    xxl: `(min-width: ${breakpoints.xxl}px)`,
  },
  down: {
    xs: `(max-width: ${breakpoints.xs - 0.02}px)`,
    sm: `(max-width: ${breakpoints.sm - 0.02}px)`,
    md: `(max-width: ${breakpoints.md - 0.02}px)`,
    lg: `(max-width: ${breakpoints.lg - 0.02}px)`,
    xl: `(max-width: ${breakpoints.xl - 0.02}px)`,
    xxl: `(max-width: ${breakpoints.xxl - 0.02}px)`,
  },
  between: {
    xsSm: `(min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm - 0.02}px)`,
    smMd: `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 0.02}px)`,
    mdLg: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 0.02}px)`,
    lgXl: `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 0.02}px)`,
    xlXxl: `(min-width: ${breakpoints.xl}px) and (max-width: ${breakpoints.xxl - 0.02}px)`,
  },
};

const theme = {
  palette,

  colors: {
    bg: {
      page: "#F4F7FF",
      surface: "#FFFFFF",
      muted: "#EEF4FF",
      soft: "#E6EEFF",
      dark: "#0B1220",
      overlay: "rgba(11, 18, 32, 0.12)",
    },

    text: {
      primary: "#10002b",
      secondary: "#42506A",
      muted: "#A9D6E5",
      inverse: "#FFFFFF",
      heading: "#10002b",
      accent: "#4361ee",
      eyebrow: "#10002b",
      hero: "#F8FAFC",
      highlight: "#240046",
      heroSubtle: "#E9ECEF",
    },

    brand: {
      primary: "#4361ee",
      secondary: "#245DFF",
      tertiary: "#7AAEDC",
      highlight: "#00CFE8",
      accent: "#FACC15",
      banner: "#10002b",
      eyebrow: "#7AAEDC",
    },

    border: {
      subtle: "rgba(22, 32, 51, 0.08)",
      soft: "rgba(9, 63, 180, 0.08)",
      strong: "rgba(22, 32, 51, 0.16)",
    },

    surface: {
      base: "#FFFFFF",
      soft: "#EEF4FF",
      highlight: "rgba(9, 63, 180, 0.08)",
      glass: "rgba(255, 255, 255, 0.88)",
      glassStrong: "rgba(255, 255, 255, 0.96)",
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
    nav: "clamp(0.875rem, 0.8rem + 0.15vw, 0.95rem)",
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

    gutter: "clamp(16px, 3vw, 32px)",
    sectionSm: "clamp(40px, 6vw, 64px)",
    sectionMd: "clamp(56px, 8vw, 88px)",
    sectionLg: "clamp(72px, 10vw, 112px)",
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
  media: mq,

  layout: {
    navbar: {
      height: "80px",
      heightMobile: "72px",
    },
    container: {
      maxWidth: "1120px",
      narrow: "920px",
      wide: "1280px",
      gutter: "clamp(16px, 3vw, 32px)",
      width: "min(calc(100% - (clamp(16px, 3vw, 32px) * 2)), 1120px)",
    },
  },
};

export default theme;
