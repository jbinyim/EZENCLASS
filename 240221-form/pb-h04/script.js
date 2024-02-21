const open = document.querySelector("#open");
const content = document.querySelector("#content");
const close = document.querySelector("#close");

const openBtn = () => {
  content.style.display = "flex";
  open.style.display = "none";
};

const closeBtn = () => {
  content.style.display = "none";
  open.style.display = "block";
};

open.onclick = openBtn;
close.onclick = closeBtn;
