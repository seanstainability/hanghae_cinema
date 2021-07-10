import React from "react";
import { Layout, Menu } from "antd";
import Logo from "./Logo";
import styled from "styled-components";

const Header = (props) => {
  return (
    <React.Fragment>
      <HeaderWrap>
        <Menu
          mode="horizontal"
          style={{ height: "100%", border: 0, backgroundColor: "#111426" }}
        >
          <Menu.Item
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Logo type="header" size="30px" />
          </Menu.Item>
        </Menu>
        <Menu
          mode="horizontal"
          style={{
            justifyContent: "flex-end",
            border: 0,
            backgroundColor: "#111426",
            color: "#ffffff",
          }}
        >
          <Menu.Item key="1">마이페이지</Menu.Item>
          <Menu.Item key="2">로그아웃</Menu.Item>
        </Menu>
      </HeaderWrap>
    </React.Fragment>
  );
};

const HeaderWrap = styled(Layout.Header)`
  display: flex;
  position: fixed;
  zindex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
`;

Header.defaultProps = {};

export default Header;
