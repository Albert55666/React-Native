import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initial";
import { RootState } from "@/store";

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<any>) => {
      state.user = payload;
    },
    logUserOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export default authSlice.reducer;
export const SelectAuth = (state: RootState) => state.auth;
export const { setUser, logUserOut } = authSlice.actions;
