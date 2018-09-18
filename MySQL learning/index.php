<?php

	setcookie('customerId', '1234', time() + 60 * 60 * 24 * 365);
	setcookie('customerId', '', time() - 60 * 60);
	$_COOKIE['customerId'] = "test";
	echo $COOKIE['customerId'];

	$link = mysqli_connect("db_address", "db_username", "db_password");

	if (mysqli_connect_error()) {
		die ("There was an error connecting to the database");
	}

	$query = "INSERT INTO `users` (`email`, `password`) VALUES ('dkkkiedi@asd.asd', 'dasdkuxnefl')";

	$query = "UPDATE `users` SET email = 'asdasd@asdasd.cc' WHERE id = 1 LIMIT 1"
	mysqli_query($link, $query);

	$query = "UPDATE `users` SET password = 'asdfYlhGg6' WHERE email = 'sdfdsfd@sdfds.vr' LIMIT 1";

	mysqli_query($link, $query);

	$query = "SELECT * FROM `users`";

	if ($result = mysqli_query($link. $query)) {
		$row = mysqli_fetch_array($result);
		echo "Your email is ".$row['email']." and your password is ".$row['password'];
	}
?>