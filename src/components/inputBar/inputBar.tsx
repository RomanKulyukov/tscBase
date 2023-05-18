import React from "react";
import { Input } from "antd";
import "./InputBar.css";
const { Search } = Input;
function InputBar(props: any) {
  return (
    <Search
      className={"InputBar"}
      onChange={props.handleChange}
      onSearch={props.handleClick}
      placeholder="...start typing"
      allowClear
      enterButton="GO!"
      size="large"
    />
  );
}

export default InputBar;
