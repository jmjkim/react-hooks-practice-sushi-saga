import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [emptyPlates, setEmptyPlates] = useState([]);
  const [remainingBalance, setRemainingBalance] = useState(100);

  // Initial fetch when app is launched.
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(sushis => setSushis(sushis))
    .catch(error => alert(error.message))
    .finally(console.log("Data fetched successfully."))
  }, []);

  const handleMoreButton = () => setSushis(sushis.slice(1)); // Fetch more sushis when MoreButton is clicked.
  const handlePlateClick = (event) => {

    const removeSushi = () => {
      event.target.removeAttribute("src");
      event.target.removeAttribute("alt");
    }

    const stackEmptyPlate = () => {
      const emptyPlate = sushis.filter(sushi => sushi.id === event.target.id);
      setEmptyPlates([...emptyPlates, emptyPlate]);
    }

    const paymentCalculator = () => {
      const newBalance = remainingBalance - (sushis.find(sushi => sushi.id === +event.target.id).price);
      if (remainingBalance > 0) return setRemainingBalance(newBalance);
      else {
        setSushis([]);
        alert(`You have insufficient balances! Your remaining balance is $${remainingBalance}`);
      };
    }

    removeSushi();
    stackEmptyPlate();
    paymentCalculator();
  };

  return (
    <div className="app">
      <SushiContainer sushis={sushis} 
                      onMoreButtonClick={handleMoreButton} 
                      onPlateClick={handlePlateClick} 
                      />
      <Table plates={emptyPlates} remainingBalance={remainingBalance} />
    </div>
  );
}

export default App;
