import { crypto } from "./data";
import useExchange from "./useExchange";

const CryptoExchange = () => {
  const rates = useExchange();
  const btcAmount = (1 / rates.BTC) * crypto.amount;
  return btcAmount;
};

export default CryptoExchange;
