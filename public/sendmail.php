<?php
    $respuesta=array();

    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];
    $modelo = $_POST['modelo'];
    $marca = $_POST['marca'];

    $cad = 'El cliente '.$nombre.' quiere contactarse con REPARACIONES DE PARABRISAS MYF, teléfono: '.$telefono.', correo: '.$correo.', mensaje: '.$mensaje.', marca: '.$marca.', modelo: '.$modelo;

    mail('vgamarrav@uni.pe', 'CLIENTE POTENCIAL', $cad);
    mail('ventas@reparaciondeparabrisas.pe', 'CLIENTE POTENCIAL', $cad);

    $respuesta['nombre'] = $nombre;
    $respuesta['modelo'] = $modelo;
    $respuesta['marca'] = $marca;
    $respuesta['telefono'] = $telefono;
    $respuesta['mensaje'] = $mensaje;
    $respuesta['correo'] = $correo;
    $respuesta['data'] = 'Mensaje Enviado Correctamente';
    echo json_encode($respuesta);
?>