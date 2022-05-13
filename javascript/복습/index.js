// const ocean = document.querySelector("#ocean");
// const red = document.querySelector("#red");
// const superEventHandler = {
//     en : function enter(){
//         red.innerText = "The mouse is here";
//         red.style.color = "red";
//     },

//     le : function leave(){
//         red.innerText = "The mouse is gone!";
//         red.style.color = "green";
//     },

//     ri : function rightClick(){
//         ocean.innerText = "That was right click!";
//         ocean.style.color = "blue";
//     },

//     si : function size(){
//         red.innerText = "You just resized!";
//         red.style.color = "purple";
//     }
// };
// red.addEventListener("mouseenter", superEventHandler.en);
// red.addEventListener("mouseleave", superEventHandler.le);
// ocean.addEventListener("contextmenu", superEventHandler.ri);

// window.addEventListener("resize", superEventHandler.si);


// const ocean = document.querySelector("body");
// const red = document.querySelector("h2");

// const superEventHandler = {
//   en: function enter() {
//     red.innerText = "The mouse is here";
//     red.style.color = "red";
//   },

//   le: function leave() {
//     red.innerText = "The mouse is gone!";
//     red.style.color = "green";
//   },

//   ri: function rightClick() {
//     ocean.innerText = "That was right click!";
//     ocean.style.color = "blue";
//   },

//   si: function size() {
//     red.innerText = "You just resized!";
//     red.style.color = "purple";
//   }
// };

// red.addEventListener("mouseenter", superEventHandler.en);
// red.addEventListener("mouseleave", superEventHandler.le);
// ocean.addEventListener("contextmenu", superEventHandler.ri);

// window.addEventListener("resize", superEventHandler.si);

const hi = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6"];

function one() {
  hi.style.color = "white";
  const size = window.innerWidth;
  console.log(size);
  if(size <= 500){
    hi.style.backgroundColor = colors[0];
    console.log(size);
  }else if(size > 700 && size <= 900){
    hi.style.backgroundColor = colors[1];
    console.log(size);
  }else if(size > 900 && size <= 1100){
    hi.style.backgroundColor = colors[2];
    console.log(size);
  }
}

window.addEventListener("resize", one);