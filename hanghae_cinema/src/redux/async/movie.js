import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const getMovies = createAsyncThunk(
  "user/getMovies",
  async (data, thunkAPI) => {
    // const result = await axios.post("/login", data);
    // console.log(result);
    const result = await delay(500, data);
    console.log(data);
    console.log("result", result);
    return result;
  }
);
