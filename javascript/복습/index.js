
const body = document.body;

const big = "bigScreen";
const medium = "mediumScreen";
const small = "smallScreen";

function handle(){
  let wi = window.innerWidth;
  if(wi > 1000){
    body.classList.add(big);
    body.classList.remove(medium);
  }else if(wi <= 1000 && wi > 700){
    body.classList.add(medium);
    body.classList.remove(big, small);
  }else{
    body.classList.add(small);
    body.classList.remove(big, medium);
  }
}

window.addEventListener("resize", handle);


// const h1 = document.querySelector("h1");

// const handle ={

//   en : function enter(){
//     h1.innerText = "Your mouse is enter!";
//     h1.style.color = "green";
//   },

//   le : function leave(){
//     h1.innerText = "Your mouse is leave!";
//     h1.style.color = "red";
//   },

//   ri : function rightClick(){
//     h1.innerText = "bye!";
//     h1.style.color = "blue";
//   },

//   re : function resized(){
//     h1.innerText = "resize!!!";
//     h1.style.color = "purple";
//   }
  
// }

// h1.addEventListener("mouseenter", handle.en);
// h1.addEventListener("mouseleave", handle.le);
// window.addEventListener("contextmenu", handle.ri);
// window.addEventListener("resize", handle.re);


