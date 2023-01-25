
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
// ini_set('display_errors', '1');
// ini_set('display_startup_errors', '1');
error_reporting(E_ALL);
require 'vendor/autoload.php';

// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
// \Stripe\Stripe::setApiKey('');
$stripe = new \Stripe\StripeClient('sk_test_51MR8gpSGsWUwmou9fcYV3dMz3GS4uS5pUWpHKGmvlSY8zhp55Pzvu4OHkVbrJiV0RhbAr75D9CRbpSRApSJ60whi009Reub9z8');
// $jsonStr = file_get_contents('php://input');
// print_r($jsonStr);
header('Content-Type: application/json');
// die();
try {
    // retrieve JSON from POST body
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);
    // Create a PaymentIntent with amount and currency
   $res = $stripe->paymentIntents->create([
        'amount' => $jsonObj->items->amount,
        'currency' => 'inr',
        'automatic_payment_methods' => [
            'enabled' => true,
        ],
    ]);
    $output = [
        'clientSecret' =>  $res->client_secret,
    ];

    echo json_encode($output);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
