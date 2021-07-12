import React from "react";
import { Input, Button } from "../elements";
import { Input as AInput, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchInput = (props) => {
  return (
    <AInput.Group
      compact
      style={{ display: "flex", alignItems: "center", padding: 32 }}
    >
      {/* <div style={{ marginRight: 16 }}>
        <Select defaultValue="title">
          <Select.Option value="title">제목</Select.Option>
          <Select.Option value="content">내용</Select.Option>
        </Select>
      </div> */}
      <Input placeholder="영화 제목을 입력하세요." _onChange={(e) => {}} />
      <Button type="icon">
        <SearchOutlined style={{ fontSize: "36px" }} />
      </Button>
    </AInput.Group>
  );
};

export default SearchInput;
