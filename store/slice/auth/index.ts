import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initial";
import { RootState } from "@/store";

export const flightSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUpdateActive: (state, { payload }: PayloadAction<{}>) => {
      // state.active = payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export default flightSlice.reducer;
export const SelectAuth = (state: RootState) => state.auth;
