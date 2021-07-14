import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import shortId from "shortid";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const getReviews = createAsyncThunk(
  "api/review/:id",
  async (data, thunkAPI) => {
    const response = await axios.get(`api/review/${data.moviecode}`);
    // const result = await delay(500, response.data);
    return response.data;
  }
);

export const createReview = createAsyncThunk(
  "api/reviews",
  async (data, thunkAPI) => {
    const newReview = {
      moviecode: data.moviecode,
      user_name: data.name,
      contents: data.review,
      // "user_code" :"",
    };
    const response = await axios.post("/api/review", newReview);
    console.log(response.data);
    return newReview; // 리턴 수정필요
  }
);

export const addLike = createAsyncThunk(
  "review/addLike",
  async (data, thunkAPI) => {
    const result = await axios.put(`/api/like`, {
      id: data.id,
    });
    // const response = {
    //   movie_id: "3", // movie_id를 맞추어 테스트 해야함!
    //   review_id: "idH5O3-1muC",
    //   user_code: "mgMT2B-DUJH",
    //   user_nickname: "Curtis Beatty",
    //   moviecode: "v3CTjiUPP41",
    //   contents: "Incidunt animi voluptatum dolor voluptas nulla minus.",
    //   likes: 1,
    // };
    // const result = await delay(500, response);
    // console.log(response);
    console.log("result", result.data);
    // return result.data;
    return result.data;
  }
);
