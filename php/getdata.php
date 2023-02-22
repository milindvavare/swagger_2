<?php 
// $operations = '{"operation_1":{"name": "key_insights"},"operation_2":{"name": "key_questions"},    "operation_3":{"name": "central_themes_main_points"}}';

$operations = $_POST['options'];

// Create a CURLFile object
$cfile = curl_file_create($_FILES['file']['tmp_name'],$_FILES['file']['type'],$_FILES['file']['name']);

$postRequest = array(
   'files' => $cfile,
   'query ' => $operations
);

// $cURL = curl_init('http://3.110.203.211/mvp_flow5/internal/synthesize?operations=%7B%22operation_1%22%3A%20%20%20%7B%22name%22%3A%20%22key_insights%22%7D%2C%20%20%22operation_2%22%3A%20%20%20%20%7B%22name%22%3A%20%22key_questions%22%7D%2C%20%22operation_3%22%3A%20%20%20%20%7B%22name%22%3A%20%22central_themes_main_points%22%7D%20%7D');
$cURL = curl_init('http://3.110.203.211/mvp_flow5/internal/synthesize?operations='.$operations);


curl_setopt($cURL, CURLOPT_POSTFIELDS, $postRequest);
curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
//curl_setopt($curl, CURLOPT_TIMEOUT_MS, 0);
$result = curl_exec($cURL);          
print_r($result);
?>