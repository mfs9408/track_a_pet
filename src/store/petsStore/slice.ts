import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPetsTypes } from "../../types";

const initialState: IPetsTypes[] | null = [
  {
    id: 1,
    userId: 2,
    name: "Tefa",
    avatar: "https://placekitten.com/g/200/300",
    owning: "owning",
    gender: "female",
    spayed: true,
    species: "street",
    breed: "foo",
    color: "Orange",
    description: "lorem",
    image: [
      "https://placekitten.com/g/200/300",
      "https://placekitten.com/g/200/300",
      "https://placekitten.com/g/200/300",
    ],
    lost: true,
    loseAddress: "foo",
    loseDate: new Date(),
    remindIDs: [2],
    birthDay: new Date(),
  },
  {
    id: 2,
    userId: 3,
    name: "Fate",
    avatar: "https://placekitten.com/g/200/300",
    owning: "owning",
    gender: "female",
    color: "White",
    spayed: true,
    species: "street",
    breed: "foo",
    description: "lorem",
    image: ["foo"],
    lost: false,
    loseAddress: "foo",
    loseDate: new Date(),
    remindIDs: [2],
    birthDay: new Date(),
  },
  {
    id: 3,
    userId: 1,
    name: "Afet",
    avatar: "https://placekitten.com/g/200/300",
    owning: "owning",
    gender: "male",
    spayed: true,
    species: "street",
    color: "Black",
    breed: "foo",
    description: "lorem",
    image: ["foo"],
    lost: false,
    loseAddress: "foo",
    loseDate: new Date(),
    remindIDs: [2],
    birthDay: new Date(),
  },
];

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    getUser: (state, { payload }: PayloadAction<any>) => {},
  },
});

export const petsActions = petsSlice.actions;
export default petsSlice;
