interface BreakpointsOption {
  values: {
    xs: number;
    sm: number;
    sm1: number;
    md: number;
    md1: number;
    md2: number;
    lg: number;
    lg1: number;
    lg2: number;
    xl: number;
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

export type { BreakpointsOption };
