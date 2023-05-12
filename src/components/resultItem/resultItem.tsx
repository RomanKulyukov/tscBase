import React from "react";
import "./resultItem.css";
function ResultItem(props: any) {
  return (
    <a href={props.item.clone_url} target="_blank" className={"resultItem"}>
      <h2>{props.item.name}</h2>

      <div>{props.item.description}</div>
      <div className={"resultItem__stats"}>
        <div>&#128374;{props.item.watchers}</div>
        <div>&#11088;{props.item.stargazers_count}</div>
        <div>&#128268;{props.item.forks}</div>
      </div>
    </a>
  );
}

export default ResultItem;
