import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserResponseInterface } from "../../types";
import { getAuthorized } from "./asyncAction";

const initialState: IUserResponseInterface = {
  user: null,
  tokens: {
    accessToken: null,
    refreshToken: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, { payload }: PayloadAction<string>) => {
      state.tokens.accessToken = payload;
    },
    changeUserData: (state, { payload }) => {
      // @ts-ignore
      state.user = {
        ...state.user,
        email: payload.email,
        name: payload.name,
        gender: payload.gender,
        owning: payload.owning,
      };
    },
    logOut: (state) =>
      (state = {
        user: null,
        tokens: { refreshToken: null, accessToken: null },
      }),
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthorized.fulfilled, (state, { payload }) => {
      state.tokens.accessToken = payload;
    });
  },
});

export const userActions = userSlice.actions;
export default userSlice;
