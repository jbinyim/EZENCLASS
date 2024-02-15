const bar = document.querySelector(".bar");
const gnb = document.querySelector("#gnb");
const trigger = document.querySelector(".trigger");
const box = document.querySelector("#contact-box");
const back = document.querySelector(".back");

bar.addEventListener("click", () => {
  gnb.classList.toggle("active");
  bar.classList.toggle("active");
});

trigger.addEventListener("click", () => {
  box.classList.toggle("active");
  trigger.classList.toggle("active");
});

back.addEventListener("click", () => {
  box.classList.toggle("active");
  trigger.classList.toggle("active");
});
