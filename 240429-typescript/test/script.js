const container = document.querySelector("article");
const img = document.createElement("img");
const src = document.createAttribute("src");
const pager = document.querySelectorAll(".buttons li");

const imgs = ["slide-01.jpg", "slide-02.jpg", "slide-03.jpg"];

const imgSrc = `./img/${imgs[0]}`;

src.value = imgSrc;

img.setAttributeNode(src);
container.appendChild(img);

let i = 0;
const chImg = () => {
  i++;
  if (i >= pager.length) {
    i = 0;
  }
  pager.forEach((it) => it.classList.remove("active"));
  pager[i].classList.add("active");
  src.value = `./img/${imgs[i]}`;
};

const autoSlide = () => {
  timer = setInterval(() => {
    chImg();
  }, 3000);
};

autoSlide();

const pagerChange = (e) => {
  const target = e.target.dataset.index;
  pager.forEach((it) => it.classList.remove("active"));
  for (let i = 0; i < pager.length; i++) {
    if (target == i) {
      pager[i].classList.add("active");
      src.value = `./img/${imgs[i]}`;
    }
  }
};

pager.forEach((item) => {
  item.addEventListener("click", pagerChange);
});
