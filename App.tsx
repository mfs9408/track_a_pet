import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navigate from "./src/components/Navigate";
import { store, persistor } from "./src/store/store";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigate />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
