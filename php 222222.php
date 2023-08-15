<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title>
</head>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["correo"];
    $pais = $_POST["pais"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    $to = "oliveraaron49@gmail.com"; // Cambia esto a tu dirección de correo
    $subject = "Nuevo mensaje de contacto desde el sitio web";
    $message = "Nombre: $nombre $apellido\n";
    $message .= "Correo: $correo\n";
    $message .= "País: $pais\n";
    $message .= "Teléfono: $telefono\n\n";
    $message .= "Mensaje:\n$mensaje";

    mail($to, $subject, $message);

    echo "Mensaje enviado correctamente. Gracias por contactarnos.";
}
?>

	
<body>
</body>
</html>