import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../Api";
import { EURL } from "../../enums";

export const getAuthorized = createAsyncThunk(
  "getAuthorized",
  (data: { email: string; password: string }) =>
    post(EURL.LOGIN, data)
      .then((response) => {
        return response.data.token;
      })
      .catch((e) => console.log("error", e))
);

// export const fetchUser = createAsyncThunk(
//   "fetchUser",
//   (data: { email: string }) =>
//     post(EURL.GET_USER, data)
//       .then((response) => {
//         return response.data;
//       })
//       .catch((e) => console.log("error", e))
// );
