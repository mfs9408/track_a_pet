import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInterface, IUserResponseInterface } from "../../types";
import { EGenderType } from "../../enums";

interface UserStore {
  accessToken: string | null | undefined;
  user: IUserInterface;
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
    gender: EGenderType.MALE,
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
    },
    removeUser: (state: UserStore) => {
      state.accessToken = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
