import React from "react";
import styled from "styled-components";

const Button = (props) => {
	const { text, _onClick, children, margin, width, padding, type, disabled, } = props;
	const styles = {
		margin: margin,
		width: width,
		padding: padding,
		type: type,
		disabled: disabled,
	};

	// default button : secondary color
	if ( type === "secondary" ) {
		return (
			<React.Fragment>
				<SecondaryButton {...styles} onClick={_onClick}>{text? text : children}</SecondaryButton>
			</React.Fragment>
		);
	}

	// circle button for logout
	if ( type === "circle") {
		return (
			<React.Fragment>
				<CircleButton {...styles} onClick={_onClick}>{text? text : children}</CircleButton>
			</React.Fragment>
		)
	}
	
	// icon button
	if ( type === "icon") {
		return (
			<React.Fragment>
				<IconButton {...styles} onClick={_onClick}>{text? text : children}</IconButton>
			</React.Fragment>
		)
	}

	// review : edit button
	if ( type === "edit") {
		return (
			<React.Fragment>
				<EditButton {...styles} onClick={_onClick}>{text? text : children}</EditButton>
			</React.Fragment>
		)
	}


	// default button
	return (
		<React.Fragment>
			<DefaultButton {...styles} onClick={_onClick}>{text? text: children}</DefaultButton>
		</React.Fragment>
	);
};

Button.defaultProps = {
	text: false,
	children: null,
	_onClick: () => {},
	margin: false,
	padding: false,
	width: "100%",
	cursor: "pointer",
	disabled: false,
};

//-- default & disabled ::: default color --//
const DefaultButton = styled.button`
	width: ${(props) => props.width};
	height: 40px;
	${(props) => (props.margin ? `margin: ${props.margin};` : "")}
	padding: ${(props) => props.padding};
	background-color: #D91250;
	color: #F2E4D8;
	font: 1.8rem "Mulish";
	font-weight: 900;
	text-align: center;
	text-shadow: 0 -1px 0 rgb(0 0 0 / 16%);
	box-sizing: border-box;
	border: none;
	border-radius: 20px;
	box-shadow: 0px 8px 24px rgba(217, 18, 80, 0.3);
	-webkit-transition: all 0.3s cubic-bezier(.645,.045,.355,1);
	-moz-transition: all 0.3s ;
	-ms-transition: all 0.3s ;
	transition: all 0.3s ;
		&:hover{
  		background-color: #F02162;
		};
		&:active{
			box-shadow: 
				0px 8px 24px rgba(217, 18, 80, 0.3),
				0px 0px 0px 8px rgba(217, 18, 80, 0.16);
		};
		&:disabled {
  		background-color: #736F68;
			color: #A49F98;
			box-shadow: 0px 8px 24px rgba(115, 111, 104, 0.3);
		}
`;

//-- default & disabled ::: secondary color --//
const SecondaryButton = styled.button`
	width: ${(props) => props.width};
	height: 40px;
	${(props) => (props.margin ? `margin: ${props.margin};` : "")}
	padding: ${(props) => props.padding};
	background-color: #F2E4D8;
	color: #D91250;
	font: 1.8rem "Mulish";
	font-weight: 900;
	text-align: center;
	align-items: center;
	text-shadow: 0 -1px 0 rgb(0 0 0 / 16%);
	box-sizing: border-box;
	border: 3px solid #D91250;
	border-radius: 20px;
	box-shadow: 0px 8px 24px rgba(217, 18, 80, 0.3);
	-webkit-transition: all 0.3s cubic-bezier(.645,.045,.355,1);
	-moz-transition: all 0.3s ;
	-ms-transition: all 0.3s ;
	transition: all 0.3s ;
		&:hover{
  		background-color: #D91250;
			color: #F2E4D8;
			border: 3px solid #D91250;
		};
		&:active{
			box-shadow: 
				0px 8px 24px rgba(217, 18, 80, 0.3),
				0px 0px 0px 8px rgba(217, 18, 80, 0.16);
		};
		&:disabled {
  		background-color: #736F68;
			color: #A49F98;
			box-shadow: 0px 8px 24px rgba(115, 111, 104, 0.3);
		}
`;

//-- circle button --//
const CircleButton = styled.button`
	--size: ${(props) => props.width};
  width: var(--size);
  height: var(--size);
	${(props) => (props.margin ? `margin: ${props.margin};` : "")}
	padding: ${(props) => props.padding};
	background-color: #D91250;
	color: #F2E4D8;
	font: 1.8rem "Mulish";
	font-weight: 900;
	text-align: center;
	text-shadow: 0 -1px 0 rgb(0 0 0 / 16%);
	box-sizing: border-box;
	border: none;
	border-radius: var(--size);
	box-shadow: 0px 8px 24px rgba(217, 18, 80, 0.3);
	-webkit-transition: all 0.3s cubic-bezier(.645,.045,.355,1);
	-moz-transition: all 0.3s ;
	-ms-transition: all 0.3s ;
	transition: all 0.3s ;
		&:hover{
  		background-color: #F02162;
		};
		&:active{
			box-shadow: 
				0px 8px 24px rgba(217, 18, 80, 0.3),
				0px 0px 0px 8px rgba(217, 18, 80, 0.16);
		};
`;

//-- icon button --//
const IconButton = styled.button`
	${(props) => (props.margin ? `margin: ${props.margin};` : "")}
	padding: ${(props) => props.padding};
	background-color: transparent;
	color: #F2E4D8;
	font: 1.8rem "Mulish";
	font-weight: 900;
	text-align: center;
	text-shadow: 0 -1px 0 rgb(0 0 0 / 16%);
	box-sizing: border-box;
	border: none;
	border-radius: var(--size);
	-webkit-transition: all 0.3s cubic-bezier(.645,.045,.355,1);
	-moz-transition: all 0.3s ;
	-ms-transition: all 0.3s ;
	transition: all 0.3s ;
		&:hover{
  		color: #D91250;
		};
		&:active{
			transform: scale(1.1, 1.1);
		};
`;

//-- edit button --//
const EditButton = styled.button`
	width: 48px;
	height: 24px;
	${(props) => (props.margin ? `margin: ${props.margin};` : "")}
	padding: ${(props) => props.padding};
	background-color: #F2E4D8;
	color: #212539;
	font: 1.2rem "Mulish";
	font-weight: 400;
	text-align: center;
	text-shadow: 0 -1px 0 rgb(0 0 0 / 16%);
	box-sizing: border-box;
	border: none;
	border-radius: 24px;
	-webkit-transition: all 0.3s cubic-bezier(.645,.045,.355,1);
	-moz-transition: all 0.3s ;
	-ms-transition: all 0.3s ;
	transition: all 0.3s ;
		&:hover{
  		background-color: #F02162;
		};
		&:active{
			box-shadow: 
				0px 0px 0px 8px rgba(217, 18, 80, 0.16);
		};
		&:disabled {
  		background-color: #736F68;
			color: #A49F98;
			box-shadow: 0px 8px 24px rgba(115, 111, 104, 0.3);
		}
`;

export default Button;
