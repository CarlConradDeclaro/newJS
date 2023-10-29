

//to create an element
 let createElement = document.createElement('input');
 
 //to setAttribute
 let createAttribute = document.createElement('div');
 createAttribute.setAttribute('class','dcode');

 // this is the textContent
let textcontent = document.getElementById('title');
textcontent.textContent = "the content has changed";

 // to excute or to append those that are above
  document.body.appendChild(createAttribute);
  document.body.appendChild(createElement);

// this how to use the appenChild
  let getList = document.getElementById('list');
  let fruitList = ["Banana","Orange","Apple","Mango"];
  for(let fruits of fruitList){ 
  let createList = document.createElement('li');
  createList.textContent= fruits;
  getList.appendChild(createList);
  }
