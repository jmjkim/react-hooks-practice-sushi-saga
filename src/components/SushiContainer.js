import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onMoreButtonClick, onPlateClick }) {  
  return (
    <div className="belt">
      <Sushi sushis={sushis.slice(0, 4)} onPlateClick={onPlateClick} />
      <MoreButton onMoreButtonClick={onMoreButtonClick} />
    </div>
  );
}

export default SushiContainer;
