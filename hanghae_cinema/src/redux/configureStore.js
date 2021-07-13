import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import userSlice from "./modules/userSlice";
import counterSlice from "./modules/counterSlice"; // Test!
import movieSlice from "./modules/movieSlice";
import reviewSlice from "./modules/reviewSlice";

export const history = createBrowserHistory();

const reducer = combineReducers({
  user: userSlice.reducer,
  movie: movieSlice.reducer,
  counter: counterSlice.reducer,
  review: reviewSlice.reducer,
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
