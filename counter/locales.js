let goalTitle = "Capital";
let goalDescription = "Deposit";
let goalCompletionTitle = "Goal completion";
let dailyCashflowTitle = "Daily Cashflow";
let monthlyCashflowTitle = "Monthly Cashflow";
let annualCashflowTitle = "Annual Cashflow";
let gainsEveryTitle = "1 &#8372; gains every";
let minutesText = "min";
let goalNotSetText = "Goal isn't set yet";
let enterGoalText = "Enter new goal";
let saveText = "Save";
let currentGoalText = "Current goal is ";
let headerTitleText = "Capital Counter";

function languageSelect() {
    if (!localStorage.getItem("language")) {
        document.querySelector("#settingsContainer").style.display = "grid";
        document.querySelector("#settingsContainer").onclick = function() {
            if (confirm("Переключиться на русский язык?")) {
                localStorage.setItem("language", "ru");
            } else {
                localStorage.setItem("language", "en");
            }
            setTimeout(function() {
                location.reload();
            }, 500);
        };
    }
    if (localStorage.getItem("language") === "ru") {
        goalTitle = "Капитал";
        goalDescription = "Депозит";
        goalCompletionTitle = "Достижение цели";
        dailyCashflowTitle = "Доход в час";
        monthlyCashflowTitle = "Месячный доход";
        annualCashflowTitle = "Годовой доход";
        gainsEveryTitle = "1 &#8372; приростает каждые";
        minutesText = "мин";
        goalNotSetText = "Цель еще не установлена";
        enterGoalText = "Введите новую цель";
        saveText = "Сохранить";
        currentGoalText = "Текущая цель: ";
        headerTitleText = "Калькулятор капитала";
    }
    document.querySelector("#goalTitle").innerHTML = goalTitle;
    document.querySelector("#goalDescription").innerHTML = goalDescription;
    document.querySelector("#goalCompletionTitle").innerHTML = goalCompletionTitle;
    document.querySelector("#dailyCashflowTitle").innerHTML = dailyCashflowTitle;
    document.querySelector("#monthlyCashflowTitle").innerHTML = monthlyCashflowTitle;
    document.querySelector("#annualCashflowTitle").innerHTML = annualCashflowTitle;
    document.querySelector("#gainsEveryTitle").innerHTML = gainsEveryTitle;
    document.querySelector("#submitButton").innerHTML = saveText;
    document.querySelector("#number").placeholder = enterGoalText;
    document.querySelector("#minutesText").innerHTML = minutesText;
    document.querySelector("#headerTitle").innerHTML = headerTitleText;
}