import React from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";

const ReviewList = (props) => {
	return (
		<React.Fragment>
			<Wrapper>			   
				<ReviewItem review={props}/>        
			</Wrapper>
		</React.Fragment>
	);
};

const Wrapper = styled.div`
	width: auto;
	display: flex;
	flex-direction: column;
`;

export default ReviewList;
