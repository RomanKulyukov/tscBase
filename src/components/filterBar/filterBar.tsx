import React, { VFC } from "react";
import "./FilterBar.css";
import { Button } from "antd";

function FilterBar(props: any) {
  return (
    <>
      <div className="FilterBar">
        Sort by:
        <Button onClick={() => props.handleFilter("stars")}>
          Stars &#11088;
        </Button>
        <Button onClick={() => props.handleFilter("forks")}>
          Forks &#128268;
        </Button>
      </div>{" "}
      <div className="FilterBar__order">
        <Button onClick={() => props.handleFilter("desc")} disabled>
          {" "}
          &#9196;
        </Button>
        <Button onClick={() => props.handleFilter("asc")} disabled>
          &#9195;
        </Button>
      </div>
    </>
  );
}

export default FilterBar;
