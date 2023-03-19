import { Components } from "@mui/material";

const componentsOption: Components = {
  MuiCssBaseline: {
    styleOverrides: () => `
        body {
          margin: 0;
        }
      `,
  },
};

export { componentsOption };
