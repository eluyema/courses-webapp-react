import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme/theme";
import { CssBaseline } from "@mui/material";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
