import React, { VFC } from "react";
import "./RepositoriesListOutput.css";
import { PropertiesOutputItemEdgeType } from "../../types";
import { useQuery, gql } from "@apollo/client";
import { Spin } from "antd";
interface RepositoriesOutputListType {
  inputSearch: String;
}

export const RepositoriesListOutput: VFC<RepositoriesOutputListType> = ({
  inputSearch,
}) => {
  ///QUERY
  const GET_REPOS = gql`
    query MyQuery {
      search(query: "${inputSearch}", type: REPOSITORY, first: 10) {
        edges {
          node {
            ... on Repository {
              id
              name
              forkCount
              stargazerCount
              url
              issues {
                totalCount
              }
              licenseInfo {
                name
              }
              description
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        repositoryCount
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_REPOS);
  ///QUERY

  if (loading)
    return (
      <div className="spin">
        <Spin size="large" />
      </div>
    );
  if (error) return <p>... Error acquired{error.message}</p>;

  return data.search.edges.map((index: PropertiesOutputItemEdgeType) => {
    return (
      <a
        href={index.node.url}
        target="_blank"
        rel="noreferrer"
        className="RepoCard"
        key={index.node.id}
      >
        <div className="RepoCard__top">
          <div className="RepoCard__name">
            <h4>{index.node.name} </h4>
            <div>#{index.node.id}</div>
          </div>
          <div className="RepoCard__stats">
            <div>&#11088;{index.node.stargazerCount}</div>
            <div>&#128268;{index.node.forkCount}</div>
            <div>&#9940;{index.node.issues.totalCount}</div>
          </div>
        </div>
        <div className="RepoCard_desc">{index.node.description}</div>
      </a>
    );
  });
};
