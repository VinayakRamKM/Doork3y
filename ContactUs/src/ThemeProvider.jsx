import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#0c44b8",
    },
    secondary: {
      main: "#06235d",
    },
    background: {
      default: "#06235d",
      paper: "#06235d",
    },
    text: {
      primary: "#ffffff",
      secondary: "#f6fff4",
    },
    grey: {
      100: "#d9d9d966",
      200: "#28569c",
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica",
    h1: {
      fontSize: "64px",
      fontWeight: 300,
      letterSpacing: "0px",
      lineHeight: "20px",
    },
    h2: {
      fontSize: "40px",
      fontWeight: 600,
      letterSpacing: "0px",
      lineHeight: "20px",
    },
    h3: {
      fontSize: "32px",
      fontWeight: 300,
      letterSpacing: "0px",
      lineHeight: "100px",
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: 500,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    subtitle2: {
      fontSize: "20px",
      fontWeight: 300,
      letterSpacing: "0px",
      lineHeight: "20px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "0.10000000149011612px",
      lineHeight: "20px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0px",
      lineHeight: "20px",
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