<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = 'medinaflavien@yahoo.fr';
$email_subject = "Nouveau message de $name";
$email_body = "$message\n\n Infos:\nNom: $name\nEmail: $email_address\nTéléphone : $phone";
$headers = "From: flavien-medina.fr@website\n";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
