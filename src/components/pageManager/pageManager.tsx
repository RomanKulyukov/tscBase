import React from "react";
import { Button } from "antd";
function PageManager(props: any) {
  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <Button onClick={() => props.pageChangeHandler("prev")}>Prev.</Button>
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            minWidth: "20px",
            textAlign: "center",
          }}
        >
          {props.currentPage}
        </div>
        <Button onClick={() => props.pageChangeHandler("next")}>Next</Button>
      </div>
    </div>
  );
}

export default PageManager;
