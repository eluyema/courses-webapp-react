import { ThemeOptions } from "@mui/material/styles";
import { breakpointsOption } from "./breakpoints";
import { componentsOption } from "./components";
import { paletteOption } from "./palette";
import { typographyOption } from "./typography";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    sm1: true;
    md: true;
    md1: true;
    md2: true;
    lg: true;
    lg1: true;
    lg2: true;
    xl: true;
  }
}
const theme: ThemeOptions = {
  spacing: (factor: number) => `${factor}rem`,
  typography: typographyOption,
  breakpoints: breakpointsOption,
  components: componentsOption,
  palette: paletteOption,
  shape: {
    borderRadius: 5,
  },
};

export default theme;
