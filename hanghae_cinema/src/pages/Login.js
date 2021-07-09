import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/actions/user";
import userSlice from "../redux/reducers/userSlice";

const Login = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);

  const onClick = useCallback(() => {
    dispatch(
      logIn({
        email: "sean@gmail.com",
        password: "seanpw",
      })
    );
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <div>{user.data.nickname}</div>
      ) : (
        "로그인 해주세요."
      )}
      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
    </div>
  );
};

export default Login;
