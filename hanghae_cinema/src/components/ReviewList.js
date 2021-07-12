import React from "react";
import styled from "styled-components";

import { Text, Button } from "../elements";
import { EditFilled } from "@ant-design/icons";
import ReviewItem from "./ReviewItem";
import { Modal } from "antd";

import { useState } from "react";

const ReviewList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <HeadingBlock>
          <Text type="hEn" bold size="2.4rem">
            Review
          </Text>
          <Button type="icon" padding="0px 8px" _onClick={showModal}>
            <EditFilled style={{ fontSize: "2.4rem" }} />
          </Button>
        </HeadingBlock>
        <ReviewItem />
        <>
          <Modal
            title="리뷰 남기기"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
          </Modal>
        </>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  width: auto;
`;

const HeadingBlock = styled.div`
  display: flex;
  height: 64px;
  line-height: 58px;
  justify-content: space-between;
`;

export default ReviewList;
