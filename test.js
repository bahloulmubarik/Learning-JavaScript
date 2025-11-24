let users = [];     // all accounts list

document.getElementById("createBtn").addEventListener("click", createAccount);


function createAccount(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;   

    //clear after account creation
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    if(!name || !email || !password){
        alert("Fields cannot be empty");
        return;
    }

    let newUser = {
        name: name,
        email: email,
        password: password,
        balance: 0
    };

    users.push(newUser);

    console.log(users);   // just to check in console

    alert("Account created successfully!");
}
