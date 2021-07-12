import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, type, inline, _onClick, serif } =
    props;
  /*
  type
  - null : default; sans-serif
  - serif : 국문 serif, sans-serif
  - hKR : 국문 헤딩
  - hEN : 영문 헤딩
*/
  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    type: type,
    inline: inline,
    serif: serif,
  };

  if (type === "hKR") {
    return <HeadingKr {...styles}>{children}</HeadingKr>;
  }

  if (type === "hEN") {
    return <HeadingEn {...styles}>{children}</HeadingEn>;
  }

  //-- 기본 텍스트 --//
  return <P {...styles}>{children}</P>;
};

Text.defaultColor = {
  white: "#F2E4D8",
  gray: "#736F68",
  orange: "#F29F8D",
  magenta: "#D91250",
  red: "#D9042B",
  black: "#111426",
  navy: "#212539",
  blue: "#153959",
};
Text.defaultProps = {
  children: null,
  bold: false,
  color: Text.defaultColor.white,
  margin: false,
  inline: false,
  type: null,
  cursor: "default",
  serif: false,
};

//-- 기본 텍스트 : type === serif ? serif : sans-serif --//
const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  font-family: ${(props) => (props.serif ? "Noto Serif KR" : "Noto Sans KR")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.inline ? `display: ${props.inline};` : "")};
`;

//-- Heading : 국문 serif : sans-serif --//
const HeadingKr = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "900" : "400")};
  font-family: ${(props) => (props.serif ? "Noto Serif KR" : "Noto Sans KR")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  letter-spacing: -0.2rem;
`;

//-- Heading : 영문 소제목 --//
const HeadingEn = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-family: "Mulish";
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
`;

export default Text;
