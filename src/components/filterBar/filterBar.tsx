import React, { VFC } from "react";
import "./FilterBar.css";
import { Button } from "antd";

interface filterBarPropsType {
  handleFilter(key: string): void;
  input: String;
  sort: String;
}

export const FilterBar: VFC<filterBarPropsType> = ({
  handleFilter,
  input,
  sort,
}) => {
  return (
    <>
      <div className="FilterBar">
        Sort by:
        <Button
          onClick={() => handleFilter("stars")}
          disabled={input ? false : true}
        >
          Stars &#11088;
        </Button>
        <Button
          onClick={() => handleFilter("forks")}
          disabled={input ? false : true}
        >
          Forks &#128268;
        </Button>
        <Button
          onClick={() => handleFilter("forks")}
          disabled={input ? false : true}
        >
          Issues &#9940;
        </Button>
      </div>{" "}
      <div className="FilterBar__order">
        <Button
          onClick={() => handleFilter("desc")}
          disabled={sort ? false : true}
        >
          {" "}
          &#9196;
        </Button>
        <Button
          onClick={() => handleFilter("asc")}
          disabled={sort ? false : true}
        >
          &#9195;
        </Button>
      </div>
    </>
  );
};
