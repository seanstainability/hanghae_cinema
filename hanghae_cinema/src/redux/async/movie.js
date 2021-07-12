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
    // const result = await axios.get("/movies");
    // console.log(result);
    const response = generateDummyMovie(10);
    console.log(response);
    const result = await delay(500, response);
    console.log("result", result);
    return result;
  }
);

export const search = createAsyncThunk(
  "movie/getMovie",
  async (data, thunkAPI) => {
    // const result = await axios.get(`/search?title=${data.title}`);
    // console.log(result);
    const result = await delay(500, generateDummyMovie(1));
    console.log("result", result);
    return result;
  }
);
