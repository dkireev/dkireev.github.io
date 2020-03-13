import { useState, useEffect } from "react";

const useExchange = () => {
  const [rates, setRates] = useState({});
  useEffect(() => {
    fetch(
      "https://openexchangerates.org/api/latest.json?app_id=37ce05177037491283b06fe29e31e8f3&symbols=EUR,BTC,UAH"
    )
      // fetch(
      //   "https://dkireev.github.io/counter/latest.json"
      // )
      .then((res) => res.json())
      .then((res) => res.rates)
      .then(setRates);
  }, []);
  return rates;
};

export default useExchange;
