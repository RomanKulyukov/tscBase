import React, { VFC, useCallback } from "react";
import { Input } from "antd";
import "./InputBar.css";
const { Search } = Input;

interface InputBarPropsType {
  handleChange(key: React.ChangeEvent<HTMLInputElement>): void;
  handleClick(key: string): void;
}

export const InputBar: VFC<InputBarPropsType> = ({
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
