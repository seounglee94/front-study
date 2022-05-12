const ocean = document.querySelector("#ocean");
const red = document.querySelector("#red");
const superEventHandler = {
    en : function enter(){
        red.innerText = "The mouse is here";
        red.style.color = "red";
    },

    le : function leave(){
        red.innerText = "The mouse is gone!";
        red.style.color = "green";
    },

    ri : function rightClick(){
        ocean.innerText = "That was right click!";
        ocean.style.color = "blue";
    },

    si : function size(){
        red.innerText = "You just resized!";
        red.style.color = "purple";
    }
};
red.addEventListener("mouseenter", superEventHandler.en);
red.addEventListener("mouseleave", superEventHandler.le);
ocean.addEventListener("contextmenu", superEventHandler.ri);

window.addEventListener("resize", superEventHandler.si);

