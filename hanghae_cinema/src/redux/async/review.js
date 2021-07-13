import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const getReviews = createAsyncThunk(
  "api/reviews/:id", //api/reviews/:id
  async (data, thunkAPI) => {
    // start = null, size = 3
    // let _paging = thunkAPI.getState().review.paging;
    // if (_paging.start && !_paging.next) {
    //   return;
    // }
    // const result = await axios.get(
    //   `/reviews?start=${data.start}&size=${data.size + 1}`
    // );
    const response = await axios.get(`/reviews?movie_id=${data.movie_id}`);
    // const result = await delay(500, response.data);
    // console.log(response.data);
    // let paging = {
    //   start: result[0],
    //   next: result.length === data.size + 1 ? result[result.length - 1] : null,
    //   size: data.size,
    // };
    // return [result.data, paging];
    return response.data;
  }
);

// export const createReview = createAsyncThunk(
//   "api/reviews",
//   async ({name, review}, thunkAPI) => {
//     const response = await axios.post(
//       "/login", {
//         "review_id": "자동할당",
//         "user_nickname" : "작성자 닉네임"(string),
//         "user_code" :user_code,
//         "moviecode" : "moviecode"(string),
//         "contents" : "contents"(string),
//       };
//       console.log(response);
//       // const result = await delay(500, {
//       //  });
//       console.log("result", result);
//       return result;
//   }
// );

// const axios = require('axios');

// axios.post('http://localhost:3000/users', {
//     id: 6,
//     first_name: 'Fred',
//     last_name: 'Blair',
//     email: 'freddyb34@gmail.com'
// }).then(resp => {
//     console.log(resp.data);
// }).catch(error => {
//     console.log(error);
// });
