import React from "react";
import "./filterBar.css";
import { Button } from "antd";
function FilterBar() {
  return (
    <div className={"filterBar"}>
      Filter by:
      <Button>Watches &#128374;</Button>
      <Button>Stars &#11088;</Button>
      <Button>Forks &#128268;</Button>
    </div>
  );
}

export default FilterBar;
