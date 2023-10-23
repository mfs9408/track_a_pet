import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../Api";
import { EURL } from "../../enums";
import { RootState } from "../store";

export const getAuthorized = createAsyncThunk(
  "getAuthorized",
  (data: { email: string; password: string }) =>
    post(EURL.LOGIN, data)
      .then((response) => response.data.token)
      .catch((e) => console.log("error", e))
);

export const fetchUser = createAsyncThunk(
  "fetchUser",
  (data: { email: string }) =>
    post(EURL.GET_USER, data)
      .then((response) => response.data)
      .catch((e) => console.log("error", e))
);

export const changeUserDataFoo = createAsyncThunk(
  "changeUserData",
  (data: { email: string; name: string }, { getState }) => {
    post(EURL.GET_USER, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: (getState() as RootState).user.tokens.accessToken,
      },
    }).then((response) => response.data);
  }
);
