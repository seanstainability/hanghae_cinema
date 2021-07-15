import { createSlice } from "@reduxjs/toolkit";
import { getMovies, search } from "../async/movie";

const initialState = {
  list: [],
  paging: { page: 0, next: null, size: 24 },
  // paging: { start: 1, next: null, size: 12 },
  isLoading: false,
  isDone: false,
  isError: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        // state.list = action.payload; // 서버 연동 테스트 하면서 수정 함 리뷰 필요
        // state.list = action.payload[0];
        // console.log(action.payload[0]);
        state.list = [...(state.list || []), ...action.payload[0]];
        state.paging = action.payload[1];
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(search.pending, (state, action) => {
        state.list = null;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(search.rejected, (state, action) => {
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
          // console.log(action.error);
          state.isError = action.error;
        }
      ),
});

export default movieSlice;
