import React from "react";
import { Input, Space } from "antd";
const { Search } = Input;
function InputBar(props: any) {
  return (
    <Search
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
      onChange={props.handleChange}
      onSearch={props.handleClick}
      className={"searchBar"}
      placeholder="...start typing"
      allowClear
      enterButton="GO!"
      size="large"
    />
  );
}

export default InputBar;
