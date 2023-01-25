<?php
require_once('vendor/autoload.php');

$stripe = [
  "secret_key"      => "sk_test_51MR8gpSGsWUwmou9fcYV3dMz3GS4uS5pUWpHKGmvlSY8zhp55Pzvu4OHkVbrJiV0RhbAr75D9CRbpSRApSJ60whi009Reub9z8",
  "publishable_key" => "pk_test_51MR8gpSGsWUwmou9t8NoOLy2nKhk8UIn1gNpJZ0UN9Ds5RzFrBY05OHyBpinCcap45ZzvDWYKGImYR7yn0wPS8Bq00HWWV30GY",
];

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>