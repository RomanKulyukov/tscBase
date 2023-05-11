import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;
function inputBar() {
  return (
    <Search
      className={"searchBar"}
      placeholder="...start typing"
      allowClear
      enterButton="GO!"
      size="large"
      // onSearch={onSearch}
    />
  );
}

export default inputBar;
