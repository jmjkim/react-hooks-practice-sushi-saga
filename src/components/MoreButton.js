import React from "react";

function MoreButton({ onMoreButtonClick}) {
  return <button onClick={() => onMoreButtonClick()}>More sushi!</button>;
}

export default MoreButton;
