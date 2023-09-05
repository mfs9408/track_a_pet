import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../Api";
import { EURL } from "../../enums";

export const fetchUser = createAsyncThunk("fetchUser", (data) =>
  post("auth/login", data).then((response) => response.data.payload)
);
