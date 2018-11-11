function openPopup() {
    document.getElementById("popup").style.left = 0;
    document.getElementById("closePopup").style.right = '10px';
}

function closePopup() {
    document.getElementById("popup").style.left = '100vw';
    document.getElementById("closePopup").style.right = '-100vw';
}

function updateGoalFunction(value) {
    if (value) {
        localStorage.setItem("nextGoal", value);
        document.getElementById("popup").style.left = "100vw";
        setTimeout(function() { location.reload(); }, 500);
    } else {
        console.log("Wrong value");
    }
}

function counter() {
    const millisecondsInMonth = 60 * 60 * 24 * 30.4375 * 1000;
    const secondsInMonth = millisecondsInMonth / 1000;
    let startDate = [];
    let startAmount = [];
    let interestInMonth = [];
    let currentAmount = [];
    let cashflowArray = [];
    let cashflow = 0;
    let currentTime = 0;
    let capital = 0;
    let goalCompletion = 0;
    let capitalInteger = 0;
    let capitalDecimal = 0;
    let cashflowInteger = 0;
    let cashflowDecimal = 0;
    let capitalGrow = 0;
    let goalCompletionInteger = 0;
    let goalCompletionDecimal = 0;

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
    const deposit = [{
            "startDate": "Nov 8, 2018",
            "startAmount": "85064",
            "interestInMonth": "0.0107"
        }
    ];

    if (!localStorage.getItem("deposit")) {
        localStorage.setItem("deposit", JSON.stringify(deposit));
    }

    const nextGoal = parseInt(localStorage.getItem("nextGoal"));

    for (var i = 0; i < JSON.parse(localStorage.getItem("deposit")).length; i++) {
        startDate[i] = setStartDate(i);
        startAmount[i] = setStartAmount(i);
        interestInMonth[i] = setInterestInMonth(i);
    }

    if (localStorage.getItem("nextGoal")) {
        document.getElementById("popupCurrentGoal").innerHTML =
            "Ваша цель: " +
            spaceAdder(localStorage.getItem("nextGoal")) +
            " &#8372;";
    } else {
        document.getElementById("popupCurrentGoal").innerHTML =
            "Цель еще не установлена";
    }

    setInterval(function() {
        currentTime = Date.now();
        let currentAmountSum = 0;
        let cashflowSum = 0;

        for (var i = 0; i < JSON.parse(localStorage.getItem("deposit")).length; i++) {
            currentAmount[i] = startAmount[i] + startAmount[i] * interestInMonth[i] /
                millisecondsInMonth * (currentTime - startDate[i]);
            cashflowArray[i] = currentAmount[i] * interestInMonth[i];
            currentAmountSum += currentAmount[i];
            cashflowSum += cashflowArray[i];
        }
        capital = currentAmountSum;
        cashflow = cashflowSum;

        capitalInteger = Math.floor(capital.toFixed(2));
        capitalDecimal = decimalExtractor(capital);
        document.getElementById("capitalInteger").innerHTML = spaceAdder(
            capitalInteger
        );
        document.getElementById("capitalDecimal").innerHTML =
            ". " + capitalDecimal + " &#8372;";

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