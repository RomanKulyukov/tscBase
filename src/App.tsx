import React from "react";
import { useState } from "react";
import { Layout, Space, Col, Row, Button } from "antd";
import "./App.css";
import "antd/dist/reset.css";
import { Octokit } from "octokit";
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

// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//   auth: 'YOUR-TOKEN'
// })

// await octokit.request('GET /repos/{owner}/{repo}', {
//   owner: 'OWNER',
//   repo: 'REPO',
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// })

function App() {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: "YOUR-TOKEN",
  });

  await octokit.request("GET /search/repositories", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
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
    <>
      <SearchPage></SearchPage>
    </>
  );
}

export default App;
