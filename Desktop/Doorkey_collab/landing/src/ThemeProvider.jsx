import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#e7f1ff",
    },
    secondary: {
      main: "#d69d00",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#e7f1ff",
    },
    info: {
      main: "#3b82f6",
    },
    warning: {
      main: "#d69d00",
    },
    grey: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "96px",
      fontWeight: 300,
      letterSpacing: "-1.5px",
      lineHeight: "normal",
    },
    h2: {
      fontSize: "60px",
      fontWeight: 300,
      letterSpacing: "-0.5px",
      lineHeight: "normal",
    },
    h3: {
      fontSize: "48px",
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    h4: {
      fontSize: "34px",
      fontWeight: 400,
      letterSpacing: "0.25px",
      lineHeight: "normal",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: "100px",
    },
    h6: {
      fontSize: "20px",
      fontWeight: 700,
      letterSpacing: "0px",
      lineHeight: "100px",
    },
    subtitle1: {
      fontSize: "32px",
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    subtitle2: {
      fontSize: "40px",
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "0.1px",
      lineHeight: "20px",
    },
    body2: {
      fontSize: "48px",
      fontWeight: 700,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    button: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "0.1px",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};