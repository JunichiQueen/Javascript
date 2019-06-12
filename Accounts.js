
let accName = document.getElementById("accName").value;
let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;

function makeObject(accName, firstName, lastName){
    let object1 = {};
    object1.accountNumber=accName;
    object1.firstName=firstName;
    object1.lastName=lastName;
    return object1;
}


function getAnAccount() {
    let req = new XMLHttpRequest();

    let x = Number(document.getElementById("num1").value);

    req.onload = function () {
        let test = document.createElement("p");
        test.innerText = req.responseText;
        document.getElementById("display").appendChild(test);
    }
    req.open("GET", "http://localhost:8080/AccountSETemplate/api/account/getAnAccount/" + x);
    req.send();
}


function addAnAccount() {
    let req = new XMLHttpRequest();
    
    let newObject = makeObject(accName, firstName, lastName);
    let newJSON = JSON.stringify(newObject);
    
    req.onload = function () {
        console.log(req.responseText);
        let test = document.createElement("p");
        test.innerText = req.responseText;
        document.getElementById("display2").appendChild(test);
    }
    req.open("POST", "http://localhost:8080/AccountSETemplate/api/account/createAccount");
    req.send(newJSON);
}


function deleteAnAccount() {
    let req = new XMLHttpRequest();

    let x = document.getElementById("num1").value;
    
    req.onload = function () {
        let test = document.createElement("p");
        test.innerText = req.responseText;
        document.getElementById("display3").appendChild(test);
    }
    req.open("DELETE", "http://localhost:8080/AccountSETemplate/api/account/deleteAccount/" + x);
    req.send();
}

function updateAnAccount() {
    let req = new XMLHttpRequest();

    let newObject = makeObject(accName, firstName, lastName);
    let newJSON = JSON.stringify(newObject);
    let x = document.getElementById("num1").value;

    req.onload = function () {
        let test = document.createElement("p");
        test.innerText = req.responseText;
        document.getElementById("display4").appendChild(test);
    }
    req.open("PUT", "http://localhost:8080/AccountSETemplate/api/account/updateAccount/" + x);
    req.send(newJSON);
}



