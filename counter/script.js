counter();

const millisecondsInMonth = 60 * 60 * 24 * 30.4375 * 1000;
const secondsInMonth = millisecondsInMonth / 1000;

let startDate = 0;
let startAmount = 0;
let interestInMonth = 0;

let currentAmount0 = 0;
let cashflow0 = 0;
let currentAmount1 = 0;
let cashflow1 = 0;
let currentAmount2 = 0;
let cashflow2 = 0;
let currentAmount3 = 0;
let cashflow3 = 0;
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

function updateGoalFunction(value) {
    if (value) {
        localStorage.setItem("nextGoal", value);
        document.getElementById("popup").style.left = "100vw";
        setTimeout(function() { location.reload(); }, 500);
    } else {
        console.log("Wrong value");
    }
}

function openPopup() {
    document.getElementById("popup").style.left = 0;
    document.getElementById("closePopup").style.right = '10px';
}

function closePopup() {
    document.getElementById("popup").style.left = '100vw';
    document.getElementById("closePopup").style.right = '-100vw';
}

function spaceAdder(a) {
    return a.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
}

function decimalExtractor(b) {
    const a = Math.floor(b % 1 * 100);
    const length = (a).toString().length;
    if (length == 2) {
        return a;
    } else {
        return ("0" + a);
    }
}

function setStartDate(i) {
    let a = JSON.parse(localStorage.getItem("deposit"));
    return (
        Date.parse(a[i].startDate)
    )
}

function setStartAmount(i) {
    let a = JSON.parse(localStorage.getItem("deposit"));
    return (
        parseFloat(a[i].startAmount)
    )
}

function setInterestInMonth(i) {
    let a = JSON.parse(localStorage.getItem("deposit"));
    return (
        parseFloat(a[i].interestInMonth)
    )
}

function counter() {
    const deposit = [
      {
        "startDate": "Oct 29, 2018",
        "startAmount": "64355.14",
        "interestInMonth": "0.0098"
      },
      {
        "startDate": "Nov 4, 2018",
        "startAmount": "39094.46",
        "interestInMonth": "0.0103"
      },
      {
        "startDate": "Oct 22, 2018",
        "startAmount": "6390.58",
        "interestInMonth": "0.0103"
      },
      {
        "startDate": "Nov 2, 2018",
        "startAmount": "3053.75",
        "interestInMonth": "0.0103"
      }
    ];

    if (!localStorage.getItem("deposit")) {
      localStorage.setItem("deposit", JSON.stringify(deposit));
    }

    const nextGoal = parseInt(localStorage.getItem("nextGoal"));

    for (var i = 0; i < JSON.parse(localStorage.getItem("deposit")).length; i++) {
      console.log(JSON.parse(localStorage.getItem("deposit"))[i]);
    }

    const startDate0 = setStartDate(0);
    const startDate1 = setStartDate(1);
    const startDate2 = setStartDate(2);
    const startDate3 = setStartDate(3);
    const startAmount0 = setStartAmount(0);
    const startAmount1 = setStartAmount(1);
    const startAmount2 = setStartAmount(2);
    const startAmount3 = setStartAmount(3);
    const interestInMonth0 = setInterestInMonth(0);
    const interestInMonth1 = setInterestInMonth(1);
    const interestInMonth2 = setInterestInMonth(2);
    const interestInMonth3 = setInterestInMonth(3);

    if (localStorage.getItem("nextGoal")) {
        document.getElementById("popupCurrentGoal").innerHTML =
            "Current goal is " +
            spaceAdder(localStorage.getItem("nextGoal")) +
            " &#8372;";
    } else {
        document.getElementById("popupCurrentGoal").innerHTML =
            "Goal isn't set yet";
    }

    setInterval(function() {
        currentTime = Date.now();

        currentAmount0 = startAmount0 + startAmount0 * interestInMonth0 /
            millisecondsInMonth * (currentTime - startDate0);
        cashflow0 = currentAmount0 * interestInMonth0;
        currentAmount1 = startAmount1 + startAmount1 * interestInMonth1 /
            millisecondsInMonth * (currentTime - startDate1);
        cashflow1 = currentAmount1 * interestInMonth1;
        currentAmount2 = startAmount2 + startAmount2 * interestInMonth2 /
            millisecondsInMonth * (currentTime - startDate2);
        cashflow2 = currentAmount2 * interestInMonth2;
        currentAmount3 = startAmount3 + startAmount3 * interestInMonth3 /
            millisecondsInMonth * (currentTime - startDate3);
        cashflow3 = currentAmount3 * interestInMonth3;

        capital = currentAmount0 + currentAmount1 + currentAmount2 +
            currentAmount3;
        capitalInteger = Math.floor(capital.toFixed(2));
        capitalDecimal = decimalExtractor(capital);
        document.getElementById("capitalInteger").innerHTML = spaceAdder(
            capitalInteger
        );
        document.getElementById("capitalDecimal").innerHTML =
            ". " + capitalDecimal + " &#8372;";

        cashflow = cashflow0 + cashflow1 + cashflow2 + cashflow3;
        cashflowInteger = Math.floor(cashflow.toFixed(2));
        cashflowDecimal = decimalExtractor(cashflow);
        document.getElementById("cashflowInteger").innerHTML = spaceAdder(
            cashflowInteger
        );
        document.getElementById("cashflowDecimal").innerHTML =
            ". " + cashflowDecimal + " &#8372;";

        goalCompletion = (parseInt(capital) * 100) / nextGoal;
        goalCompletionInteger = Math.floor(goalCompletion.toFixed(2));
        goalCompletionDecimal = decimalExtractor(goalCompletion);
        document.getElementById("completionInteger").innerHTML = spaceAdder(
            goalCompletionInteger
        );
        document.getElementById("completionDecimal").innerHTML =
            ". " + goalCompletionDecimal + " %";

        capitalGrow = Math.round(secondsInMonth / Math.floor(cashflow));
        document.getElementById("grow").innerHTML =
            spaceAdder(Math.round(capitalGrow / 60));
    }, 1000);
}