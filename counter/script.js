counter();

const millisecondsInMonth = 60 * 60 * 24 * 30.4375 * 1000;
const secondsInMonth = millisecondsInMonth / 1000;

let startDate = 0;
let startAmount = 0;
let interestInMonth = 0;

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
    let a = JSON.parse(localStorage.getItem("deposit" + i));
    return (
        Date.parse(a.startDate)
    )
}

function setStartAmount(i) {
    let a = JSON.parse(localStorage.getItem("deposit" + i));
    return (
        parseFloat(a.startAmount)
    )
}

function setInterestInMonth(i) {
    let a = JSON.parse(localStorage.getItem("deposit" + i));
    return (
        parseFloat(a.interestInMonth)
    )
}

function counter() {
    const deposit1 = {
        "startDate": "Oct 29, 2018",
        "startAmount": "64355.14",
        "interestInMonth": "0.0098"
    }
    const deposit2 = {
        "startDate": "Nov 4, 2018",
        "startAmount": "39094.46",
        "interestInMonth": "0.0103"
    }
    const deposit3 = {
        "startDate": "Oct 22, 2018",
        "startAmount": "6390.58",
        "interestInMonth": "0.0103"
    }
    const deposit4 = {
        "startDate": "Nov 2, 2018",
        "startAmount": "3053.75",
        "interestInMonth": "0.0103"
    }

    localStorage.setItem("deposit1", JSON.stringify(deposit1));
    localStorage.setItem("deposit2", JSON.stringify(deposit2));
    localStorage.setItem("deposit3", JSON.stringify(deposit3));
    localStorage.setItem("deposit4", JSON.stringify(deposit4));

    const nextGoal = parseInt(localStorage.getItem("nextGoal"));

    const startDate1 = setStartDate(1);
    const startDate2 = setStartDate(2);
    const startDate3 = setStartDate(3);
    const startDate4 = setStartDate(4);
    const startAmount1 = setStartAmount(1);
    const startAmount2 = setStartAmount(2);
    const startAmount3 = setStartAmount(3);
    const startAmount4 = setStartAmount(4);
    const interestInMonth1 = setInterestInMonth(1);
    const interestInMonth2 = setInterestInMonth(2);
    const interestInMonth3 = setInterestInMonth(3);
    const interestInMonth4 = setInterestInMonth(4);

    document.getElementById("popupCurrentGoal").innerHTML =
        spaceAdder(localStorage.getItem("nextGoal"));

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

        capital = currentAmount1 + currentAmount2 + currentAmount3 +
            currentAmount4;
        capitalInteger = Math.floor(capital.toFixed(2));
        capitalDecimal = decimalExtractor(capital);
        document.getElementById("capitalInteger").innerHTML = spaceAdder(
            capitalInteger
        );
        document.getElementById("capitalDecimal").innerHTML =
            ". " + capitalDecimal + " &#8372;";

        cashflow = cashflow1 + cashflow2 + cashflow3 + cashflow4;
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