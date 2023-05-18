import React from "react";
import { Button } from "antd";
import "./PageManager.css";
function PageManager(props: any) {
  return (
    <div>
      <div className="PageManager">
        <Button onClick={() => props.pageChangeHandler("prev")}>Prev.</Button>
        <div className="PageManager__num">{props.currentPage}</div>
        <Button onClick={() => props.pageChangeHandler("next")}>Next</Button>
      </div>
    </div>
  );
}

export default PageManager;
