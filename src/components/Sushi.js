import React from "react";

function Sushi({ sushis, onPlateClick }) {
  return sushis.map(sushi => {
    return (
      <div className="sushi" key={sushi.id}>
        <div className="plate" onClick={(event) => onPlateClick(event)}>
          {/* Tell me if this sushi has been eaten! */}
          {false ? (
            <img
              id={sushi.id}
              width="100%"
            />
          ) : (
            <img
              id={sushi.id}
              src={sushi.img_url}
              alt={"Sushi"}
              width="100%"
            />
          )}
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    );
  });
}

export default Sushi;
