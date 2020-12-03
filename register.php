<?php
$username = $_POST('username');
$password = password_hash($password, PASSWORD_DEFAULT);
$email = $_POST('email');
$phone = $_POST('pnumber');
$birthday = $_POST('bdate');
$success = false;


include('database.php');

$db = getDB();

if($db)
{
    $query = 'CREATE TABLE IF NOT EXISTS account (email VARCHAR(50) PRIMARY KEY, password TEXT NOT NULL, username VARCHAR(50) NOT NULL,phone VARCHAR(11), birthday DATE)';

    pg_query($query);

    if(isset ($username) && isset($password)&& isset($email))
    {
        $query = "INSERT INTO account VALUES ('$email', '$password','$username','$phone','$birthday')";

        $success = pg_query($query);
    }
}

echo json_encode(array('success'=>success));
?>