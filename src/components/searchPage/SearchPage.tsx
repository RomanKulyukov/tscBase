import React from "react";
import "./SearchPage.css";
import InputBar from "../inputBar/inputBar";
import FilterBar from "../filterBar/filterBar";

import { Pagination } from "antd";

function SearchPage() {
  return (
    <div className={"search"}>
      <div className={"search__head"}>
        <h1 className={"search__title"}>Github search</h1>
        <InputBar></InputBar>
        <FilterBar></FilterBar>
      </div>
      <div>
        <div>
          <h3>result name</h3>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
            incidunt, fugit earum minima a quae error fugiat quisquam nam
            corporis facilis dolorum excepturi omnis doloremque quasi! Dolorum
            cumque fuga ullam!
          </div>
          <div>
            <div>result: watches</div>
            <div>result: stars</div>
            <div>result: forks</div>
          </div>
        </div>
        <div>
          <h3>result name</h3>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
            incidunt, fugit earum minima a quae error fugiat quisquam nam
            corporis facilis dolorum excepturi omnis doloremque quasi! Dolorum
            cumque fuga ullam!
          </div>
          <div>
            <div>result: watches</div>
            <div>result: stars</div>
            <div>result: forks</div>
          </div>
        </div>
        <div>
          <h3>result name</h3>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
            incidunt, fugit earum minima a quae error fugiat quisquam nam
            corporis facilis dolorum excepturi omnis doloremque quasi! Dolorum
            cumque fuga ullam!
          </div>
          <div>
            <div>result: watches</div>
            <div>result: stars</div>
            <div>result: forks</div>
          </div>
        </div>
        <div>
          <h3>result name</h3>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
            incidunt, fugit earum minima a quae error fugiat quisquam nam
            corporis facilis dolorum excepturi omnis doloremque quasi! Dolorum
            cumque fuga ullam!
          </div>
          <div>
            <div>result: watches</div>
            <div>result: stars</div>
            <div>result: forks</div>
          </div>
        </div>
      </div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}
export default SearchPage;
