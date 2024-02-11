const trigger = document.querySelector(".trigger");
const box = document.querySelector("#contact-box");
const back = document.querySelector(".back");
const bar = document.querySelector(".bar");
const gnb = document.querySelector("#gnb");

trigger.addEventListener("click", () => {
  box.classList.toggle("active");
  trigger.classList.toggle("active");
});

back.addEventListener("click", () => {
  box.classList.toggle("active");
  trigger.classList.toggle("active");
});

bar.addEventListener("click", () => {
  gnb.classList.toggle("active");
  bar.classList.toggle("active");
});
