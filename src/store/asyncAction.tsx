import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser, getAuthorized } from "./user/asyncAction";
import { commonDataActions } from "./commonData";

export const getUser = createAsyncThunk(
  "getUser",
  async (data: { email: string; password: string }, { dispatch, getState }) => {
    await dispatch(commonDataActions.changeIsLoading(true));
    await dispatch(getAuthorized(data));
    await dispatch(fetchUser({ email: data.email }));
    await dispatch(commonDataActions.changeIsLoading(false));
  }
);
