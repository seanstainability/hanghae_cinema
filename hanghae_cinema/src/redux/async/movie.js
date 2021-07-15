import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { generateDummyMovie } from "../../test/dummy";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

let flag = 0;
export const getMovies = createAsyncThunk(
  "movie/getMovies",
  async (data, thunkAPI) => {
    // paging.page = 1, paging.size = 12
    let _paging = thunkAPI.getState().movie.paging;

    console.log("flag_before", flag);
    if (flag && !_paging.next) {
      return;
    }

    // console.log(_paging);
    const result = await axios.get(
      `/api/movie?page=${_paging.page}&size=${_paging.size}`
    );

    // const result = await axios.get("/api/movie");

    // const response = generateDummyMovie(12);
    // console.log(response);
    // const result = await delay(500, response);

    let current_page = result.data.pageable.pageNumber + 1;
    flag = 1;
    let paging = {
      page: current_page,
      next:
        // result.length === _paging.size + 1 ? result[result.length - 1] : null,
        result.data.totalPages === current_page + 1 ? false : true,
      size: _paging.size,
    };
    console.log("flag_after", flag);
    console.log("paging", paging);
    console.log("result", result.data.content);

    return [result.data.content, paging];
    // return result.data;
  }
);

export const search = createAsyncThunk(
  "movie/search",
  async (data, thunkAPI) => {
    // const result = await axios.get(`/search?title=${data.title}`);
    // console.log(result);
    const result = await delay(500, generateDummyMovie(1));
    console.log("result", result);
    return result;
  }
);
