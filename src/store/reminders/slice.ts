import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RemindersStore {
  id: number;
  type: string;
  pet: string;
  petId: number;
  description: string;
}

const initialState: RemindersStore[] | null = [
  {
    id: 1,
    petId: 1,
    type: "medical",
    pet: "Tefa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa\n" +
      "          excepturi exercitationem id impedit in maxime molestiae molestias,\n" +
      "          necessitatibus nemo obcaecati optio praesentium, qui quia quis,\n" +
      "          reiciendis sed temporibus velit!",
  },
  {
    id: 2,
    petId: 1,
    type: "medical",
    pet: "Tefa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa\n" +
      "          excepturi exercitationem id impedit in maxime molestiae molestias,\n" +
      "          necessitatibus nemo obcaecati optio praesentium, qui quia quis,\n" +
      "          reiciendis sed temporibus velit!",
  },
  {
    id: 3,
    petId: 1,
    type: "medical",
    pet: "Tefa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa\n" +
      "          excepturi exercitationem id impedit in maxime molestiae molestias,\n" +
      "          necessitatibus nemo obcaecati optio praesentium, qui quia quis,\n" +
      "          reiciendis sed temporibus velit!",
  },
  {
    id: 4,
    petId: 3,
    type: "medical",
    pet: "Tefa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa\n" +
      "          excepturi exercitationem id impedit in maxime molestiae molestias,\n" +
      "          necessitatibus nemo obcaecati optio praesentium, qui quia quis,\n" +
      "          reiciendis sed temporibus velit!",
  },
  {
    id: 5,
    petId: 3,
    type: "medical",
    pet: "Tefa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa\n" +
      "          excepturi exercitationem id impedit in maxime molestiae molestias,\n" +
      "          necessitatibus nemo obcaecati optio praesentium, qui quia quis,\n" +
      "          reiciendis sed temporibus velit!",
  },
];

const remindersSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    getUser: (state, { payload }: PayloadAction<any>) => {},
  },
});

export const remindersActions = remindersSlice.actions;
export default remindersSlice;
