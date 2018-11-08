counter();

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
}

function counter(myObj) {
    localStorage.setItem("startDate", "Nov 8, 2018");
    localStorage.setItem("startAmount", "85064");
    localStorage.setItem("interestInMonth", "0.0107");

    const nextGoal = parseInt(localStorage.getItem("nextGoal"));
    const millisecondsInMonth = 60 * 60 * 24 * 30.4375 * 1000;
    const secondsInMonth = millisecondsInMonth / 1000;

    const startDate = Date.parse(localStorage.getItem("startDate"));
    const startAmount = parseFloat(localStorage.getItem("startAmount"));
    const interestInMonth =
        parseFloat(localStorage.getItem("interestInMonth"));

    let currentAmount = 0;
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
            return ("0" + a);
        }
    }

    setInterval(function() {
        currentTime = Date.now();

        currentAmount = startAmount + startAmount * interestInMonth /
            millisecondsInMonth * (currentTime - startDate);
        cashflow = currentAmount * interestInMonth;

        capital = currentAmount;
        capitalInteger = Math.floor(capital.toFixed(2));
        capitalDecimal = DecimalExtractor(capital);
        document.getElementById("capitalInteger").innerHTML = SpaceAdder(
            capitalInteger
        );
        document.getElementById("capitalDecimal").innerHTML =
            ". " + capitalDecimal + " &#8372;";

        cashflowInteger = Math.floor(cashflow.toFixed(2));
        cashflowDecimal = DecimalExtractor(cashflow);
        document.getElementById("cashflowInteger").innerHTML = SpaceAdder(
            cashflowInteger
        );
        document.getElementById("cashflowDecimal").innerHTML =
            ". " + cashflowDecimal + " &#8372;";

        goalCompletion = (parseInt(capital) * 100) / nextGoal;
        goalCompletionInteger = Math.floor(goalCompletion.toFixed(2));
        goalCompletionDecimal = DecimalExtractor(goalCompletion);
        document.getElementById("completionInteger").innerHTML = SpaceAdder(
            goalCompletionInteger
        );
        document.getElementById("completionDecimal").innerHTML =
            ". " + goalCompletionDecimal + " %";

        capitalGrow = Math.round(secondsInMonth / Math.floor(cashflow));
        document.getElementById("grow").innerHTML =
            SpaceAdder(Math.round(capitalGrow / 60));
    }, 1000);
}