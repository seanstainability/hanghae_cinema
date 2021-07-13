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
  "api/reviews/:id",//api/reviews/:id, 추후 백엔드와 api url 확인
  async (data, thunkAPI) => {
    const response = await axios.get(`/reviews?movie_id=${data.movie_id}`);
    // const result = await delay(500, response.data);
    return response.data;
  }
)

export const createReview = createAsyncThunk(
  "api/reviews",//api/reviews/:id, 추후 백엔드와 api url 확인
  async (data, thunkAPI) => {
    const newReview = {
      "movie_id": data.movie_id,
      "id": shortId.generate(),
      "user_nickname" : data.name,
      "contents" : data.review,
      // "user_code" :"",
      // "moviecode" : "moviecode"(string),
    };
    const response = await axios.post(
      "/reviews/", newReview
    )
    return newReview;
  }
);  

export const addLike = createAsyncThunk(
  "review/addLike",
  async (data, thunkAPI) => {
    // const result = await axios.patch(`/reviews/${data.review_id}/like`);
    const response = {
      movie_id: "3", // movie_id를 맞추어 테스트 해야함!
      review_id: "idH5O3-1muC",
      user_code: "mgMT2B-DUJH",
      user_nickname: "Curtis Beatty",
      moviecode: "v3CTjiUPP41",
      contents: "Incidunt animi voluptatum dolor voluptas nulla minus.",
      likes: 1,
    };
    const result = await delay(500, response);
    // console.log(response);
    // console.log("result", result.data);
    // return result.data;
    return result;
  }
);
