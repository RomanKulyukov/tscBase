import React from "react";
import { useState } from "react";
import { Button, DatePicker, Space, version, Pagination, Input } from "antd";
import "./App.css";
import "antd/dist/reset.css";
import Search from "./components/search/search";
import buttonSearch from "./components/buttonSearch/buttonSearch";
function App() {
  return (
    <div className="App">
      <h1>Github search</h1>
      <Search></Search>
      <ButtonSearch></ButtonSearch>
    </div>
  );
}

export default App;
