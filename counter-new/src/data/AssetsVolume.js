const assetsVolume = (asset, rates) => {
  return asset.reduce((acc, item) => {
    return acc + (1 / rates[item.currency]) * item.amount;
  }, 0);
};

export default assetsVolume;
