import React from "react";
import styled from "styled-components";
import { Button, Input } from "../elements";
//redux
import { useSelector, useDispatch } from "react-redux";
import { createReview } from "../redux/async/review";

const ReviewWrite = (props) => {
	const dispatch = useDispatch();

	const [name, setName] = React.useState("");
	const [review, setReview] = React.useState("");
	const insertedName = (e) => {setName(e.target.value);};
	const insertedReview = (e) => {setReview(e.target.value);};
	
	const movie_list = useSelector((state) => state.movie.list); // 들어옴
	const id= props.props.match.params.id;
	const is_movie = id ? true : false;
	const _movie = is_movie ? 
	movie_list.find((movie) => movie.moviecode === id) : null;
	const [movie, setMovie] = React.useState(_movie ? _movie : ""); // 잘 들어옴
	const saveReview = () => {
		//check data validity
		if (name === "" || review === ""){
				window.alert("이름과 리뷰를 남겨주세요.");
			return;
		}		
		dispatch(createReview({name: name, review: review, mid: movie.id}));
		setName("");
		setReview("");
	}

    return (
      <React.Fragment>
        <ItemCard>
				<Contents style={{width: "100%", flex: 1}}>
        	<Contents style={{textAlign: "center", width: "64px", flex: "none"}}>
						<ProfileImage />
					</Contents>
					<Contents style={{padding: "0px 8px 0px 16px", flexDirection: "column", flex: 1}}>
            <div style={{}}>
              <Input placeholder="이름"
								value={name}
								_onChange={insertedName}/>
              <Input placeholder="리뷰를 남겨 주세요."
								value={review}
								_onChange={insertedReview}/>
            </div> 
            <div style={{textAlign: "right"}}>
              <Button margin="24px 0px 4px" text="SAVE" _onClick={saveReview}></Button>
            </div> 
					</Contents>
				</Contents>		
			</ItemCard>
      </React.Fragment>
    );
}

const ItemCard = styled.div`
  width: 100%;
	background-color: #212539;
	box-sizing: border-box;
	border: 1px solid #212539;
	border-radius: 10px;
	margin: 0px 0px 20px 0px;
	padding: 20px 16px;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.4);
	-webkit-transition: all 0.3s cubic-bezier(.645,.045,.355,1);
	-moz-transition: all 0.3s cubic-bezier(.645,.045,.355,1);
	-ms-transition: all 0.3s cubic-bezier(.645,.045,.355,1);
	transition: all 0.3s cubic-bezier(.645,.045,.355,1);
		&:hover{
			box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.7);
			border: 1px solid rgba(100, 100, 160, 0.2);
		};
	display: flex;
	justify-content: space-between;
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
	background-color: #736F68;
	/* background-image: url("${(props) => props.src}");
	background-size: cover; */
`;


export default ReviewWrite;
