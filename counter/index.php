<?php
    mysqli_connect("localhost", "u_personalfi", "AeXWM7EW");

    $capitalText = "Capital";
    $goalCompletionText = "Goal completion";
    $cashflowText = "Cashflow";
    $gainsEveryText = "1 &#8372; gains every";
    $minutesText = "min";
    $goalNotSetText = "Goal isn't set yet";
    $enterGoalText = "Enter new goal";
    $saveText = "Save";
    $currentGoalText = "Current goal is ";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <title>Counter 2.6</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body onload="counter()">
    <div id="settingsContainer">
        <img id="settings" src="settings.png" alt="">
    </div>
    <div class="appContainer">
        <div class="infoContainer capitalContainer">
            <h1 id="capitalText"><?php echo $capitalText; ?></h1>
            <p><span id="capitalInteger"></span><span id="capitalDecimal"></span></p>
        </div>
        <div class="detailsContainer">
            <div class="infoContainer goalContainer">
                <h2 id="goalCompletionText"><?php echo $goalCompletionText; ?></h2>
                <p><span id="completionInteger"></span><span id="completionDecimal"></span></p>
                <div class="edit" onclick="openPopup()">
                    <img src="edit.png" alt="">
                </div>
                <div class="progressContainer">
                    <div id="progressBar"></div>
                </div>
            </div>
            <div class="infoContainer cashflowContainer">
                <h2 id="cashflowText"><?php echo $cashflowText; ?></h2>
                <p><span id="cashflowInteger"></span><span id="cashflowDecimal"></span></p>
            </div>
            <div class="infoContainer growContainer">
                <h2 id="gainsEveryText"><?php echo $gainsEveryText; ?></h2>
                <p><span id="grow"></span> <span id="minutesText"><?php echo $minutesText; ?></span></p>
            </div>
        </div>
    </div>
    <div class="popup" id="popupGoal">
        <img id="closePopup" src="close.png" onclick="closePopup()" alt="">
        <p id="popupCurrentGoal"><?php echo $goalNotSetText; ?></p>
        <input type="number" id="number" placeholder="<?php echo $enterGoalText; ?>">
        <button id="submitButton" type="submit" onclick="updateGoalFunction(document.getElementById('number').value)"><?php echo $saveText; ?></button>
    </div>
    <script async src="script.js"></script>
</body>

</html>