 // script.js (for the browser)

class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}

const userCollection = [];

function addUser(name, password) {
    const newUser = new User(name, password);
    userCollection.push(newUser);
    console.log("User added:", newUser);
}

function doesUserExist(userName) {
    return userCollection.some(user => user.name === userName);
}

function handleSubmit() {
  
    const name = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    addUser(name, password);
    console.log("Form submitted!");
}

addUser("dd","dd");
document.getElementById("signupForm").addEventListener("submit", handleSubmit);


