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
  const totalEUR = total * rates.EUR;
  const interest = depositsInterest();

  return (
    <div className="App">
      {isNaN(total) ? "Loading..." : `${totalUAH.toFixed(2)} UAH`}
      <br />
      {isNaN(total) ? "Loading..." : `${totalEUR.toFixed(2)} EUR`}
      <br />
      <br />
      {interest.toFixed(2)} UAH
    </div>
  );
};

export default React.memo(App);
