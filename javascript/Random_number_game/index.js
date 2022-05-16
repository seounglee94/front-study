const form = document.querySelector("#form");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btn = document.querySelector("#form button");
const checkPoint = document.querySelector("#checkPoint");
const won_lost = document.querySelector("#won_lost");
const CLASS_HIDDEN = "hidden";

function gameNum(event){
  event.preventDefault();
  const maxNum = parseInt(num1.value);
  const randNum = Math .ceil(Math.random() * maxNum);
  const myNum = parseInt(num2.value);
  if(myNum === randNum){
     checkPoint.classList.remove(CLASS_HIDDEN);
     won_lost.classList.remove(CLASS_HIDDEN);
     checkPoint.innerText = `You chose: ${myNum}, the machine chose ${randNum}`;
     won_lost.innerText = `You won!`;
  }
  else if(myNum > maxNum || myNum === maxNum){
    alert("stop!");
    checkPoint.classList.remove(CLASS_HIDDEN);
    checkPoint.innerText = `Errorrrrrrrrrrr!!!`
    won_lost.classList.add(CLASS_HIDDEN);
  }else{
     checkPoint.classList.remove(CLASS_HIDDEN);
     won_lost.classList.remove(CLASS_HIDDEN);
     checkPoint.innerText = `You chose: ${myNum}, the machine chose ${randNum}`;
     won_lost.innerText = `You lost!`;
  }
}

btn.addEventListener("click", gameNum);
