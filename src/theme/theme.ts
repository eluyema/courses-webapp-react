import { createTheme } from "@mui/material/styles";
import { breakpointsOption } from "./breakpoints";
import { components } from "./components";
import { typographyOption } from "./typography";

const theme = createTheme({
  spacing: (factor: number) => `${factor}rem`,
  typography: typographyOption,
  breakpoints: breakpointsOption,
  components: components,
  shape: {
    borderRadius: 5,
  },
});

export { theme };
