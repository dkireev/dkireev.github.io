import useExchange from "./useExchange";

const AssetsVolume = (asset) => {
  const rates = useExchange();
  const assetsReducer = asset.reduce((acc, item) => {
    return acc + (1 / rates[item.currency]) * item.amount;
  }, 0);
  const assetsAmount = assetsReducer;
  return assetsAmount;
};

export default AssetsVolume;
