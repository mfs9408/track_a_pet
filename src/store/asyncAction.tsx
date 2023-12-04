import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser, getAuthorized, getRegistered } from "./user/asyncAction";
import { commonDataActions } from "./commonData";

export const getSignedIn = createAsyncThunk(
  "getSignedIn",
  async (data: { email: string; password: string }, { dispatch }) => {
    await dispatch(commonDataActions.changeIsLoading(true));
    await dispatch(getAuthorized(data));
    await dispatch(fetchUser({ email: data.email }));
    await dispatch(commonDataActions.changeIsLoading(false));
  }
);

export const getSignedUp = createAsyncThunk(
  "getSignedUp",
  async (
    data: { email: string; password: string; name: string },
    { dispatch }
  ) => {
    await dispatch(commonDataActions.changeIsLoading(true));
    await dispatch(getRegistered(data));
    await dispatch(commonDataActions.changeIsLoading(false));
  }
);
