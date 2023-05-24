import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/test_gql";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
