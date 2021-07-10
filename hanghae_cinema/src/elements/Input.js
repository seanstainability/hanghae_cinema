import React from "react";
import styled from "styled-components";
import { Input as AInput } from "antd";

const Input = (props) => {
  const {
    type,
    multiLine,
    placeholder,
    value,
    label,
    isSubmit,
    _onChange,
    _onSubmit,
  } = props;

  if (multiLine) {
    return (
      // {label && <Text margin="0px">{label}</Text>}
      <ElTextarea
        maxLength={100}
        placeholder={placeholder}
        value={value}
        onChange={_onChange}
      ></ElTextarea>
    );
  }

  return (
    <React.Fragment>
      {/* {label && <Text margin="0px">{label}</Text>} */}
      {isSubmit ? (
        <ElInput
          type={type}
          bordered={false}
          placeholder={placeholder}
          value={value}
          onChange={_onChange}
          onPressEnter={(e) => {
            _onSubmit(e);
          }}
          // onKeyPress={(e) => {
          //   if (e.key === "Enter") {
          //     _onSubmit(e);
          //   }
          // }}
        />
      ) : (
        <ElInput
          type={type}
          bordered={false}
          placeholder={placeholder}
          onChange={_onChange}
        />
      )}
    </React.Fragment>
  );
};

Input.defaultProps = {
  type: "text",
  label: false,
  multiLine: false,
  placeholder: "텍스트를 입력해주세요.",
  value: "",
  isSubmit: false,
  _onChange: () => {},
  _onSubmit: () => {},
};

const ElTextarea = styled(AInput.TextArea)`
  border: 1px solid #ffffff;
  width: 100%;
  font-family: "Noto Sans KR", sans-serif;
  padding: 12px 4px;
  box-sizing: border-box;
  carot-color: #ffffff;
`;

const ElInput = styled(AInput)`
  border-bottom: 1px solid #ffffff;
  width: 100%;
  font-family: "Noto Sans KR", sans-serif;
  padding: 12px 4px;
  box-sizing: border-box;
  carot-color: #ffffff;
`;

export default Input;
