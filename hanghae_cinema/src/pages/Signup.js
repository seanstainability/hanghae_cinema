import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "../elements";
import styled from "styled-components";
import { Form } from "antd";
import Logo from "../components/Logo";
import { signUp } from "../redux/async/user";
import { emailCheck } from "../shared/common";

const Signup = (props) => {
  const dispatch = useDispatch();
  const { isDone } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd_check, setPwdCheck] = useState("");

  if (isDone) {
    window.alert("가입을 축하합니다.😆");
    props.history.push("/");
  }

  const onSignUp = () => {
    // console.log(email, pwd, nickname);
    if (email === "" || pwd === "" || nickname === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    if (pwd.length < 6) {
      window.alert("비밀번호는 최소 6글자 이상이어야 합니다!");
    }

    if (pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }

    dispatch(signUp(email, pwd, nickname));
  };

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
              label="NICKNAME"
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              _onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="password"
              label="PASSWORD"
              placeholder="비밀번호를 입력해주세요."
              value={pwd}
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="password"
              label="CONFIRM PASSWORD"
              isSubmit
              placeholder="비밀번호를 다시 입력해주세요."
              value={pwd_check}
              _onChange={(e) => {
                setPwdCheck(e.target.value);
              }}
            />
          </Form.Item>
          <Button _onClick={onSignUp}>회원가입</Button>
        </FormWrap>
      </Wrap>
    </>
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

export default Signup;
