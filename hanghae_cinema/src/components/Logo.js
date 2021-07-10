import React from "react";
import styled from "styled-components";

const Logo = (props) => {
  const { text, children, size, inline, _onClick, type} = props;
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
        {text? text : children}
      </LogoSmall>
    )
  }

  return (
    <LogoLarge {...styles} onClick={_onClick}>
      {text? text : children}
    </LogoLarge>
  )
};

Logo.defaultProps = {
  children: null,
  text: "HANGHAE CINEMA",
  color: "#F2E4D8",
  size: "30px",
  inline: false,
  cursor: "pointer",
};

const LogoLarge = styled.p`
  font-size: ${(props) => props.size};
  color: ${Logo.defaultProps.color};
  -webkit-text-stroke: 1px #D91250;
  margin: 0px ;
  line-height: 0.75em;
  //${(props) => (props.margin? `margin: ${props.margin};` : '')};
  font-family: "Bebas Neue";
  cursor: pointer;
  ${(props) => (props.inline? `display: ${props.inline};` : '')};
  text-shadow: 
    #D91250 0px 0px,#D91250 1px 1px,#D91250 2px 2px,#D91250 3px 3px,
    #D91250 4px 4px,#D91250 5px 5px,#D91250 6px 6px,#D91250 7px 7px,
    #D91250 8px 8px,#D91250 9px 9px,#D91250 10px 10px,#D91250 11px 11px,
    #D91250 12px 12px,#D91250 13px 13px,#D91250 14px 14px,#D91250 15px 15px,
    #D91250 16px 16px,#D91250 17px 17px,#D91250 18px 18px,#D91250 19px 19px,
    #D91250 20px 20px;
`;

const LogoSmall = styled.p`
  font-size: ${(props) => props.size};
  color: ${Logo.defaultProps.color};
  -webkit-text-stroke: 1px #D91250;
  margin: 0px ;
  line-height: 0.75em;
  font-family: "Bebas Neue";
  cursor: pointer;
  ${(props) => (props.inline? `display: ${props.inline};` : '')};
  text-shadow: 
    #D91250 0px 0px,#D91250 1px 1px,#D91250 2px 2px,#D91250 3px 3px,
    #D91250 4px 4px,#D91250 5px 5px,#D91250 6px 6px,#D91250 7px 7px;
`;

export default Logo;