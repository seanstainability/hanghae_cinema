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
    // paging.page = 1, paging.size = 12
    let _paging = thunkAPI.getState().movie.paging;
    // if (!_paging.next) {
    //   return;
    // }

    // const result = await axios.get(
    //   `/api/movie?start=${_paging.page}&size=${_paging.size}`
    // );

    const result = await axios.get(
      "/api/movie"
    ); 

    // const response = generateDummyMovie(12);
    // console.log(response);
    // const result = await delay(500, response);
    
    // let paging = {
    //     page: 
    //     size: ,
    //   };

    // let paging = {
    //   start: result[0],
    //   next: result.length === data.size + 1 ? result[result.length - 1] : null,
    //   size: data.size,
    // };

    // console.log("result", result.data.content);

    // return [result.data.content, paging];

    return result.data;
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