const trigger = document.querySelector(".trigger");
const box = document.querySelector("#contact-box");
const back = document.querySelector(".back");

trigger.addEventListener("click", () => {
  box.classList.toggle("active");
  trigger.classList.toggle("active");
});

back.addEventListener("click", () => {
  box.classList.toggle("active");
  trigger.classList.toggle("active");
});
