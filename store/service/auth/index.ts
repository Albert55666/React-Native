import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../../http/request";

const API_KEY = "AIzaSyBkkeQdVBXLhYu8ueLbvPbNWb5ptL7Zwwk";

export const signIn = createAsyncThunk(
  "auth/login",
  async (params: object, thunkAPI) => {
    try {
      const response = await post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[${API_KEY}]`,
        params,
        {}
      );
      return response;
    } catch (error: any) {
      const message = error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registeration = createAsyncThunk(
  "register/register",
  async (params: any, thunkAPI) => {
    try {
      const response = await post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[${API_KEY}]`,
        params,
        {}
      );
      return response;
    } catch (error: any) {
      const message = error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
