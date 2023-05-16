import React from "react";
import "./filterBar.css";
import { Button } from "antd";
function FilterBar(props: any) {
  console.log(props);
  return (
    <>
      <div className={"filterBar"}>
        Sort by:
        <Button onClick={() => props.handleFilter("stars")}>
          Stars &#11088;
        </Button>
        <Button onClick={() => props.handleFilter("forks")}>
          Forks &#128268;
        </Button>
      </div>{" "}
      <div className={"order"}>
        <Button onClick={() => props.handleFilter("desc")} disabled={true}>
          {" "}
          &#9196;
        </Button>
        <Button onClick={() => props.handleFilter("asc")} disabled={true}>
          &#9195;
        </Button>
      </div>
    </>
  );
}

export default FilterBar;
