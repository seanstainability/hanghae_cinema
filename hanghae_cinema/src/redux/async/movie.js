import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { generateDummyMovie } from "../../test/dummy";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const getMovies = createAsyncThunk(
  "movie/getMovies",
  async (data, thunkAPI) => {
    // start = null, size = 12
    // let _paging = thunkAPI.getState().movie.paging;
    // if (_paging.start && !_paging.next) {
    //   return;
    // }
    // const result = await axios.get(
    //   `/movies?start=${data.start}&size=${data.size + 1}`
    // );
    // const result = await axios.get("/movies");
    // console.log(result);
    const response = generateDummyMovie(12);
    console.log(response);
    const result = await delay(500, response);
    // let paging = {
    //   start: result[0],
    //   next: result.length === data.size + 1 ? result[result.length - 1] : null,
    //   size: data.size,
    // };
    console.log("result", result);
    // return [result, paging];
    return result;
  }
);

// export const search = createAsyncThunk(
//   "movie/getMovie",
//   async (data, thunkAPI) => {
//     // const result = await axios.get(`/search?title=${data.title}`);
//     // console.log(result);
//     const result = await delay(500, generateDummyMovie(1));
//     console.log("result", result);
//     return result;
//   }
// );
