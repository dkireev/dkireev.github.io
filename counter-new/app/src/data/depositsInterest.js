import { assets } from "./data";

const depositsInterest = () => {
  return assets.deposits
    .map((item) => {
      let timestamp = new Date().getTime();
      let time = new Date(item.start).getTime();
      let secondsAccumalated = (timestamp - time) / 1000;
      let interestInSecond = item.interest / 31557600; //Stands from 365.25 / 24 / 60 / 60;
      return (interestInSecond * secondsAccumalated * item.amount) / 100;
    })
    .reduce((acc, item) => {
      return acc + item;
    }, 0);
};

export default depositsInterest;
