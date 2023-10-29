<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
        

<form >

<label for="name">Name</label>
<input type="text" name="name" id="name">

<label for="email">Email</label>
<input type="email" name="email" id="email">

<label for="ContactNo">Contact Number</label>
<input type="number" name="ContactNo" id="ContactNo">

<input type="submit" class="sumbit" >

</form>


<table style="width:100%">

<tr>
  <th>Company</th>
  <th>Contact</th>
  <th>Country</th>
</tr>

<?php
 $servername = "localhost";
 $username = "root";
 $password = "";
 $database = "myshop";

 //create connection

 $connection =  new mysqli( $servername,$username, $password,$database);  
 //check connection

 if($connection->connect_error){
  die("Connection bobo" .$connection->connect_error); 
}
  // read all row from database table

  $sql =  "SELECT * FROM clients";
  $result =  $connection->query($sql);

  if(!$result){
    die("Invalid bobo" .$connection->error);
  }
    while($row = $result->fetch_assoc()){
      echo "     
      <tr>
      <td>$row[name]</td>
      <td>$row[email]</td>
      <td>$row[phone]</td>
      </tr>
      ";
    }
?>
</table>

 


</body>
</html>