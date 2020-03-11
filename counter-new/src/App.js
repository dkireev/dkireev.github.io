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
      Total: {total.toFixed(2)} USD
      <br />
      <br />
      Total: {totalUAH.toFixed(2)} UAH
      <br />
      <br />
      Goal completion: {((total * 100) / goal.amount).toFixed(2)}%
    </div>
  );
};

export default React.memo(App);

// Object.keys(a).map(key => `Key ${key} - value ${a[key]}`)
