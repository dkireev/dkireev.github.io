<?php
	$salt = "asxldefjuahslkghacdfg";
	echo md5(md5($row['id'])."password");
?>