import React from "react";
import { useState } from "react";
import { Button, Pagination, Input, Col, Row } from "antd";
import "./App.css";
import "antd/dist/reset.css";
import Search from "./components/search/search";
import ButtonSearch from "./components/buttonSearch/buttonSearch";
function App() {
  function rowFiller(n: number): any {
    let a = [];
    for (let i = 0; i < n; i++) {
      a.push(
        <Col span={24} key={i}>
          result {i + 1}
        </Col>
      );
    }
    return a;
  }
  return (
    <div className="App">
      <h1>Github search</h1>
      <Search></Search>
      <ButtonSearch />
      <Row>{rowFiller(30)}</Row>
    </div>
  );
}

export default App;
