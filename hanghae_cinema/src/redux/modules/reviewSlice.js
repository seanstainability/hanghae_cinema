import { createSlice } from "@reduxjs/toolkit";
import { addLike, getReviews, createReview } from "../async/review";

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  isLoading: false,
  isDone: false,
  isError: null,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
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

      .addCase(addLike.fulfilled, (state, action) => {
        const review = state.list.find((r) => r.id === action.payload.id);
        // review.Likers.push({ id: action.payload.user_id });
        review.likes += 1;
      })

      .addCase(createReview.fulfilled, (state, action) => {
        console.log(action.payload);
        state.list.unshift(action.payload);
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
          console.log(action.error);
          state.isError = action.error;
        }
      ),
});

export default reviewSlice;
