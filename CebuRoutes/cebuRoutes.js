

const toggleBtn = document.getElementById('toggleBtn');
const content = document.querySelectorAll('jeepCode');

const string = "pit-os talamban pit-os banilad pit-os country mall pit-os ayala pit-os colon pit-os carbon bacayan colon bacayan ayala talamban banilad talamban Ayala talamban colon talamban carbon banilad ayala banilad usc seminary banilad echavez banilad ramos talamban ramos pit-os ramos bacayan ramos banilad colon banilad uv banilad carbon ramos carbon";
const string2 = "carbon ramos carbon ayala carbon banilad carbon talamban carbon carbon colon ramos colon ayala colon banilad colon talamban colon bacayan colon ramos ayala ramos banilad ramos country mall ramos talamban ramos usc talamban ramos ayala country mall ayala paradise ayala banilad ayala usc talamban ayala talamban ayala banilad talamban banilad banilad  banilad country mall banilad usc talamban";

 const jeep62C = string.split(" ");
 const jeep13C = string2.split(" ");



const code = document.getElementById('code');

toggleBtn.addEventListener('click', function() { 
const locationInput = document.getElementById('location');
const locationValue = locationInput.value.toLowerCase();;

const destinationInput = document.getElementById('destination');
const destinationValue = destinationInput.value.toLowerCase();;




if(jeep62C.includes(locationValue) &&  jeep62C.includes(destinationValue)){
    code.innerText = "62B";
    if(jeep13C.includes(locationValue) &&  jeep13C.includes(destinationValue)){
        code.innerText = "13C";
    } 
} 

 
    
});