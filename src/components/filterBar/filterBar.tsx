import React, { VFC } from "react";
import "./FilterBar.css";
import { Button } from "antd";

interface filterBarPropsType {
  handleFilter(key: string): void;
}

export const FilterBar: VFC<filterBarPropsType> = ({ handleFilter }) => {
  return (
    <>
      <div className="FilterBar">
        Sort by:
        <Button onClick={() => handleFilter("stars")}>Stars &#11088;</Button>
        <Button onClick={() => handleFilter("forks")}>Forks &#128268;</Button>
      </div>{" "}
      <div className="FilterBar__order">
        <Button onClick={() => handleFilter("desc")} disabled={true}>
          {" "}
          &#9196;
        </Button>
        <Button onClick={() => handleFilter("asc")} disabled>
          &#9195;
        </Button>
      </div>
    </>
  );
};
