import React, { VFC } from "react";
import "./RepoCard.css";
import { ItemType } from "../../types";

interface RepoCardPropsType {
  card: ItemType;
}

export const RepoCard: VFC<RepoCardPropsType> = ({ card }) => {
  return (
    <a
      href={card.clone_url}
      target="_blank"
      rel="noreferrer"
      className="RepoCard"
    >
      <div className="RepoCard__top">
        <div className="RepoCard__name">
          <h4>{card.name} </h4>
          <div>#{card.id}</div>
        </div>
        <div className="RepoCard__stats">
          <div>&#11088;{card.stargazers_count}</div>
          <div>&#128268;{card.forks}</div>
          <div>
            &#9940;
            {card.open_issues}
          </div>
        </div>
      </div>
      <div className="RepoCard_desc">{card.description}</div>
    </a>
  );
};
