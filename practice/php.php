<?php

  include "db_conn.php";

  if(isset($_POST['submit'])){
     $purchased = $_POST['purchased'];
     $price = $_POST['price'];
     $sql = "INSERT INTO `expenses`(`id`,`spent`, `price`)
     VALUES (NULL ,'$purchased',' $price ')";
  }


    $result = mysqli_query($con,$sql);

    if($result){
        header("Location: index.php?msg=New record created succesfully");
    }else{
        echo"Failed: " .mysqli_error($con);
    }





 

?>





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
    


<div class="body">
 


          <div class="Navbar">

            <div class="navList">
                <button id="btnTrack"> TRACK </button>
                <button id="btnDay"> DAY </button>
                <button id="btnWeek"> WEEK </button>
                <button id="btnMonth"> MONTH </button>
                <button id="btnYear"> YEAR </button>
            </div>
       



 </div>
 



<div class="content"> 
    <h1 class="title">Money Tracker</h1>
     <div id="track">

    <div class="shesh" >
            <div class="button">
                 
                <input type="text" name="purchased" id="expenses" placeholder="Spent"><br>
 
                <input type="text" name="price" id="expenses" placeholder="Price"><br><br>   
                <button type="submit" class="done" name="submit">Done</button>
                
             

            </div>
         

            <div class="x"> 
                <label for="search">Search</label>
                <input type="search" name=search>
              </div>  
 </div>




            <div class="list-of-items">

                <div class="items">
                  <div class="table">
                    <table>
                       
                     </table>
                  </div>  
                 
                </div>


            </div>




           </div>
        

     <div id="day">
      
        <h1>Hello this is Day feature</h1>
        

        </div>
     </div>

     <div id="week">
      
        <h1>Hello this is Week feature</h1>
         


        </div>
     </div>

     <div id="month">
      
        <h1>Hello this is Month feature</h1>
 
        </div>
     </div>


     <div id="year">
      
        <h1>Hello this is Year feature</h1>
         
     </div>

    </div>


  

    <script src="index.js"></script>
</body>
</html>