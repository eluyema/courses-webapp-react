import { Components } from "@mui/material";

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: () => `
        body {
          margin: 0;
        }
      `,
  },
};

export { components };
