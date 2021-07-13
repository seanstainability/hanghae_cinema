import { createSlice } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { logIn, signUp } from "../async/user";

const initialState = {
  me: null,
  isLoading: false,
  isDone: false,
  isError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state, action) => {
      sessionStorage.removeItem("access_token");
      state.me = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        sessionStorage.setItem("access_token", action.payload[1].access_token);
        state.me = action.payload[0];
      })
      .addMatcher(
        (action) => {
          return action.type.includes("/pending");
        },
        (state, action) => {
          state.isLoading = true;
          state.isDone = false;
          state.isError = null;
        }
      )
      .addMatcher(
        (action) => {
          return action.type.includes("/fulfilled");
        },
        (state, action) => {
          state.isLoading = false;
          state.isDone = true;
        }
      )
      .addMatcher(
        (action) => {
          return action.type.includes("/rejected");
        },
        (state, action) => {
          state.isLoading = false;
          state.isError = action.error;
        }
      ),
});

export const { logOut } = userSlice.actions;

export default userSlice;
