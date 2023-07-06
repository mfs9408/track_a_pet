import React from "react";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import Navigate from "./src/components/Navigate";
import { theme } from "./src/theme";
import store from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigate />
      </PaperProvider>
    </Provider>
  );
};

export default App;
