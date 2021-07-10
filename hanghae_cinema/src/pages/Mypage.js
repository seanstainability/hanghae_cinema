import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../elements";
import styled from "styled-components";
import { Form } from "antd";
import Header from "../components/Header";

const Mypage = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("홍길동");

  const onUserUpdate = useCallback(() => {
    // dispatch();
  }, []);

  return (
    <>
      <Header />
      <Wrap>
        <div style={{ display: "flex" }}>
          <ProfileWrap></ProfileWrap>
          <FormWrap onFinish={onUserUpdate}>
            <Form.Item>
              <Input
                label="NICKNAME"
                value={nickname}
                _onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
            </Form.Item>
          </FormWrap>
        </div>
      </Wrap>
    </>
  );
};

const ProfileWrap = styled.div`
  margin: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrap = styled(Form)`
  margin: 10px;
  padding: 10px;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
`;

export default Mypage;
