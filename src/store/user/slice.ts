import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserResponseInterface } from "../../types";

const initialState: IUserResponseInterface = {
  user: null,
  tokens: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, { payload }: PayloadAction<IUserResponseInterface>) => {
      state = payload;
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
    logOut: (state) => {
      state = initialState;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
