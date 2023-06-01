import React, { VFC, useState, useCallback, useEffect } from "react";
import "./RepositoriesListOutput.css";
import { PropertiesOutputItemEdgeType } from "../../types";
import { useQuery, gql } from "@apollo/client";
import { Spin } from "antd";
import { PageManager } from "../pageManager/pageManager";

interface RepositoriesOutputListType {
  inputSearch: String;
}

export const RepositoriesListOutput: VFC<RepositoriesOutputListType> = ({
  inputSearch,
}) => {
  ///QUERY

  const [currentCursor, setCurrentCursor] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [repositoryCount, setRepositoryCount] = useState(null);
  const GET_REPOS = gql`
    query MyQuery($input: String!) {
      search(query: $input, type: REPOSITORY, first: 10) {
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
          endCursor
          hasNextPage
          hasPreviousPage
        }
        repositoryCount
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_REPOS, {
    variables: { input: inputSearch },
  });
  ///QUERY

  const handlePageChange = useCallback(
    (arg: string): void => {
      if (arg === "prev" && currentPage > 1) {
        setCurrentPage(() => currentPage - 1);
      } else if (
        repositoryCount &&
        arg === "next" &&
        currentPage < repositoryCount
      ) {
        setCurrentPage(() => currentPage + 1);
      }
    },
    [currentPage, repositoryCount]
  );

  useEffect(() => {
    if (data) {
      setRepositoryCount(data.search.repositoryCount);
    }
  }, [data]);

  if (data && data.search.pageInfo.endCursor !== currentCursor) {
    setCurrentCursor(() => data.search.pageInfo.endCursor);
  }

  if (loading)
    return (
      <div className="spin">
        <Spin size="large" />
      </div>
    );
  if (error) return <p>... Error acquired{error.message}</p>;

  const repositoriesListJSX = data.search.edges.map(
    (item: PropertiesOutputItemEdgeType) => {
      return (
        <a
          href={item.node.url}
          target="_blank"
          rel="noreferrer"
          className="RepoCard"
          key={item.node.id}
        >
          <div className="RepoCard__top">
            <div className="RepoCard__name">
              <h4>{item.node.name} </h4>
              <div>#{item.node.id}</div>
            </div>
            <div className="RepoCard__stats">
              <div>&#11088;{item.node.stargazerCount}</div>
              <div>&#128268;{item.node.forkCount}</div>
              <div>&#9940;{item.node.issues.totalCount}</div>
            </div>
          </div>
          <div className="RepoCard_desc">{item.node.description}</div>
        </a>
      );
    }
  );

  return (
    <>
      <PageManager
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      {repositoriesListJSX}
    </>
  );
};
