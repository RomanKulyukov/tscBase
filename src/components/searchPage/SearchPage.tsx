import React from "react";
import "./SearchPage.css";
import { useState, useEffect } from "react";
import InputBar from "../inputBar/inputBar";
import FilterBar from "../filterBar/filterBar";
import ResultItem from "../resultItem/resultItem";
import { Pagination } from "antd";

function SearchPage() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (!input) {
      alert("Input field should not be empty");
    } else {
      fetch(
        `https://api.github.com/search/repositories?q=${input}&per_page=5&$page=${2}`
      ).then((resp) =>
        resp.json().then((json) => setResults({ ...results, ...json }))
      );
    }
  };
  function resultsFiller(res: any) {
    console.log(res);
    let resultsList = [];
    for (let i = 0; i < res.items; i++) {
      resultsList.push(<ResultItem key={i}></ResultItem>);
    }

    return resultsList;
  }
  return (
    <div className={"search"}>
      <div className={"search__head"}>
        <h1 className={"search__title"}>Github search</h1>
        <InputBar
          handleChange={handleChange}
          handleClick={handleClick}
        ></InputBar>
        <FilterBar></FilterBar>
      </div>
      {Object.keys(results).length === 0 ? (
        ""
      ) : (
        <>
          <div className={"search__results"}>{resultsFiller(results)}</div>
          <Pagination defaultCurrent={1} total={50} />
        </>
      )}
    </div>
  );
}
export default SearchPage;
