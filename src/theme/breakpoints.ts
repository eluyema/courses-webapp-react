interface BreakpointsOption {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    [key: string]: number;
  };
}

// Define your custom breakpoints
const breakpointsOption: BreakpointsOption = {
  values: {
    xs: 0,
    sm: 600,
    sm1: 720,
    md: 960,
    md1: 1120,
    md2: 1280,
    lg: 1280,
    lg1: 1440,
    lg2: 1600,
    xl: 1920,
  },
};

export { breakpointsOption };
