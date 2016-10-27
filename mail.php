<?php

$recepient = "dkireev.com.ua@gmail.com";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$phone = trim($_GET["phone"]);
$message = trim($_GET["message"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");