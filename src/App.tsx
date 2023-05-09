import React from "react";
import { useState } from "react";
import { Layout, Space, Col, Row, Button } from "antd";
import "./App.css";
import "antd/dist/reset.css";
import Search from "./components/search/search";
import ButtonSearch from "./components/buttonSearch/buttonSearch";
import { createCallChain } from "typescript";

const { Header, Footer, Sider, Content } = Layout;
const CENTER = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "50px",
};
function filterBy(arg: string) {
  console.log("filter by " + arg);
}
function App() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  function rowFiller(n: number): any {
    let a = [];
    for (let i = 0; i < n; i++) {
      a.push(
        <Layout style={{ width: "500px", marginBottom: "50px" }} key={i}>
          <Header>Repository Name</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
        // <Col span={24} key={i}>
        //   result {i + 1}
        // </Col>
      );
    }
    return a;
  }
  return (
    <div className="App">
      <h1>Github search</h1>
      <Row style={CENTER}>
        <Search></Search>
        <ButtonSearch />
      </Row>
      <Row style={CENTER}>
        <h5>Filter by:</h5>
        <Button onClick={() => filterBy("stars")}>Stars</Button>
        <Button onClick={() => filterBy("popularity")}>Popularity</Button>
        <Button onClick={() => filterBy("something")}>Smth</Button>
      </Row>
      {rowFiller(30)}
    </div>
  );
}

export default App;
