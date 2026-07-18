// src/theme/AppTheme.jsx
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
        main: "#2563eb", // similar a Tailwind blue-600
        },
        secondary: {
        main: "#0f766e",
        },
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
        {/* Normaliza estilos base de MUI */}
        <CssBaseline />
        {children}
        </ThemeProvider>
    );
};

export default AppTheme;