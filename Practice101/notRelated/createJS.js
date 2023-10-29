const BtnAdd = document.querySelector(".btn-add");
const DviContainer =document.getElementById("div-conatainer");
const totalContainer =document.getElementById("total");

BtnAdd.addEventListener("click", AddNew);



let divCount = 1;

function AddNew() {
  const newDiv = document.createElement("div");
  newDiv.classList.add('div-shadow');

  const inputElement = document.getElementById("input"); // Replace "myInput" with the actual id of your input element
  const value = inputElement.value;

  const newParagraph = document.createElement("p");
  newParagraph.innerText = value;
  
  const quantity = document.createElement("p");
  quantity.innerText = 0;
  quantity.classList.add('quantity'); // Add the "quantity" class to the element


  const newButtonPlus = document.createElement("button");
  newButtonPlus.textContent = "+";
  
  const newButtonMinus = document.createElement("button");
  newButtonMinus.textContent = "-";
  
  let currentValue = 1;
  
  newButtonPlus.addEventListener('click', function() {
  const quantityElement = this.parentNode.querySelector('.quantity');
  currentValue = parseInt(quantityElement.innerText);
  quantityElement.innerText = ++currentValue;

  const divId = this.parentNode.id; // Get the id of the parent div
  const divNumber = parseInt(divId.split('-')[1]); // Extract the div number from the id
  
  const productList = totalContainer.querySelector('.products-' + divNumber);
  if (productList) {
    productList.innerText =value+ "...................."+currentValue; // Update the product list with the final click count
  } else {
    const productListContainer = document.createElement("ol");
    productListContainer.classList.add('products-' + divNumber);
    productListContainer.style.listStyle = "none"; // Remove the default list styling
    const productItem = document.createElement("li");
    productItem.innerText = value+ " ...................."  +currentValue;
    productListContainer.appendChild(productItem);
    totalContainer.appendChild(productListContainer);
  }
});
 
  newButtonMinus.addEventListener('click', function() {
    const quantityElement = this.parentNode.querySelector('.quantity');
     currentValue = parseInt(quantityElement.innerText);   
    quantityElement.innerText = --currentValue;
       
    
  const divId = this.parentNode.id; // Get the id of the parent div
  const divNumber = parseInt(divId.split('-')[1]); // Extract the div number from the id
  
  const productList = totalContainer.querySelector('.products-' + divNumber);
  if (productList) {
    productList.innerText =value+ "...................."+  currentValue; // Update the product list with the final click count
  }else {
    const productListContainer = document.createElement("ol");
    productListContainer.classList.add('products-' + divNumber);
    productListContainer.style.listStyle = "none"; // Remove the default list styling
    const productItem = document.createElement("li");
    productItem.innerText = value+ "...................."+currentValue;
    productListContainer.appendChild(productItem);
    totalContainer.appendChild(productListContainer);
  }
    
  });

  newDiv.appendChild(newParagraph);
  newDiv.appendChild(quantity);
  newDiv.appendChild(newButtonPlus);
  newDiv.appendChild(newButtonMinus);


  newDiv.id = "div-" + divCount; // Assign a unique id to the div
  
  divCount++;
  
  DviContainer.appendChild(newDiv);

}

 
 