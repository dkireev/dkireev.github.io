function Counter(myObj) {
  const nextGoal = myObj.nextGoal;
  const millisecondsInMonth = 60 * 60 * 24 * 30.4375 * 1000;
  const secondsInMonth = millisecondsInMonth / 1000;

  const startDate1 = Date.parse(myObj.startDate1);
  const startAmount1 = myObj.startAmount1;
  const interestInMonth1 = myObj.interestInMonth1;

  const startDate2 = Date.parse(myObj.startDate2);
  const startAmount2 = myObj.startAmount2;
  const interestInMonth2 = myObj.interestInMonth2;

  const startDate3 = Date.parse(myObj.startDate3);
  const startAmount3 = myObj.startAmount3;
  const interestInMonth3 = myObj.interestInMonth3;

  const startDate4 = Date.parse(myObj.startDate4);
  const startAmount4 = myObj.startAmount4;
  const interestInMonth4 = myObj.interestInMonth4;

  let currentAmount1 = 0;
  let cashflow1 = 0;
  let currentAmount2 = 0;
  let cashflow2 = 0;
  let currentAmount3 = 0;
  let cashflow3 = 0;
  let currentAmount4 = 0;
  let cashflow4 = 0;
  let currentTime = 0;
  let capital = 0;
  let cashflow = 0;
  let goalCompletion = 0;
  let capitalInteger = 0;
  let capitalDecimal = 0;
  let cashflowInteger = 0;
  let cashflowDecimal = 0;
  let capitalGrow = 0;

  function SpaceAdder(a) {
    return a.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
  }

  function DecimalExtractor(b) {
    const a = Math.floor(b % 1 * 100);
    const length = (a).toString().length;
    if (length == 2) {
      return a;
    } else {
      return ('0' + a);
    }
  }

  document.getElementById("goal").innerHTML = SpaceAdder(nextGoal) + " &#8372;";

  setInterval(function() {
    currentTime = Date.now();

    currentAmount1 = startAmount1 + startAmount1 * interestInMonth1 /
      millisecondsInMonth * (currentTime - startDate1);
    cashflow1 = currentAmount1 * interestInMonth1;
    currentAmount2 = startAmount2 + startAmount2 * interestInMonth2 /
      millisecondsInMonth * (currentTime - startDate2);
    cashflow2 = currentAmount2 * interestInMonth2;
    currentAmount3 = startAmount3 + startAmount3 * interestInMonth3 /
      millisecondsInMonth * (currentTime - startDate3);
    cashflow3 = currentAmount3 * interestInMonth3;
    currentAmount4 = startAmount4 + startAmount4 * interestInMonth4 /
      millisecondsInMonth * (currentTime - startDate4);
    cashflow4 = currentAmount4 * interestInMonth4;

    capital = (currentAmount1 + currentAmount2 + currentAmount3 +
      currentAmount4).toFixed(2);
    capitalInteger = Math.floor(capital);
    capitalDecimal = DecimalExtractor(capital);
    document.getElementById("capitalInteger").innerHTML = SpaceAdder(
      capitalInteger
    );
    document.getElementById("capitalDecimal").innerHTML =
      ". " + capitalDecimal + " &#8372;";

    cashflow = (cashflow1 + cashflow2 + cashflow3 + cashflow4).toFixed(2);
    cashflowInteger = Math.floor(cashflow);
    cashflowDecimal = DecimalExtractor(cashflow);
    document.getElementById("cashflowInteger").innerHTML = SpaceAdder(
      cashflowInteger
    );
    document.getElementById("cashflowDecimal").innerHTML =
      ". " + cashflowDecimal + " &#8372;";

    goalCompletion = ((parseInt(capital) * 100) / nextGoal).toFixed(2);
    document.getElementById("completion").innerHTML = goalCompletion + ' %';

    capitalGrow = Math.round(secondsInMonth / Math.floor(cashflow));
    document.getElementById("grow").innerHTML = SpaceAdder(Math.round(capitalGrow / 60));
  }, 1000);
}

const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const myObj = JSON.parse(this.responseText);
    Counter(myObj);
  }
};
xmlhttp.open("GET", "numbers.txt", true);
xmlhttp.send();