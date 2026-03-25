import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import theme from "../styles/theme";

export function AppThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
