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
      <h2>{card.name}</h2>
      <div>{card.description}</div>
      <div className="RepoCard__stats">
        <div>
          Issues:
          {card.open_issues}
        </div>
        <div>
          id:
          {card.id}
        </div>
        <div>&#11088;{card.stargazers_count}</div>
        <div>&#128268;{card.forks}</div>
      </div>
    </a>
  );
};

export default RepoCard;
