new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchours: ["Num0", "Num1", "Num2", "Num3", "Num4"],
});

const navBtn = document.querySelector("#nav_icon");
const nav = document.querySelector(".nav");
const sec2Title = document.querySelector("#sec2 h1.title");
const sec2Slider = document.querySelector("#sec2 .slider_wrap");
console.log(sec2Slider, sec2Title);

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  nav.classList.toggle("active");
});

sec2Title.style.cssText = `
opacity:1;
tranform: translate(50px);
`;
