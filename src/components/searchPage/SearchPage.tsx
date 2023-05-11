import React from "react";
import "./SearchPage.css";
import inputBar from "../inputBar/inputBAr";
function SearchPage() {
  return (
    <div className={"search"}>
      <div className={"search__head"}>
        <h1 className={"search__title"}>Github search</h1>
        <inputBar></inputBar>
        <div>
          <button>sort</button>
          <button>sort</button>
          <button>sort</button>
        </div>
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
