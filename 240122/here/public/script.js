const trigger = document.querySelector(".trigger");
const gnb = document.querySelector("#gnb");
const header = document.querySelector("header");
const gototp = document.querySelector(".gototop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 455) {
    header.classList.add("active");
    gototp.classList.add("active");
  } else {
    header.classList.remove("active");
    gototp.classList.remove("active");
  }
});

trigger.addEventListener("click", () => {
  gnb.classList.toggle("active");
  trigger.classList.toggle("active");
});

gototp.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: header, behavior: "smooth" });
});
