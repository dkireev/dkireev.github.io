import React from "react";
import "./App.css";
import assetsVolume from "./data/assetsVolume";
import { assets } from "./data/data";
import useExchange from "./data/useExchange";
import depositsInterest from "./data/depositsInterest";

const App = () => {
  const rates = useExchange();
  const total = Object.keys(assets)
    .map((item) => assetsVolume(assets[item], rates))
    .reduce((acc, item) => {
      return acc + item;
    }, 0);
  const totalUAH = total * rates.UAH;
  const interest = depositsInterest();

  return (
    <div className="App">
      {isNaN(total) ? "Loading..." : `${totalUAH.toFixed(2)} UAH`}
      <br />
      <br />
      {interest.toFixed(2)} UAH
    </div>
  );
};

export default React.memo(App);
