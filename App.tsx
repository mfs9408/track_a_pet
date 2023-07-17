import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/integration/react";
import Navigate from "./src/components/Navigate";
import { theme } from "./src/theme";
import { store, persistor } from "./src/store/store";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigate />
        </PersistGate>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
