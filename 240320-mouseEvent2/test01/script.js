const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const wrap = document.querySelector(".wrap");
const btns = document.querySelectorAll("p");
const graphic = document.querySelector(".graphic");
const publishing = document.querySelector(".publishing");
const logo = document.querySelector(".logo");

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (btn.classList.contains("graphic")) {
//       if (btn.classList.contains("active")) {
//         btn.classList.remove("active");
//       }
//       btn.classList.add("active");
//     } else if (btn.classList.contains("publishing")) {
//       btn.classList.add("active");
//     } else if (btn.classList.contains("logo")) {
//       btn.classList.add("active");
//     }
//   });
// });

graphic.addEventListener("click", () => {
  graphic.classList.add("active");
  publishing.classList.remove("active");
  logo.classList.remove("active");

  h1.innerText = "Portfolio Slide #01";

  body.style.background = `url("./img/photo-01.jpg") center/cover no-repeat`;

  wrap.style.background = `linear-gradient(to right, #b4b429, #c7c7325d, #ffffff00)`;

  h1.classList.remove("animaitionText");
  h1.offsetWidth;
  h1.classList.add("animaitionText");
  wrap.classList.remove("animaitionMove");
  wrap.offsetWidth;
  wrap.classList.add("animaitionMove");
});

publishing.addEventListener("click", () => {
  graphic.classList.remove("active");
  publishing.classList.add("active");
  logo.classList.remove("active");

  h1.innerText = "Portfolio Slide #02";

  body.style.background = `url("./img/photo-02.jpg") center/cover no-repeat`;

  wrap.style.background = `linear-gradient(to right, #294eb4, #3298c75d, #ffffff00)`;

  h1.classList.remove("animaitionText");
  h1.offsetWidth;
  h1.classList.add("animaitionText");
  wrap.classList.remove("animaitionMove");
  wrap.offsetWidth;
  wrap.classList.add("animaitionMove");
});

logo.addEventListener("click", () => {
  graphic.classList.remove("active");
  publishing.classList.remove("active");
  logo.classList.add("active");

  h1.innerText = "Portfolio Slide #03";
  body.style.background = `url("./img/photo-03.jpg") center/cover no-repeat`;
  wrap.style.background = `linear-gradient(to right, #b42929, #c732325d, #ffffff00)`;

  h1.classList.remove("animaitionText");
  h1.offsetWidth;
  h1.classList.add("animaitionText");
  wrap.classList.remove("animaitionMove");
  wrap.offsetWidth;
  wrap.classList.add("animaitionMove");
});
