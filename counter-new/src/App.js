import React from "react";
import "./App.css";
import useExchange from "./data/useExchange";
import AssetsVolume from "./data/AssetsVolume";
import { goal, securities, deposits, crypto } from "./data/data";

const App = () => {
  const rates = useExchange();
  const total =
    AssetsVolume(crypto) + AssetsVolume(securities) + AssetsVolume(deposits);
  const totalUAH = total * rates.UAH;
  return (
    <div className="App">
      {isNaN(total) ? "Loading..." : `Total: ${total.toFixed(2)} USD`}
      <br />
      <br />
      {isNaN(totalUAH) ? "Loading..." : `Total: ${totalUAH.toFixed(2)} UAH`}
      <br />
      <br />
      {Date.parse(goal.date) > Date.now()
        ? "Goal is active"
        : "Goal is outdated"}
    </div>
  );
};

export default React.memo(App);

// Object.keys(a).map(key => `Key ${key} - value ${a[key]}`)
