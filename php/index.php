<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$data = json_decode(file_get_contents("php://input"));

 $conn = mysqli_connect("localhost", "root", "", "astrologydatabase");
 mysqli_select_db($conn,"astrologydatabase");

// $conn = mysqli_connect('184.168.117.217', 'devpreethsingh', '4lD*J%Iu$l_Y', 'bookingcalendar1');
// mysqli_select_db($conn,"bookingcalendar1");

$first_name = $data -> FirstName;
$last_name = $data -> LastName;
$email = $data -> Email;
$phone = $data -> Phone;
$date = $data -> Date;
$time = $data -> Time;
$address = $data -> Address;
// $transactionID = $data -> TransactionID;
$dob = $data ->DOB;
$tob = $data ->TOB;
// $fee = $data ->PaymentAmt;
// $chart = $data ->chart;

echo $dob;
echo $tob;

if($first_name != null){
    $sql = "insert into slotbookings (firstname,lastname,email,phonenumber,address,dob,tob,date,time,fee)
    values(
        '$first_name',
        '$last_name ',
        '$email',
        '$phone',
        '$address',
        '$dob',
        '$tob',
        
        '$date',
        '$time',
        
        
    )";
}


$result = @mysqli_query($conn, $sql);
if ($result) {
    echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}

if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
}