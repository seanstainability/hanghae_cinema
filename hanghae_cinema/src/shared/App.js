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
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
