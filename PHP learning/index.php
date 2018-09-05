<?php
	/* VARIABLES */
	echo "Hello World";
	$name = "Dima";
	echo $name;
	echo "My name is $name";
	$string1 = "<p>This is the first part";
	$string2 = "of a sentence</p>";
	echo $string1." ".$string2;
	$number = 45;
	$calc = $number * 31 / 97 + 4;
	echo "The result of calculation is ".$calc;
	$bool = true;
	echo "<p>This statement is true? ".$bool."</p>";
	$variableName = "name";
	echo $$variableName;

	/* ARRAYS */
	$myArray = array("Rob", "Kirsten", "Tommy", "Ralphie");
	$myArray[] = "Katie";
	echo $myArray; /* Wrong way of print out of array */
	print_r($myArray);
	echo $myArray[1];
	$anotherArray[0] = "pizza";
	$anotherArray[1] = "yoghurt";
	$anotherArray[5] = "coffee";
	$anotherArray["myFavoriteFood"] = "ice cream";
	print_r($anotherArray);
	$thirdArray = array(
		"France" => "French",
		"USA" => "English",
		"Germany" => "German");
	unset($thirdArray["France"]);
	print_r($thirdArray);
	echo sizeof($thirdArray);

	/* CONDITIONS */
	$user = "rob";

	if(user == "rob") {
		echo "Hello".$user;
	} else {
		echo "I don't know you";
	}

	$age = 25;

	if ($age >= 18 && $user == "rob" || $age <= 37) {
		echo "You may proceed";
	} else {
		echo "You're too young, sorry!";
	}

	/* LOOPS */
	for ($i = 0; $i < 10; $i++) {
		echo $i."<br>";
	}

	$family = array("Dima", "Olia", "Ehor");

	for ($i = 0; $i < sizeof($family); $i++) {
		echo $family[$i]."<br>";
	}

	foreach ($family as $key => $value) {
		$family[$key] = $value." Kireiev";
		echo "Array item ".$key." is ".$value."<br>";
	}

	$i = 0;
	while ($i < 10) {
		echo $i."<br>";
		$i++;
	}

	$family = array("Dima", "Olia", "Ehor");
	$i = 0;
	while ($i < sizeof($family)) {
		echo $family[$i],"<br>";
		$i++;
	}

	/* GET variables */
	print_r($_GET);
	echo "Hi there".$_GET["name"]."!";
	if ($_GET) {
		$i = 2;
		$isPrime = true;
		while ($i <= $_GET['number']) {
			if ($_GET['number']%$i == 0) {
				// Number is not prime!
				$isPrime = false;
			}
			$i++;
		}
		if ($isPrime) {
			echo "<p>".$i." is a prime number!</p>";
		} else {
			echo "<p>".$i." is not prime.</p>";
		}
	}

	/* POST variables */
	print_r($_POST);
	if ($_POST) {
		$family = array("Dima", "Ehor", "Olia");
		$isKnown = false;
		foreach ($family as $value) {
			if ($value == $_POST['name']) {
				$isKnown = true;
			}
		}
		if ($isKnown) {
			echo "Hi there".$_POST['name']."!";
		} else {
			echo "I don't know you";
		}
	}
?>

<p>Please enter a whole number</p>

<form action="" method="post">
	<input type="text" name="name">
	<input type="submit" value="Go!">
</form>