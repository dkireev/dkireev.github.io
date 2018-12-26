if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js');
    });
}


let capitalText = "Capital";
let goalCompletionText = "Goal completion";
let cashflowText = "Monthly Cashflow";
let gainsEveryText = "1 &#8372; gains every";
let minutesText = "min";
let goalNotSetText = "Goal isn't set yet";
let enterGoalText = "Enter new goal";
let saveText = "Save";
let currentGoalText = "Current goal is ";
let headerTitleText = "Capital Counter";

function languageSelect() {
    if (!localStorage.getItem("language")) {
        document.getElementById("settingsContainer").style.display = "grid";
        document.getElementById("settingsContainer").onclick = function() {
            if (confirm('Переключиться на русский язык?')) {
                localStorage.setItem("language", "ru");
                setTimeout(function() { location.reload(); }, 500);

            } else {
                localStorage.setItem("language", "en");
                setTimeout(function() { location.reload(); }, 500);
            }
        }
    }
    if (localStorage.getItem("language") === "ru") {
        capitalText = "Капитал";
        goalCompletionText = "Достижение цели";
        cashflowText = "Месячный доход";
        gainsEveryText = "1 &#8372; приростает каждые";
        minutesText = "мин";
        goalNotSetText = "Цель еще не установлена";
        enterGoalText = "Введите новую цель";
        saveText = "Сохранить";
        currentGoalText = "Текущая цель: ";
        headerTitleText = "Калькулятор капитала";
    }
    document.getElementById("capitalText").innerHTML = capitalText;
    document.getElementById("goalCompletionText").innerHTML = goalCompletionText;
    document.getElementById("cashflowText").innerHTML = cashflowText;
    document.getElementById("gainsEveryText").innerHTML = gainsEveryText;
    document.getElementById("submitButton").innerHTML = saveText;
    document.getElementById("number").placeholder = enterGoalText;
    document.getElementById("minutesText").innerHTML = minutesText;
    document.getElementById("headerTitle").innerHTML = headerTitleText;
}

function openPopup() {
    document.getElementById("popupGoal").style.left = 0;
    document.getElementById("closePopup").style.right = '16px';
}

function closePopup() {
    document.getElementById("popupGoal").style.left = '100vw';
    document.getElementById("closePopup").style.right = '-100vw';
}

function updateGoalFunction(value) {
    if (value) {
        localStorage.setItem("nextGoal", value);
        document.getElementById("popupGoal").style.left = "100vw";
        setTimeout(function() { location.reload(); }, 500);
    }
}

window.addEventListener('load', function counter() {
    languageSelect();

    const millisecondsInMonth = 60 * 60 * 24 * 30.4375 * 1000;
    const tax = 18 + 1.5;
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
            "startDate": "Nov 29, 2018",
            "startAmount": "64959.97",
            "interestInMonth": "13.75"
        },
        {
            "startDate": "Dec 4, 2018",
            "startAmount": "47239.43",
            "interestInMonth": "14.5"
        },
        {
            "startDate": "Dec 24, 2018",
            "startAmount": "7523.17",
            "interestInMonth": "15"
        },
        {
            "startDate": "Dec 4, 2018",
            "startAmount": "3328.99",
            "interestInMonth": "14.5"
        },
        {
            "startDate": "Dec 7, 2018",
            "startAmount": "2226.26",
            "interestInMonth": "14.5"
        }
    ];

    localStorage.setItem("deposit", JSON.stringify(deposit));

    const nextGoal = parseInt(localStorage.getItem("nextGoal"));

    for (var i = 0; i < JSON.parse(localStorage.getItem("deposit")).length; i++) {
        startDate[i] = setStartDate(i);
        startAmount[i] = setStartAmount(i);
        interestInMonth[i] = (setInterestInMonth(i) * (100 - tax) / 100 / 12 / 100).toFixed(6);
    }

    if (localStorage.getItem("nextGoal")) {
        document.getElementById("popupCurrentGoal").innerHTML =
            currentGoalText +
            spaceAdder(localStorage.getItem("nextGoal")) +
            " &#8372;";
    } else {
        document.getElementById("popupCurrentGoal").innerHTML =
            goalNotSetText;
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
        document.getElementById("progressBar").style.width = goalCompletion + "%";

        capitalGrow = Math.round(millisecondsInMonth / (Math.floor(cashflow) * 1000));
        document.getElementById("grow").innerHTML =
            spaceAdder(Math.round(capitalGrow / 60));
    }, 1000);
});
