import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/async/user";
import { logOut } from "../redux/modules/userSlice";

const Login = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("Login", user);

  const onClick = useCallback(() => {
    dispatch(
      logIn({
        email: "abc@abc.com",
        password: "abc",
      })
    );
  }, []);

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <div>{user.data.email}</div>
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
