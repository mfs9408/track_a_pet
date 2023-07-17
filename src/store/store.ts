import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as network } from "react-native-offline";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./user";
import commonData from "./commonData";
import remindersReducer from "./reminders";
import currentRemindersReducer from "./currentReminders";
import articlesReducer from "./articles";
import petReducer from "./petsStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducer = combineReducers({
  user: userReducer.reducer,
  commonData: commonData.reducer,
  reminders: remindersReducer.reducer,
  currentReminders: currentRemindersReducer.reducer,
  articles: articlesReducer.reducer,
  pets: petReducer.reducer,
  network,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducer>;
export { store, persistor };
