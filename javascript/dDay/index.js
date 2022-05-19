const clockTitle = document.querySelector(".js-clock");

function sayClock(){
    const date = new Date();
    const endDate = new Date(2022, 12, 24, 00, 00, 00);
    const dDays = endDate - date;
    const days = String(Math.floor(dDays / (1000*60*60*24))).padStart(2, "0");
    const hours = String(Math.floor(dDays / (1000*60*60) % 24)).padStart(2, "0");
    const minutes = String(Math.floor(dDays / (1000*60) % 60)).padStart(2, "0");
    const seconds = String(Math.floor(dDays / 1000 % 60)).padStart(2, "0");
    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

sayClock();
setInterval(sayClock, 1000);


