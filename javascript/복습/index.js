const h1 = document.querySelector("h1");

const handle ={

  en : function enter(){
    h1.innerText = "Your mouse is enter!";
    h1.style.color = "green";
  },

  le : function leave(){
    h1.innerText = "Your mouse is leave!";
    h1.style.color = "red";
  },

  ri : function rightClick(){
    h1.innerText = "bye!";
    h1.style.color = "blue";
  },

  re : function resized(){
    h1.innerText = "resize!!!";
    h1.style.color = "purple";
  }
  
}

h1.addEventListener("mouseenter", handle.en);
h1.addEventListener("mouseleave", handle.le);
window.addEventListener("contextmenu", handle.ri);
window.addEventListener("resize", handle.re);