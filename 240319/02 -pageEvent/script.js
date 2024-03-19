const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

// 마우스 이동(pageX, pageY)
let x = 0,
  y = 0;

// 마우스 이동전 좌표값
let targetX = 0,
  targetY = 0;

// 마우스 이동 스피드
const speed = 0.01;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  h1.innerText = `X: ${x} Y: ${y}`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  box.style.top = targetY + "px";
  box.style.left = targetX + "px";

  window.requestAnimationFrame(loop);
};

loop();
