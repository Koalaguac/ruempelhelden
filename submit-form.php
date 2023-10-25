<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];
  
  $to = "ichlogemichein@gmail.com"; // Ihre E-Mail-Adresse hier eintragen
  $subject = "Neue Kontaktanfrage";
  $messageBody = "Name: $name\nE-Mail: $email\nTelefonnummer: $phone\nNachricht: $message";
  
  mail($to, $subject, $messageBody);
}
?>