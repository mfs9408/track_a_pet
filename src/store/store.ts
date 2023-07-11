import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";
import commonData from "./commonData";
import remindersReducer from "./reminders";
import currentRemindersReducer from "./currentReminders";
import articlesReducer from "./articles";
import petReducer from "./petsStore";

const reducer = combineReducers({
  user: userReducer.reducer,
  commonData: commonData.reducer,
  reminders: remindersReducer.reducer,
  currentReminders: currentRemindersReducer.reducer,
  articles: articlesReducer.reducer,
  pets: petReducer.reducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
