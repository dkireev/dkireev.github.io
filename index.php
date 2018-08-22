<?php
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
?>