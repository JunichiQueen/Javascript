


function makeObject(accName, firstName, lastName) {
    let object1 = {};
    object1.accountNumber = accName;
    object1.firstName = firstName;
    object1.lastName = lastName;
    let object2 = JSON.stringify(object1);
    return object2;
}

function example(command, callback) {
    command();
    callback();
}

function getAllAccounts() {

    makeRequest("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts/").then(req => {
        let test = document.createElement("p");
        test.innerText = req.responseText;
        document.getElementById("display").appendChild(test);
    });
  
}

function getAnAccount() {

    let x = Number(document.getElementById("num1").value);
    makeRequest("GET", "http://localhost:8080/AccountSETemplate/api/account/getAnAccount/" + x).then(req => {
        let test = document.createElement("p");
        test.innerText = req.responseText;
        document.getElementById("display").appendChild(test);
    });

}


function addAnAccount() {
    
    let accName = document.getElementById("accName").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
   
    let newObject = makeObject(accName, firstName, lastName);

    console.log(newObject);
    makeRequest("POST", "http://localhost:8080/AccountSETemplate/api/account/createAccount", newObject).then(req => {
        console.log(req.responseText);
        let test = document.createElement("p");
        test.innerText = req.responseText;
        document.getElementById("display").appendChild(test);
    })

}


function deleteAnAccount() {
    let x = document.getElementById("num1").value;
    makeRequest("DELETE", "http://localhost:8080/AccountSETemplate/api/account/deleteAccount/" + x).then(req => {
        let test = document.createElement("p");
        test.innerText = req.responseText;
        document.getElementById("display").appendChild(test);
    })
    
}

function updateAnAccount() {

    let accName = document.getElementById("accName").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let newObject = makeObject(accName, firstName, lastName);

    let x = document.getElementById("num1").value;

    makeRequest("PUT", "http://localhost:8080/AccountSETemplate/api/account/updateAccount/" + x, newObject).then(req => {
        let test = document.createElement("p");
        test.innerText = req.responseText;
        document.getElementById("display").appendChild(test);
    })
    
}

let aCondition = true;


function makeRequest(method, url, body) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();

        req.onload = () => {
            if(req.status == 200){
                resolve(req);
            } else {
                const reason = new Error("Rejected");
                reject(reason);
            }
        };
        req.open(method, url);
        req.send(body);
    });
}





//const consumePromise = function () {
//    makePromise().then((user) => { console.log(user); }).catch(function (error) { console.log(error.message); });
//};

//consumePromise();
