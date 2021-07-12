import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import axios from "axios";

import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import userSlice from "./modules/userSlice";
import counterSlice from "./modules/counterSlice"; // Test!
import movieSlice from "./modules/movieSlice";

export const history = createBrowserHistory();

axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.withCredentials = true;

const reducer = combineReducers({
  user: userSlice.reducer,
  movie: movieSlice.reducer,
  counter: counterSlice.reducer,
  router: connectRouter(history),
});

const middlewares = [];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export const store = configureStore({
  reducer,
  middleware: [...middlewares, ...getDefaultMiddleware()],
  devTools: env !== "production",
});
