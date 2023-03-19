import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: (factor: number) => `${factor}rem`,
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "0.6rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "0.5rem",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
      marginBottom: "0.5rem",
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 700,
      marginBottom: "0.3rem",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 700,
      marginBottom: "0.3rem",
    },
    h6: {
      fontSize: "0.8rem",
      fontWeight: 700,
      marginBottom: "0.3rem",
    },
    subtitle1: {
      fontSize: "1.2rem",
      fontWeight: 400,
      marginBottom: "0.2rem",
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 400,
      marginBottom: "0.2rem",
    },
    body1: {
      fontSize: "0.9rem",
      fontWeight: 400,
      marginBottom: "0.2rem",
    },
    body2: {
      fontSize: "0.8rem",
      fontWeight: 400,
      marginBottom: "0.1rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => `
        body {
          margin: 0;
        }
      `,
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export { theme };
