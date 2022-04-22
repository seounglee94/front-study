const loginForm = document.querySelector("#login-form");
const longinInput = document.querySelector("#login-form input");

function onLoginSumit(event){
    event.preventDefault();
    console.log(longinInput);
}

loginForm.addEventListener("submit", onLoginSumit);
