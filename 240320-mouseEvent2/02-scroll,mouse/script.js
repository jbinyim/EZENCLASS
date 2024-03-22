const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const subPageImage = document.querySelector(".subPage .parallaxImage");

let scrollNum = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;

  imageAll.forEach((item, index) => {
    if (index < 4) {
      item.style.transform = `translateY(${-scrollNum / (5 * index)}px)`;
    }
  });
});

let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `scale(1.2) translate(${-targetX / 50}px, ${
    -scrollNum / 5
  }px)`;
  imageAll[5].style.transform = `scale(1.2)  translateX(${-targetX / 20}px)`;
  window.requestAnimationFrame(loop);
};
loop();
