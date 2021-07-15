import React, { useState } from "react";
import styled from "styled-components";
import { Button, Text, Input } from "../elements";
// import { LikeFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteReview } from "../redux/async/review";
import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const ReviewItem = (props) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [value, setValue] = useState("");

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    dispatch(deleteReview({ pwd: value, id: props.review.id }));
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <ItemCard>
        <Contents>
          <Contents style={{ textAlign: "center" }}>
            <ProfileImage src="https://lh3.googleusercontent.com/UOwo-NLSEBU2W4wx79CarKI9PeevdPbxHECwpqJYT3gpwsmf5gcqh-_w5HfY2HRzMVMt_JVRuMTh5NvD216qIUAgiIOywY4W077SfAeDmOkWOmH3T-dkt67l1xJ4deL4faB4qFe4" />
          </Contents>
          {/* 리뷰 카드 */}
          <Contents style={{ padding: "0px 16px", flexDirection: "column" }}>
            <Text bold>{props.review.username}</Text>
            <Text margin="0px">{props.review.contents}</Text>
            {/* <Text margin="0px">insert_dt</Text> */}
            {/* <div>
							<Button margin="16px 0px 4px 0px" type="edit" text="EDIT"/>
						</div> */}
          </Contents>
        </Contents>
        {/* 좋아요 버튼 */}
        <Contents
          style={{
            textAlign: "center",
            width: "40px",
            marginLeft: "auto",
            flexDirection: "column",
          }}
        >
          <Button type="icon" _onClick={showModal}>
            <DeleteOutlined style={{ fontSize: "2.8rem" }} />
            {/* <LikeFilled style={{ fontSize: "2.8rem" }} /> */}
          </Button>
          <Modal
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okText="삭제"
            cancelText="취소"
          >
            <Input
              value={value}
              type="password"
              _onChange={onChangeValue}
              placeholder="비밀번호를 입력해주세요."
            />
          </Modal>
          {/* <Text bold>
            Likes <br />
            {props.review.likecount}
          </Text> */}
        </Contents>
      </ItemCard>
    </>
  );
};

ReviewItem.defaultProps = {
  // user_profile: "",
  // user_name: "user_name",
  // user_id: "",
  // post_id: 1,
  // contents: "귀여운 고양이네요!",
  // insert_dt: '2021-01-01 19:00:00'
};

const ItemCard = styled.div`
  width: 100%;
  background-color: #212539;
  box-sizing: border-box;
  border: 1px solid #212539;
  border-radius: 10px;
  margin: 0px 0px 20px 0px;
  padding: 20px 16px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -moz-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -ms-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(100, 100, 160, 0.2);
  }
  display: flex;
  justify-content: space-between;
  flex: auto;
  /* ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""} */
`;

const Contents = styled.div`
  width: auto;
  display: flex;
`;

const ProfileImage = styled.div`
  display: inline-block;
  --size: 56px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-color: #736f68;
  background-image: url("${(props) => props.src}");
	background-size: cover; */
`;

export default ReviewItem;
