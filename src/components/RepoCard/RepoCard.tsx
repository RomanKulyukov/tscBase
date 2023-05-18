import React, { VFC } from "react";
import "./RepoCard.css";
import { ItemType } from "../../types";

interface ResultItemPropsType {
  item: ItemType;
}

const ResultItem: VFC<ResultItemPropsType> = ({ item }) => {
  return (
    <a
      href={item.clone_url}
      target="_blank"
      rel="noreferrer"
      className="RepoCard"
    >
      <h2>{item.name}</h2>
      <div>{item.description}</div>
      <div className="RepoCard__stats">
        <div>
          Issues:
          {item.open_issues}
        </div>
        <div>
          id:
          {item.id}
        </div>
        <div>&#11088;{item.stargazers_count}</div>
        <div>&#128268;{item.forks}</div>
      </div>
    </a>
  );
};

export default ResultItem;
