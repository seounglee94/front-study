const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.dir(loginInput.value);
    console.log("click");
}

loginButton.addEventListener("click", onLoginBtnClick);