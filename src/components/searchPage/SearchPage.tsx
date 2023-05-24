import React, { VFC } from "react";
import "./SearchPage.css";
import { useState, useCallback, useEffect } from "react";
import { ResultsType } from "../../types";
import { InputBar } from "../InputBar/InputBar";
import { UXhead } from "../UXhead/UXhead";
import { RepoCard } from "../RepoCard/RepoCard";
import { PageManager } from "../PageManager/PageManager";
import { Loader } from "../Misc/Loader/Loader";
import { LocationType } from "../../types";
import { useQuery, gql } from "@apollo/client";

export const SearchPage: VFC = () => {
  const GET_LOCATIONS = gql`
    query search{
      query: React,
      first: 10,
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(data);

  ///STATE---
  const [input, setInput] = useState<String>("");
  const [inputSearch, setInputSearch] = useState<String>("");
  const [results, setResults] = useState<ResultsType>({ items: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<String>("");
  const [order, setOrder] = useState<String>("");
  const [loaderAccess, setLoaderAccess] = useState<Boolean>(false);

  ///---STATE

  /// --- Initial github-api query setup

  const queryRest = `https://api.github.com/search/repositories?q=${inputSearch}&per_page=8&page=${currentPage}$sort='${sort}'$order='${order}'`;
  const token =
    "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";
  ///--- Initial github-api query setup

  const fetchRepos = useCallback(() => {
    fetch(queryRest, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    }).then((resp) =>
      resp
        .json()
        .then((json) => setResults(json))
        .catch((err) => alert(err))
    );
  }, [queryRest, token]);

  useEffect(() => {
    if (inputSearch) {
      fetchRepos();
    }
  }, [currentPage, order, sort, inputSearch, fetchRepos, input]);

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
      setCurrentPage(1);
      setSort("stars");
      setOrder("desc");
      setLoaderAccess(true);
    }
  }, [input]);

  const handleFilter = useCallback((filter: string): void => {
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
  }, []);

  const pageChangeHandler = useCallback(
    (type: string): void => {
      if (type === "prev" && currentPage > 1) {
        setCurrentPage((currentPage) => currentPage - 1);
      }
      if (type === "next" && currentPage) {
        setCurrentPage((currentPage) => currentPage + 1);
      }
    },
    [currentPage]
  );
  ///---HANDLERS

  ///JSX
  return (
    <div className="Search">
      <div className="Search__head">
        <h1 className="Search__title">Github search</h1>
        <InputBar handleChange={handleChange} handleClick={handleClick} />
        {/* <DisplayLocations /> */}
        <UXhead
          handleFilter={handleFilter}
          input={inputSearch}
          sort={sort}
          order={order}
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
        <Loader loaderAccess={loaderAccess} />
      )}
    </div>
  );
};
///JSX
