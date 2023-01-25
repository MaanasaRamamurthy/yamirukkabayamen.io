<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$data = json_decode(file_get_contents("php://input"));

// $conn = mysqli_connect("localhost", "root", "", "astrologydatabase");
// mysqli_select_db($conn,"astrologydatabase");

$conn = mysqli_connect('184.168.117.217', 'devpreethsingh', '4lD*J%Iu$l_Y', 'bookingcalendar1');
mysqli_select_db($conn,"bookingcalendar1");

$username = $data -> username;
$password = $data -> password;
$username1=implode($username);
$password1=implode($password);


$check = "SELECT username,password FROM usersdata WHERE username = \"$username1\" AND password = \"$password1\"";
$result = @mysqli_query($conn, $check);
$row = mysqli_fetch_assoc($result);

if($row === null){
    echo "false";
}
else{
    echo "true";
}
