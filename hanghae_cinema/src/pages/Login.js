import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/async/user";
import { Input } from "../elements";
import styled from "styled-components";
import { Form } from "antd";
import Logo from "../components/Logo";
import { Button, Text } from "../elements";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const { me, isDone } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  if (isDone && me) {
    props.history.push("/movies");
  }

  const onLogIn = () => {
    console.log(email, pwd);
    if (email === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    dispatch(logIn(email, pwd));
  };

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
          <Form.Item>
            <Input
              label="EMAIL"
              placeholder="이메일를 입력해주세요."
              value={email}
              _onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="password"
              label="PASSWORD"
              isSubmit
              placeholder="비밀번호를 입력해주세요."
              value={pwd}
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </Form.Item>
          <Button width="50%" _onClick={onLogIn}>
            로그인
          </Button>
          <Button
            type="secondary"
            width="50%"
            _onClick={() => {
              props.history.push("/signup");
            }}
          >
            회원가입
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
