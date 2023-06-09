import React, { VFC } from "react";
import { Button } from "antd";
import "./PageManager.css";

interface PageManagerPropsType {
  currentPage: number;
  handlePageChange: any;
}
export const PageManager: VFC<PageManagerPropsType> = ({
  handlePageChange,
  currentPage,
}) => {
  return (
    <div>
      <div className="PageManager">
        <Button onClick={() => handlePageChange("prev")}>Prev.</Button>
        <div className="PageManager__num">{currentPage}</div>
        <Button onClick={() => handlePageChange("next")}>Next</Button>
      </div>
    </div>
  );
};
