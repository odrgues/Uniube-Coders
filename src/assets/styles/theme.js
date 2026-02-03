const colors = {
  background: {
    main: "#f8fafc",
    surface: "#ffffff",
    muted: "#050E3C",
  },

  text: {
    primary: "#030712",
    secondary: "#475569",
    muted: "#94a3b8",
    inverse: "#f8fafc",
  },

  brand: {
    primary: "#2563eb",
    accent: "#ec4899",
    action: "#FF3838",
    highlight: "#facc15",
  },

  border: "#e5e7eb",
};

const fonts = {
  heading: "'Space Grotesk', sans-serif",
  body: "'Sora', sans-serif",
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.5rem",
  xxl: "2.25rem",
  hero: "4rem",
};

const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const lineHeights = {
  tight: 1.1,
  normal: 1.4,
  relaxed: 1.7,
};

//espacamentos
const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
  section: "96px",
};

const radius = {
  sm: "6px",
  md: "12px",
  lg: "20px",
  full: "999px",
};

const shadows = {
  sm: "0 4px 12px rgba(0,0,0,0.05)",
  md: "0 8px 24px rgba(0,0,0,0.08)",
  lg: "0 16px 48px rgba(0,0,0,0.12)",
};

//quem fica por cima de quem
const zIndex = {
  base: 1,
  dropdown: 10,
  navbar: 100,
  modal: 1000,
  overlay: 2000,
};

const transitions = {
  fast: "0.15s ease",
  normal: "0.3s ease",
  slow: "0.5s ease",
};

const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

const layout = {
  container: {
    maxWidth: "1280px",
    padding: {
      mobile: "16px",
      desktop: "30px",
    },
  },

  navbar: {
    height: "72px",
  },
};

const states = {
  hoverOpacity: 0.9,
  disabledOpacity: 0.5,
  focusRing: "0 0 0 3px rgba(37, 99, 235, 0.3)",
};

const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
  radius,
  shadows,
  zIndex,
  transitions,
  breakpoints,
  layout,
  states,
};

export default theme;
