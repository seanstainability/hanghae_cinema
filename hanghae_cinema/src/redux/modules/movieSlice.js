import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../async/movie";

const initialState = {
  movies: [],
  isLoading: false,
  isDone: false,
  isError: null,
};

const movieSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.movies = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
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

export default movieSlice;
