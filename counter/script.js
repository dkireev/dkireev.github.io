counter();

function updateGoalFunction(value) {
    if (value) {
        localStorage.setItem('nextGoal', value);
        document.getElementById('popup').style.left = '100vw';
        setTimeout(function() { location.reload(); }, 500);
    } else console.log('Wrong value');
}

function openPopup() {
    document.getElementById('popup').style.left = 0;
}

function counter(myObj) {
    /*
    localStorage.setItem('startDate1', 'Oct 29, 2018');
    localStorage.setItem('startAmount1', '64355.14');
    localStorage.setItem('interestInMonth1', '0.0098');

    localStorage.setItem('startDate2', 'Nov 4, 2018');
    localStorage.setItem('startAmount2', '39094.46');
    localStorage.setItem('interestInMonth2', '0.0103');

    localStorage.setItem('startDate3', 'Oct 22, 2018');
    localStorage.setItem('startAmount3', '6390.58');
    localStorage.setItem('interestInMonth3', '0.0103');

    localStorage.setItem('startDate4', 'Nov 2, 2018');
    localStorage.setItem('startAmount4', '3053.75');
    localStorage.setItem('interestInMonth4', '0.0103');*/

    const nextGoal = parseInt(localStorage.getItem('nextGoal'));
    const millisecondsInMonth = 60 * 60 * 24 * 30.4375 * 1000;
    const secondsInMonth = millisecondsInMonth / 1000;

    const startDate1 = Date.parse(localStorage.getItem('startDate1'));
    const startAmount1 = parseFloat(localStorage.getItem('startAmount1'));
    const interestInMonth1 = parseFloat(localStorage.getItem('interestInMonth1'));

    const startDate2 = Date.parse(localStorage.getItem('startDate2'));
    const startAmount2 = parseFloat(localStorage.getItem('startAmount2'));
    const interestInMonth2 = parseFloat(localStorage.getItem('interestInMonth2'));

    const startDate3 = Date.parse(localStorage.getItem('startDate3'));
    const startAmount3 = parseFloat(localStorage.getItem('startAmount3'));
    const interestInMonth3 = parseFloat(localStorage.getItem('interestInMonth3'));

    const startDate4 = Date.parse(localStorage.getItem('startDate4'));
    const startAmount4 = parseFloat(localStorage.getItem('startAmount4'));
    const interestInMonth4 = parseFloat(localStorage.getItem('interestInMonth4'));

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