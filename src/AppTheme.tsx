import { createTheme, ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";

export type AppThemeType = {
  children: ReactNode;
};

export const fonts = {
  ibmPlexSansBold: "IBMPlexSansBold",
  ibmPlexSansSemiBold: "IBMPlexSansSemiBold",
  ibmPlexSansRegular: "IBMPlexSansRegular",
};

export const colors = {
  primary: "#fe2c55",
  black0: "#000000",
  black1: "#161823",
  white0: "#ffffff",
  gray0: "rgba(22, 24, 35, 0.5)",
};

export const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

export const themeBreakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const muiTheme = createTheme({
  typography: {
    fontFamily: [
      fonts.ibmPlexSansRegular,
      fonts.ibmPlexSansBold,
      fonts.ibmPlexSansSemiBold,
    ].join(","),
  },
  zIndex: zIndex,
  breakpoints: {
    values: themeBreakpoints,
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.black1,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "primary",
      },
    },
  },
});

export const AppTheme: FC<AppThemeType> = ({ children }) => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};
