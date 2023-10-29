 const btnTrack = document.querySelector("#btnTrack");
 const track = document.querySelector("#track");

 const btnDay = document.querySelector("#btnDay");
 const day = document.querySelector("#day");
 
 const btnWeek = document.querySelector("#btnWeek");
 const week = document.querySelector("#week");

 const btnMonth = document.querySelector("#btnMonth");
 const month = document.querySelector("#month");

 const btnYear = document.querySelector("#btnYear");
 const year = document.querySelector("#year");



 btnTrack.addEventListener("click", function(){
    track.style.display = "block";
    day.style.display = "none"; 
    day.style.display = "none"; 
    week.style.display = "none"; 
    month.style.display = "none"; 
    year.style.display = "none";
 })


 btnDay.addEventListener("click", function(){
    track.style.display = "none";
    day.style.display = "block"; 
    week.style.display = "none"; 
    month.style.display = "none"; 
    year.style.display = "none";
 })

 btnWeek.addEventListener("click", function(){               
    track.style.display = "none";
    day.style.display = "none";  
    week.style.display = "block"; 
    month.style.display = "none"; 
    year.style.display = "none"; 
 })

 btnMonth.addEventListener("click", function(){               
    track.style.display = "none";
    day.style.display = "none";  
    week.style.display = "none"; 
    month.style.display = "block"; 
    year.style.display = "none"; 
})

btnYear.addEventListener("click", function(){               
    track.style.display = "none";
    day.style.display = "none";  
    week.style.display = "none"; 
    month.style.display = "none"; 
    year.style.display = "block"; 
})