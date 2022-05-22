const enterForm = document.querySelector("#enter");
const enterInput = document.querySelector("#enter input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onEnter(event){
    event.preventDefault();
    enterForm.classList.add(HIDDEN_CLASSNAME);
    const username = enterInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGrettings(username);
}

function paintGrettings(username){
    greeting.innerText = `Thanks for coming! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    enterForm.classList.remove(HIDDEN_CLASSNAME);
    enterForm.addEventListener("submit", onEnter);
}else{
    paintGrettings(savedUsername);
}
