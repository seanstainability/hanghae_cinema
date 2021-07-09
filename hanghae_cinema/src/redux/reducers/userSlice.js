import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../actions/user";

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state, action) => {
        // user/logIn/pending
        state.data = null;
        state.isLoggingIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.data = action.payload; // 응답 받은 데이터를 리덕스에 저장
        state.isLoggingIn = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export default userSlice;
