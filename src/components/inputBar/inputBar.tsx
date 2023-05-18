import React, { VFC } from "react";
import { Input } from "antd";
import "./InputBar.css";
const { Search } = Input;

interface inputBarPropsType {
  handleChange(key: React.ChangeEvent<HTMLInputElement>): void;
  handleClick(key: string): void;
}

export const InputBar: VFC<inputBarPropsType> = ({
  handleChange,
  handleClick,
}) => {
  return (
    <Search
      className="InputBar"
      onChange={handleChange}
      onSearch={handleClick}
      placeholder="...start typing"
      allowClear
      enterButton="GO!"
      size="large"
    />
  );
};
