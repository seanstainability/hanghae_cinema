import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "../async/review";

const initialState = {
  list: [],
  // paging: { start: null, next: null, size: 12 },
  isLoading: false,
  isDone: false,
  isError: null,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {

  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state, action) => {
        state.list = null;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.error = action.error;
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

export default reviewSlice;
