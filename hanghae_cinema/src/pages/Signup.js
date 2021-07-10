import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../elements";
import styled from "styled-components";
import { Form } from "antd";

const Signup = (props) => {
  const dispatch = useDispatch();

  const onSignUp = useCallback(() => {
    // dispatch();
  }, []);

  return (
    <>
      <Wrap>
        <FormWrap onFinish={onSignUp}>
          <Form.Item>
            <Input
              label="EMAIL"
              placeholder="이메일를 입력해주세요."
              _onChange={(e) => {}}
            />
          </Form.Item>
          <Form.Item>
            <Input
              label="NICKNAME"
              placeholder="닉네임을 입력해주세요."
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
          </Form.Item>
          <Form.Item>
            <Input
              type="password"
              label="CONFIRM PASSWORD"
              placeholder="비밀번호를 다시 입력해주세요."
              _onChange={(e) => {}}
            />
          </Form.Item>
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
`;

const FormWrap = styled(Form)`
  padding: 10px;
  width: 100%;
  max-width: 350px;
  margin-top: 12px;
`;

export default Signup;
