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
  const { list, isDone, isLoading, paging } = useSelector(
    (state) => state.review
  );
  const movie_list = useSelector((state) => state.movie.list);
  const id = props.match.params.id;
  const is_movie = id ? true : false;
  //   console.log("list", list);
  //   console.log("movie_id", id);
  const _movie = is_movie ? movie_list.find((movie) => movie.id === id) : null;
  //   console.log("target_movie", _movie);
  const [movie, setMovie] = useState(_movie ? _movie : "");
  
  // 리뷰 불러오기
	React.useEffect(() => {
		dispatch(getReviews({"movie_id" : id}))		
	}, [])

  React.useEffect(() => {
    if (is_movie && !_movie) {
      window.alert("직접 접근이 불가능합니다.");
      history.goBack();
      return;
    }
    if (list.length < 2) {
      dispatch(getReviews({ movie_id: id }));
    }
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
            <MovieImage src={movie.image}>
              {/* test: header */}
              <Header history={history} />
            </MovieImage>
          </ImageOutter>
          <Contents>
            <Text serif type="hKR" bold size="3.2rem">
              {movie.title}
            </Text>
            <MovieInfo>
              <Text size="1.6rem" color="#F29F8D">
                {movie.rating}
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
            {/* <Text serif size="1.6rem">태국 북동부 ‘이산’ 지역 낯선 시골 마을. 집 안, 숲, 산, 나무, 논밭까지, 이 곳의 사람들은 모든 것에 혼이 깃들어 있다고 믿는다. 가문의 대를 이어 조상신 ‘바얀 신’을 모시는 랑종(무당) ‘님’은 조카 ‘밍’의 상태가 심상치 않음을 직감한다. 날이 갈수록 이상 증세가 점점 심각해지는 ‘밍’. 무당을 취재하기 위해 ‘님’과 동행했던 촬영팀은 신내림이 대물림되는 순간을 포착하기 위해 ‘밍’과 ‘님’, 그리고 가족에게 벌어지는 미스터리한 현상을 카메라에 담기 시작한다. 신내림이 대물림되는 무당 가문피에 관한 세 달간의 기록.</Text> */}
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

            {isWriteVisible ? <ReviewWrite props={props}/> : null}

            <InfinityScroll
              callNext={() => {
                dispatch(getReviews({ movie_id: id, page: paging.next }));
              }}
              isNext={paging.next ? true : false}
              loading={isLoading}
            >
              {isDone &&

                list.map((r, index) => {
                  return (
                    <div key={index}>
                      <ReviewList {...r} history={history} />
                    </div>
                  );
                })}

            </InfinityScroll>
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
