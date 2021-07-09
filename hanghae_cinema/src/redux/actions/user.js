import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "../../delay";

export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  // thunkAPI.getState()
  // axios 요청은 여기서!
  // pending, fulfilled, rejected
  // createAsyncThunk에서는 try, catch로 감싸지 않아야 에러시 rejected 상태로 넘어간다.
  const result = await delay(500, {
    // data에서 이런 응답이 왔다고 치자... 응답 받은 데이터가 action.payload가 된다.
    email: "sean@gmail.com",
    password: "seanpw",
  });
  return result;
});
