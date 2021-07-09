import "./App.css";
import React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Mypage from "../pages/Mypage";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import { Counter } from "../pages/Counter";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/counter" exact component={Counter} />
        <Route path="/" exact component={Main} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/profile" exact component={Mypage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
