function Counter(myObj) {
  const nextGoal = myObj.nextGoal;
  const millisecondsInMonth = 60 * 60 * 24 * 30.4375 * 1000;
  const secondsInMonth = millisecondsInMonth / 1000;

  const startDate = Date.parse(myObj.startDate);
  const startAmount = myObj.startAmount;
  const interestInMonth = myObj.interestInMonth;

  let currentAmount = 0;
  let cashflow = 0;
  let currentTime = 0;
  let capital = 0;
  let cashflow = 0;
  let goalCompletion = 0;
  let capitalInteger = 0;
  let capitalDecimal = 0;
  let cashflowInteger = 0;
  let cashflowDecimal = 0;
  let capitalGrow = 0;
  let goalCompletionInteger = 0;
  let goalCompletionDecimal = 0;

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

  setInterval(function() {
    currentTime = Date.now();

    currentAmount = startAmount + startAmount * interestInMonth /
      millisecondsInMonth * (currentTime - startDate);
    cashflow = currentAmount * interestInMonth;

    capital = currentAmount.toFixed(2);
    capitalInteger = Math.floor(capital);
    capitalDecimal = DecimalExtractor(capital);
    document.getElementById("capitalInteger").innerHTML = SpaceAdder(
      capitalInteger
    );
    document.getElementById("capitalDecimal").innerHTML =
      ". " + capitalDecimal + " &#8372;";

    cashflow = cashflow.toFixed(2);
    cashflowInteger = Math.floor(cashflow);
    cashflowDecimal = DecimalExtractor(cashflow);
    document.getElementById("cashflowInteger").innerHTML = SpaceAdder(
      cashflowInteger
    );
    document.getElementById("cashflowDecimal").innerHTML =
      ". " + cashflowDecimal + " &#8372;";

    goalCompletion = ((parseInt(capital) * 100) / nextGoal).toFixed(2);
    goalCompletionInteger = Math.floor(goalCompletion);
    goalCompletionDecimal = DecimalExtractor(goalCompletion);
    document.getElementById("completionInteger").innerHTML = SpaceAdder(
      goalCompletionInteger
    );
    document.getElementById("completionDecimal").innerHTML =
      ". " + goalCompletionDecimal + " %";

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