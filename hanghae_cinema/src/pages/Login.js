import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { logIn } from "../redux/async/user";
// import { Input } from "../elements";
import styled from "styled-components";
import { Form } from "antd";
import Logo from "../components/Logo";
import { Button, Text } from "../elements";

const Login = (props) => {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // const onLogIn = useCallback(() => {
  //   // dispatch();
  // }, []);

  // Test!
  // const onClick = useCallback(() => {
  //   dispatch(
  //     logIn({
  //       email: "abc@abc.com",
  //       password: "abc",
  //     })
  //   );
  // }, []);

  return (
    <>
      <Wrap>
        <Logo />
        <FormWrap>
          {/* <FormWrap onFinish={onLogIn}> */}
          {/* <Form.Item>
            <Input
              label="EMAIL"
              placeholder="이메일를 입력해주세요."
              _onChange={(e) => {}}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="password"
              label="PASSWORD"
              placeholder="비밀번호를 입력해주세요."
              _onChange={(e) => {}}
            />
          </Form.Item> */}
          <Button
            _onClick={() => {
              props.history.push("/movies");
            }}
          >
            입장하기
          </Button>
        </FormWrap>
      </Wrap>
    </>
    // Test!
    // <div>
    //   {user.isLoggingIn ? (
    //     <div>로그인 중</div>
    //   ) : user.data ? (
    //     <div>{user.data.email}</div>
    //   ) : (
    //     "로그인 해주세요."
    //   )}
    //   {!user.data ? (
    //     <button onClick={onClick}>로그인</button>
    //   ) : (
    //     <button onClick={onLogout}>로그아웃</button>
    //   )}
    // </div>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

const FormWrap = styled(Form)`
  padding: 10px;
  width: 100%;
  max-width: 350px;
  margin-top: 12px;
`;

export default Login;
