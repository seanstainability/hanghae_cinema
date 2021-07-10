import React from "react";
import styled from "styled-components";

const Logo = (props) => {
  const { text, children, size, inline, _onClick, type } = props;
  const styles = {
    text: text,
    children: children,
    size: size,
    inline: inline,
    type: type,
  };

  if (type === "header") {
    return (
      <LogoSmall {...styles} onClick={_onClick}>
        {text ? text : children}
      </LogoSmall>
    );
  }

  return (
    <LogoLarge {...styles} onClick={_onClick}>
      {text ? text : children}
    </LogoLarge>
  );
};

Logo.defaultProps = {
  children: null,
  text: "HANGHAE CINEMA",
  color: "#F2E4D8",
  size: "80px",
  inline: false,
  cursor: "pointer",
  textAlign: "center",
};

const LogoLarge = styled.p`
  padding: 64px;
  font-size: ${(props) => props.size};
  color: ${Logo.defaultProps.color};
  -webkit-text-stroke: 1px #d91250;
  margin: 0px;
  line-height: 0.75em;
  //${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  font-family: "Bebas Neue";
  cursor: pointer;
  ${(props) => (props.inline ? `display: ${props.inline};` : "")};
  text-align: center;
  text-shadow: #d91250 0px 0px, #d91250 1px 1px, #d91250 2px 2px,
    #d91250 3px 3px, #d91250 4px 4px, #d91250 5px 5px, #d91250 6px 6px,
    #d91250 7px 7px, #d91250 8px 8px, #d91250 9px 9px, #d91250 10px 10px,
    #d91250 11px 11px, #d91250 12px 12px, #d91250 13px 13px, #d91250 14px 14px,
    #d91250 15px 15px, #d91250 16px 16px, #d91250 17px 17px, #d91250 18px 18px,
    #d91250 19px 19px, #d91250 20px 20px;
`;

const LogoSmall = styled.p`
  font-size: ${(props) => props.size};
  color: ${Logo.defaultProps.color};
  -webkit-text-stroke: 1px #d91250;
  margin: 0px;
  line-height: 0.75em;
  font-family: "Bebas Neue";
  cursor: pointer;
  ${(props) => (props.inline ? `display: ${props.inline};` : "")};
  text-shadow: #d91250 0px 0px, #d91250 1px 1px, #d91250 2px 2px,
    #d91250 3px 3px, #d91250 4px 4px, #d91250 5px 5px, #d91250 6px 6px,
    #d91250 7px 7px;
`;

export default Logo;
