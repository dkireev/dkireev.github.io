if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("sw.js");
    });
}

function touchStart({touches}) {
  const {clientX} = touches[0];
  dragStart({clientX})
}

function mouseDown({clientX}) {
  dragStart({clientX})
}

function dragStart({clientX}) {
  touchStartPosition = clientX;
}

const CASHFLOW_DRAGABLE_ELEMENT = document.querySelector("#monthlyCashflowInnerContainer");

var touchStartPosition = 0;
var touchEndPosition = 0;
var touchDelta = 0;
var leftPropertyScreen = -100;
var leftPropertyDelta = 50;
CASHFLOW_DRAGABLE_ELEMENT.style.left = "calc(" + leftPropertyScreen + "vw + " + leftPropertyDelta + "px)";
CASHFLOW_DRAGABLE_ELEMENT.addEventListener("touchstart", touchStart, false);
CASHFLOW_DRAGABLE_ELEMENT.addEventListener("mousedown", mouseDown, false);
CASHFLOW_DRAGABLE_ELEMENT.addEventListener("touchmove", function(e) {
    touchEndPosition = e.touches[0].clientX;
    touchDelta = Math.round(touchStartPosition - touchEndPosition);
    if (Math.abs(touchDelta) <= 100) {
        let leftPropertyTouchDelta = leftPropertyDelta - touchDelta;
        CASHFLOW_DRAGABLE_ELEMENT.style.left = "calc(" + leftPropertyScreen + "vw + " + leftPropertyTouchDelta + "px)";
    }
}, false);
CASHFLOW_DRAGABLE_ELEMENT.addEventListener("touchend", function() {
    
    if (touchDelta > 100 && leftPropertyScreen > -200) {
        leftPropertyScreen -= 100;
        leftPropertyDelta += 30;
    }
    if (touchDelta < -100 && leftPropertyScreen < 0) {
        leftPropertyScreen += 100;
        leftPropertyDelta -= 30;
    }
    CASHFLOW_DRAGABLE_ELEMENT.style.left = "calc(" + leftPropertyScreen + "vw + " + leftPropertyDelta + "px)";
})

if (localStorage.getItem("deposit")) {
    localStorage.removeItem("deposit");
}

function openPopup() {
    document.querySelector("#popupGoal").style.left = 0;
    document.querySelector("#closePopup").style.right = "16px";
}

function closePopup() {
    document.querySelector("#popupGoal").style.left = "100vw";
    document.querySelector("#closePopup").style.right = "-100vw";
}

function updateGoalFunction(value) {
    if (value) {
        localStorage.setItem("nextGoal", value);
        document.querySelector("#popupGoal").style.left = "100vw";
        setTimeout(function() {
            location.reload();
        }, 500);
    }
}

window.addEventListener("load", function counter() {
    languageSelect();

    const MILLISECONDS_IN_MONTH = 60 * 60 * 24 * 30.4375 * 1000;
    const TAX_RATE = 18 + 1.5;
    const DEPOSIT_PARSE = JSON.parse(sessionStorage.getItem("deposit"));
    const POPUP_CURRENT_GOAL = document.querySelector("#popupCurrentGoal");

    let startDate = [];
    let startAmount = [];
    let interestRate = [];
    let currentAmount = [];
    let monthlyCashflowArray = [];
    let dailyCashflow = 0;
    let monthlyCashflow = 0;
    let annualCashflow = 0;
    let currentTime = 0;
    let capital = 0;
    let goalCompletion = 0;
    let capitalInteger = 0;
    let capitalDecimal = 0;
    let dailyCashflowInteger = 0;
    let dailyCashflowDecimal = 0;
    let monthlyCashflowInteger = 0;
    let monthlyCashflowDecimal = 0;
    let annualCashflowInteger = 0;
    let annualCashflowDecimal = 0;
    let capitalGrow = 0;
    let goalCompletionInteger = 0;
    let goalCompletionDecimal = 0;

    function spaceAdder(a) {
        return a.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
    }

    function decimalExtractor(b) {
        const a = Math.floor((b % 1) * 100);
        const length = a.toString().length;
        if (length == 2) {
            return a;
        } else {
            return "0" + a;
        }
    }

    function setStartDate(i) {
        return Date.parse(DEPOSIT_PARSE[i].startDate);
    }

    function setStartAmount(i) {
        return parseFloat(DEPOSIT_PARSE[i].startAmount);
    }

    function setInterestRate(i) {
        return parseFloat(DEPOSIT_PARSE[i].interestRate);
    }

    if (
        !sessionStorage.getItem("deposit") ||
        sessionStorage.getItem("deposit") !== JSON.stringify(deposit)
    ) {
        location.reload();
        sessionStorage.setItem("deposit", JSON.stringify(deposit));
    }

    const nextGoal = parseInt(localStorage.getItem("nextGoal"));

    for (var i = 0; i < DEPOSIT_PARSE.length; i++) {
        startDate[i] = setStartDate(i);
        startAmount[i] = setStartAmount(i);
        interestRate[i] = (
            (setInterestRate(i) * (100 - TAX_RATE)) /
            100 /
            12 /
            100
        ).toFixed(6);
    }

    if (localStorage.getItem("nextGoal")) {
        POPUP_CURRENT_GOAL.innerHTML =
            currentGoalText +
            spaceAdder(localStorage.getItem("nextGoal")) +
            " &#8372;";
    } else {
        POPUP_CURRENT_GOAL.innerHTML = goalNotSetText;
    }

    setInterval(function() {
        currentTime = Date.now();
        let currentAmountSum = 0;
        let monthlyCashflowSum = 0;

        for (var i = 0; i < DEPOSIT_PARSE.length; i++) {
            currentAmount[i] =
                startAmount[i] +
                ((startAmount[i] * interestRate[i]) / MILLISECONDS_IN_MONTH) *
                (currentTime - startDate[i]);
            monthlyCashflowArray[i] = currentAmount[i] * interestRate[i];
            currentAmountSum += currentAmount[i];
            monthlyCashflowSum += monthlyCashflowArray[i];
        }
        capital = currentAmountSum;
        monthlyCashflow = monthlyCashflowSum;
        dailyCashflow = monthlyCashflow / 30.4375;
        annualCashflow = monthlyCashflow * 12;

        capitalInteger = Math.floor(capital.toFixed(2));
        capitalDecimal = decimalExtractor(capital);
        document.querySelector("#capitalInteger").innerHTML = spaceAdder(
            capitalInteger
        );
        document.querySelector("#capitalDecimal").innerHTML =
            ". " + capitalDecimal + " &#8372;";

        dailyCashflowInteger = Math.floor(dailyCashflow.toFixed(2));
        dailyCashflowDecimal = decimalExtractor(dailyCashflow);
        document.querySelector("#dailyCashflowInteger").innerHTML = spaceAdder(
            dailyCashflowInteger
        );
        monthlyCashflowInteger = Math.floor(monthlyCashflow.toFixed(2));
        monthlyCashflowDecimal = decimalExtractor(monthlyCashflow);
        document.querySelector("#monthlyCashflowInteger").innerHTML = spaceAdder(
            monthlyCashflowInteger
        );
        annualCashflowInteger = Math.floor(annualCashflow.toFixed(2));
        annualCashflowDecimal = decimalExtractor(annualCashflow);
        document.querySelector("#annualCashflowInteger").innerHTML = spaceAdder(
            annualCashflowInteger
        );
        document.querySelector("#dailyCashflowDecimal").innerHTML =
            ". " + dailyCashflowDecimal + " &#8372;";
            document.querySelector("#monthlyCashflowDecimal").innerHTML =
            ". " + monthlyCashflowDecimal + " &#8372;";
        document.querySelector("#annualCashflowDecimal").innerHTML =
            ". " + annualCashflowDecimal + " &#8372;";

        goalCompletion = (parseInt(capital) * 100) / nextGoal;
        goalCompletionInteger = Math.floor(goalCompletion.toFixed(2));
        goalCompletionDecimal = decimalExtractor(goalCompletion);
        document.querySelector("#completionInteger").innerHTML = spaceAdder(
            goalCompletionInteger
        );
        document.querySelector("#completionDecimal").innerHTML =
            ". " + goalCompletionDecimal + " %";
        document.querySelector("#progressBar").style.width = goalCompletion + "%";

        capitalGrow = Math.round(
            MILLISECONDS_IN_MONTH / (Math.floor(monthlyCashflow) * 1000)
        );
        document.querySelector("#grow").innerHTML = spaceAdder(
            Math.round(capitalGrow / 60)
        );
    }, 1000);
});