 let json = {
    fistName : "carl",
    lastName : "Declaro"
 }


 let toJSOn = JSON.stringify(json, null,2);
 console.log(toJSOn);

 //convert json to object
 let jsonToObject = JSON.parse(toJSOn);
 console.log(jsonToObject);


 //writing json directly from a string
 let jsonString = `{
    "fistName" : "carl",
    "lastName" : "Declaroo"
 }`

 let toJSonString = JSON.parse(jsonString)
 console.log(jsonString);