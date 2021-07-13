import React, {useState} from "react";
import styled from "styled-components";
import { Layout, Row} from "antd";
import { Text, Button } from "../elements"
//components
import ReviewList from "../components/ReviewList";
import Header from "../components/Header";
import { EditFilled } from "@ant-design/icons";
import ReviewWrite from "../components/ReviewWrite";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../redux/async/review";

const Detail = (props) => {
	const { history } = props;
	const dispatch = useDispatch();
	// 리뷰 입력 필드 펼치기/닫기 토글
	const [isWriteVisible, setIsWriteVisible] = useState(false);
	const toggleWriteField = () => {
		setIsWriteVisible(isWriteVisible => !isWriteVisible);
	};	

	// {"movie_id" : id}
	const id = props.match.params.id
	const {list, isDone, isLoading } = useSelector((state) => state.review);
	React.useEffect(() => {
		dispatch(getReviews({"movie_id" : id}))		
	}, [])

	return (
		<React.Fragment>
			<Layout
        style={{
          height: "100vh",
          padding: "0 50px",
          // marginTop: 64,
          backgroundColor: "#111426",
        }}
      >
        {/* {isLoading && <Spinner />} */}
        
				<Row gutter={[8, 16]}>
					<ImageOutter>
						<MovieImage>
							{/* test: header */}
							<Header history={history} />
						</MovieImage>
					</ImageOutter>
					<Contents>
						<Text serif type="hKR" bold size="3.2rem">랑종</Text>
						<MovieInfo>
							<Text size="1.6rem" color="#F29F8D">평점 7.5</Text>
							<Text size="1.6rem" color="#736F68" margin="0px 12px">|</Text>
							<Text size="1.6rem">2021</Text>
							<Text size="1.6rem" color="#736F68" margin="0px 12px">|</Text>
							<Text size="1.6rem"><Highlight>공포, 스릴러</Highlight></Text>
							<Text size="1.6rem" color="#736F68" margin="0px 12px">|</Text>
							<Text size="1.6rem">131분</Text>
						</MovieInfo>
						{/* <Text serif size="1.6rem">태국 북동부 ‘이산’ 지역 낯선 시골 마을. 집 안, 숲, 산, 나무, 논밭까지, 이 곳의 사람들은 모든 것에 혼이 깃들어 있다고 믿는다. 가문의 대를 이어 조상신 ‘바얀 신’을 모시는 랑종(무당) ‘님’은 조카 ‘밍’의 상태가 심상치 않음을 직감한다. 날이 갈수록 이상 증세가 점점 심각해지는 ‘밍’. 무당을 취재하기 위해 ‘님’과 동행했던 촬영팀은 신내림이 대물림되는 순간을 포착하기 위해 ‘밍’과 ‘님’, 그리고 가족에게 벌어지는 미스터리한 현상을 카메라에 담기 시작한다. 신내림이 대물림되는 무당 가문피에 관한 세 달간의 기록.</Text> */}
						<Text size="1.6rem" color="#736F68">출연: 싸와니 우툼마, 나릴야 군몽콘켓, 야사카 차이쏜</Text>
						<HeadingBlock>
							<Text type="hEn" bold size="2.4rem">
								Review
							</Text>
							<Button type="icon" padding="0px 8px" _onClick={toggleWriteField}>
								<EditFilled style={{ fontSize: "2.4rem" }} />
							</Button>
						</HeadingBlock>
						{ isWriteVisible ? <ReviewWrite /> : null }     
						{isDone && list.map((r) => {
              return (
                <div key={r.id}>
                  <ReviewList {...r} history={history} />
                </div>
              );
            })}
						{/* <ReviewList /> */}
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
		linear-gradient(0deg, rgba(17,20,38,1) 0%, rgba(17,20,38,0) 25%, rgba(17,20,38,0) 75%, rgba(17,20,38,1) 95%),
		url("https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F06%2Frang-song-2nd-official-trailer-release-info-na-hong-jin-banjong-pisanthanakun-thai-horror-film-ft.jpg?w=960&cbr=1&q=90&fit=max");
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
`

export default Detail;
