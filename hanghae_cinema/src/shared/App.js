import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import React from "react";

import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
// import Mypage from "../pages/Mypage";
import { Counter } from "../pages/Counter"; // Test!
import TestAssets from "../pages/TestAssets"; // Test!
import axios from "axios";

axios.defaults.baseURL =
  // "https://my-json-server.typicode.com/seanstainability/hanghae_cinema_db/";
  "http://52.78.6.39/";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/movies" exact component={Main} />
        <Route path="/movie/:id" exact component={Detail} />
        {/* <Route path="/profile" exact component={Mypage} /> */}
        <Route path="/counter" exact component={Counter} />
        <Route path="/test" exact component={TestAssets} /> {/* test */}
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
