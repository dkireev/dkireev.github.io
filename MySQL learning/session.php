<?php
	session_start();
	if ($_SESSION['email']) {
		echo "You're logged in";
	} else {
		header("Location: index.php");
	}
?>