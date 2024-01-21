let num = 5.3462;
let fixed  =num.toFixed(3);// display 3 decimal nums
console.log(fixed);


//display in locale-spedfic format
let num2 = 1000000;
console.log(`USA: ${num2.toLocaleString('en-US')}`);
console.log(`Greece: ${num2.toLocaleString('el-EL')}`);


//convert number into currency
let num3 = 8000000;
let forrmater1 = new Intl.NumberFormat('en-US',{style : 'currency', currency : 'USD'});
console.log(forrmater1.format(num3));

let forrmater2 = new Intl.NumberFormat('de-DE', {style: 'currency' , currency : 'EUR'});
console.log(forrmater2.format(num3));