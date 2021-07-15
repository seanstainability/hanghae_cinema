import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Row } from "antd";
import { Text, Button } from "../elements";
//components
import ReviewList from "../components/ReviewList";
import Header from "../components/Header";
import { Spinner } from "../elements";
import { EditFilled } from "@ant-design/icons";
import ReviewWrite from "../components/ReviewWrite";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../redux/async/review";
import InfinityScroll from "../shared/InfinityScroll";

const Detail = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  // 리뷰 입력 필드 펼치기/닫기 토글
  const [isWriteVisible, setIsWriteVisible] = useState(false);
  const toggleWriteField = () => {
    setIsWriteVisible((isWriteVisible) => !isWriteVisible);
  };
  const { list, isDone, isLoading } = useSelector(
    // const { list, isDone, isLoading, paging } = useSelector(
    (state) => state.review
  ); // getreview 수정

  const movie_list = useSelector((state) => state.movie.list); // 들어옴
  const id = props.match.params.id;
  const is_movie = id ? true : false;

  const _movie = is_movie ? 
    movie_list.find((movie) => movie.moviecode === id) : null;
  const [movie, setMovie] = useState(_movie ? _movie : ""); // 잘 들어옴
  
  const test = movie.id

  // 리뷰 불러오기
  React.useEffect(() => {
    dispatch(getReviews(test));
  }, []);

  React.useEffect(() => {
    // if (is_movie && !_movie) {
    //   window.alert("직접 접근이 불가능합니다.");
    //   history.goBack();
    //   return;
    // } 서버 연결 테스트 하면서 주석처리함
    // if (list.length < 2) {
    //   dispatch(getReviews({ movie_id: id }));
    // }
  }, []);

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      <Layout
        style={{
          height: "100vh",
          padding: "0 50px",
          // marginTop: 64,
          backgroundColor: "#111426",
        }}
      >
        <Row gutter={[8, 16]}>
          <ImageOutter>
            <Header history={history} />
            <MovieImage src={movie.img}>{/* test: header */}</MovieImage>
          </ImageOutter>
          <Contents>
            <Text serif type="hKR" bold size="3.2rem">
              {movie.title}
            </Text>
            <MovieInfo>
              <Text size="1.6rem" color="#F29F8D">
                {movie.star}
              </Text>
              <Text size="1.6rem" color="#736F68" margin="0px 12px">
                |
              </Text>
              <Text size="1.6rem">2021</Text>
              <Text size="1.6rem" color="#736F68" margin="0px 12px">
                |
              </Text>
              <Text size="1.6rem">
                <Highlight>{movie.genre}</Highlight>
              </Text>
              <Text size="1.6rem" color="#736F68" margin="0px 12px">
                |
              </Text>
              <Text size="1.6rem">{movie.runtime}</Text>
            </MovieInfo>
            <Text serif size="1.6rem">
              {movie.plot}
            </Text>
            <Text size="1.6rem" color="#736F68">
              출연: {movie.actor}
            </Text>
            <HeadingBlock>
              <Text type="hEn" bold size="2.4rem">
                Review
              </Text>
              <Button type="icon" padding="0px 8px" _onClick={toggleWriteField}>
                <EditFilled style={{ fontSize: "2.4rem" }} />
              </Button>
            </HeadingBlock>
            {isWriteVisible ? <ReviewWrite props={props} /> : null}
            {/* <InfinityScroll
              callNext={() => {
                dispatch(getReviews({ movie_id: id, page: paging.next }));
              }}
              isNext={paging.next ? true : false}
              loading={isLoading}
            > */}
            {isDone &&
              list.map((r, index) => {
                return (
                  <div key={index}>
                    <ReviewList {...r} history={history} />
                  </div>
                );
              })}
            {/* </InfinityScroll> */}
          </Contents>
        </Row>
      </Layout>
    </React.Fragment>
  );
};

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MovieInfo = styled.div`
  display: flex;
`;

const ImageOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;
const MovieImage = styled.div`
  /* position: relative;*/
  display: flex;
  justify-content: space-between;
  padding-bottom: 100%;
  overflow: hidden;
  background: no-repeat
      linear-gradient(
        0deg,
        rgba(17, 20, 38, 1) 0%,
        rgba(17, 20, 38, 0) 25%,
        rgba(17, 20, 38, 0) 75%,
        rgba(17, 20, 38, 1) 95%
      ),
    url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  /* background-image: url("${(props) => props.src}");*/
`;
const HeadingBlock = styled.div`
  display: flex;
  height: 64px;
  line-height: 58px;
  justify-content: space-between;
`;

//-- text --//
const Highlight = styled.span`
  background-color: #153959;
`;

export default Detail;
