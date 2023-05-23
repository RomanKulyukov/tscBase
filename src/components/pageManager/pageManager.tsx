import React, { VFC } from "react";
import { Button } from "antd";
import "./PageManager.css";

interface PageManagerPropsType {
  currentPage: number;
  pageChangeHandler(key: string): void;
}
export const PageManager: VFC<PageManagerPropsType> = ({
  pageChangeHandler,
  currentPage,
}) => {
  return (
    <div>
      <div className="PageManager">
        <Button onClick={() => pageChangeHandler("prev")}>Prev.</Button>
        <div className="PageManager__num">{currentPage}</div>
        <Button onClick={() => pageChangeHandler("next")}>Next</Button>
      </div>
    </div>
  );
};
