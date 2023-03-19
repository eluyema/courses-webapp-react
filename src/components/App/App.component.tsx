import React from "react";
import AppProvider from "../../providers/AppProvider/AppProvider.provider";
import { Routing } from "../Routing/Routing.component";

const App = () => {
  return (
    <AppProvider>
      <Routing />
    </AppProvider>
  );
};

export default App;
