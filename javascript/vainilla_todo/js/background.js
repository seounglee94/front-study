const images = ["0.jpg", "1.jpg", "2.jpg"];
const bgCss = "bgCss";

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgi = document.createElement("img");

bgi.className = bgCss;

bgi.src = `img/${choseImage}`;

document.body.appendChild(bgi);