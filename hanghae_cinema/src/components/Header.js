import React from "react";
import { Layout, Menu } from "antd";

const Header = (props) => {
  return (
    <React.Fragment>
      <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu mode="horizontal" style={{ justifyContent: "flex-end" }}>
          <Menu.Item key="1">마이페이지</Menu.Item>
          <Menu.Item key="2">로그아웃</Menu.Item>
        </Menu>
      </Layout.Header>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
