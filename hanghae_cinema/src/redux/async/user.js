import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import shortId from "shortid";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  // const response = await axios.post("/login", {
  //   email: data.email,
  //   password: data.pwd,
  // });
  // console.log(response);
  const access_token = shortId.generate();
  const result = await delay(500, [
    {
      id: "1",
      nickname: "동우",
      email: data.email,
    },
    { access_token },
  ]);

  console.log("logIn", result);
  return result;
});

export const signUp = createAsyncThunk(
  "user/signUp",
  async (data, thunkAPI) => {
    const user_data = {
      email: data.email,
      password: data.pwd,
      nickname: data.nickname,
    };
    console.log("signUp", user_data);
    // const response = await axios.post("/signup", user_data);
    const response = await delay(500, "ok");
    if (response === "ok") {
      return response;
    }
  }
);
