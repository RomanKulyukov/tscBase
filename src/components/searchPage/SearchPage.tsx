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
  const [pages, setPages] = useState(5);
  const [pagesDisabled, setPagesDisabled] = useState([false, false]);
  ///STATE

  ///HANDLERS
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    if (!input) {
      alert("Input field should not be empty");
    } else {
      fetch(
        `https://api.github.com/search/repositories?q=${input}&per_page=5&$page=2`
      ).then((resp) =>
        resp.json().then((json) => setResults({ ...results, ...json }))
      );
    }
  };

  const pageChangeHandler = (type: string) => {
    if (type === "prev" && currentPage > 1) {
      setCurrentPage((currentPage) => {
        return currentPage - 1;
      });
    }
    if (type === "next" && currentPage < pages) {
      setCurrentPage((currentPage) => {
        return currentPage + 1;
      });
    }
  };
  ///HANDLERS
  function resultsFiller(res: any) {
    console.log(results);
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
          <PageManager
            items={results}
            currentPage={currentPage}
            pageChangeHandler={pageChangeHandler}
          ></PageManager>
        </>
      )}
    </div>
  );
}
export default SearchPage;
