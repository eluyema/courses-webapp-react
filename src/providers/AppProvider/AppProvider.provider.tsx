import React from "react";
import AlertProvider from "../AlertProvider/AlertProvider.provider";
import SWRConfigProvider from "../SWRConfigProvider/SWRConfigProvider.provider";
import ThemeProvider from "../ThemeProvider/ThemeProvider.provider";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ThemeProvider>
    <SWRConfigProvider>
      <AlertProvider>{children}</AlertProvider>
    </SWRConfigProvider>
  </ThemeProvider>
);

export default AppProvider;
