import { securities } from "./data";
import useExchange from "./useExchange";

const SecuritiesExchange = () => {
  const rates = useExchange();
  const securitiesReducer = securities.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  const securitiesAmount = (1 / rates.EUR) * securitiesReducer;
  return securitiesAmount;
};

export default SecuritiesExchange;
