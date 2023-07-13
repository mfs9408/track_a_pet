import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInterface, IUserResponseInterface } from "../../types";

interface UserStore {
  accessToken: string | null | undefined;
  user: IUserInterface | null | undefined;
}

const initialState: UserStore | null = {
  accessToken: "foo",
  user: {
    id: 1,
    email: "mfs9408ny@gmail.com",
    role: ["user"],
    name: "Fedor Muratidi",
    pets: [234],
    isActivated: true,
    owning: "owner",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (
      state: UserStore,
      { payload }: PayloadAction<IUserResponseInterface | null>
    ) => {
      state.accessToken = payload?.tokens.accessToken;
      state.user = payload?.user;
    },
    removeUser: (state: UserStore) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
