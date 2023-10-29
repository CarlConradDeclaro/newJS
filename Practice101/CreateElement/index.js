
function Create(){
    const create = document.createElement("div");
create.classList.add('div-style');

const newParagraph = document.createElement("p");
newParagraph.innerText = "Hello";

create.appendChild(newParagraph);

}

