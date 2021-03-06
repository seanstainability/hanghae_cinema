import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  // const response = await axios.post('/login', {
  // 	email: data.email,
  // 	password: data.password,
  // });
  // console.log(response);
  const result = await delay(500, {
    email: data.email,
    password: data.password,
  });
  // console.log("result", result);
  return result;
});
