<?php
// несколько получателей
$to  = 'dkireev.com.ua@gmail.com' . ', ';  // обратите внимание на запятую
$to .= 'wez@example.com';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = 'Пользователь' . $_POST['firstname'] . ' отправил вам письмо:<br />' . $_POST['message'] . '<br />
Связяться с ним можно по email <a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>'
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf8' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Иван <dkireev.com.ua@gmail.com>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>