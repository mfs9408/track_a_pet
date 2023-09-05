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
