import React from "react";
import "./SearchPage.css";
import InputBar from "../inputBar/inputBar";
import FilterBar from "../filterBar/filterBar";
function SearchPage() {
  return (
    <div className={"search"}>
      <div className={"search__head"}>
        <h1 className={"search__title"}>Github search</h1>
        <InputBar></InputBar>
        <FilterBar></FilterBar>
      </div>
      <div>
        <div>search result </div>
        <div>search result </div>
        <div>search result </div>
        <div>search result </div>
        <div>search result </div>
        <div>search result </div>
        <div>search result </div>
        <div>search result </div>
        <div>search result </div>
        <div>search result </div>
      </div>
      <div>pagination</div>
    </div>
  );
}
export default SearchPage;
