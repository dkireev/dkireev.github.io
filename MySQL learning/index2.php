<?php
	session_start();
	if (array_key_exists('email', $_POST) OR array_key_exists('password', $_POST)) {
		if ($_POST['email'] == '') {
			echo "<p>Email is required</p>";
		} else if ($_POST['password'] == '') {
			echo "<p>Password is required</p>";
		} else {
			$quiery = "SELECT `id` FROM `users` WHERE email = '".mysqli_real_escape_string($_POST['email'])."'";
			$result = mysqli_query($link, $query);
			if (mysqli_num_rows($result) > 0) {
				echo "<p>That wmail address has already been taken</p>";
			} else {
				$query = "INSERT INTO `users` (`email, `password`) VALUES
					('".mysqli_real_escape_string($link, $_POST['email'])."',
					'".mysqli_real_escape_string($link, $_POST['password'])."')";
				if (mysqli_query($link, $query)) {
					$_SESSION['email'] = $_POST['email'];
					header("Location: session.php");
				} else {
					echo "<p>Something's wrong. Please try again later</p>";
				}
			}
		}
	}
?>

<form action="" method="post">
	<input type="email" name="email" placeholder="Email">
	<input type="password" name="password" placeholder="Password">
	<input type="submit" value="Sign up">
</form>