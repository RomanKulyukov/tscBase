import React from "react";
import "./SearchPage.css";
import { useState, useEffect } from "react";
import InputBar from "../inputBar/inputBar";
import FilterBar from "../filterBar/filterBar";
import ResultItem from "../resultItem/resultItem";
import PageManager from "../pageManager/pageManager";
function SearchPage() {
  ///STATE
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState();
  ///STATE

  useEffect(() => {}, [results]);
  ///HANDLERS
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    if (!input) {
      alert("Input field should not be empty");
    } else {
      fetch(
        `https://api.github.com/search/repositories?q=${input}&per_page=10&$page=${currentPage}`
      ).then((resp) =>
        resp.json().then((json) => setResults({ ...results, ...json }))
      );
    }
  };
  ///HANDLERS
  function resultsFiller(res: any) {
    let resultsList = [];
    for (let i = 0; i < res.items.length; i++) {
      resultsList.push(<ResultItem key={i} item={res.items[i]}></ResultItem>);
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
          {resultsFiller(results)}
          {/* <div className={"search__results"}>{resultsFiller(results)}</div> */}
          <PageManager items={results}></PageManager>
        </>
      )}
    </div>
  );
}
export default SearchPage;
