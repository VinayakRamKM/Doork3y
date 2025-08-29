import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#060687ff",
      paper: "#060687ff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "50px",
      fontWeight: "bold",
      letterSpacing: "0px",
      lineHeight: "normal",
      textAlign: "center",
    },
    h2: {
      fontSize: "50px",
      fontWeight: "bold",
      letterSpacing: "0px",
      lineHeight: "normal",
      textAlign: "center",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "0.10000000149011612px",
      lineHeight: "20px",
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "0.10000000149011612px",
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
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        head: ({ theme }) => ({
          ...theme.typography.subtitle1,
        }),
        body: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.h2,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body1,
        }),
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