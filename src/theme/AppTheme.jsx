// src/theme/AppTheme.jsx
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",                    // ← dark mode base
    background: {
      default: "#0A0D14",            // fondo principal
      paper:   "#161B26",            // fondo de cards/modals MUI
    },
    primary: {
      main:  "#B83228",              // terracota rojo → CTAs, botones principales
      dark:  "#8F2620",              // hover del botón primario
      contrastText: "#FFFFFF",
    },
    secondary: {
      main:  "#334155",              // steel-grey → bordes, iconos secundarios
      contrastText: "#FFFFFF",
    },
    text: {
      primary:   "#FFFFFF",
      secondary: "#A0AABF",          // texto muted (gris azulado suave)
    },
    divider: "#334155",
  },
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(", "),
  },
});

const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;