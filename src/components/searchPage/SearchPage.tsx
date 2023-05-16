import React from "react";
import "./SearchPage.css";
import { useState, useCallback, useEffect } from "react";
import { ResultsType } from "../../types";
import InputBar from "../inputBar/inputBar";
import FilterBar from "../filterBar/filterBar";
import ResultItem from "../resultItem/resultItem";
import PageManager from "../pageManager/pageManager";

function SearchPage() {
  ///STATE---
  const [input, setInput] = useState<String>("");
  const [results, setResults] = useState<ResultsType>({ items: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<String>("");
  const [order, setOrder] = useState<String>("");

  useEffect(() => {
    console.log(results);
  }, [results, currentPage, input, order, sort]);
  ///---STATE
  const query = useCallback(() => {
    fetch(
      `https://api.github.com/search/repositories?q=${input}&per_page=10&page=${currentPage}$sort='${sort}'$order='${order}'`
    ).then((resp) =>
      resp.json().then((json) => setResults({ ...results, ...json }))
    );
  }, [results, currentPage, input, order, sort]);
  ///HANDLERS---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };
  /// wrap in usecallback!
  const handleClick = useCallback(() => {
    if (!input) {
      alert("Input field should not be empty");
    } else {
      query();
    }
  }, [input, query]);
  const handleFilter = useCallback(
    (filter: string): void => {
      switch (filter) {
        case "stars":
          setSort("stars");
          setOrder("desc");
          break;
        case "forks":
          setSort("forks");
          setOrder("desc");
          break;
        case "desc":
          setOrder("desc");
          break;
        case "asc":
          setOrder("asc");
          break;
        default:
          alert("error");
      }
      query();
    },
    [query]
  );

  const pageChangeHandler = useCallback(
    (type: string): void => {
      if (type === "prev" && currentPage > 1) {
        setCurrentPage((currentPage) => {
          return currentPage - 1;
        });
        query();
      }
      if (type === "next" && currentPage) {
        console.log(currentPage);
        setCurrentPage((currentPage) => {
          return currentPage + 1;
        });
        query();
      }
    },
    [currentPage, query]
  );
  ///---HANDLERS

  ///JSX
  return (
    <div className={"search"}>
      <div className={"search__head"}>
        <h1 className={"search__title"}>Github search</h1>
        <InputBar
          handleChange={handleChange}
          handleClick={handleClick}
          sort={sort}
          order={order}
        />
        <FilterBar handleFilter={handleFilter} />
      </div>

      {Object.keys(results).length > 1 ? (
        <>
          <PageManager
            items={results}
            currentPage={currentPage}
            pageChangeHandler={pageChangeHandler}
          />{" "}
          {results.items.map((res) => (
            <ResultItem key={res.id} item={res} />
          ))}
          <PageManager
            items={results}
            currentPage={currentPage}
            pageChangeHandler={pageChangeHandler}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
///JSX
export default SearchPage;

///Object.keys(results).length === 0 ? (
/// ""
// )
