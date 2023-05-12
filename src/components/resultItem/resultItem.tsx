import React from "react";
import "./resultItem.css";
function ResultItem() {
  return (
    <div className={"resultItem"}>
      <h3>result name</h3>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
        incidunt, fugit earum minima a quae error fugiat quisquam nam corporis
        facilis dolorum excepturi omnis doloremque quasi! Dolorum cumque fuga
        ullam!
      </div>
      <div className={"resultItem__stats"}>
        <div>watches</div>
        <div>stars</div>
        <div>forks</div>
      </div>
    </div>
  );
}

export default ResultItem;
