import React, { VFC } from "react";
import "./FilterBar.css";
import { Button } from "antd";

interface FilterBarPropsType {
  handleFilter(key: string): void;
  input: String;
  sort: String;
  order: String;
}

export const FilterBar: VFC<FilterBarPropsType> = ({
  handleFilter,
  input,
  sort,
  order,
}) => {
  return (
    <>
      <div className="FilterBar">
        Sort by:
        <Button
          onClick={() => handleFilter("stars")}
          disabled={!input || sort === "stars" ? true : false}
        >
          Stars &#11088;
        </Button>
        <Button
          onClick={() => handleFilter("forks")}
          disabled={!input || sort === "forks" ? true : false}
        >
          Forks &#128268;
        </Button>
      </div>{" "}
      <div className="FilterBar__order">
        <Button
          onClick={() => handleFilter("desc")}
          disabled={!input || order === "desc" ? true : false}
        >
          {" "}
          &#9196;
        </Button>
        <Button
          onClick={() => handleFilter("asc")}
          disabled={!input || order === "asc" ? true : false}
        >
          &#9195;
        </Button>
      </div>
    </>
  );
};
