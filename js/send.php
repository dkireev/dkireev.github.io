<?php
  //If a form has been submited
  if(isset($_POST['submit'])) {
 //Проверка Поля ИМЯ
  if(trim($_POST['firstname']) == '') {
  $hasError = true;
  } else {
  $name = trim($_POST['firstname']);
  }
 //Validate fill-in message field
  if(trim($_POST['subject']) == 'question about') {
  $hasError = true;
  } else {
  $subject = trim($_POST['subject']);
  }
 //Validate correct e-mail
  if(trim($_POST['email']) == '')  {
  $hasError = true;
  } else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
  $hasError = true;
  } else {
  $email = trim($_POST['email']);
  }
 //Validate fill-in message field
  if(trim($_POST['message']) == '') {
  $hasError = true;
  } else {
  if(function_exists('stripslashes')) {
  $comments = stripslashes(trim($_POST['message']));
  } else {
  $comments = trim($_POST['message']);
  }
  }
 //Если ошибок нет, отправить email
  if(!isset($hasError)) {
  $emailTo = 'dkireev.com.ua@gmail.com'; //Your e-mail
  $body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nComments:\n $comments";
  $headers = 'From: My Site <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
 mail($emailTo, $subject, $body, $headers);
  $emailSent = true;
  }
  }
  ?> 