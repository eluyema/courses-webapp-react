import React, { FC } from "react";
import { SWRConfig } from "swr";

interface SWRConfigProviderProps {
  children: React.ReactNode;
}

const SWRConfigProvider: FC<SWRConfigProviderProps> = ({ children }) => {
  return <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>;
};

export default SWRConfigProvider;
