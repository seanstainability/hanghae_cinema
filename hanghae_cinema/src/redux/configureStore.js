import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import counterReducer from "./reducers/counterSlice";
import userReducer from "./reducers/userSlice";

export const history = createBrowserHistory();

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer.reducer,
  router: connectRouter(history), // 스토어에 히스토리 넣어주기
});

// 미들웨어 삽입
const middlewares = [];

// redux-logger
const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// redux devTools 설정
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// 미들웨어 묶기
// const enhancer = applyMiddleware(...middlewares);
// const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// 미들웨어와 루트 리듀서를 엮어 스토어 만들기
// let store = (initialStore) => configureStore(rootReducer, enhancer);

// export default store();

export const store = configureStore({
  reducer,
  middleware: [...middlewares, ...getDefaultMiddleware()],
  devTools: env !== "production",
});
