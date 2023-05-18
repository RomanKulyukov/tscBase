import React from "react";
import "./SearchPage.css";
import { useState, useCallback, useEffect } from "react";
import { ResultsType } from "../../types";
import { InputBar } from "../InputBar/InputBar";
import { FilterBar } from "../FilterBar/FilterBar";
import RepoCard from "../RepoCard/RepoCard";
import { PageManager } from "../PageManager/PageManager";

function SearchPage() {
  ///STATE---
  const [input, setInput] = useState<String>("");
  const [inputSearch, setInputSearch] = useState<String>("");
  const [results, setResults] = useState<ResultsType>({ items: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<String>("");
  const [order, setOrder] = useState<String>("");

  ///---STATE

  const fetchRepos = useCallback(() => {
    fetch(
      `https://api.github.com/search/repositories?q=${inputSearch}&per_page=10&page=${currentPage}$sort='${sort}'$order='${order}'`
    ).then((resp) =>
      resp.json().then((json) => setResults({ ...results, ...json }))
    );
  }, [currentPage, inputSearch, sort, order, results]);

  useEffect(() => {
    console.log("useEffect()");
    if (inputSearch) {
      fetchRepos();
    }
  }, [currentPage, order, sort, inputSearch, fetchRepos]);
  ///HANDLERS---
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInput(e.target.value);
    },
    []
  );

  const handleClick = useCallback((): void => {
    if (!input) {
      alert("Input field should not be empty");
    } else {
      setInputSearch(input);
      fetchRepos();
      setCurrentPage(1);
    }
  }, [input, fetchRepos]);

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
      fetchRepos();
    },
    [fetchRepos]
  );

  const pageChangeHandler = useCallback(
    (type: string): void => {
      if (type === "prev" && currentPage > 1) {
        setCurrentPage((currentPage) => currentPage - 1);
        fetchRepos();
      }
      if (type === "next" && currentPage) {
        setCurrentPage((currentPage) => currentPage + 1);
        fetchRepos();
      }
    },
    [currentPage, fetchRepos]
  );
  ///---HANDLERS

  ///JSX
  return (
    <div className="Search">
      <div className="Search__head">
        <h1 className="Search__title">Github search</h1>
        <InputBar handleChange={handleChange} handleClick={handleClick} />
        <FilterBar
          handleFilter={handleFilter}
          input={inputSearch}
          sort={sort}
        />
      </div>

      {Object.keys(results).length > 1 ? (
        <>
          <PageManager
            currentPage={currentPage}
            pageChangeHandler={pageChangeHandler}
          />{" "}
          {results.items.map((res) => (
            <RepoCard key={res.id} card={res} />
          ))}
          <PageManager
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
