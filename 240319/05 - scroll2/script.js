const bar = document.querySelector(".bar");
const submrine = document.querySelector(".submrine");
const depthWrap = document.querySelector(".depthWrap");
const octopus = document.querySelector(".octo");
let x = 0,
  y = 0;
let targetX = 0;
const speed = 0.1;

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

const deepSea = () => {
  const scrollNum = window.scrollY;
  const span = depthWrap.querySelector("span");
  span.innerText = scrollNum;

  const documentHeight = document.body.scrollHeight - window.innerHeight;
  const per = percent(scrollNum, documentHeight) + "%";

  bar.style.width = per;

  // submrine.style.left = `${per}`;
  submrine.style.transform = `translateX(${per})`;

  octopus.style.transform = `translateY(-${per})`;
};

window.addEventListener("scroll", deepSea);
