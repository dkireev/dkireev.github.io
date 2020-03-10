import { useState, useEffect } from "react";

const useExchange = () => {
  const [rates, setRates] = useState({});
  useEffect(() => {
    fetch("https://dkireev.github.io/counter/latest.json")
      .then((res) => res.json())
      .then((res) => res.rates)
      .then(setRates);
  }, []);
  return rates;
};

export default useExchange;
