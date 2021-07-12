import React from "react";
import styled from "styled-components";

import { Text, Button } from "../elements";
import { EditFilled } from "@ant-design/icons";
import ReviewItem from "./ReviewItem";
import ReviewWrite from "./ReviewWrite";
import { useState } from "react";

const ReviewList = () => {
  // 리뷰 입력 필드 펼치기/닫기 토글
  const [isWriteVisible, setIsWriteVisible] = useState(false);
  const toggleWriteField = () => {
    setIsWriteVisible(isWriteVisible => !isWriteVisible);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <HeadingBlock>
          <Text type="hEn" bold size="2.4rem">
            Review
          </Text>
          <Button type="icon" padding="0px 8px" _onClick={toggleWriteField}>
            <EditFilled style={{ fontSize: "2.4rem" }} />
          </Button>
        </HeadingBlock>
        { isWriteVisible ? <ReviewWrite /> : null }        
        <ReviewItem />        
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const HeadingBlock = styled.div`
  display: flex;
  height: 64px;
  line-height: 58px;
  justify-content: space-between;
`;

export default ReviewList;
