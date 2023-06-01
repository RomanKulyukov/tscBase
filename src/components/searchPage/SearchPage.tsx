import React, { VFC, useEffect } from "react";
import "./SearchPage.css";
import { useState, useCallback } from "react";
import { InputBar } from "../InputBar/InputBar";
import { RepositoriesListOutput } from "../RepositoriesListOutput/RepositoriesListOutput";

export const SearchPage: VFC = () => {
  const [input, setInput] = useState<String>("");
  const [inputSearch, setInputSearch] = useState<String>("");

  const handleInputChange = useCallback(
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
    }
  }, [input]);
  useEffect(() => {}, [input]);
  return (
    <div className="Search">
      <div className="Search__head">
        <h1 className="Search__title">Github search</h1>
        <InputBar handleChange={handleInputChange} handleClick={handleClick} />

        <div className="Search__list">
          {inputSearch ? (
            <RepositoriesListOutput inputSearch={inputSearch} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
