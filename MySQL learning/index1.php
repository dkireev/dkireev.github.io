<?php
	$link = mysqli_connect("db_address", "db_username", "db_password");

	if (mysqli_connect_error()) {
		die ("There was an error connecting to the database");
	}

	$name = "Rob O'Grady";

	$query = "SELECT * FROM `users` WHERE email LIKE '%p%'";
	$query = "SELECT `email` FROM `users` WHERE id >= 2 AND email LIKE '%t%'";
	$query = "SELECT `email` FROM `users` WHERE name = '".mysqli_real_escape_string($link, $name)."'"
	
	if ($result = mysqli_query($link. $query)) {
		while ($row = mysqli_fetch_array($result);) {
			print_r($row);
		}
	}
?>