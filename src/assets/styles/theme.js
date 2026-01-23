const colors = {
  primaryDark: "#030712",
  primary: "pink",
  primaryTech: "#1E5EFF",

  accent: "#FF3838",
  danger: "#DC0000",

  background: "#F4F6F8",
  surface: "#FFFFFF",
  border: "#E5E7EB",

  // text: "#0F172A",
  // textLight: "#FFFFFF",
  // textMuted: "#64748B",
};

const fonts = {
  heading: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
};

const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "58px",
};

const radii = {
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "24px",
};

const shadows = {
  sm: "0 2px 4px rgba(15, 23, 42, 0.08)",
  md: "0 6px 16px rgba(15, 23, 42, 0.12)",
};

const sizes = {
  headerHeight: "102px",
  maxWidth: "1200px",
  maxWidthWide: "1440px",
};

const zIndex = {
  header: 100,
  dropdown: 200,
  overlay: 500,
  modal: 1000,
};

const breakpoints = {
  xs: "360px", // celulares pequenos
  sm: "480px", // celulares
  md: "768px", // tablets
  lg: "1024px", // notebooks
  xl: "1280px", // desktops
  xxl: "1440px", // telas grandes
};

const theme = {
  colors,
  fonts,
  spacing,
  radii,
  shadows,
  sizes,
  zIndex,
  breakpoints,
};

export default theme;
