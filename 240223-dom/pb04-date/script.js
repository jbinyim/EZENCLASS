const today = new Date();
const hrs = today.getHours();

const newImg = document.createElement("img");
const container = document.querySelector("#container");
newImg.src = hrs < 12 ? "./img/morning.jpg" : "./img/afternoon.jpg";
container.appendChild(newImg);
