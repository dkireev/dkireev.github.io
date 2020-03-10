import React from "react";
import "./App.css";
import useExchange from "./data/useExchange";
import CryptoExchange from "./data/CryptoExchange";
import SecuritiesExchange from "./data/SecuritiesExchange";

const App = () => {
  const rates = useExchange();
  const total = CryptoExchange() + SecuritiesExchange();
  const totalUAH = total * rates.UAH;
  console.log(rates);

  return <div className="App">Total: {totalUAH.toFixed(2)} UAH</div>;
};

export default React.memo(App);

// Object.keys(a).map(key => `Key ${key} - value ${a[key]}`)
