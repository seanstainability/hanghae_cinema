import React from "react";
import styled from "styled-components";
import { Button, Text } from "../elements";
import { LikeFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addLike } from "../redux/async/review";

const ReviewItem = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <ItemCard>
        <Contents>
          <Contents style={{ textAlign: "center" }}>
            <ProfileImage />
          </Contents>
          {/* 리뷰 카드 */}
          <Contents style={{ padding: "0px 16px", flexDirection: "column" }}>
            <Text bold>{props.review.user_name}</Text>
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
          <Button
            type="icon"
            _onClick={() => {
              dispatch(addLike({ id: props.review.id }));
            }}
          >
            <LikeFilled style={{ fontSize: "2.8rem" }} />
          </Button>
          <Text bold>
            Likes <br />
            {props.review.likes}
          </Text>
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
  /* background-image: url("${(props) => props.src}");
	background-size: cover; */
`;

export default ReviewItem;
