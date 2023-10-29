
<?php
 $servername = "localhost";
 $username = "sqluser";
 $password = "password";
  
 $con = mysqli_connect($servername,$username,$password);

 if(!$con){
    die("connection failed: " .mysqli_connect());

 }
 echo "Connected succesfully";
  
?>