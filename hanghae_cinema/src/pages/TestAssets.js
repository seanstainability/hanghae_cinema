import React from "react";
import styled from "styled-components";
import { Text, Button } from "../elements";
import {
  EditOutlined,
  DeleteOutlined,
  LogoutOutlined,
  LikeFilled,
  SearchOutlined,
} from "@ant-design/icons";

const TestAssets = (props) => {
  return (
    <>
      {/* test: text view */}
      <Text serif type="hKR" bold size="3.2rem">
        랑종
      </Text>
      <Text size="1.4rem" color="#F29F8D">
        평점 7.5
      </Text>
      <Text size="1.4rem">2021</Text>
      <Text size="1.4rem">
        <Highlight>공포/스릴러</Highlight>
      </Text>
      <Text size="1.4rem" color="#736F68">
        131분
      </Text>
      <Text serif size="1.6rem">
        태국 북동부 ‘이산’ 지역 낯선 시골 마을. 집 안, 숲, 산, 나무, 논밭까지,
        이 곳의 사람들은 모든 것에 혼이 깃들어 있다고 믿는다. 가문의 대를 이어
        조상신 ‘바얀 신’을 모시는 랑종(무당) ‘님’은 조카 ‘밍’의 상태가 심상치
        않음을 직감한다. 날이 갈수록 이상 증세가 점점 심각해지는 ‘밍’. 무당을
        취재하기 위해 ‘님’과 동행했던 촬영팀은 신내림이 대물림되는 순간을
        포착하기 위해 ‘밍’과 ‘님’, 그리고 가족에게 벌어지는 미스터리한 현상을
        카메라에 담기 시작한다.신내림이 대물림되는 무당 가문피에 관한 세 달간의
        기록.
      </Text>

      {/* test: button view */}
      <Text size="1.6rem" type="hEN" margin="0px">
        Default button
      </Text>
      <Button>DEFAULT</Button>
      <Text size="1.6rem" type="hEN" margin="0px">
        :disabled
      </Text>
      <Button disabled>DISABLED</Button>
      <Text size="1.6rem" type="hEN" margin="0px">
        ColorSet
      </Text>
      <Button width="50%">PRIMARY</Button>
      <Button width="50%" type="secondary">
        SECONDARY
      </Button>
      <Text size="1.6rem" type="hEN" margin="0px">
        Cicled button
      </Text>
      <Button width="48px" type="circle">
        <LogoutOutlined style={{ fontSize: "28px" }} />
      </Button>
      <Text size="1.6rem" type="hEN" margin="0px">
        Icon button
      </Text>
      <Button type="icon">
        <EditOutlined style={{ fontSize: "36px" }} />
      </Button>
      <Button type="icon">
        <DeleteOutlined style={{ fontSize: "36px" }} />
      </Button>
      <Button type="icon">
        <LikeFilled style={{ fontSize: "36px" }} />
      </Button>
      <Button type="icon">
        <SearchOutlined style={{ fontSize: "36px" }} />
      </Button>
      <Text size="1.6rem" type="hEN" margin="0px">
        Edit button
      </Text>
      <Button type="edit" text="EDIT" />
    </>
  );
};

//-- text --//
const Highlight = styled.span`
  background-color: #153959;
`;
export default TestAssets;
