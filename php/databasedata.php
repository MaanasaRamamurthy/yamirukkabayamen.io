<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

// $conn = mysqli_connect("localhost", "root", "", "astrologydatabase");
$conn = mysqli_connect('184.168.117.217', 'devpreethsingh', '4lD*J%Iu$l_Y', 'bookingcalendar1');
$sql = "SELECT * FROM slotbookings";

$result = @mysqli_query($conn, $sql);
$array = array();
if(mysqli_fetch_assoc($result)>0){
    while($row = mysqli_fetch_assoc($result)) {
        $array[] = $row;
    }
}else{
    echo "No data";
}
print_r(json_encode($array) );